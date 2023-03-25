import {useRef} from 'react';

export default function Input({label, icon, error, ...props}) {
  const inputRef = useRef();

  return (
    <div className="input" onClick={() => inputRef.current.focus()}>
      <div className="label">{label}</div>
      <div className={`input-group ${error && 'error'}`}>
        <div className="icon">{icon}</div>
        <input {...props} ref={inputRef} />
      </div>
      <div className="error-message">{error}</div>
    </div>
  );
}
