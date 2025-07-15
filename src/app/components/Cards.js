'use client'
import { useEffect, useState } from 'react'
import Skeleton from 'react-loading-skeleton'
import Image from 'next/image'
//
import Skip from './Skip'
import SelectedSkip from './SelectedSkip'
import { useSkipStore } from '../zustand/useSkipStore'

const Cards = () => {
  const { skips, getSkips, isLoading, selectedSkip, sortSkips } = useSkipStore()
  const [sortWith, setSortWith] = useState(0)

  const handleSort = (type) => {
    setSortWith(type)
    sortSkips(type)
  }

  useEffect(() => {
    getSkips()
  }, [])
  return (
    <>
      <header className="p-4 flex items-center gap-4">
        {/* <div className="flex items-center justify-between border border-gray-500 w-[400px] h-[50px] p-2 rounded-xl">
          <input
            type="text"
            placeholder="Search With Yard Skip"
            className="outline-none w-full p-2 text-xl"
          />
          <Image
            src="/search.svg"
            alt="search"
            width={100}
            height={100}
            className="w-[20px] mx-4"
          />
        </div> */}
        <button
          onClick={() => handleSort(0)}
          className={`h-[50px] border border-gray-500 rounded-2xl px-6 cursor-pointer shadow-2xl shadow-cyan-300/15 hover:scale-105 duration-500 ${
            sortWith === 0 && 'bg-blue-400'
          }`}
        >
          Default
        </button>
        <button
          onClick={() => handleSort(1)}
          className={`h-[50px] border border-gray-500 rounded-2xl px-6 cursor-pointer shadow-2xl shadow-cyan-300/15 hover:scale-105 duration-500 ${
            sortWith === 1 && 'bg-blue-400'
          }`}
        >
          Road Legal
        </button>
        <button
          onClick={() => handleSort(2)}
          className={`h-[50px] border border-gray-500 rounded-2xl px-6 cursor-pointer shadow-2xl shadow-cyan-300/15 hover:scale-105 duration-500 ${
            sortWith === 2 && 'bg-blue-400'
          }`}
        >
          Heavy Waste
        </button>
      </header>
      <div className="w-full xl:px-10 xl:py-4 p-4 grid gap-6 grid-cols-[repeat(auto-fit,_minmax(350px,1fr))]">
        {isLoading ? (
          Array(4)
            .fill()
            .map((_, i) => (
              <Skeleton
                key={i}
                count={5}
                height={400}
                baseColor="#222"
                highlightColor="#111"
              />
            ))
        ) : (
          <>
            {selectedSkip && <SelectedSkip />}
            {skips ? (
              skips.map((skip, idx) => <Skip key={idx} data={skip} />)
            ) : (
              <div className="w-full h-full flex items-center justify-center absolute top-0 left-0">
                <p className="text-2xl">No Data Available</p>
              </div>
            )}
          </>
        )}
      </div>
    </>
  )
}

export default Cards
