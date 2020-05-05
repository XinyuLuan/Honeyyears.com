import React from 'react';
import  mappic from "../img/map3.jpg";
import '../App.css';
import ImageMapper from 'react-image-mapper';
import 'bootstrap/dist/css/bootstrap.min.css';
// import {Link} from 'react-router-dom';

// var URL = "https://c1.staticflickr.com/5/4052/4503898393_303cfbc9fd_b.jpg";

export class Map2 extends React.Component{
	
    constructor(){
        super();
        const items = require ('../data/area.json');
        this.state = {
            hoveredArea: null, msg: null, moveMsg: null, name: null, coords: null
        };
        
        this.MAP = {
            name: "my-map",
            areas: items.items
        }
	}
	
	getInitialState() {
		// return { hoveredArea: null, msg: null, moveMsg: null, name: null };
	}
	load() {
        this.setState({ msg: "For test only" });
	}
	clicked(area) {
		this.setState({
			msg: `You clicked on ${area.shape} at coords ${JSON.stringify(
				area.coords
			)} !`
        });
        // window.open(area.href, '_blank');
        window.open(area.href, '_self');  

        
	}
	clickedOutside(evt) {
		const coords = { x: evt.nativeEvent.layerX, y: evt.nativeEvent.layerY };
		this.setState({
			msg: `You clicked on the image at coords ${JSON.stringify(coords)} !`
		});
	}
	moveOnImage(evt) {
        const coords = { x: evt.nativeEvent.layerX, y: evt.nativeEvent.layerY };
		this.setState({
			moveMsg: `You moved on the image at coords ${JSON.stringify(coords)} !`
		});
	}
	enterArea(area) {
		this.setState({
			hoveredArea: area,
			name: area.name,
			coords: area.coords,
			msg: `You entered ${area.shape} ${area.name} at coords ${JSON.stringify(
				area.coords
			)} !`
		});
	}
	leaveArea(area) {
		this.setState({
			hoveredArea: null,
			name: null,
			coords: null,
			msg: `You leaved ${area.shape} ${area.name} at coords ${JSON.stringify(
				area.coords
			)} !`
		});
	}
	moveOnArea(area, evt) {
		const coords = { x: evt.nativeEvent.layerX, y: evt.nativeEvent.layerY };
		this.setState({
			moveMsg: `You moved on ${area.shape} ${
				area.name
			} at coords ${JSON.stringify(coords)} !`
		});
	}

	getTipPosition(coords) {
		return { top: `${coords[0]}px`, left: `${coords[1]}px` };
	}

	
	render() {
		const _width = 900;
		const tooltipStyle = {
			position: 'absolute',
			color: '#fff',
			padding: '10px',
			background: 'rgba(0,0,0,0.8)',
			borderRadius: '5px',
			pointerRvents: 'none',
			zIndex: 9999,
			top: `${this.state.coords && (this.state.coords[1]+40) * _width/500}px`,
			left: `${this.state.coords && (this.state.coords[0]-25) * _width/500}px`,
		};

		return (
		<div>
			<div>
			{/* <!-- Banner --> */}
			<section id="banner">
				<div class="inner">
					<header>
						<center><img src={require('../img/白日梦想家Logo.png')} width = '120px' alt=""/>
						{/* <h1>白日梦想家</h1> */}
						</center>
					</header>
					<h1>本节目将通过两位在美国生活五年的25岁新婚夫妻的蜜月之行，利用一年的时间驾驶房车，
						走遍全美本土48州，为观众呈现一个真实，完整的美国。他们也将在这一年的时间内与他们的房车朝夕相处，
						并肩作战，一同实现曾经幻想过的美好的白日梦.<br></br><br></br>
						<center>2020年1月1日启程<br></br>世界这么大，我想去看看</center>
					</h1>
				</div>
			</section>

		{/* <!-- One --> */}
			<section id="one">
				<div class="inner">
				<div class="row d-flex justify-content-center">
				<h2>节目介绍</h2>
                  <div class="embed-responsive embed-responsive-16by9 hoverable">
                      <iframe 
                        width="100%" 
                        height="630" 
                        src="https://www.youtube.com/embed/4O7PlZkW8xc"
                        frameborder="0" 
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                        allowfullscreen="allowfullscreen" title="frame7"
                      />
                  </div>
              </div>
				</div>
			</section>

		{/* <!-- Two --> */}
			<section id="one">
				<div class="inner">
					<article class="alt">
						<div class="content">
							<header>
								<h1>48州旅行路线</h1>
							</header>
						</div>
                    </article>
                {/* <div className="grid"> */}
				{/* <div className="presenter"> */}
				<div className="wrapper">
					<h3>点击圆圈查看各州履行细节</h3>
					<div>
						<ImageMapper
							src={mappic}
							map={this.MAP}
							width={_width}
							imgWidth={500}
							onLoad={() => this.load()}
							onClick={area => this.clicked(area)}
							onMouseEnter={area => this.enterArea(area)}
							onMouseLeave={area => this.leaveArea(area)}
							onMouseMove={(area, _, evt) => this.moveOnArea(area, evt)}
							onImageClick={evt => this.clickedOutside(evt)}
							onImageMouseMove={evt => this.moveOnImage(evt)}
							lineWidth={4}
							strokeColor={"white"}
						/>
						{
							this.state.coords && (
								<p style={tooltipStyle}>{this.state.name}</p>
							)
						}
						
						{/* </div> */}
					{/* </div> */}
                        {/* <pre className="message">
                            {this.state.msg ? this.state.msg : null}
                        </pre>
                        <pre>
                            {this.state.moveMsg ? this.state.moveMsg : null}
                        </pre> */}
			        </div>
				</div>
					
					<div class="notice list-group">
						{this.MAP.areas.map(area => (
							<a 
								style = {{textDecoration: 'none'}}
								href={area.href} 
								key={area.itemid} 
								class="list-group-item list-group-item-action">
									{area.name}
							</a>
                    	))}
					</div>
				</div>
			</section>

			
			{/* <!-- Three --> */}
			{/* Sponsers */}
			{/* <section id="three">
            <header>
                <h3><u>Sponsors</u></h3>
            </header>
				<div class="inner">
					<article>
						<div class="content">
							<span class="icon fa-laptop"></span>
							<header>
								<h3>Tempus Feugiat</h3>
							</header>
							<p>Morbi interdum mollis sapien. Sed ac risus. Phasellus lacinia, magna lorem ullamcorper laoreet, lectus arcu.</p>
							<ul class="actions">
								<li><a href="/#" class="button alt">Learn More</a></li>
							</ul>
						</div>
					</article>
					<article>
						<div class="content">
							<span class="icon fa-diamond"></span>
							<header>
								<h3>Aliquam Nulla</h3>
							</header>
							<p>Ut convallis, sem sit amet interdum consectetuer, odio augue aliquam leo, nec dapibus tortor nibh sed.</p>
							<ul class="actions">
								<li><a href="/#" class="button alt">Learn More</a></li>
							</ul>
						</div>
					</article>
					<article>
					<div class="content">
							<span class="icon fa-laptop"></span>
							<header>
								<h3>Sed Magna</h3>
							</header>
							<p>Suspendisse mauris. Fusce accumsan mollis eros. Pellentesque a diam sit amet mi ullamcorper vehicula.</p>
							<ul class="actions">
								<li><a href="/#" class="button alt">Learn More</a></li>
							</ul>
						</div>
					</article>
				</div>
			</section> */}
                    
                </div>
            </div>
			
		);
	}
}

export default Map2;

// "name": "1.北达科他州",
// "shape": "circle",
// "coords": [222, 36, 10],
// "preFillColor": "rgb(255,255,255,0.3)",
// "lineWidth": 4,
// "strokeColor": "black",
// "href":"/#/NorthDakota"
// },
// {
// "name": "2.蒙大纳州",
// "shape": "circle",
// "coords": [140, 37, 10],
// "preFillColor": "rgb(255,255,255,0.3)",
// "lineWidth": 4,
// "strokeColor": "black",
// "href":"/#/蒙大纳州"