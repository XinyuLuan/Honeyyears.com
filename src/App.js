import React from 'react';

import './App.css';
import Navigation from './Comp/Nav';
import About from './Comp/About';
import Donation from './Comp/Donation';
import Map2 from './Comp/Map2';
// import Map from './Comp/Map'
import Footer from './Comp/Footer';
import NorthDakota from './Comp/States/NorthDakota';
import 亚利桑那 from './Comp/States/亚利桑那';
import 得克萨斯 from './Comp/States/得克萨斯';
import 俄克拉马 from './Comp/States/俄克拉马';
import 阿肯色 from './Comp/States/阿肯色';
import Protf_img from './Comp/Portfolio/Portf_img';
import Protf_video from './Comp/Portfolio/Protf_video';
import imageDetail from './Comp/Portfolio/imageDetail';

import { HashRouter, Switch, Route} 
    from 'react-router-dom';
function App() {
  return (
    <HashRouter>
      <div className="App">
        <Navigation />
        <Switch>
          <Route path='/about' exact component={About}/>
          <Route path='/' exact component={Map2}/>
          <Route path='/NorthDakota' component={NorthDakota}/> 
          <Route path='/亚利桑那' component={亚利桑那}/> 
          <Route path='/得克萨斯' component={得克萨斯}/> 
          <Route path='/俄克拉马' component={俄克拉马}/> 
          <Route path='/阿肯色' component={阿肯色}/> 
          <Route path='/donation' component={Donation}/>
          <Route path='/home' exact component={Map2}/>
          <Route path='/about/protfolio/image' exact component={Protf_img}/>
          {/* <Route path='/about/protfolio/image' exact component={Protf_img}/> */}
          <Route path='/about/protfolio/video' exact component={Protf_video}/>
          <Route path='/about/protfolio/image/:id' component={imageDetail}/>
        </Switch>
        <Footer/>
      </div>
    </HashRouter>
    
  );
}

export default App;
