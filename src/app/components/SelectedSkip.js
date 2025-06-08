import { useState } from 'react'
import Image from 'next/image'
//
import { SkipTopContent } from './Skip'
import { useSkipStore } from '../zustand/useSkipStore'

const OneSkip = () => {
  const { setSelectedSkip, selectedSkip } = useSkipStore()
  return (
    <div className="relative w-full rounded-3xl bg-skipBg border border-gray-500  overflow-hidden transition-all duration-500  shadow-lg cursor-pointer hover:shadow-2xl">
      {/* Image */}
      <Image
        src={`https://yozbrydxdlcxghkphhtq.supabase.co/storage/v1/object/public/skips/skip-sizes/${selectedSkip.size}-yarder-skip.jpg`}
        alt="Skip"
        width={1000}
        height={1000}
        className={`w-full object-cover duration-400 h-[50%] p-2 rounded-3xl`}
      />

      {/* skip content */}
      <div className={`duration-300 h-[50%] flex flex-col justify-between`}>
        <SkipTopContent data={selectedSkip} />
        <p className="px-4 mb-4">
          Imagery and information shown throughout this website may not reflect
          the exact shape or size specification, colours may vary, options
          and/or accessories may be featured at additional cost.
        </p>
        {/* buttons */}
        <div className="flex items-center justify-center mb-4 gap-4">
          <button
            onClick={() => setSelectedSkip(null)}
            className="px-5 py-2 bg-[crimson] rounded-2xl text-xl cursor-pointer hover:scale-105 duration-500 shadow-2xl"
          >
            Back
          </button>
          <button className="px-5 py-2 bg-blue-400 rounded-2xl text-xl cursor-pointer hover:scale-105 duration-500 shadow-2xl">
            <span className="flex items-center justify-center space-x-2">
              <span>Continue</span>
              <span className={`transition-transform duration-300`}>→</span>
            </span>
          </button>
        </div>
      </div>
    </div>
  )
}

const SelectedSkip = () => {
  return (
    <div className="z-10 left-0 top-0 w-full h-[100dvh] fixed backdrop-blur-md flex items-center justify-center">
      <div className="w-[700px] p-10 animate-in slide-in-from-bottom-40 duration-700 ease-out">
        <OneSkip />
      </div>
    </div>
  )
}

export default SelectedSkip
