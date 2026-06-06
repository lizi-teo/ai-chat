import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '../../../lib/utils'

export const entityAvatarBase = 'inline-flex shrink-0 items-center justify-center rounded-full bg-muted text-muted-foreground font-medium overflow-hidden'

export const entityAvatarSizeClasses = {
  sm: 'size-7 text-xs',
  md: 'size-10 text-sm',
  lg: 'size-14 text-base',
}

const avatarVariants = cva(entityAvatarBase, {
    variants: {
      size: entityAvatarSizeClasses,
    },
    defaultVariants: {
      size: 'md',
    },
  }
)

export interface EntityAvatarProps extends VariantProps<typeof avatarVariants> {
  fallback: string
  src?: string
  alt?: string
  className?: string
}

export function EntityAvatar({ fallback, src, alt, size, className }: EntityAvatarProps) {
  const initials = fallback
    .split(' ')
    .slice(0, 2)
    .map((w) => w[0]?.toUpperCase() ?? '')
    .join('')

  return (
    <div className={cn(avatarVariants({ size }), className)}>
      {src ? (
        <img src={src} alt={alt ?? fallback} className="size-full object-cover" />
      ) : (
        <span aria-label={fallback}>{initials}</span>
      )}
    </div>
  )
}
