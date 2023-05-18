import Nav from './Nav';
import Landing from './Landing';
import Page2 from './Page2';
import './App.css';
import Page3 from './Page3';
import Page4 from './Page4';
import Page5 from './Page5';
import Page6 from './Page6';
import Page7 from './Page7';
import Page8 from './Page8';
import Page9 from './Page9';
import Page10 from './Page10';
import Page11 from './Page11';
import Page12 from './Page12';
import Page13 from './Page13';

function App() {

   var cursor =document.querySelector(".cursor");
   var cursor2 =document.querySelector(".cursor2");
   document.addEventListener("mousemove",function(e){
        cursor.style.cssText=cursor2.style.cssText= "left:" + e.clientX + "px; top: " + e.clientY + "px;";
   })

  return (
    <div className="App">
      <div className='mainpage'>
       <Nav/>
       <Landing />
      </div>
      <div className='Rest-content'>
       <Page2 />
       <Page3 />
       <Page4 />
       <Page5 />
       <Page6 />
       <Page7 />
       <div className='Seemywork'><a href="#">See More Work </a></div>
       <Page8/>
       <Page9 />
       <Page10/>
       <Page11/>
       <Page12/>
       <Page13/>
       <div class='cursor'></div>
       <div class='cursor2'></div>
       
      </div>
    </div>
  );
}

export default App;
