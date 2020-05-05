import React from 'react';
import '../../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import img1 from '../../img/pic08.jpg'
import StatesVideo from './StatesVideo';

function NorthDakota() {
    return (
    <section id="one">
        <div class="inner">
            <header>
                <br></br>
                <h2>北达科他州</h2>
            </header>
            <br></br>
            <p class="jumbotron">
                <center>Contents coming soon</center><br></br>
                <div>
                    <div class="row mb-5">
                        <div class="col-lg-4 col-md-12">
                            <StatesVideo img = {img1} src="https://www.youtube.com/embed/A3PDXmYoF5U"/>
                        </div>
                        <div class="col-lg-4 col-md-12">
                            <StatesVideo img = {img1} src="https://www.youtube.com/embed/A3PDXmYoF5U"/>
                        </div>
                        <div class="col-lg-4 col-md-12">
                            <StatesVideo img = {img1} src="https://www.youtube.com//embed/m6CeNQS12vs"/>
                        </div>
                    </div>
                </div>
            </p>
        </div>
    </section>
    );
  }
  
  export default NorthDakota;

