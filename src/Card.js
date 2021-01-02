import React from 'react'
import { useSpring, animated } from 'react-spring'
import './style.css'
import './stylemobile.css'

const calc = (x, y) => [-(y - window.innerHeight / 2) / 100, (x - window.innerWidth / 2) / 100, 1]
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

export default function Card({children,onClickEvent}) {
  const [props, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } }))
  return (
    <animated.div
      class="card"
      onClick={onClickEvent}
      onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
      onMouseLeave={() => set({ xys: [0, 0, 1] })}
      style={{ transform: props.xys.interpolate(trans) }}
    >
      {children}
    </animated.div>
  )
}
