import React from 'react';
import '../../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import InstagramEmbed from 'react-instagram-embed';

function imageDetail({ match }) {
  return (
    <section id="one">
      <div class="inner">
          <img width="100%" higth="100%" src={require('./images/'+match.params.id)} alt=""/>
      </div>
  </section>
  );
}

export default imageDetail;