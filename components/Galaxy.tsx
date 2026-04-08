"use client"

import { useEffect, useRef } from "react"
import { Renderer, Camera, Transform, Mesh, Program, Geometry } from "ogl"

export type GalaxyProps = {
  mouseRepulsion?: boolean
  mouseInteraction?: boolean
  density?: number
  glowIntensity?: number
  saturation?: number
  hueShift?: number
  twinkleIntensity?: number
  rotationSpeed?: number
  repulsionStrength?: number
  autoCenterRepulsion?: number
  starSpeed?: number
  speed?: number
  pointScale?: number
  portraitMode?: boolean
  verticalSpeedBoost?: number
  orbitSpeedBoost?: number
  className?: string
}

const vertex = /* glsl */ `
precision highp float;

attribute vec3 position;
attribute vec3 aRandom;

uniform mat4 modelViewMatrix;
uniform mat4 projectionMatrix;
uniform float uTime;
uniform vec2 uMouse;
uniform float uStarSpeed;
uniform float uRotationSpeed;
uniform float uRepulsionStrength;
uniform float uAutoCenterRepulsion;
uniform float uMouseRepulsion;
uniform float uMouseInteraction;
uniform float uPointScale;
uniform float uVerticalSpeedBoost;
uniform float uOrbitSpeedBoost;

varying vec3 vColor;
varying float vTwinkle;

void main() {
  vec3 pos = position;

  float yNorm = clamp(abs(pos.y) / 4.8, 0.0, 1.0);
  float drift = uTime * uStarSpeed * 0.15 * (1.0 + yNorm * uVerticalSpeedBoost);
  pos.x += sin(drift + aRandom.x * 6.28318) * 0.04;
  pos.y += cos(drift * 0.8 + aRandom.y * 6.28318) * 0.04;
  pos.z += sin(drift * 0.6 + aRandom.z * 6.28318) * 0.04;

  float rot = uTime * uRotationSpeed * (1.0 + yNorm * uOrbitSpeedBoost);
  float c = cos(rot);
  float s = sin(rot);
  pos.xz = mat2(c, -s, s, c) * pos.xz;

  if (uMouseRepulsion > 0.5 && uMouseInteraction > 0.5) {
    vec2 delta = pos.xy - uMouse * vec2(5.0, 3.2);
    float d = length(delta);
    float push = smoothstep(1.2, 0.0, d) * uRepulsionStrength * 0.35;
    pos.xy += normalize(delta + 1e-4) * push;
  }

  if (uAutoCenterRepulsion > 0.001) {
    float cd = length(pos);
    pos += normalize(pos + 1e-4) * uAutoCenterRepulsion * smoothstep(3.5, 0.0, cd) * 0.2;
  }

  vec4 mv = modelViewMatrix * vec4(pos, 1.0);
  gl_Position = projectionMatrix * mv;

  float dist = max(0.1, -mv.z);
  gl_PointSize = (4.0 + aRandom.x * 10.0) * (180.0 / dist) * uPointScale;

  vColor = vec3(aRandom);
  vTwinkle = aRandom.y * 12.0;
}
`

const fragment = /* glsl */ `
precision highp float;

uniform float uGlow;
uniform float uSaturation;
uniform float uHueShift;
uniform float uTwinkleIntensity;
uniform float uTime;

varying vec3 vColor;
varying float vTwinkle;

vec3 hueShiftColor(float hue01, float sat) {
  float h = fract(hue01 + uHueShift / 360.0);
  float s = clamp(sat, 0.0, 1.0);
  float l = 0.62;
  float a = s * min(l, 1.0 - l);
  float k0 = mod(0.0 + h * 12.0, 12.0);
  float k8 = mod(8.0 + h * 12.0, 12.0);
  float k4 = mod(4.0 + h * 12.0, 12.0);
  float f0 = l - a * max(min(min(k0 - 3.0, 9.0 - k0), 1.0), -1.0);
  float f8 = l - a * max(min(min(k8 - 3.0, 9.0 - k8), 1.0), -1.0);
  float f4 = l - a * max(min(min(k4 - 3.0, 9.0 - k4), 1.0), -1.0);
  return vec3(f0, f8, f4);
}

void main() {
  vec2 pc = gl_PointCoord - 0.5;
  float d = length(pc);
  if (d > 0.5) discard;

  float soft = smoothstep(0.5, 0.0, d);
  float tw = 1.0 + sin(uTime * 1.8 + vTwinkle) * uTwinkleIntensity;
  vec3 col = hueShiftColor(vColor.x, uSaturation) + vec3(0.15) * vColor.z;
  float alpha = soft * uGlow * tw;
  gl_FragColor = vec4(col * tw, alpha);
}
`

export function Galaxy({
  mouseRepulsion = false,
  mouseInteraction = false,
  density = 1,
  glowIntensity = 0.3,
  saturation = 0,
  hueShift = 140,
  twinkleIntensity = 0.3,
  rotationSpeed = 0.1,
  repulsionStrength = 2,
  autoCenterRepulsion = 0,
  starSpeed = 0.5,
  speed = 1,
  pointScale = 1,
  portraitMode = false,
  verticalSpeedBoost = 0,
  orbitSpeedBoost = 0,
  className = "",
}: GalaxyProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const mouseRef = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const renderer = new Renderer({
      dpr: Math.min(window.devicePixelRatio || 1, 2),
      alpha: true,
      antialias: false,
      depth: false,
    })
    const gl = renderer.gl
    gl.clearColor(0, 0, 0, 0)
    container.appendChild(gl.canvas)
    gl.canvas.style.width = "100%"
    gl.canvas.style.height = "100%"
    gl.canvas.style.display = "block"

    const camera = new Camera(gl, { fov: portraitMode ? 58 : 50, near: 0.1, far: 120 })
    camera.position.z = portraitMode ? 7.4 : 6.2

    const scene = new Transform()

    const count = Math.min(8000, Math.max(400, Math.floor(1600 * density)))
    const positions = new Float32Array(count * 3)
    const randoms = new Float32Array(count * 3)

    for (let i = 0; i < count; i++) {
      const disk = Math.pow(Math.random(), portraitMode ? 0.52 : 0.35)
      const angle = Math.random() * Math.PI * 2
      const spreadY = portraitMode
        ? (Math.random() - 0.5) * 5.4 * (0.7 + Math.random() * 0.8)
        : (Math.random() - 0.5) * 2.2 * (0.4 + Math.random() * 0.6)
      const r = disk * (portraitMode ? 4.4 : 5.5)
      positions[i * 3] = Math.cos(angle) * r * (portraitMode ? 0.68 : 1) + (Math.random() - 0.5) * 0.4
      positions[i * 3 + 1] = spreadY
      positions[i * 3 + 2] =
        Math.sin(angle) * r * (portraitMode ? 0.6 : 0.85) + (Math.random() - 0.5) * (portraitMode ? 0.7 : 0.9)

      randoms[i * 3] = Math.random()
      randoms[i * 3 + 1] = Math.random()
      randoms[i * 3 + 2] = Math.random()
    }

    const geometry = new Geometry(gl, {
      position: { size: 3, data: positions },
      aRandom: { size: 3, data: randoms },
    })

    const program = new Program(gl, {
      vertex,
      fragment,
      uniforms: {
        uTime: { value: 0 },
        uMouse: { value: [0, 0] },
        uStarSpeed: { value: starSpeed * speed },
        uRotationSpeed: { value: rotationSpeed * speed },
        uRepulsionStrength: { value: repulsionStrength },
        uAutoCenterRepulsion: { value: autoCenterRepulsion },
        uMouseRepulsion: { value: mouseRepulsion ? 1.0 : 0.0 },
        uMouseInteraction: { value: mouseInteraction ? 1.0 : 0.0 },
        uPointScale: { value: pointScale },
        uVerticalSpeedBoost: { value: verticalSpeedBoost },
        uOrbitSpeedBoost: { value: orbitSpeedBoost },
        uGlow: { value: glowIntensity },
        uSaturation: { value: saturation },
        uHueShift: { value: hueShift },
        uTwinkleIntensity: { value: twinkleIntensity },
      },
      transparent: true,
      depthTest: false,
      cullFace: false,
    })

    const stars = new Mesh(gl, { geometry, program, mode: gl.POINTS })
    stars.setParent(scene)

    let frame = 0
    const onMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect()
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1
      const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1)
      mouseRef.current.x = x
      mouseRef.current.y = y
    }

    if (mouseInteraction) {
      container.addEventListener("mousemove", onMouseMove)
      container.addEventListener("mouseleave", () => {
        mouseRef.current.x = 0
        mouseRef.current.y = 0
      })
    }

    const resize = () => {
      const w = container.clientWidth
      const h = container.clientHeight
      renderer.setSize(w, h)
      camera.perspective({ aspect: w / h })
    }

    const ro = new ResizeObserver(resize)
    ro.observe(container)
    resize()

    const update = (t: number) => {
      frame = requestAnimationFrame(update)
      const time = t * 0.001
      program.uniforms.uTime.value = time
      program.uniforms.uMouse.value = [mouseRef.current.x, mouseRef.current.y]
      program.uniforms.uStarSpeed.value = starSpeed * speed
      program.uniforms.uRotationSpeed.value = rotationSpeed * speed
      program.uniforms.uGlow.value = glowIntensity
      program.uniforms.uSaturation.value = saturation
      program.uniforms.uHueShift.value = hueShift
      program.uniforms.uTwinkleIntensity.value = twinkleIntensity
      program.uniforms.uRepulsionStrength.value = repulsionStrength
      program.uniforms.uAutoCenterRepulsion.value = autoCenterRepulsion
      program.uniforms.uMouseRepulsion.value = mouseRepulsion ? 1.0 : 0.0
      program.uniforms.uMouseInteraction.value = mouseInteraction ? 1.0 : 0.0
      program.uniforms.uPointScale.value = pointScale
      program.uniforms.uVerticalSpeedBoost.value = verticalSpeedBoost
      program.uniforms.uOrbitSpeedBoost.value = orbitSpeedBoost

      renderer.render({ scene, camera })
    }

    frame = requestAnimationFrame(update)

    return () => {
      cancelAnimationFrame(frame)
      ro.disconnect()
      if (mouseInteraction) {
        container.removeEventListener("mousemove", onMouseMove)
      }
      container.removeChild(gl.canvas)
    }
  }, [
    mouseRepulsion,
    mouseInteraction,
    density,
    glowIntensity,
    saturation,
    hueShift,
    twinkleIntensity,
    rotationSpeed,
    repulsionStrength,
    autoCenterRepulsion,
    starSpeed,
    speed,
    pointScale,
    portraitMode,
    verticalSpeedBoost,
    orbitSpeedBoost,
  ])

  return (
    <div
      ref={containerRef}
      className={className}
      style={{ position: "absolute", inset: 0, overflow: "hidden" }}
      aria-hidden
    />
  )
}

export default Galaxy
