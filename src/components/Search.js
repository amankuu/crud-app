import React, {Component} from 'react'
import Item from './Item'
var axios = require('axios');

class Search extends Component{

  constructor(props){
    super(props);
    this.state = {search:"", items:[] };
    this.am = ['jammu','chandigarh','bhatinda'];
    this.a = '';
    this.handleChange = this.handleChange.bind(this);
    this.formSubmit = this.formSubmit.bind(this);
  }

  handleChange(event){
    console.log("handleChange", event['target'] , event);
    this.setState({ [event.target.name]: event['target']['value']});
    event.preventDefault(event);
  }

  formSubmit(event){
    var self = this;
    console.log("Sending search query to server");
    axios.post(
      'http://localhost:2000/search',
      {
        searchQuery : this.state.search,
      }
    ).then( response => {
      console.log( 'Response' ,  response );
      self.setState( {items:response.data } , () => {
        console.log( "state setted ")
      })
    }).catch( error => {
      console.log( 'Error Recived' , error );
    });
    event.preventDefault();
  }

  loadComponent(){

    // item variable has to be array to rum the map function
    var list = this.state.items.map( item =>
      <Item pass={item} />
    )
    return (list);
  };


  render(){
    return(
      <div>
        Search for your title's. <br/>
        <hr/>
        <form onSubmit={this.formSubmit}>
          <input type="text" placeHolder="Search String" onChange={this.handleChange} name="search" value={this.state.value} />
          <input type="submit" value="submit" name="submit"/>
        </form>
        <hr/>
        {this.loadComponent()}
        
      </div>
    );
  }
}

export default Search;
