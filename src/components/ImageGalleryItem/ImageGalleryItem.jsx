import PropTypes from 'prop-types';
import {GalleryItem,GalleryItemImg } from './ImageGalleryItem.styled'

export const ImageGalleryItem = ({
  webformatURL,
  largeImageURL,
  tags,
  onClick,
}) => (
  <GalleryItem
    onClick = {() => {
      onClick(largeImageURL);
    }}>
  <GalleryItemImg src={largeImageURL} alt={tags}/>
  </GalleryItem>
);

ImageGalleryItem.propTypes = {
  largeImageURL: PropTypes.string.isRequired,
  webformatURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};