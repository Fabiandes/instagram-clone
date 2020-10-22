import React from 'react';

import searchIcon from './searchSolid.svg';
import './search-bar.css';

export default class SearchBar extends React.Component{
    constructor(){
        super()
        this.state = {
            query: ''
        }
    }
    //TODO: Make search bare actually work

    render(){
        return(
                <form className="search-bar">
                    <img className="search-bar-icon" src={searchIcon}></img>
                    <input className="search-bar-text search-input" placeholder={this.query ? this.query : "Search"} />
                </form>
        );
    }
}