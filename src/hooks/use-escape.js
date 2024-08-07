import React from "react";

function useEscape(handleEscape) {
  React.useEffect(() => {
    function handleKeyDown(event) {
      if (event.code === "Escape") {
        handleEscape();
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleEscape]);
}

export default useEscape;
