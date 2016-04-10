'use strict';


const React = require('react');
const giphy = require('./giphyImage');

class Gallery extends React.Component {

    constructor (props){
        super(props);
    }

    render(){
        let imgs=this.props.images || []; 
        let rows=imgs.map((item) => {
            return <GiphyImage key={item.id} Image={item} ></GiphyImage>
        });

        return <div> {rows} </div>
    }

}

window.Gallery=Gallery;