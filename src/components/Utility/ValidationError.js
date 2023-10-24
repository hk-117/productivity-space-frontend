import React from "react";

export default function ValidationError(props){
    return (
        <div className="invalid-feedback m-2">
            {props.message}
        </div>
    )
}