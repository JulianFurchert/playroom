import React from "react"
import useScrollPosition from '../hooks/useScrollPosition'
import snippets from '../snipptes';


const Gallery = () => {
  const position = useScrollPosition();
  console.log(position);

  return(
      <main
        css={{
          width: '100%',
          height: snippets.length * 800
        }}
      >
        <div
          css={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            overflow: 'scroll',
          }}
        >
        </div>
      </main>
  )
}

export default Gallery
