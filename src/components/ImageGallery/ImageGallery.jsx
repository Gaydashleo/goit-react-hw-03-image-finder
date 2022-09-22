import PropTypes from 'prop-types'
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { Gallery } from './ImageGallery.styled';

export const ImageGallery = ({ images, onClick}) => {
  return (
    <Gallery>
      {images.map(({ id, smallFormat, largeFormat, tags }) => (
        <ImageGalleryItem
          key={id}
          smallFormat={smallFormat}
          largeFormat={largeFormat}
          tags={tags}
          onClick={onClick} />
      ))}
    </Gallery>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
      tags: PropTypes.string.isRequired,
    })
  ),
};