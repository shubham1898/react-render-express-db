import React, { Component } from 'react'
import axios from 'axios'

export default class Questionsetup extends Component {
    constructor(){
        super()
        this.state={
            'code':'',
            'url':'',
            'time':0
        }
    }

    handlecode=(event)=>{
        this.setState({
            'code':event.target.value
        })
    }
    handleurl=(event)=>{
        this.setState({
            'url':event.target.value
        })
    }
    handletime=(event)=>{
        this.setState({
            'time':Number(event.target.value)
        })
    }

    handlesubmit=(event)=>{
        event.preventDefault();

       const user = {
      code: this.state.code,
      url:this.state.url,
      time:this.state.time
    }
       axios.post('/CreateForm/add',user).then(res=>{
           console.log(res.data)
       })
    }

    render() {
        return (
            <div>
                <input required value={this.state.code} onChange={this.handlecode} type="text" placeholder='code'></input>
                <input required value={this.state.url} onChange={this.handleurl} type="text" placeholder='url'></input>
                <input value={this.state.time} onChange={this.handletime} type='Number' placeholder='time' ></input>
                <button onClick={this.handlesubmit} type="submit">Submit</button>
            </div>
        )
    }
}
