import React, { Component } from 'react';
import  mappic from "../img/map2.png";
import '../App.css';
// import ImageMapper from './ImageMapper';
import ImageMapper from 'react-image-mapper';

export default class Chart extends Component {
    constructor(){
        super();
        this.state = {
            hoveredArea: null, msg: null, moveMsg: null
        };
    }
    // getInitialState() {
	// 	return { hoveredArea:null, msg: null, moveMsg: null };
	// }
	load() {
		this.setState({ msg: "Interact with image !" });
	}
	clicked(area) {
		this.setState({
			msg: `You clicked on ${area.shape} at coords ${JSON.stringify(
				area.coords
			)} !`
		});
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
			msg: `You entered ${area.shape} ${area.name} at coords ${JSON.stringify(
				area.coords
			)} !`
        });
        console.log(this.state.hoveredArea);
	}
	leaveArea(area) {
		this.setState({
			hoveredArea: null,
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

	getTipPosition(area) {
		return { top: `${area.center[1]}px`, left: `${area.center[0]}px` };
    }
    
  render() {
    var MAP = {
        name: "my-map",
        areas: [
            {
                name: "1",
                shape: "poly",
                coords: [25, 33, 27, 300, 128, 240, 128, 94],
                preFillColor: "green",
                fillColor: "#0000ff"
            },
            {
                name: "2",
                shape: "poly",
                coords: [219, 118, 220, 210, 283, 210, 284, 119],
                preFillColor: "pink",
                lineWidth: 10,
                strokeColor: "#0000ff"
            },
            {
                name: "3",
                shape: "poly",
                coords: [381, 241, 383, 94, 462, 53, 457, 282],
                preFillColor: "yellow", // this is mandatory for stroke color to work
                lineWidth: 10,
                strokeColor: "#6afd09"
            },
            {
                name: "4",
                shape: "poly",
                coords: [245, 285, 290, 285, 274, 239, 249, 238],
                preFillColor: "red"
            },
            {
                name: "5",
                shape: "circle",
                coords: [170, 100, 25],
                preFillColor: "rgb(255,255,255,0.3)",
                lineWidth: 2
            },
            {
                name: "6",
                shape: "rect",
                coords: [270, 100, 200, 50],
                lineWidth: 2,
                preFillColor: "rgba(255, 255, 255, 0.3)",
                strokeColor: "#6afd09"
            }
        ]
    }
    return(
        
      <div>
		<div className="presenter">
            <div style={{ position: "relative" }}>
                <ImageMapper
                    src={mappic}
                    map={MAP}
                    width={1200}
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
                {this.state.hoveredArea && (
                    <span
                        className="tooltip"
                        style={{ ...this.getTipPosition(this.state.hoveredArea) }}
                    >
                        {this.state.hoveredArea && this.state.hoveredArea.name}
                    </span>
                )}
            </div>
            <pre className="message">
                {this.state.msg ? this.state.msg : null}
            </pre>
            <pre>{this.state.moveMsg ? this.state.moveMsg : null}</pre>
        </div>
    </div>
    );
  }
}
