import type { ButtonHTMLAttributes, ReactNode } from 'react';
import clsx from 'clsx';
import styles from './Button.module.css';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  children: ReactNode;
}

export const Button = ({
  variant = 'primary',
  children,
  className = '',
  disabled,
  ...props
}: ButtonProps) => {
const buttonClassName = clsx(styles.button, styles[variant], className);

  return (
    <button
      className={buttonClassName}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  )
}