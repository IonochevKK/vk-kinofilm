import { useEffect, useState } from "react";
import { getWindowWidth } from "../utils/getWindowWidth";

const useWindowWidth = () => {
  const [windowWidth, setWindowWidth] = useState(getWindowWidth());
  const handleResize = () => setWindowWidth(getWindowWidth());
  useEffect(() => {
    window.addEventListener("resize", handleResize, true);
    return () => window.removeEventListener("resize", handleResize, true);
  }, []);
  return { windowWidth, handleResize };
};

export const useResizeWidth = (maxWidth: number) => {
  const {
    windowWidth: { windowWidth },
    handleResize,
  } = useWindowWidth();
  const [isMedia, setIsMedia] = useState(false);

  useEffect(() => {
    if (windowWidth <= maxWidth) {
      setIsMedia(true);
    } else {
      setIsMedia(false);
    }
  }, [maxWidth, windowWidth, handleResize]);
  return isMedia;
};
export default useWindowWidth;
