import { defineStore } from 'pinia'

// 🎯 Allowed theme sections
type ThemeSection = 'header' | 'footer' | 'button' | 'background'

// 🎨 Structure of each color option
interface ColorOption {
  name: string
  value: string
}

export const useThemeStore = defineStore('theme', {
  state: () => ({
    // 🔁 Color options from API
    colorOptions: [] as ColorOption[],

    // 🎯 Selected color per section
    selected: {
      header: '',
      footer: '',
      button: '',
      background: ''
    } as Record<ThemeSection, string>
  }),

  actions: {
    // 📦 Fetch color options from API
    async fetchColorOptions() {
      const { data, error } = await useFetch<{ colors: ColorOption[] }>('/api/colors')

      if (error.value) {
        console.error('❌ Error fetching colors:', error.value)
        return
      }

      this.colorOptions = data.value?.colors || []

      // ✅ Set default selections from fetched list and you can change default by giving index
      if (this.colorOptions.length >= 4) {
        this.selected.header = this.colorOptions[0].value
        this.selected.footer = this.colorOptions[1].value
        this.selected.button = this.colorOptions[2].value
        this.selected.background = this.colorOptions[3].value
      }
    },

    // 🎨 Update color for a section safely
    setColor(section: ThemeSection, color: string) {
      if (section in this.selected) {
        this.selected[section] = color
      } else {
        console.warn(`Unknown section: ${section}`)
      }
    },

    // ♻️ Reset all colors to default
    resetColors() {
      this.selected = {
        header: '#ffffff',
        footer: '#ffffff',
        button: '#000000',
        background: '#f9fafb'
      }
    }
  }
})




// import { defineStore } from 'pinia'

// export const useThemeStore = defineStore('theme', {
//   state: () => ({
//     colorOptions: [], // 🔁 Colors from API
//     selected: {
//       header: '',
//       footer: '',
//       button: '',
//       background: ''
//     }
//   }),

//   actions: {
//     async fetchColorOptions() {
//       const { data } = await useFetch('/api/colors')
//       this.colorOptions = data.value?.colors || []

//       // 🧪 Set default selections from dummy
//       if (this.colorOptions.length >= 4) {
//         this.selected.header = this.colorOptions[0].value
//         this.selected.footer = this.colorOptions[1].value
//         this.selected.button = this.colorOptions[2].value
//         this.selected.background = this.colorOptions[3].value
//       }
//     },

//     setColor(section, color) {
//       this.selected[section] = color
//     }
//   }
// })


