import React from 'react';
import '../../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom';
// import InstagramEmbed from 'react-instagram-embed';


function 亚利桑那() {
  const items = require ('../../data/亚利桑那作品.json');
  var imgs = items.items;
  return (
    <section id="one">
      <div class="inner">
          <header>
              <br></br>
              <h2>亚利桑那州</h2>
          </header>
          <br></br>
          <div class="jumbotron">
              {/* <!--Grid row--> */}
              <center>白日梦想家 第一站<br></br><br></br>
              气势磅礴的大峡谷与没落破败的66号公路。<br></br>
              环山环水间的马蹄湾与阿甘跑过的纪念碑谷。<br></br>
              拿枪的警察与搭车的原住民，夕阳下的狂奔与山谷间的仙人掌。<br></br>
              当我们第一次经历被逮捕，第一次学会了那瓦霍语言……
              </center><br></br><br></br>

              <div class="row d-flex justify-content-center">
                  <div class="embed-responsive embed-responsive-16by9 hoverable">
                      {/* <iframe class="embed-responsive-item" src="https://www.youtube.com/watch?v=_wFdfi9mZRU" style={{height: '101%'}}
                      allowfullscreen title="frame7"></iframe> */}
                      <iframe 
                        width="1103" 
                        height="630" 
                        src="https://www.youtube.com/embed/_wFdfi9mZRU" 
                        frameborder="0" 
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                        allowfullscreen="allowfullscreen" title="frame7"
                      />
                  </div>
              </div>
              {/* <!--Grid row--> */}
          </div>
      </div>
      <div id="main">
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
      </div>
  </section>
  );
}

export default 亚利桑那;