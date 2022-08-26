import React from "react"
import Image from "../img/image" // import component image
import "./style_latestNews.css" // import style

const LatestNews = ()=> { // create component Latest news
    return (
        // create parent div latest news
        <div className="letastNews">
            {/* list with list items */}
            <ul>
                {/* component image with props */}
       <li><Image src={require("./../../Images/latest.png")} alt="latest" className="letastNews__img"/></li>
       <li>LATEST NEWS</li>
       <li>Latest news <span>New updates</span></li>
       <li><input type="text" placeholder="Enter your email"/><button>SUBSCRIBE</button></li>
       <li>Sign up for our newsletter</li>
        </ul>
        </div>
    )
}
export default LatestNews //export component latest news