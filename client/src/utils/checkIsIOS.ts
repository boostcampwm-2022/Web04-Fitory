declare global {
  interface Window {
    MSStream: unknown;
  }
}

const checkIsIOS = () => {
  return /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
};

export default checkIsIOS;
