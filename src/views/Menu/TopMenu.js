import React, { Component } from "react";
import axios from "axios";
import SearchMenu from '../Search/index';
import { Menu, Input, Grid } from 'semantic-ui-react';

class App extends Component {
  state = {
    movies: null,
    loading: false,
    value: []
  };

  search = async val => {
    this.setState({ loading: true });
    const res = await axios(
      `https://api.themoviedb.org/3/search/movie?query=${val}&api_key=dbc0a6d62448554c27b6167ef7dabb1b`
    );
    const movies = await res.data.results;

    this.setState({ movies, loading: false });
  };

  onChangeHandler = async e => {
    this.search(e.target.value);
    this.setState({ value: e.target.value });
    console.log('this.state.value', this.state.movies)
  };

  get renderMovies() {
    let movies = <h1 />;
    if (this.state.movies) {
      movies = <SearchMenu list={this.state.movies} />;
    }

    return movies;
  }

  render() {
    return (
            <Grid>
            <Grid.Column width={6} />
            <Grid.Column width={6}>
            <Menu.Item   style={{textAlign:"center"}}>
              <Input fluid icon='search' placeholder='Search for company, employee, jobs...' 
               value={this.state.value}
               onChange={e => this.onChangeHandler(e)}/>
              </Menu.Item>  <br />
              {this.renderMovies}
              </Grid.Column>
          </Grid>
  
    );
  }
}

export default App;
