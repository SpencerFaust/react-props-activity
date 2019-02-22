import React, { Component } from 'react';


class Header extends Component {
  render() {
    return (
        <div>
            <header className="component" id="header">
                <h1>React Components</h1>
            </header>
            <p> Enter a number and click up or down. The total will increase or decrease by that ammount. </p>
        </div>
    );
  }
}

export default Header;