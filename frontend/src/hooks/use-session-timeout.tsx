import { useEffect, useRef } from "react";
import { useSubmit } from "react-router-dom";

export function useSessionTimeout() {
  const submit = useSubmit();
  const timeoutRef = useRef<number | null>(null);

  useEffect(() => {
    const ONE_HOUR_IN_MS = 60 * 60 * 1000;
    const resetTimeout = () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      timeoutRef.current = setTimeout(() => {
        submit(null, { method: "post", action: "/logout" });
      }, ONE_HOUR_IN_MS) as unknown as number;
    };

    // Events to detect user activity
    window.addEventListener("mousemove", resetTimeout);
    window.addEventListener("keydown", resetTimeout);
    window.addEventListener("scroll", resetTimeout);

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      window.removeEventListener("mousemove", resetTimeout);
      window.removeEventListener("keydown", resetTimeout);
      window.removeEventListener("scroll", resetTimeout);
    };
  }, [submit]);
}
