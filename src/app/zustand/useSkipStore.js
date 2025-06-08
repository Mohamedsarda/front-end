import axios from 'axios'
import { toast } from 'react-toastify'

const { create } = require('zustand')

export const useSkipStore = create()((set, get) => ({
  skips: [],
  skipsStore: [],
  selectedSkip: null,
  isLoading: false,

  setSelectedSkip: (selectedSkip) => {
    set({ selectedSkip })
  },

  sortSkips: (type) => {
    const oldSkips = get().skipsStore
    switch (type) {
      case 0:
        set({ skips: oldSkips })
        break
      case 1:
        set({ skips: oldSkips.filter((skip) => skip.allowed_on_road) })
        break
      case 2:
        set({ skips: oldSkips.filter((skip) => skip.allows_heavy_waste) })
        break
      default:
        set({ skips: oldSkips })
    }
  },

  getSkips: async () => {
    set({ isLoading: true })
    try {
      const res = await axios.get(
        'https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft'
      )
      if (res.status !== 200) return
      set({ skips: res.data, skipsStore: res.data })
    } catch (err) {
      toast.warning(err.message)
    } finally {
      set({ isLoading: false })
    }
  },
}))
