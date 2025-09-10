import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function useSwipeBack() {
  const navigate = useNavigate();

  useEffect(() => {
    const handleTouchStart = (e) => {
      const touch = e.touches[0];
      window._touchStartX = touch.clientX;
    };

    const handleTouchEnd = (e) => {
      const touch = e.changedTouches[0];
      const deltaX = touch.clientX - window._touchStartX;

      const isSmallScreen = window.innerWidth < 768;

      // swipe from left to right and screen is small
      if (isSmallScreen && deltaX > 100) {
        navigate("/");
      }
    };

    window.addEventListener("touchstart", handleTouchStart);
    window.addEventListener("touchend", handleTouchEnd);

    return () => {
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [navigate]);
}
