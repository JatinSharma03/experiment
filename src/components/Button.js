import React from 'react'

export default function Button(props) {
    return (
        <div>
                <button className={`btn btn-${props.class} mx-2 my-2 border border-${props.mode}`} onClick={props.fun}>{props.text}</button>
        </div>
    )
}
