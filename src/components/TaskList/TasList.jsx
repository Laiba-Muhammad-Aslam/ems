import React from 'react'

export default function TasList() {
  return (
    <div id='tasklist' className='h-[55%] overflow-x-auto w-full mt-10 py-5 flex items-center justify-start gap-5 flex-nowrap'>
        <div className='flex-shrink-0 h-full w-[300px] bg-red-400 rounded-xl p-5'>
            <div className="flex justify-between items-center">
            <h3 className='bg-red-600 px-3 py-1 rounded text-sm'>High</h3>
            <h4 className='text-sm'>3 Feb 2025</h4>
            </div>
            <h2 className='mt-5 text-2xl font-semibold'>Make React Projects</h2>
            <p className='text-sm mt-2'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque maxime quos mollitia ea quod tenetur soluta necessitatibus nisi voluptatum provident?</p>
        </div>

        <div className='flex-shrink-0 h-full w-[300px] bg-blue-400 rounded-xl p-5'>
            <div className="flex justify-between items-center">
            <h3 className='bg-red-600 px-3 py-1 rounded text-sm'>High</h3>
            <h4 className='text-sm'>3 Feb 2025</h4>
            </div>
            <h2 className='mt-5 text-2xl font-semibold'>Make React Projects</h2>
            <p className='text-sm mt-2'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque maxime quos mollitia ea quod tenetur soluta necessitatibus nisi voluptatum provident?</p>
        </div>

        <div className='flex-shrink-0 h-full w-[300px] bg-green-400 rounded-xl p-5'>
            <div className="flex justify-between items-center">
            <h3 className='bg-red-600 px-3 py-1 rounded text-sm'>High</h3>
            <h4 className='text-sm'>3 Feb 2025</h4>
            </div>
            <h2 className='mt-5 text-2xl font-semibold'>Make React Projects</h2>
            <p className='text-sm mt-2'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque maxime quos mollitia ea quod tenetur soluta necessitatibus nisi voluptatum provident?</p>
        </div>

        <div className='flex-shrink-0 h-full w-[300px] bg-yellow-400 rounded-xl p-5'>
            <div className="flex justify-between items-center">
            <h3 className='bg-red-600 px-3 py-1 rounded text-sm'>High</h3>
            <h4 className='text-sm'>3 Feb 2025</h4>
            </div>
            <h2 className='mt-5 text-2xl font-semibold'>Make React Projects</h2>
            <p className='text-sm mt-2'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque maxime quos mollitia ea quod tenetur soluta necessitatibus nisi voluptatum provident?</p>
        </div>


    </div>
  )
}
