import React from 'react';

import './home-page.css';

export default class HomePage extends React.Component{
    constructor(){
        super();

        this.state = {

        }
    }

    render(){
        return(
            <div>
                {this.state.posts.forEach(post => {
                    return(<div></div>)
                })}
            </div>
        )
    }
}