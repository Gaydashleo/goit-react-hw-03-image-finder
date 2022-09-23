import { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Container } from './App.styled';
import { SearchBar } from 'components/Searchbar/Searchbar';
import { ImageGallery } from 'components/ImageGallery/ImageGallery';
import { Button } from 'components/Button/Button';
import { Loader } from 'components/Loader/Loader';
import { Modal } from 'components/Modal/Modal';
import { fetchData } from 'services/PixabayApi';

export class App extends Component {
  state = {
    images:[],
    query: '',
    page: 1,
    error: null,
    showModal: false,
    largeImageURL: null,
    isLoading:false,
  }

  componentDidUpdate(prevProps, prevState) {
    const prevQuery = prevState.query;
    const nextQuery = this.state.query;
    const { page } = this.state;

    if (prevQuery !== nextQuery || (prevState.page !== page && page !== 1)) {
      this.fetchImages();
    }
  }

  fetchImages = () => {
    const { query, page } = this.state;
    const perPage = 12;

    this.setState({ isLoading: true });

    fetchData(query, page, perPage)
      .then(({ picture, totalPicture }) => {
        const totalPages = Math.ceil(totalPicture / perPage);
        
        if (picture.length === 0) {
          return toast.error('Sorry, no found images. Please, try again!');
        }
        
        if (page === 1) {
          toast.success(`Hooray! We found ${totalPicture} images.`);
        }

        if (page === totalPages) {
          toast.info('The end of search results.');
        }
        const data = picture.map(({ id, webformatURL, largeImageURL, tags }) => {
          return {
            id,
            webformatURL,
            largeImageURL,
            tags,
          };
        });
        this.setState(({ images }) => ({
          images: [...images, ...data],
          total: totalPicture,
        }));
      }).catch(error => this.setState({ error }))
      .finally(() => this.setState({ isLoading: false }));
      };
   
  handleSearch = query => {
    if (query === this.state.query) return;
    this.setState({
      images: [],
      query,
      page: 1,
      error: null,
    });
  };
  onLoadMore = () => {
    this.setState(({ page }) => ({
      page: page + 1,
      isLoading: true,
    }));
  };

  toggleModal = largeImageURL => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
    this.setState({ largeImageURL: largeImageURL });
  };

  render() {
    const { images, error, isLoading, showModal, largeImageURL, tags, total } = this.state;
    const lastPage = images.length === total;
    const lengthImages = images.length !== 0;
    const loadMoreButton = lengthImages && !isLoading && lastPage;

    return (
    <Container>
        <SearchBar onSubmit={this.handleSearch} />
        
        {error && toast.error(error.message)}
        
        {isLoading && <Loader />}
        
        {lengthImages && (
          <ImageGallery images={images} onClick={this.toggleModal} />
        )}

        {loadMoreButton && <Button onClick={this.onLoadMore}>Load more</Button>}
        
        {showModal && (
            <Modal onClose={this.toggleModal}>
          <img src={largeImageURL} alt={tags}/>
        </Modal>
        )}

      <ToastContainer position="bottom-center" closeOnClick autoClose={5000}/>

  </Container>
  );
};
  }

