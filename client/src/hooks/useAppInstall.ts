import { useState, useEffect } from "react";

// 비표준 API이기 때문에 any로 선언
// eslint-disable-next-line @typescript-eslint/no-explicit-any
let deferredPrompt: any;

const useAppInstall = () => {
  const [isInstallPromptDeferred, setIsInstallPromptDeferred] = useState(false);

  const deferInstall = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    deferredPrompt = e;
    setIsInstallPromptDeferred(deferredPrompt);
  };

  const installApp = () => {
    deferredPrompt.prompt();
    deferredPrompt = null;
  };

  useEffect(() => {
    window.addEventListener("beforeinstallprompt", deferInstall);
    return () => {
      window.removeEventListener("beforeinstallprompt", deferInstall);
    };
  }, []);

  return { installApp, isInstallPromptDeferred };
};

export default useAppInstall;
