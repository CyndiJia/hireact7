import React from 'react';
//import logo from './logo.svg';
import './App.css';
//import { directive } from '@babel/types';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Intro} />
        <Route exact path="/User" component={User} />
        <Route exact path="/Interface" component={Interface} />
        <Route exact path="/Address" component={Address} />
        <Route exact path="/City" component={City} />
        <Route exact path="/Cloud" component={Cloud} />
        <Route exact path="/Earth" component={Earth} />
      </div>
    </Router>
  );
}

function Intro() {
  return (
    <div>
      <div class="titles">
        <h1>Introduction</h1>
      </div>
      <div class="intro">
        <img id="cover" src="https://cdn1.imggmi.com/uploads/2019/9/14/4fce0263270c1eea78c2ee4cf1755c74-full.jpg" alt="" width="600" />
        <p>DIDI is an mobile application designed for users to call for taxis online without stepping out of their room.
            DIDI can detect the location of the user, and the user can enter the destination can choose different types of
            cars to call. It is very popular because it saves a lot of time for users, also enabling users to stay in a
            comfortable environment when requesting for a car.
          <br></br>
          <br></br>
          However sometimes the location detection can be very inaccurate, but the location detection is somehow the only
          tool for the driver to get to the user. The structure of a city is so complicated that we cannot guarantee the
          location detection to be 100% accurate at any time. If the user does not manually set the location to where he/she
          actually is, it might end up with the situation that the user and the driver are at totally different places.
            </p>
      </div>

      <Link to="/Earth"><img id="left" src="https://cdn1.imggmi.com/uploads/2019/9/13/9c1b6af0f5f2bbbd2b3e4b91e517f6cb-full.png" alt="" width="60" /></Link>
      <Link to="/User"><img id="right" src="https://cdn1.imggmi.com/uploads/2019/9/13/7ca28a128802f0b9a8590e62c4939f91-full.png" alt="" width="60" /></Link>
      <div class="link">
        <p>Image Link : https://www.thecarconnection.com/news/1114247_ubers-chinese-rival-coming-to-north-america</p>
      </div>
    </div>

  );
}

function User() {
  return (
    <div>
      <div class="titles">
        <h1>User</h1>
      </div>
      <div class="layers">
        <img id="img" src="https://cdn1.imggmi.com/uploads/2019/9/13/0f89c0e7186ec5b414a8e61bd91b55ee-full.png" alt="" width="600" />
        <p>People using the app "DIDI" form the user layer.</p>
      </div>
      <Link to="/"><img id="left" src="https://cdn1.imggmi.com/uploads/2019/9/13/9c1b6af0f5f2bbbd2b3e4b91e517f6cb-full.png" alt="" width="60" /></Link>
      <Link to="/Interface"><img id="right" src="https://cdn1.imggmi.com/uploads/2019/9/13/7ca28a128802f0b9a8590e62c4939f91-full.png" alt="" width="60" /></Link>
      <div class="link">
        <p>Image Link : https://www.autorentalnews.com/314413/didi-chuxing-launches-taxi-hailing-service-in-japan</p>
      </div>
    </div>
  );
}

function Interface() {
  return (
    <div>
      <div class="titles">
        <h1>Interface</h1>
      </div>
      <div class="layers">
        <img id="interface" src="https://cdn1.imggmi.com/uploads/2019/9/13/07bec2da2e68be3c52b1beee60f805cf-full.png" alt="" width="600" />
        <p id="inter">The user interface of "DIDI" is the interface layer.</p>
      </div>
      <Link to="/User"><img id="left" src="https://cdn1.imggmi.com/uploads/2019/9/13/9c1b6af0f5f2bbbd2b3e4b91e517f6cb-full.png" alt="" width="60" /></Link>
      <Link to="/Address"><img id="right" src="https://cdn1.imggmi.com/uploads/2019/9/13/7ca28a128802f0b9a8590e62c4939f91-full.png" alt="" width="60" /></Link>
    </div>
  );
}

function Address() {
  return (
    <div>
      <div class="titles">
        <h1>Address</h1>
      </div>
      <div class="layers">
        <img src="https://cdn1.imggmi.com/uploads/2019/9/14/9dde4f969eccaded1a36417a33fc104a-full.jpg" alt="" width="600" />
        <p id="ad">The place where the user can enter current location and destination is the address layer.</p>
      </div>
      <Link to="/Interface"><img id="left" src="https://cdn1.imggmi.com/uploads/2019/9/13/9c1b6af0f5f2bbbd2b3e4b91e517f6cb-full.png" alt="" width="60" /></Link>
      <Link to="/City"><img id="right" src="https://cdn1.imggmi.com/uploads/2019/9/13/7ca28a128802f0b9a8590e62c4939f91-full.png" alt="" width="60" /></Link>
    </div>
  );
}

function City() {
  return (
    <div>
      <div class="titles">
        <h1>City</h1>
      </div>
      <div class="layers">
        <img id="city" src="https://cdn1.imggmi.com/uploads/2019/9/16/0bff4ff39c1e67985440138d910bb60f-full.jpg" alt="" width="600" />
        <p id="ci">The urban planning of the city is the city layer, since it enables the traffic of different parts of the city to function differently, also
                allowing customers and drivers to interact with each other.</p>
      </div>
      <Link to="/Address"><img id="left" src="https://cdn1.imggmi.com/uploads/2019/9/13/9c1b6af0f5f2bbbd2b3e4b91e517f6cb-full.png" alt="" width="60" /></Link>
      <Link to="/Cloud"><img id="right" src="https://cdn1.imggmi.com/uploads/2019/9/13/7ca28a128802f0b9a8590e62c4939f91-full.png" alt="" width="60" /></Link>
      <div class="link">
        <p>Image Links : https://www.thestar.com.my/tech/tech-news/2018/06/25/chinas-didi-steps-up-challenge-to-uber-with-australia-push/</p>
        <p>https://d2v9y0dukr6mq2.cloudfront.net/video/thumbnail/8Ofcko1/man-sit-at-road-in-countryside-hitchhiking-waiting-pick-up-phone-backpack-cars-trouble_byhsjpeh_thumbnail-full01.png</p>
      </div>
    </div>
  );
}

function Cloud() {
  return (
    <div>
      <div class="titles">
        <h1>Cloud</h1>
      </div>
      <div class="layers">
        <img src="https://cdn1.imggmi.com/uploads/2019/9/14/262bb4129fe53ca1622dedd43041806d-full.jpg" alt="" width="600" />
        <p>DIDI's server is the cloud layer, because it receives every task and distribute them to different places, serving as a central controller.</p>
      </div>
      <Link to="/City"><img id="left" src="https://cdn1.imggmi.com/uploads/2019/9/13/9c1b6af0f5f2bbbd2b3e4b91e517f6cb-full.png" alt="" width="60" /></Link>
      <Link to="/Earth"><img id="right" src="https://cdn1.imggmi.com/uploads/2019/9/13/7ca28a128802f0b9a8590e62c4939f91-full.png" alt="" width="60" /></Link>
      <div class="link">Image Link : https://www.lifewire.com/servers-in-computer-networking-817380
      </div>
    </div>
  );
}

function Earth() {
  return (
    <div>
      <div class="titles">
        <h1>Earth</h1>
      </div>
      <div class="layers">
        <img src="https://cdn1.imggmi.com/uploads/2019/9/16/eef39ee7c6f21cda783bbf690688591f-full.jpg" alt="" width="600" />
        <p>The entire DIDI's development is the earth, which enpowers each part of the application to function and goes through the whole
                process of every order, from the user entering the location and address to the end of the journey.</p>
      </div>
      <Link to="/Cloud"><img id="left" src="https://cdn1.imggmi.com/uploads/2019/9/13/9c1b6af0f5f2bbbd2b3e4b91e517f6cb-full.png" alt="" width="60" /></Link>
      <Link to="/"><img id="right" src="https://cdn1.imggmi.com/uploads/2019/9/13/7ca28a128802f0b9a8590e62c4939f91-full.png" alt="" width="60" /></Link>
      <div class="link">
        <p>Image Link : https://www.123rf.com/photo_93002395_developing-programming-and-coding-technologies-website-design-programmer-working-in-a-software-devel.html</p>
      </div>
    </div>
  );
}





export default App;
