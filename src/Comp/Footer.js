import React from 'react';
import '../App.css';

function Footer() {
  return (
    <section id="footer">
        <div class="inner">
            <header>
                <h3>关注我们</h3>
            </header>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
            <a href="https://www.instagram.com/honeyyears/?r=nametag" class="fa fa-instagram"> </a>
            <a href="https://www.youtube.com/channel/UCdGDDXqwO4Zmn44zLkImn2w/featured" class="fa fa-youtube"> </a>
            <a href="https://www.facebook.com/profile.php?id=100045240573044" class="fa fa-facebook"> </a>
            <a href="https://space.bilibili.com/47384897?spm_id_from=333.788.b_765f7570696e666f.1" class="fa fa-bilibili"> 
              <img src="https://www.bilibili.com/favicon.ico" width = '13px' height='12px' alt="bilibili icon"/></a>
            {/* <a href="/#" class="fa fa-twitter"> </a> */}
            <div class="copyright">
                &copy; Untitled Design: <a href="https://templated.co/">TEMPLATED</a>. Images <a href="https://unsplash.com/">Unsplash</a>
            </div>
        </div>
    </section>
  );
}

export default Footer;