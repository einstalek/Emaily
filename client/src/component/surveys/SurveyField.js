import React, {Component} from "react";

// Will take input and label props from Field
export default ({ input, label, meta: {error, touched} }) => {
    return (
        <div>
            <label> {label} </label>
            <input {...input} style={{marginBottom: '5 px'}} />
            <div className="red-text" style={{marginBottom: '20px'}}>
                {touched? error : ''}
            </div>
        </div>
    )
};