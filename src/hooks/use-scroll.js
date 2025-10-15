import { useState, useEffect } from 'react';

export const useScroll = () => {
  const [scroll, setScroll] = useState(0);

  const scrollUp = () => {
    setScroll(window.scrollY);
  };

  const upButton = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener('scroll', scrollUp);
    return () => {
      window.removeEventListener('scroll', scrollUp);
    };
  }, []);

  return { scroll, upButton };
}