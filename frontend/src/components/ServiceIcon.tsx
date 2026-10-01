import type { ReactNode } from 'react'

type ServiceIconName = 'face' | 'body' | 'eye' | 'wax' | 'makeup'

const icons: Record<ServiceIconName, ReactNode> = {
  face: (
    <>
      <circle cx="32" cy="32" r="21" />
      <path d="M14 27c6-2 10-7 12-13 5 7 13 11 24 12" />
      <path d="M24 33h2m12 0h2M26 43c4 3 8 3 12 0" />
    </>
  ),
  body: (
    <>
      <circle cx="32" cy="14" r="7" />
      <path d="M20 58V36l-6-10m30 32V36l6-10M26 32h12M26 32v26m12-26v26" />
    </>
  ),
  eye: (
    <>
      <path d="M8 32c7-9 15-13 24-13s17 4 24 13c-7 9-15 13-24 13S15 41 8 32Z" />
      <circle cx="32" cy="32" r="7" />
      <path d="M14 18l-4-5m13 1-2-7m22 11 4-5m-13 1 2-7" />
    </>
  ),
  wax: (
    <>
      <path d="M18 14h28v8H18zM22 22v28h20V22M18 50h28" />
      <path d="M32 8v6" />
    </>
  ),
  makeup: (
    <>
      <path d="M24 8h6l2 28h-10L24 8Z" />
      <path d="M26 36h10v20H26z" />
      <path d="M40 18h10v8l-4 22H40" />
    </>
  ),
}

function ServiceIcon({ name }: { name: ServiceIconName }) {
  return (
    <svg viewBox="0 0 64 64" aria-hidden="true">
      {icons[name]}
    </svg>
  )
}

export default ServiceIcon
export type { ServiceIconName }
