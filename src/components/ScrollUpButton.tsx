"use client";
import React from "react";
import { cn } from "@/utils";

const ScrollUpButton = () => {
  const [visible, setVisible] = React.useState(false);
  const windowRef = React.useRef<Window | null>(null);
  React.useEffect(() => {
    windowRef.current = window;
    window.addEventListener("scroll", toggleVisible);
  }, []);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 200) {
      setVisible(true);
    } else if (scrolled <= 200) {
      setVisible(false);
    }
  };

  return (
    <button
      title="Go to top"
      onClick={() =>
        windowRef.current?.scrollTo({
          top: 0,
          left: 0,
          behavior: "instant",
        })
      }
      className={cn(
        "shadow-form fixed bottom-4 right-4 rounded bg-white p-3",
        {
          hidden: !visible,
        }
      )}
    >
      <svg
        stroke="currentColor"
        fill="currentColor"
        strokeWidth="0"
        version="1.1"
        viewBox="0 0 16 16"
        className="text-sm text-black"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M8 0.5l-7.5 7.5h4.5v8h6v-8h4.5z"></path>
      </svg>
    </button>
  );
};

export default ScrollUpButton;
