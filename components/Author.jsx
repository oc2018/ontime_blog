import React from 'react';
import Image from 'next/image';

const Author = ({ author }) => {
  return (
    <div className='text-center relative mt-20 mb-8 p-12 rounded-lg bg-black bg-opacity-30'>
      <div className="absolute left-0 right-0 -top-14">
      <Image
        alt={author.name}
        unoptimized
        width='100px'
        height='100px'
        src={author.photo.url}
        className='align-middle rounded-full'
      />
      </div>
      <h3 className="text-white my-4 text-xl font-bold">{author.name}</h3>
      <p className="text-white text-lg">{author.bio}</p>

    </div>
  )
}

export default Author