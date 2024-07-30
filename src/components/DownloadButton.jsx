import React from 'react'

const DownloadButton = ({imgSrc,title,description}) => {
  return (
   <button className='btn bg-neutral rounded-2xl '>
    <figure className='flex justify-between gap-2  items-center max-w-40 max-h-16'>
    <img src={imgSrc} alt={title} height={48} width={38}/>
    <article>
     <h1 className="text-xs font-light font-poppins">{description}</h1>
    <span className=''>{title}</span>
   
    </article>
    </figure>

   </button>
   
  )
}

export default DownloadButton