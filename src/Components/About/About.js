import React from 'react';
import ReactDOM from 'react-dom';
import './about.css'
import {BrowserRouter as Router, Routes, Link
  } from 'react-router-dom';

  function About(){
      return(
        <div className='about'>
            <header className='about-header'>   
                <p>About</p><Link to='/' className='home-main'>Mingyu Kil</Link>
            </header>
            <section className='about-text' id='aboutText'>
                <pre>
                    

              &nbsp;Mingyu Kil is an amateur photographer based in Korea.<br></br>

              He takes something gonna be never meet again once passed by.<br></br>
              Redeveloping cities, people around him, and cultural heritage like the Korean palace.<br/>
              The cities are re-builded to enrich lives for mankind.
              And heritages are also repaired and restored to pass on.<br/>
              <br></br>

              &nbsp;The buildings located in the cities on destroyed and re-born also
              give us a beautiful landscape, skylines and so forth.<br/>

              However it also only shows us the appearance of the past in passing time.<br/>

              He worked to take the photos of the scenes which went passing by the time 
              from his own point of view as possible as beautiful.<br/>
              <br />

              &nbsp;And also, while living in Pusan and Masan, He took photos of these cities' seas.<br/>
              
              I tried to capture the paradoxical charm of the sea with strength 
              and softness to the best of my ability.<br/>

              <br />
              &nbsp;he hasn't done any work that has been commissioned by the client yet,
              but he is willing to do it.<br/>
              It's not the perfect picture, but he will show you how it develops day by day.<br/>


                </pre>
            </section>   
          <footer>
            <a href='https://www.instagram.com/dolroad/' style={{ marginRight: 20 }}>Instagram</a>
            <a href='https://blog.naver.com/dlfamdkf'>Blog</a>
          </footer>

        </div>  
      )
  }

  export default About;


//   <pre>
//                     <br>Mingyu Kil is an amateur photographer  who is working in Korea.</br>

//                     He started taking photos at 2009. He has taken photos about his family and friends for 1 year and then went to the military service.
//                     4 years after discharge from the military service,  he learned the Photography in earnest and also started his own works.
                    
//                 </pre>
                
//                 <p>
//                     The first work is studying and taking pictures of the Korean palaces which he interested in from very young.
//                     He worked to express the meaning of  the buildings in the palaces and the years of  they has gone through
//                 </p>
//                 <p>
//                     The second work is about his hometown which is being redeveloped.
//                     That city which remains the memories of  his early age gonna be a nutrient of  the cold trees(new apartments).
//                     Before his hometown gonna be destroyed completely, he intended to leave it as records that anyone can see not being  as archives the only him can see.
//                 </p>
//                 <p>
//                     He recognize that his works are lacking.
//                     He think that the improving moments can be an enjoying work.
//                     He hopes you can be with this joy.
//                 </p> 