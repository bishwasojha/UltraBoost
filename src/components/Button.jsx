import Loader from './Loader'

export default function Button({
  children,
  disabled,
  loading,
  size,
  color,
  className,
  onClick,
  ...props
}) {
  return (
    <button
      disabled={disabled}
      className={`button 
      ${className || ''} 
      ${size}
      ${color}
      ${loading ? ' loading' : ''}
      ${disabled ? ' disabled' : ''}`}
      onClick={onClick}
      {...props}
    >
      {loading ? <Loader size={size} /> : <>{children}</>}
    </button>
  )
}

Button.defaultProps = {
  size: 'medium',
  color: 'primary',
}
