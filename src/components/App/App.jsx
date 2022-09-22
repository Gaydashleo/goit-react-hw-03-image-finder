import { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Container } from './App.styled';
import{SearchBar} from 'components/Searchbar/Searchbar'

export class App extends Component {
  state = {
    images:[],
    query: '',
    page: 1,
    error: null,
  }

  handleSearch = query => {
    if (query === this.state.query) return;
    this.setState({
      images:[],
      query,
      page: 1,
      error: null,
    })
  }

  render() {

     return (
       <Container>
         <SearchBar onSubmit={this.handleSearch}/>

      <ToastContainer
position="bottom-center"
autoClose={5000}
closeOnClick
/>
   </Container>
  );
};
  }
 
