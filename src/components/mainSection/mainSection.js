import React from "react"
import Image from "../img/image" // import component image
import "./style_mainSection.css" //import styles for component main section
import "./../adaptive.css"

const MainSection = ()=> { // create component main  section
    return (
        //parent div main section
        <div className="mainSection">
            {/* main section left side */}
            <ul className="mainSection__left">
                <li>Pompeo POttery</li>
                <li>Unique Porcelain Stone Collection</li>
                <li>Unique modern pottery made by our master in porcelain stones</li>
                <li><button>SHOP COLLECTION</button></li>
            </ul>
            {/* component image with props is a left side of main section */}
         <Image src={require("./../../Images/RIGHT.png")} alt="main image" className="mainSection__right"/>
        </div>
    )
}
export default MainSection //export component main section