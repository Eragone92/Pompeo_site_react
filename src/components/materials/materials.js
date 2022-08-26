import React from "react"
import Image from "../img/image"// import component image
import "./style_materials.css" //import styles for component examples
import "./../adaptive.css"

const Examples = ()=> { // create component examples
    return (
      // create parent div examples
        <div className="examples">
          {/* create examples top */}
         <div className="examples__top">
          <div className="examples__top_left">
            {/* <div className="examples__top_left-back"></div> */}
            <Image src={require("./../../Images/vaza_one.png")} alt="vaza one" className="examples__top_left-img"/>
          </div>
          <div className="examples__top_right">
            <h3>Gold & Black Pottery</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore dolore aua. Ut enim ad minim veniam, quis nostrud exercitationulco laboris nisi ut aliquip ex ea commodo consequatuisaute.</p>
            <h4>View Details</h4>
          </div>
         </div>
         {/* examples bottom side */}
         <div className="examples__bottom">
         <div className="examples__bottom_left">
         <h3>Orange Ceramic</h3>
            <p>Pri cu dico labores officiis, odio principes complectitur ad sea. Sea id doctus forensibus, nec lorem vocent aliquam eu. Aliquid definitiones id cum, ad meliore perpetua referrentur sed. Quas suscipit ad mea verear vivendo tincidunt.</p>
            <h4>View Details</h4>
          </div>
          <div className="examples__bottom_right">
            {/* component image with props */}
           <Image src={require("./../../Images/vaza_two.png")}/>
          </div>
         </div>
        </div> // close tag examples
    )
}
export default Examples //export component examples