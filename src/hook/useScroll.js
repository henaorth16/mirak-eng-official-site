import { useState, useEffect } from "react";

export function useScroll(){
    const [result, setResult] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", (e) => {
          if (
            document.documentElement.scrollTop ||
            document.body.scrollTop > window.innerHeight
          ) {
            setResult(true);
          } else {
            setResult(false);
          }
        });
      }, []);
    return result;
}