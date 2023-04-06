export default function Form({
  title,
  subtitle,
  children,
  loading,
  message,
  error,
  extra,
  ...props
}) {
  return (
    <form {...props}>
      {(title || subtitle) && (
        <div className="heading">
          <span className="title">{title}</span>
          <span className="subtitle">{subtitle}</span>
        </div>
      )}
      {children}
      <div className={`message${error ? ' error' : ''}`}>
        {message ? message : error}
      </div>
      {extra && <div className="extra">{extra}</div>}
    </form>
  )
}
