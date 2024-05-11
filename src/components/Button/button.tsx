import { ButtonProps } from './types'

export function Button({ label, variant, size }: ButtonProps) {
    return (
        <button className={`
    inline-flex items-center rounded-site-md justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50
    ${variant} ${size}`}>{label}</button>
    )
}
