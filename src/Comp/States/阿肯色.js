import React from 'react';
import '../../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import {Link} from 'react-router-dom';
// import InstagramEmbed from 'react-instagram-embed';


function 阿肯色() {
//   const items = require ('../../data/亚利桑那作品.json');
//   var imgs = items.items;
  return (
    <section id="one">
      <div class="inner">
          <header>
              <br></br>
              <h2>阿肯色州</h2>
          </header>
          <br></br>
          <div class="jumbotron">
              {/* <!--Grid row--> */}
              <center><h3>白日梦想家 第四站</h3><br></br>
              </center><br></br>
              <div class="row d-flex justify-content-center">
                  <div class="embed-responsive embed-responsive-16by9 hoverable">
                      {/* <iframe class="embed-responsive-item" src="https://www.youtube.com/watch?v=_wFdfi9mZRU" style={{height: '101%'}}
                      allowfullscreen title="frame7"></iframe> */}
                      <iframe 
                        width="1103" 
                        height="630" 
                        src="https://www.youtube.com/embed/xPI7cCDTo5M"
                        frameborder="0" 
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                        allowfullscreen="allowfullscreen" title="frame7"
                      />
                  </div>
              </div>
              <br></br>
              <br></br>
              <div class="row d-flex justify-content-center">
                  <div class="embed-responsive embed-responsive-16by9 hoverable">
                      {/* <iframe class="embed-responsive-item" src="https://www.youtube.com/watch?v=_wFdfi9mZRU" style={{height: '101%'}}
                      allowfullscreen title="frame7"></iframe> */}
                      <iframe 
                        width="1103" 
                        height="630" 
                        src="https://www.youtube.com/embed/w6beHWk0FYM"
                        frameborder="0" 
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                        allowfullscreen="allowfullscreen" title="frame7"
                      />
                  </div>
              </div>
              {/* <!--Grid row--> */}
          </div>
      </div>
  </section>
  );
}

export default 阿肯色;