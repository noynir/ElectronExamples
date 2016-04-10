'use strict'

const React = require('react');
const search=require('./searchBox');
const gallery=require('./gallery');

class App extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'Hello Electron React';

        this.state={
            searchResults:[],
        }
      
    }

    handleSearchResults (data){
        console.log(data);
        let images=data.map((item) => {
            return {
                display_url:item.images.fixed_width.url,
                url:item.bitly_gif_url,
                download_url:item.images.original.url,
                id:item.id
            }
        });
        console.log(images);
        this.setState({
            searchResults:images
        })
    }

    render() {
        return (<div className="container-fluid">
                    Search Gifs:
                    <SearchBox OnSearchResults={this.handleSearchResults.bind(this)} ></SearchBox>
                    <Gallery images={this.state.searchResults} ></Gallery>
                </div>);
    }
}

window.App=App;
