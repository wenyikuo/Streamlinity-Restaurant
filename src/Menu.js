import React from 'react';
import './menu.css';

class Menu extends React.Component {
  render() {
    console.log(this.props.shortName);

    return (
      <div className="table-wrapper">
        <h1
          className={
            this.props.shortName.length === 0 ? 'hide-title' : 'show-title'
          }
        >
          Items in Category: ({this.props.shortName})
        </h1>
        <table
          className={
            this.props.shortName.length === 0 ? 'hide-table' : 'show-table'
          }
        >
          <thead>
            <tr>
              <th className="head">Name</th>
              <th className="head">Description</th>
            </tr>
          </thead>
          <tbody>
            {this.props.menu.map((element) => (
              <tr key={element.id} className="body-container">
                <td className="name">{element.name}</td>
                <td className="description">{element.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Menu;
