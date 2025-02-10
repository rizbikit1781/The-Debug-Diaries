import React from 'react'

const Comments = () => {
  return (
    <div className='flex flex-col gap-8 lg:w-3/5'>
        <h1 className='text-xl text-grey-500 underline'>Commmets</h1>
        <div>
            <textarea placeholder='Write a comment...'/>
            <button>Send</button>
        </div>
    </div>
  )
}

export default Comments