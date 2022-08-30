import { Component } from 'react';
import { ImageItem, ImageGalleryItemImage } from './ImageGalleryItem.styled'
import PropTypes from 'prop-types';
import { Modal } from 'components/Modal/Modal';

export class ImageGalleryItem extends Component {
  state = {
    showModal: false,
  }

  toggleModal = e => {
    console.log('toggle');
    this.setState(({ showModal }) => ({
            showModal: !showModal,
    }))
  }

  openModal = e => {
    this.setState(({ showModal }) => ({
            showModal: true,
    }))
  }

  closeModal = e => {
    this.setState(({ showModal }) => ({
            showModal: false,
    }))
  }

  render() {
    const { webformatURL, largeImageURL } = this.props.item;
    const { showModal } = this.state
    return <ImageItem onClick={this.toggleModal}>
      <ImageGalleryItemImage src={webformatURL} />
      {showModal && <Modal route={largeImageURL} onClose={this.closeModal} />}
    </ImageItem>
  }
};

ImageGalleryItem.propTypes = {
  item: PropTypes.object.isRequired
};