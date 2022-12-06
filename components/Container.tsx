import clsx from 'clsx'
import { ReactNode } from 'react'

type Props = {
  children: ReactNode
  className?: string
}

const Container = ({ children, className }: Props) => {
  return (
    <section
      className={clsx(
        className,
        // 'max-w-full px-4 md:mx-auto md:max-w-5xl md:px-8 xl:max-w-7xl'
        'container mx-auto px-5'
      )}
    >
      {children}
    </section>
  )
}

export default Container
