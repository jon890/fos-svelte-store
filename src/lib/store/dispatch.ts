import { Subject } from 'rxjs';

export function dispatch(type: any, payload?: any) {
  if (!type) {
    throw new TypeError("'action' must be required. Do not use dispatch() only.");
  }

  const [_type, _payload] = makeAction(type, payload);

  return _dispatch(_type, _payload);
}

const makeAction = (type: any, payload?: any) => {
  if (Array.isArray(type)) {
    [type, payload] = type;
  }
  return [type.toString(), payload];
};

const _dispatch = (type: string, payload?: any) => {
  console.log('');
  console.groupEnd();

  console.group('#' + type);
  console.groupCollapsed('(callstack)');
  console.trace('');
  console.groupEnd();
  console.log('#' + type);
  if (payload !== undefined) {
    console.log(payload);
  }

  next(type, payload);

  return payload;
};

export const actions$ = new Subject();
const next = (type: string, payload?: any) => {
  actions$.next([type, payload]);
  return;
};
