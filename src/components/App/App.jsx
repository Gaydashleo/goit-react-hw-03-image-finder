import { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Container } from './App.styled';
import { SearchBar } from 'components/Searchbar/Searchbar';
import { ImageGallery } from 'components/ImageGallery/ImageGallery';

export class App extends Component {
  state = {
    images:[],
    query: '',
    page: 1,
    error: null,
    showModal: false,
    largeFormat:null,
  }

  handleSearch = query => {
    if (query === this.state.query) return;
    this.setState({
      images: [],
      query,
      page: 1,
      error: null,
    })
  };

  toggleModal = largeFormat => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
    this.setState({ largeFormat: largeFormat });
  };

  render() {
    const{images}=this.state

     return (
       <Container>
         <SearchBar onSubmit={this.handleSearch}/>

        <ImageGallery images={images} onClick={this.toggleModal}/>
      <ToastContainer
position="bottom-center"
autoClose={5000}
closeOnClick
/>
   </Container>
  );
};
  }
 
