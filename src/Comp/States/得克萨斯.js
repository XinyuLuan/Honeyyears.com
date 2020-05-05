import React from 'react';
import '../../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import {Link} from 'react-router-dom';
// import InstagramEmbed from 'react-instagram-embed';


function 得克萨斯() {
//   const items = require ('../../data/亚利桑那作品.json');
//   var imgs = items.items;
  return (
    <section id="one">
      <div class="inner">
          <header>
              <br></br>
              <h2>得克萨斯州</h2>
          </header>
          <br></br>
          <div class="jumbotron">
              {/* <!--Grid row--> */}
              <center>白日梦想家 第二站<br></br><br></br>
              66号公路中间点与庄严肃穆的肯尼迪纪念碑，独具风情的沃斯堡畜牧场与休斯顿航天中心。
              </center><br></br>
              <div class="row d-flex justify-content-center">
                  <div class="embed-responsive embed-responsive-16by9 hoverable">
                      {/* <iframe class="embed-responsive-item" src="https://www.youtube.com/watch?v=_wFdfi9mZRU" style={{height: '101%'}}
                      allowfullscreen title="frame7"></iframe> */}
                      <iframe 
                        width="1103" 
                        height="630" 
                        src="https://www.youtube.com/embed/q6vqzhO7GGE" 
                        frameborder="0" 
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                        allowfullscreen="allowfullscreen" title="frame7"
                      />
                  </div>
              </div>
              {/* <!--Grid row--> */}
          </div>
      </div>
      {/* <div id="main">
        <h2>摄影作品</h2>
        <div class="inner">
            <div class="columns">
                {imgs.map(item => (
                    <div class="image fit"  key={item.itemid}>
                        <Link to={'/about/protfolio/image/'+item}><img src={require('../Portfolio/images/亚利桑那作品/'+item)} alt={'./images/'+item.name} /></Link>
                    </div>
                ))}
            </div>
        </div>
      </div> */}
  </section>
  );
}

export default 得克萨斯;