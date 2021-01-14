import { useEffect } from "react";
export const useClickOutside = (
  formRef,
  isSubscribeFormOpen,
  setIsSubscribeFormOpen
) => {
  useEffect(() => {
    function handleWindowClick(event) {
      if (
        !(formRef.current != null && formRef.current.contains(event.target))
      ) {
        setIsSubscribeFormOpen(false);
      }
    }
    window.addEventListener("click", handleWindowClick);
    return () => {
      window.removeEventListener("click", handleWindowClick);
    };
  }, [isSubscribeFormOpen, setIsSubscribeFormOpen]);
};
