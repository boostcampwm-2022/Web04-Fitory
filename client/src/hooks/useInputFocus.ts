import { useRef, useEffect } from "react";

/**
 * 컴포넌트 마운트 시 Input element를 focus한다.
 */
const useInputFocus = () => {
  const TextFieldRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    TextFieldRef.current?.focus();
  }, []);

  return TextFieldRef;
};

export default useInputFocus;
