import React from "react";

export default function Nav(){
    function showDiv(id) {
        document.getElementById(id).style.display = "block";
      }
      
      function hideDiv(id) {
        document.getElementById(id).style.display = "none";
      }
    return(
        <nav className="navbar">
            <div className="logo">
              <a href="#"><img src="logo.svg" ></img></a>
            </div>
            
            <ul>
                <l><a href="#">WORK</a></l>
                <l><a href="#">EXPERTISE</a></l>
                <l onmouseover="showDiv(about-divi)" onmouseout="hideDiv(about-divi)"><a href="#">ABOUT</a></l>
                <div id="about-divi"  className="about-div">
                    <div className="about-1">
                        <h2>Who we are</h2>
                        <p>The secret ingredient for the SPINX difference.</p>
                    </div>
                </div>
                <l><a href="#">INSIGHTS</a></l>
            </ul>
            <button className="start-project-button">
                <img className="button-image" src="inbox-logo.png"></img><h3 className="button-text">START A PROJECT</h3>
            </button>
        </nav>
    )
}