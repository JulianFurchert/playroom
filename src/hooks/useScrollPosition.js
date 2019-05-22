import { useEffect, useState } from "react"
import debounce from 'lodash.debounce';

const useScrollPosition = () =>{
  const [position, setScrollPosition] = useState({x: 0, y: 0});

  useEffect(() => {
    function handleScroll() {
      if(typeof window !== 'undefined' && window){
        setScrollPosition({x: window.pageXOffset, y: window.pageYOffset})
      };
    }
    window.addEventListener('scroll', debounce(handleScroll, 10));
    return () => window.removeEventListener('scroll', debounce(handleScroll, 10));
  }, []);

  return position
}

export default useScrollPosition;