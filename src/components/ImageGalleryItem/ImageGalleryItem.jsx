import PropTypes from 'prop-types';
import {GalleryItem,GalleryItemImg } from './ImageGalleryItem.styled'

export const ImageGalleryItem = ({
  smallFormat,
  largeFormat,
  tags,
  onClick,
}) => (
  <GalleryItem
    onClick = {() => {
      onClick(largeFormat);
    }}>
  <GalleryItemImg src={largeFormat} alt={tags}/>
  </GalleryItem>
);

ImageGalleryItem.propTypes = {
  largeFormat: PropTypes.string.isRequired,
  smallFormat: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};