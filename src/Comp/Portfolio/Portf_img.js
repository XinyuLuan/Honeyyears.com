import React from 'react';
import './assets/css/main.css';
import {Link} from 'react-router-dom';

function Protf_img() {
    const items = require ('../../data/imgs.json');
    var imgs = items.items;

return (
    <div>
        <ul>
            <Link to='/about/protfolio/image'><button type="button" class="btn btn-info" >图片</button></Link>
            <Link to='/about/protfolio/video'><button type="button" class="btn btn-info" >视频</button></Link>
        </ul>
        <div id="main">
            <div class="inner">
                <div class="columns">
                    {imgs.map(item => (
                        <div class="image fit"  key={item.itemid}>
                            <Link to={'/about/protfolio/image/'+item}><img src={require('./images/'+item)} alt={'./images/'+item.name} /></Link>
                        </div>
                    ))}
                </div>
            </div>
	    </div>
    </div>
  );
}

export default Protf_img;