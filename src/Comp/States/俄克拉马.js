import React from 'react';
import '../../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import InstagramEmbed from 'react-instagram-embed';

function 俄克拉马() {
  return (
    <section id="one">
      <div class="inner">
          <header>
              <h2>俄克拉马州</h2>
          </header>
          <div class="jumbotron">
              {/* <!--Grid row--> */}
              <center><h3>白日梦想家 第三站 </h3>
              国家牛仔与西方历史遗迹博物馆中超高还原度的西方小镇带我们重返那个遥远的拓荒年代。<br></br>
              俄克拉荷马纪念中心的倒映池静静诉说着曾经的苦痛。<br></br>
              塔尔萨的巨型石油工人雕像展示了这座城市曾经的辉煌。<br></br>
              俄克拉荷马，一片拥有过辉煌，也承受过苦难的土地，用它独特的气质诉说着自己的故事。</center><br></br>
              <div class="row d-flex justify-content-center">
                  <div class="embed-responsive embed-responsive-16by9 hoverable">
                      {/* <iframe class="embed-responsive-item" src="https://www.youtube.com/watch?v=_wFdfi9mZRU" style={{height: '101%'}}
                      allowfullscreen title="frame7"></iframe> */}
                      <iframe 
                        width="1103" 
                        height="630" 
                        src="https://www.youtube.com/embed/YDOhMl607Ic"
                        frameborder="0" 
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                        allowfullscreen="allowfullscreen" title="frame7"
                      />
                  </div>
              </div>
              <br></br>
              </div>
              <div class="jumbotron">
              <center><h3>终于要和大家介绍我们的房车啦!</h3></center>
              <div class="row d-flex justify-content-center">
                  <div class="embed-responsive embed-responsive-16by9 hoverable">
                      {/* <iframe class="embed-responsive-item" src="https://www.youtube.com/watch?v=_wFdfi9mZRU" style={{height: '101%'}}
                      allowfullscreen title="frame7"></iframe> */}
                      <iframe 
                        width="1103" 
                        height="630" 
                        src="https://www.youtube.com/embed/PvwwSkORIYE"
                        frameborder="0" 
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                        allowfullscreen="allowfullscreen" title="frame7"
                      />
                  </div>
              </div>
              {/* <!--Grid row--> */}
              
              {/* <!--Grid row--> */}
          </div>
      </div>
  </section>
  );
}

export default 俄克拉马;