import React from "react"
import Image from "../img/image" //import component image
import "./style_footerItem.css" //import style

const FooterItem = (props)=> { //create component footer item with props
    return (
        // create parent div footer item
        <div className="footerItem">
            {/* add component image with props */}
         <Image src={props.src} alt={props.alt} className="footerItem__img"/>
         {/* create title h3 wiith props */}
        <h3 className="footerItem__title">{props.title}</h3>
        {/* create p with props text */}
        <p className="footerItem__text">{props.text}</p>
        </div> // close tag footer item
    )
}
export default FooterItem //export component footer item