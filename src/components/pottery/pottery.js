import React from "react"
import "./style_pottery.css"// import styles for component pottery

const Pottery = ()=> { // create component pottery
    return (
      // parent div pottery
        <div className="pottery">
          {/* pottery list */}
          <ul>
            <li>Pompeo POttery</li>
            <li>Ready to start shopping?</li>
            <li>Lorem ipsum dolor sit amet, <span><a href="/">consectetur adipiscing elit</a></span>. Suspendisse varius enim in eros elementum.</li>
            <li><button>NEW COLLECTION</button></li>

          </ul>
        </div> //close parent tag pottery
    )
}
export default Pottery //export component pottery