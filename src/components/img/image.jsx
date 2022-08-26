import React from "react"


const Image = (props)=> { // create component image
    return (
        //tag image with props
        <img src={props.src} alt={props.alt} className={props.className}/>
    )
}
export default Image //export component image