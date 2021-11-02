import React from 'react';
import './category.css';

class Category extends React.Component {
  handleClick = (query) => {
    this.props.handleRenderMenu(query);
  };

  render() {
    return (
      <div className="category-wrapper">
        <ul className="category-list">
          {this.props.category.map((element) => (
            <li
              key={element.id}
              className="categoryName"
              onClick={() => this.handleClick(element.short_name)}
            >
              {element.name} - ({element.short_name})
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Category;
