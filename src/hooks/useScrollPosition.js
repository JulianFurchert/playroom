import { useEffect, useState } from "react"
import debounce from 'lodash.debounce';

const useScrollPosition = () =>{
  const [position, setScrollPosition] = useState({x: window.pageXOffset, y: window.pageYOffset});

  useEffect(() => {
    function handleScroll() {
      setScrollPosition({x: window.pageXOffset, y: window.pageYOffset})
    }
    window.addEventListener('scroll', debounce(handleScroll, 10));
    return () => window.removeEventListener('scroll', debounce(handleScroll, 10));
  }, []);

  return position
}

export default useScrollPosition;