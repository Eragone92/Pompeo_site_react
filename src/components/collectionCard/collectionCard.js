import React from "react"
import Image from "../img/image" // import component image
import "./style_collectionCard.css" // import styles

const CollectionCard = (props)=> { // create component collection card for component collection
    return (
        // parent div for collection card
        <div className="collectionCard">
            {/* add component image for images with props */}
          <Image src={props.src} alt={props.alt} className="collectionCard__image"/>
          {/* span with prop title */}
         <span className="collectionCard__title">{props.title}</span>
         {/* span with prop price */}
         <span className="collectionCard__price">{props.price}</span>
        </div>
    )
}
export default CollectionCard //export collection card