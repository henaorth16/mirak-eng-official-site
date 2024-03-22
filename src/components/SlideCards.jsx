import React from 'react'

function SlideCards(props) {
    // const next = props.isNext;
  return <>
    <div className={props.isNext ? "bg-gray-200  w-full h-full flex justify-center items-center transition-all duration-500 md:scale-110" :
     "bg-gray-400 opacity-55  w-full h-full flex justify-center items-center md:scale-75"}>
        {props.title}
    </div>
 </>
}

export default SlideCards
