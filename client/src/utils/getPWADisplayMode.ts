declare global {
  interface Navigator {
    standalone: boolean;
  }
}

const checkIsPWADisplayMode = () => {
  const isStandalone = window.matchMedia("(display-mode: standalone)").matches;
  if (document.referrer.startsWith("android-app://")) {
    return true;
  }
  if (navigator.standalone || isStandalone) {
    return true;
  }
  return false;
};

export default checkIsPWADisplayMode;
