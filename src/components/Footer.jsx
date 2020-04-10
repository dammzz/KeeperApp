import React from "react";

var d = new Date();
var year = d.getFullYear();


function Footer(){
    return (
        <div>
            <footer>
                <h5><i>Erdem Ibraimi</i></h5>
                <p>Copyright {year}</p>
            </footer>
        </div>
    );
}


export default Footer;