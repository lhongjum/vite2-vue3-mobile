import { onMounted, ref } from 'vue'
import useWinResize from './useWinResize'

export default function useSize() {
  const rootFontSize = ref(37.5)
  const bodyFontSize = ref(24)
  const setRem = () => {
    const clientWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth
    const dpr = window.devicePixelRatio
    if (dpr === 1 && clientWidth > 375) {
      rootFontSize.value = 37.5
      bodyFontSize.value = 12 * 1.5
    } else {
      rootFontSize.value = clientWidth / 10
      bodyFontSize.value = 12 * dpr
    }
    if (window.document) {
      window.document.documentElement.style.fontSize = rootFontSize.value + 'px'
      window.document.body.style.fontSize = bodyFontSize.value + 'px'
    }
  }
  useWinResize(setRem)
  onMounted(() => {
    setRem()
  })
  return {
    rootFontSize,
    bodyFontSize,
  }
}
