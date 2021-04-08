import React from 'react';
import './Navbar.css';
class Navbar extends React.Component {
    render(){
        return (
            <div className="nav">
                <div className="search-container">
                    <input/>
                    <button className="search-btn">Search</button>
                </div>
            </div>
      );

    }
}

export default Navbar;
