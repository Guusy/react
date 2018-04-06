import React, { Component } from 'react';
import HomeLayout from './../components/HomeLayout';
import Categories from '../../categories/components/Categories';
import Related from '../components/related';
import ModalContainer from '../../widgets/containers/ModalContainer';
import Modal from '../../widgets/components/Modal';
import HandleError from '../../error/containers/handle-error';
import VideoPlayerContainer from '../../Player/containers/VideoPlayerContainer'
export default class Home extends Component {
  state = {
     fatalError:false,
     modalVisibility: false
  }
  openModal = () =>{
    this.setState({
      modalVisibility: true
    })
  }
  closeModal= () => {
    this.setState({
      modalVisibility: false
    })
  }
  
  render() {
   
    return (
      <HandleError>
      <HomeLayout>
        <VideoPlayerContainer
        autoPlay
        />
        <Related />
        <Categories openModal={this.openModal} categories={this.props.data.categories} />
        {this.state.modalVisibility &&
          <ModalContainer>
            <Modal closeModal={this.closeModal}>
              <h1>Esto es un portal</h1>
            </Modal>

          </ModalContainer>
        }

      </HomeLayout>
      </HandleError>
    )

  }

}