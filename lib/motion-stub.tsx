import React from 'react'

type AnyProps = Record<string, unknown>

const makeElement = (tag: string) =>
  React.forwardRef<HTMLElement, AnyProps>(function MotionStub(
    { children, initial, animate, exit, transition, whileTap, whileHover, layout, layoutId, variants, ...rest },
    ref
  ) {
    return React.createElement(tag, { ...rest, ref }, children)
  })

export const motion = new Proxy({} as Record<string, ReturnType<typeof makeElement>>, {
  get(_, tag: string) {
    return makeElement(tag)
  },
})

export function AnimatePresence({ children }: { children?: React.ReactNode }) {
  return <>{children}</>
}

export function LayoutGroup({ children }: { children?: React.ReactNode }) {
  return <>{children}</>
}

export function useReducedMotion() {
  return false
}
