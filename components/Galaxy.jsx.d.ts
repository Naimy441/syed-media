declare module "@/components/Galaxy.jsx" {
  import type { FC, HTMLAttributes } from "react"

  export type GalaxyJsxProps = {
    focal?: [number, number]
    rotation?: [number, number]
    starSpeed?: number
    density?: number
    hueShift?: number
    disableAnimation?: boolean
    speed?: number
    mouseInteraction?: boolean
    glowIntensity?: number
    saturation?: number
    mouseRepulsion?: boolean
    repulsionStrength?: number
    twinkleIntensity?: number
    rotationSpeed?: number
    autoCenterRepulsion?: number
    transparent?: boolean
    /** Follow pointer anywhere on the page (for overlapping hero UI). */
    trackWindowMouse?: boolean
    /** 2 default; use `1` on machines with broken WebGL2 star/glow compositing (tile/box artifacts). */
    webgl?: 1 | 2
    className?: string
  } & Omit<HTMLAttributes<HTMLDivElement>, "children">

  const Galaxy: FC<GalaxyJsxProps>
  export default Galaxy
}
