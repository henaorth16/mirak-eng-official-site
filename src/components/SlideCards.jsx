import React from 'react'

function SlideCards(props) {
    // const next = props.isNext;
  return <>
    <div className={props.isNext ? "bg-gray-100  w-full h-full flex flex-col md:transition-all md:duration-500 rounded-sm" :
     "bg-gray-100 lg:opacity-75  w-full h-full flex flex-col  lg:scale-90 rounded-sm"}>
        <div className='w-full h-[47%]'>
          <img className='w-full object-contain rounded-t-sm' src={props.image} alt="project image" />
        </div>
          <h1 className='text-left font-medium text-lg leading-normal md:leading-[1.8] px-2'>{props.title}</h1>
          <p className='overflow-y-auto text-[0.9rem] text-gray-600 text-left px-3'>{props.body}</p>
    </div>
 </>
}

export default SlideCards
