// eslint-disable-next-line @typescript-eslint/ban-types
const debounce = (callback: Function, delay = 100) => {
  let timeout: ReturnType<typeof setTimeout>;
  return (...args: unknown[]) => {
    if (timeout) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(() => {
      callback(...args);
    }, delay);
  };
};

export default debounce;
