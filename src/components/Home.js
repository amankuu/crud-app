import React, {Component} from 'react'
import Item from './Item'
import axios from 'axios'
class Home extends Component{

  constructor( props){
    super(props);

    this.state = {items:[{title:"a" , content:"b" }]}
    this.loadData = this.loadData.bind(this);
    this.loadComponent = this.loadComponent.bind(this);
    this.loadData();
  }

  loadData(){
    var self = this;
    axios.get(
      'http://localhost:2000/retrieve' ,
    ).then( response => {
      console.log(response.data )
      self.setState( {items:response.data } , () => {
        console.log( "state setted ")
      });
    }).catch( error => {
        console.log("Error is " , error);
    })
  }

  loadComponent(){
    var list = "";

    // for( var i in this.state.items ){
    //   var item = "<Item pass={" + this.state.items[i] + "} /> <br/>"
    //   list += item ;
    // }

    // here we can automaticaalyy create react components 
    var  list = this.state.items.map( (item) =>
      <Item pass={item} />
    )
    console.log("item",list);
    return(list);
  }



  render(){

    return(
      <div>
        Home Component
        {this.loadComponent()}

      </div>
    );
  }
}


export default Home;
