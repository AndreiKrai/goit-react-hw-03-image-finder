import { Component } from 'react';
import PropTypes from 'prop-types';

export class Searchbar extends Component {
  state = { search: '' };

  handleSubmit = e => {
    const {search}=this.state

    e.preventDefault();
    this.props.onSubmitSearch(search);
    this.setState({ search: ''});
  };


handleChange  = e => {
  const{name,value}=e.target
   this.setState({ [name]:value.toLowerCase() });
};

  render() {
    return (
      <header className="Searchbar">
        <form className="SearchForm" onSubmit={this.handleSubmit}>
          <button type="submit" className="SearchForm_button">
            <span className="SearchForm-button-label">Search</span>
          </button>

          <input 
          onChange={this.handleChange}
          name="search"
            className="SearchForm-input "
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.search}
          />
        </form>
      </header>
    );
  }
}

Searchbar.propType={onSubmitSearch:PropTypes.func.isRequired}