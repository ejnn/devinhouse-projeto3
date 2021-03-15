import { useEffect, useState } from "react";

export default function useWindowSize() {
const [width, setWidth] = useState(window.innerWidth);
const [height, setHeight] = useState(window.innerHeight);

useEffect(() => {
  const updateWindowDimensions = () => {
    const { innerWidth, innerHeight } = window;
    setWidth(innerWidth);
    setHeight(innerHeight);
  };
  window.addEventListener("resize", updateWindowDimensions);
  return () => window.removeEventListener("resize", updateWindowDimensions) 
}, []);
  
  return { width, height }
}
