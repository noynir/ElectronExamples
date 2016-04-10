'use strict';
const React=require('react');
const giphy =require('../modules/giphyClient');

class SearchBox extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            query:''
        };
    }
    handleKeyUp(e){

        var self=this;
        if(e.keyCode===13){
           giphy.search(e.target.value).then(function(res) {
                self.props.OnSearchResults(res.data);
               
            });
            this.setState({
                query:e.target.value
            });
        }
    }

    handleOnChange(e){

        var self=this;

         this.setState({
                query:e.target.value
            });
       
    }
    render() {
        return <div className="form-group">
                    <div className= "form-inline center-block">
                        <input value={this.state.query} onChange={this.handleOnChange.bind(this)} onKeyUp={this.handleKeyUp.bind(this)} type="text" className="form-control" />
                    </div>
                </div>
    }
}
window.SearchBox=SearchBox
