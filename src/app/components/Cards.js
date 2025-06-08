'use client'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import Skeleton from 'react-loading-skeleton'
//
import Skip from './Skip'
import SelectedSkip from './SelectedSkip'

const Cards = () => {
  const [data, setData] = useState()
  const [isLoading, setIsLoading] = useState(false)
  const [selectedSkipData, setSelectedSkipData] = useState(null)

  const getData = async () => {
    setIsLoading(true)
    try {
      const res = await axios.get(
        'https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft'
      )
      if (res.status !== 200) return
      setData(res.data)
    } catch (err) {
      toast.warning(err.message)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    getData()
  }, [])
  return (
    <div className="w-full h-full xl:p-10 p-4 grid gap-6 grid-cols-[repeat(auto-fit,_minmax(350px,1fr))]">
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
          {selectedSkipData && (
            <SelectedSkip
              data={selectedSkipData}
              setSelectedSkipData={setSelectedSkipData}
            />
          )}
          {data ? (
            data.map((skip) => (
              <Skip
                key={skip.id}
                data={skip}
                setSelectedSkipData={setSelectedSkipData}
              />
            ))
          ) : (
            <div className="w-full h-full flex items-center justify-center absolute top-0 left-0">
              <p className="text-2xl">No Data Available</p>
            </div>
          )}
        </>
      )}
    </div>
  )
}

export default Cards
