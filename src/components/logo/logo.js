import React from "react"
import Image from "../img/image" //import component image
import "./style_logo.css" // import style for logo

const Logo = ()=> { //create component logo
    return (
        // href with component image and props for logo
       <a href="/"><Image src={require("../../Images/Pompeo.jpg")} alt="logo" className="logo"/></a>
    )
}
export default Logo //export component logo