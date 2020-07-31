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
          alert('Data sucessfully added !! please distribute the unique exam code to concerned exam takes')
       })
    }

    render() {
        return (
            <div className='form-group center mt-5'>
                <div className='w-100'><label className='col-form-label font-weight-bolder mr-1 w-100'>Unique Exam Code
                <input className='input ml-4 w-50 ' required value={this.state.code} onChange={this.handlecode} type="text" placeholder='code'></input></label></div>
                <div className='w-100'><label className='font-weight-bolder mr-1 w-100'>Google Form Url
                <input className='input ml-5 w-50' required value={this.state.url} onChange={this.handleurl} type="text" placeholder='url'></input></label></div>
                <div className='w-100'><label className='font-weight-bolder mr-1 w-100'>Exam Time Limit
                <input className='input ml-5 w-25 ' value={this.state.time} onChange={this.handletime} type='Number' placeholder='time' ></input></label></div>
                <button className='btn btn-info mt-5' onClick={this.handlesubmit} type="submit">Submit</button>
            </div>
        )
    }
}
