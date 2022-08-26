import React from "react"
import CollectionCard from "../collectionCard/collectionCard"  //import component collection card
import "./style_collection.css" // import style
import "./../adaptive.css"

const Collection = ()=> { //create component collection
    return (
        // parent div collection
        <div className="collection">
            {/* title */}
            <span className="collection__title">Our online store</span>
            <h2>Pottery Collection</h2>
            {/* div collection gallery with six components collection cards */}
            <div className="collection__gallery">
                {/* add six components with any props */}
                <CollectionCard src={require("./../../Images/one.png")} alt="image one" title="Decor Plate" price="$ 65.00 USD"/>
                <CollectionCard src={require("./../../Images/two.png")} alt="image two" title="Mint Pottery" price="$ 75.00 USD"/>
                <CollectionCard src={require("./../../Images/three.png")} alt="image three" title="Set Of Potterys" price="$ 125.00 USD"/>
                <CollectionCard src={require("./../../Images/four.png")} alt="image four" title="Orange Ceramic" price="$ 55.00 USD"/>
                <CollectionCard src={require("./../../Images/five.png")} alt="image five" title="Dark Bowl" price="$ 115.00 USD"/>
                <CollectionCard src={require("./../../Images/six.png")} alt="image six" title="Square Pottery" price="$ 75.00 USD"/>
            </div>
            {/* button */}
            <button className="collection__button">View All Products</button>
        </div>
    )
}
export default Collection // export collection component