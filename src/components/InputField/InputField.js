import React from 'react'
import classnames from 'classnames'
import './InputField.css'

const InputField = ({name, placeholder, value, onChange, className, label, id, type, minDate, maxDate}) => {
    return (
        <>
            {type == 'date' ?
                <div className={classnames(`input-field ${className}`)}>
                    {label &&  
                        <label className="label-input" for={id}>{label}</label>
                    }
                    <pr/>
                    <input
                        id={id}
                        name={name}
                        placeholder={placeholder}
                        value={value}
                        onChange={onChange}
                        type={type}
                        min={minDate}
                        max={maxDate}
                        className="input"
                    />
                    <span className="error-input"></span>
                </div>
                :
                <div className={classnames(`input-field ${className}`)}>
                    {label &&  
                        <label className="label-input" for={id}>{label}</label>
                    }
                    <input
                        id={id}
                        name={name}
                        placeholder={placeholder}
                        value={value}
                        onChange={onChange}
                        type={type}
                    />
                </div>
            }
            
        </>
  )
}

export default InputField
