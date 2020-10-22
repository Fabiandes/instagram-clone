import React from 'react'
import ReactDOM from 'react-dom';

import './navbar.css';
import homeIcon from './homeIcon.svg'

import SearchBar from '../search-bar/search-bar';

const Pages = require('./pages');

export default class Navbar extends React.Component{
    constructor(){
        super();
        this.state = {
            currentPage: Pages.HOME
        }
    }

    //TODO: Make styling more responsive on larger screens

    render(){
        return(
            <div className="navbar">
                <h1>Instagram</h1>
                <SearchBar />
                <div className="nav-menu">
                    <img className={this.state.currentPage == Pages.HOME ? "nav-item nav-item-selected" : "nav-item"} src={homeIcon}/>
                    <img className={this.state.currentPage == Pages.MESSAGES ? "nav-item nav-item-selected" : "nav-item"} src={homeIcon}/>
                    <img className={this.state.currentPage == Pages.DISCOVER ? "nav-item nav-item-selected" : "nav-item"} src={homeIcon}/>
                    <img className={this.state.currentPage == Pages.ACTIVITY ? "nav-item nav-item-selected" : "nav-item"} src={homeIcon}/>
                </div>
            </div>
        )
    }
}