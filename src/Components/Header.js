import React from "react";
import { Link, } from "react-router-dom";

import "../App.css";

function Header() {
    return(
        <div className="Children">
            <h1>React  Conduit!</h1>
            <nav>
            <Link to="/CreateArticle"><button className="btn">CreateArticle</button></Link>
            <Link to="/UpdateArticle"><button className="btn">UpdateArticle</button></Link>
            <Link to="/ReadArticle"><button className="btn">ReadArticle</button></Link> 
            </nav>
        </div>
        )
}
export default Header;