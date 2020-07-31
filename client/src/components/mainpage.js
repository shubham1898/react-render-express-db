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
    axios.get('/CreateForm').then(response=>{
        this.setState({
       data:response.data
        });
        console.log('executed too much')
    }).catch(e=>{
        console.log(e)
    })
}

getdata=()=>{
    axios('/CreateForm').then(response=>{
    this.setState({
    data:response.data
    });
    console.log('executing ttoo much')
    
}).catch(e=>{console.log(e)})}


    render() {
        return (
         <div>   
              {/* {this.getdata} */}
        {this.state.data.map(val=>(
            <div key={val._id}>{val.code}</div>
        ))}
           
       
        </div>
    )}
}


