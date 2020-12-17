import React, { useEffect } from 'react';
import {useRouter} from "next/router";

const ScrollToTop = ({ children}) => {

    const router = useRouter();

  useEffect(() => {
    try {
      window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    } catch (error) {
      // just a fallback for older browsers
      window.scrollTo(0, 0);
    }
  }, [router.pathname]);

  return children;
};

export default ScrollToTop;
