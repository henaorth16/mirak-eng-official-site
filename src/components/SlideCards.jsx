import React from 'react'

function SlideCards(props) {
    // const next = props.isNext;
  return <>
    <div className={props.isNext ? "bg-gray-200  w-full h-full flex flex-col transition-all duration-500 md:scale-110" :
     "bg-gray-300 opacity-55  w-full h-full flex flex-col gap-3  md:scale-75"}>
        <div className='w-full h-[47%]'>
          <img className='w-full object-contain' src={props.image} alt="project image" />
        </div>
          <h1 className='text-left font-medium p-2'>{props.title}</h1>
          <p className='overflow-y-auto text-sm text-gray-600 text-left px-3'>{props.body}</p>
    </div>
 </>
}

export default SlideCards
