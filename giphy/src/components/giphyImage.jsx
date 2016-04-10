'use strict';

const React = require('react');
var contextMenu=require('../Modules/gifContextMenu');


class GiphyImage extends React.Component{

    constructor(props){
        super(props); 

    }
    
    handleContextMenu(e){
       console.log('right click'+ this.props.Image.url);
       contextMenu.show(this.props.Image);
    }

    render(){
        return <img src={this.props.Image.display_url} onContextMenu={this.handleContextMenu.bind(this)} />
        
    }
}

window.GiphyImage=GiphyImage;