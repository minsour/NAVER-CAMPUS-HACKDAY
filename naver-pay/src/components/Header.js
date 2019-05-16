import React from 'react';
import './Header.scss';

const langInfo = {
  'ko': '한국어',
  'en': 'English'
};

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showLangDropdown: false,
      selectedLang: ''
    };
  }
  componentDidMount() {
    this.setState({selectedLang: localStorage.getItem('langKey')});
  }
  setLang = (langKey) => {
    this.setState({selectedLang: langKey});
    this.setState({showLangDropdown: false});
    localStorage.setItem('langKey', langKey);
    location.reload();
  }
  render() {
    return (
      <div className="Header">
        <div className="Header-Left">
          NAVER PAY - HEADER
        </div>
        <div className="Header-Right">
          <span onClick={()=> {this.setState({showLangDropdown: !this.state.showLangDropdown})}}>
            {langInfo[this.state.selectedLang]}
          </span>
          <div className={`dropdown-menu ${this.state.showLangDropdown ? 'Header-showLangDropdown' : ''}`}>
            {Object.keys(langInfo).map(langKey => (
              <span className="dropdown-item" key={langKey} onClick={()=>this.setLang(langKey)}>
                {langInfo[langKey]}
              </span>
            ))}
          </div>
        </div>
      </div>
    );
  }
}


export default Header;