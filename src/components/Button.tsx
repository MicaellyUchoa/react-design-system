import { Slot } from '@radix-ui/react-slot';
import { ReactNode } from 'react';
import { clsx } from 'clsx';

export interface ButtonProps {
    children: ReactNode,
    asChild?: boolean
}

export function Button({ children, asChild }: ButtonProps) {
    const Component = asChild ? Slot : 'button'
    return <Component className={clsx('py-4 px-3 bg-cyan-500 hover:bg-cyan-300 rounded font-semibold text-black text-sm w-full transition-colors focus:ring-2 focus:ring-white')}>{children}</Component>
}
