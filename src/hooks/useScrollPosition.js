import { useEffect, useState } from "react"

const useScrollPosition = () =>{
  const [position, setScrollPosition] = useState({x: window.pageXOffset, y: window.pageYOffset});

  useEffect(() => {
    function handleScroll() {
      setScrollPosition({x: window.pageXOffset, y: window.pageYOffset})
    }
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return position
}

export default useScrollPosition;