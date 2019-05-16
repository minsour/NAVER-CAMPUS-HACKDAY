import React from 'react';
import styles from './Header.css';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return (
      <div className="Header">
        <div className="Header-Inner">
          NAVER PAY - HEADER
        </div>
      </div>
    );
  }
}


export default Header;