import React from "react"

const CustomSelect = ({ handleChange, sizes, ...otherProps }) => {

    return <div>
        <select {...otherProps} onChange={handleChange}>
            <option value=""> --- select size -- </option>
            {sizes.map((size, index) => {
                return <option key={index} value={size}> {size} </option>
            })}
        </select>
    </div>
}

export default CustomSelect;