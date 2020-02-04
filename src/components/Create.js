import React, {Component} from 'react'
var axios = require('axios');

class Create extends Component{
  constructor(props){
    super(props);

    this.state = {
      title : "",
      content:""
    }
    this.handleChange = this.handleChange.bind(this);
    this.formSubmit = this.formSubmit.bind(this);
  }

  handleChange(event){
    console.log("handleChange", event['target'] , event);
    this.setState({ [event.target.name]: event['target']['value']});
    event.preventDefault(event);
  }

  formSubmit(event){
    console.log("Sending data to server");
    axios.post(
      'http://localhost:2000/store',
      {
        title : this.state.title,
        content : this.state.content
      }
    ).then( response => {
      console.log( 'Response' ,  response );
    }).catch( error => {
      console.log( 'Error Recived' , error );
    });
    event.preventDefault();
  }
  
  render(){
    return(
      <div>
        <div>
          <form onSubmit={this.formSubmit}>
            <input type='text' name="title" placeholder="Title" value={this.state.title} onChange={this.handleChange}/>
            <br/>
            <input type='text' name="content" placeholder="Content" value={this.state.content} onChange={this.handleChange}/>
            <br/>
            <input type="submit" value="submit"></input>
          </form>

        </div>


      </div>
    );
  }
}

export default Create;
