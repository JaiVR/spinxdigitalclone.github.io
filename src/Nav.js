import React from "react";

export default function Nav(){
    
    return(
        <nav className="navbar">
            <input type="checkbox" id="check"></input>
            <label for="check" className="checkbtn">
                <i className="fas fa-bars"></i>
            </label>
            <div className="nav-ele">
            <div className="logo">
              <a href="#"><img src="logo.svg" ></img></a>
            </div>
            <div className="nav-links">
             <ul>
                <l><a href="#">WORK</a></l>
                <l><a href="#">EXPERTISE</a></l>
                <l>
                    <a href="#">ABOUT</a>
                    
                    <ul className="drop-menu">
                        <li><a href="#">Who We Are</a></li>
                        <li><a href="#">Our Process</a></li>
                        <li><a href="#">Careers</a></li>
                    </ul>
                    
                </l>
                <l><a href="#">INSIGHTS</a></l>
             </ul>
            </div>

              <div  className="start-project-button"> <button>
                <img className="button-image" src="inbox-logo.png"></img><h3 className="button-text">START A PROJECT</h3>
                  </button>
              </div>
            </div>
        </nav>
    )
}