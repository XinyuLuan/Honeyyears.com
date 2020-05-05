import React from 'react';
import '../../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import img1 from '../../img/pic08.jpg'
// import StatesVideo from '../States/StatesVideo';
import {Link} from 'react-router-dom';
import InstagramEmbed from 'react-instagram-embed'

function Portf_video() {
    return (
    <section id="one">
        <ul class="actions">
            <Link to='/about/protfolio/image'><button type="button" class="btn btn-info" >图片</button></Link>
            <Link to='/about/protfolio/video'><button type="button" class="btn btn-info" >视频</button></Link>
        </ul>
        <center>
            <InstagramEmbed
                url='https://www.instagram.com/p/B7R5TWYntf0/'
                maxWidth={700}
                hideCaption={false}
                containerTagName='div'
                protocol=''
                injectScript
                onLoading={() => {}}
                onSuccess={() => {}}
                onAfterRender={() => {}}
                onFailure={() => {}}
                />
        </center>
    </section>
    );
  }
  
  export default Portf_video;

