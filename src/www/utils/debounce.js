function debounce(fn, wait) {
  let timeout;

  return function () {
    const context = this;
    const args = arguments;

    clearTimeout(timeout);

    timeout = setTimeout(function () {
      fn.apply(context, args);
    }, wait || 0);
  };
}

export default debounce;
