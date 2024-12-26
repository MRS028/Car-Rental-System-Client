import { useEffect, useRef } from "react";

const usePreventScroll = (ref) => {
  useEffect(() => {
    const handleScroll = (e) => {
      if (e.target.tagName === "A" || e.target.tagName === "BUTTON") {
        e.preventDefault();
        window.scrollTo(0, 0);
      }
    };

    if (ref.current) {
      ref.current.addEventListener("click", handleScroll);
    }

    return () => {
      if (ref.current) {
        ref.current.removeEventListener("click", handleScroll);
      }
    };
  }, [ref]);
};

export default usePreventScroll;
