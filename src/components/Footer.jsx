import React from "react";
import ReactDOM from "react-dom";

function Footer(){
    var today = new Date();
    var year = today.getFullYear();
    return <footer ><p>Copyright &#169; {year}</p></footer>
}


export default Footer;