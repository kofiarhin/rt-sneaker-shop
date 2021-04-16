import React from "react"

const FormInput = ({ handleChange, label, ...otherProps }) => {

    return <div>

        {label ? <label>  {label} </label> : null}
        <input {...otherProps} onChange={handleChange} />
    </div>
}

export default FormInput;