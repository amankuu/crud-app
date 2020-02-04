import React, {Component} from 'react'


class Item extends Component{

  constructor( props ){
    super(props);
    console.log( "constructor")

    
  }


  render(){
    console.log("Instance")
    return(
      <div>
        <ul>
          <li> {this.props.pass.title} </li>
          <li> {this.props.pass.content} </li>
        </ul>
      </div>
    );
  }
}


export default Item;
