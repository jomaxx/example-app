export function pipe (...fns) {
  return function () {
    let result = fns[0].apply(this, arguments);

    for (let i = 1; i < fns.length; i++) {
      result = fns[i].call(this, result);
    }

    return result;
  };
}

export function bindAll (context, ...keys) {
  for (let i = 0; i < keys.length; i++) {
    context[keys[i]] = context[keys[i]].bind(context);
  }
}
