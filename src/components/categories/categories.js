import React from "react"
import "./style_categories.css" // import styles for component
import "./../adaptive.css" // import style adaptive

const Categories = ()=> { // create component categories
    return (
        // parent div categories
        <div className="categories"> 
        {/* text h3 */}
         <h3>Product Categories</h3>
         {/* text h2 */}
         <h2>Porcelain <span className="categories__img">Pottery</span></h2>
         <div className="categories__list">
            <div className="categories__list_one">
            <div className="categories__list_one-img"></div>
            <span className="categories__list_one-text">Vases</span>
            </div>
            <div className="categories__list_two">
            <div className="categories__list_two-img"></div>
            <span className="categories__list_one-text">Mugs</span>
            </div>
            <div className="categories__list_three">
            <div className="categories__list_three-img"></div>
            <span className="categories__list_one-text">Plates</span>
            </div>
         </div>
         <div className="categories__footer">
            <div className="categories__footer_left">
                <h3>Hand Grafted Pottery since 1990</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus posuere.</p>
            </div>
            <div className="categories__footer_right">
            <h3>We Provide Premium Pottery Produts</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus posuere.</p>
            </div>
         </div>
        </div>
    )
}
export default Categories //export component categories