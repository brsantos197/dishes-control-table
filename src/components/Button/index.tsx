import { ReactNode, ButtonHTMLAttributes } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
}

export const Button = ({children, className, ...rest}: ButtonProps) => {
  return (
    <button className={`bg-sky-500 rounded flex items-center gap-2 hover:brightness-90 text-zinc-50 px-3 py-2 ${className}`} {...rest}>
      {children}
    </button>
  );
}