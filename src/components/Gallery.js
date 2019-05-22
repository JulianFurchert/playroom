import React from "react"
import GalleryItem from './GalleryItem';
import useScrollPosition from '../hooks/useScrollPosition'
import snippets from '../snipptes';


const Gallery = () => {
  const position = useScrollPosition();
  console.log(position)

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
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            overflow: 'hidden',
          }}
        >
          <GalleryItem color="#12c4da" position={3}/>
          <GalleryItem position={1} />
          <GalleryItem position={0.5} />
        </div>
      </main>
  )
}

export default Gallery
