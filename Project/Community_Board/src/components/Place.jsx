import React from "react"

const Place = (props)=>{
    return(
        <td>
            <img src={props.image}/>
            <h4>{props.name}</h4>
            <a href={props.link} target="_blank">
                <button><b>Go to</b></button>
            </a>
        </td>
    )
}
export default Place