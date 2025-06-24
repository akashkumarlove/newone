export const useThemeLoader = async () => {
  const store = useThemeStore()
  if (store.colorOptions.length === 0) {
    await store.fetchColorOptions()
  }
}
