import React from 'react';
import axios from 'axios';
import Category from './Category';
import Menu from './Menu';
import './app.css';

//asdasd
class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { category: [], menu: [], query: [] };
  }

  componentDidMount() {
    axios
      .get('https://stream-menu-svc-v3.herokuapp.com/category')
      .then((response) => {
        this.setState({ category: response.data });
      })
      .catch((error) => console.log(error));
  }

  handleRenderMenu = (query) => {
    axios
      .get(`https://stream-menu-svc-v3.herokuapp.com//item?category=${query}`)
      .then((response) => {
        this.setState({ menu: response.data, query: query });
      })
      .catch((error) => console.log(error));
  };

  render() {
    // console.log(this.state.category);
    return (
      <div className="wrapper">
        <div className="menu">Menu Categorie</div>
        <Category
          category={this.state.category}
          handleRenderMenu={this.handleRenderMenu}
        />
        <Menu menu={this.state.menu} shortName={this.state.query} />
      </div>
    );
  }
}

export default App;
