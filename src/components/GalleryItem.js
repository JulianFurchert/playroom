import React from 'react';

const GalleryItem = ({position, color}) => {
  console.log("rerender")
  return(
    <div
      css={{
        position: 'absolute',
        border: `1px solid ${color ? color : '#3318f2'}`,
        width:200,
        height:200
      }}
      style={{
        transform: `scale(${position ? position : 1})`
      }}
    >

    </div>
  )
}

export default GalleryItem