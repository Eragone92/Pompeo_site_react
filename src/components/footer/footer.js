import React from "react"
import FooterItem from "../footer_item/footer_item" // import component footer item
import Logo from "../logo/logo" // import logo 
import "./style_footer.css" // import styles

const Footer = ()=> { // create component logo
    return (
        // crete parent symantic tag footer
        <footer className="footer">
            {/* add component logo */}
         <Logo/>
         {/* p with footer text */}
         <p className="footer__text">I have always striven to fix beauty in wood, stone, glass or pottery, that has been my creed.</p>
        {/* create footer list */}
         <div className="footer__list">
            {/*add components footer item */}
          <FooterItem src={require("./../../Images/footer_list_one.png")} alt="list one" title="EMAIL" text="pompeopotery@gmail.com"/>
          <FooterItem src={require("./../../Images/footer_list_two.png")} alt="list two" title="FIND" text="Central Park, Manhattan New York, 1101"/>
          <FooterItem src={require("./../../Images/footer_list_three.png")} alt="list three" title="CALL" text="+1 292 345 678"/>
         </div>
         {/* footer bottom part */}
         <div className="footer__bottom">
            {/* create lists with links */}
            <ul>
                <li><a href="/" className="grey">Template design by</a></li>
                <li><a href="/">Dorian Hoxha</a></li>
                <li>-</li>
                <li><a href="/">Image License Info</a></li>
                <li><a href="/" className="grey">Powered by</a></li>
                <li><a href="/">Webflow</a></li>
            </ul>
         </div>
        </footer> //close footer tag
    )
}
export default Footer //export component footer