import Image from 'next/image'
import React, { useState } from 'react'
import { useSkipStore } from '../zustand/useSkipStore'
//

const Allowed = ({ isAllowed, text }) => {
  return (
    <div
      className={`flex items-center ${
        isAllowed ? 'text-green-300' : 'text-yellow-300'
      }`}
    >
      <div
        className={`w-[14px] h-[14px] rounded-full ${
          isAllowed ? 'bg-green-300' : 'bg-yellow-300'
        } mr-2`}
      ></div>
      {text}
    </div>
  )
}

export const SkipTopContent = ({ data }) => {
  return (
    <div className="text-foreground p-4 h-[50%] relative">
      {/* price before vat */}
      <span className="text-white text-xl font-semibold px-4 py-1 absolute right-6 -top-5 rounded-2xl bg-gradient-to-r bg-blue-400 shadow-lg shadow-cyan-500/25">
        ${data.price_before_vat}
      </span>

      {/* title */}
      <h2 className="text-3xl font-semibold">{data.size} Yard Skip</h2>

      {/* hire period days && postcode */}
      <div className="py-4 flex justify-between w-full">
        <div className="text-md flex items-center">
          <div className="w-[10px] h-[10px] rounded-full bg-green-300 mr-2"></div>
          {data.hire_period_days} hire period days
        </div>
        <p className="text-xl text-gray-400">{data.postcode}</p>
      </div>

      {/* allowed on road && allows heavy waste CHECKS */}
      <div className="flex gap-4">
        <Allowed isAllowed={data.allowed_on_road} text="Road Legal" />
        <Allowed isAllowed={data.allows_heavy_waste} text="Heavy Waste" />
      </div>
    </div>
  )
}

const Skip = ({ data }) => {
  const [isHover, setIsHover] = useState(false)
  const { setSelectedSkip } = useSkipStore()

  return (
    <div
      key={data.id}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      className="relative w-full h-[500px] rounded-3xl bg-skipBg border border-gray-500 hover:border-blue-400 hover:scale-101 overflow-hidden transition-all duration-500  shadow-lg cursor-pointer hover:shadow-2xl"
    >
      {/* Image */}
      <Image
        src={`https://yozbrydxdlcxghkphhtq.supabase.co/storage/v1/object/public/skips/skip-sizes/${data.size}-yarder-skip.jpg`}
        alt="Skip"
        width={1000}
        height={1000}
        className={`w-full object-cover duration-400 ${
          isHover ? 'h-[50%] p-2' : 'h-[55%] p-1'
        }  rounded-3xl`}
      />

      {/* skip content */}
      <div
        className={`duration-300 ${
          isHover ? 'h-[50%]' : 'h-[45%]'
        } flex flex-col justify-between`}
      >
        <SkipTopContent data={data} />
        {/* button */}
        <button
          onClick={() => setSelectedSkip(data)}
          className={`py-3 m-4 cursor-pointer rounded-xl font-semibold transition-all duration-500 transform bg-gradient-to-r bg-blue-400 hover:bg-blue-600 shadow-lg shadow-white-500/25  text-white hover:shadow-xl`}
        >
          <span className="flex items-center justify-center space-x-2">
            <span>Select This Skip</span>
            <span className={`transition-transform duration-300`}>→</span>
          </span>
        </button>
      </div>
    </div>
  )
}

export default Skip
