import Nav from './Nav';
import React from 'react';
import { useEffect } from 'react';
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

  useEffect(() => {
    const handleMouseMove = (e) => {
      const cursor = document.querySelector('.cursor');
      const cursor2 = document.querySelector('.cursor2');
      cursor.style.left = e.clientX + 'px';
      cursor.style.top = e.clientY + 'px';
      cursor2.style.left = e.clientX + 'px';
      cursor2.style.top = e.clientY + 'px';
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

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
