import React, { Component } from 'react'
import axios from 'axios'

export default class mainpage extends Component {
constructor(){
    super()
    this.state={
        code:'',
        url:'',
        time:0,
        data:[]
    }
    this.getdata=this.getdata.bind(this)
}
componentDidMount(){
    axios.get('http://localhost:5000/CreateForm/').then(response=>{
        this.setState({
       data:response.data
        })
    }).catch(e=>{
        console.log(e)
    })
}

getdata(){
    axios('http://localhost:5000/CreateForm/').then(response=>{
    this.setState({
    data:response.data
    });
    
}).catch(e=>{console.log(e)})}


    render() {
        return (
         <div>   
             
             {this.getdata()}
        {this.state.data.map(val=>(
            <div>{val._id}</div>
        ))}
           
       
        </div>
    )}
}


