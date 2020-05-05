import React, {Component} from 'react';
import '../../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from 'react-awesome-modal';
import Footer from '../Footer';

export default class StatesVideo extends Component {
  constructor(props) {
    super(props);
    this.state = {
        visible : false,
        IMG: props.img,
        SRC: props.src
    }
  }

  openModal() {
    this.setState({
        visible : true
    });
  }

  closeModal() {
    this.setState({
        visible : false
    });
  }

  render() {
      return (
        <span>
          <p class="h5 mb-4">.z-depth-1</p>
          <input type="image" src={this.state.IMG} alt = "img1" value="Open" onClick={() => this.openModal()} />
          <Modal visible={this.state.visible} width="60%" height="60%" effect="fadeInUp" onClickAway={() => this.closeModal()}>
            <div class="modal-body mb-0 p-0">
              <div class="embed-responsive embed-responsive-16by9 z-depth-1-half">
                <iframe class="embed-responsive-item" src={this.state.SRC} title="frame1" allowFullScreen="allowFullScreen" ></iframe>
              </div>
            </div>
            <Footer/>
          </Modal>
        </span>
        
      );
  }
}