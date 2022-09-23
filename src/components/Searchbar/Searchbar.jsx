import { Component } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import {
 Header,
  Form,
  Input,
  Button,
} from './SearchBar.styled';




export class SearchBar extends Component{
  static propTypes = {
    onSubmit: PropTypes.func,
  };

  state = {
    query:'',
  };

  handleChange = event => {
    this.setState({ query: event.currentTarget.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    if (this.state.query.trim() === '') {
      toast.warn('Please specify your query!');
      return;
    }
    this.props.onSubmit(this.state.query);
    this.reset();
  };

  reset = () => {
    this.setState({ query: ''});
  }

  render = () => {
    const { query } = this.state;
  
    return (
 <Header>
  <Form >
    <Button type="submit" >
      <span className="button-label">Search</span>
    </Button>

    <Input
      type="text"
      name="query"
      value={query}
      onChange={this.handleChange}
      autoComplete="off"
      autoFocus
      placeholder="Search images and photos"
    />
  </Form>
</Header>
    )
  }


}