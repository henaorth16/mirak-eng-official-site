import React from 'react'

function SlideCards(props) {
    // const next = props.isNext;
  return <>
    <div className={props.isNext ? "bg-gray-200  w-full h-full flex flex-col md:transition-all md:duration-500 rounded-md" :
     "bg-gray-200 lg:opacity-55  w-full h-full flex flex-col gap-3  lg:scale-90 rounded-md"}>
        <div className='w-full h-[47%]'>
          <img className='w-full object-contain rounded-t-md' src={props.image} alt="project image" />
        </div>
          <h1 className='text-left font-medium p-2'>{props.title}</h1>
          <p className='overflow-y-auto text-sm text-gray-600 text-left px-3'>{props.body}</p>
    </div>
 </>
}

export default SlideCards
