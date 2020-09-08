import React, { Component } from 'react'
import axios from 'axios'


export default class Questionsetup extends Component {
    constructor() {
        super()
        this.state = {
            'code': '',
            'url': '',
            'time': 0,
            'month': null,
            'day': null,
            'hour': null,
            'year': null,
            'min': null,
            'endmonth': null,
            'endday': null,
            'endyear': null,
            'endhour': null,
            'endmin': null,
            'isbytimer':true
        }
    }

    handlecode = (event) => {
        this.setState({
            'code': event.target.value
        })
    }
    handleurl = (event) => {
        this.setState({
            'url': event.target.value
        })
    }
    handletime = (event) => {
        this.setState({
            'time': Number(event.target.value),
            'isbytimer':true
        })
    }

    //////////////*************************************///////////////////// */
    handleday = (event) => {
        this.setState({
            'isbytimer':false,
            'day': Number(event.target.value)
        })
    }
    handlemon = (event) => {
        this.setState({
            'isbytimer':false,
            'month': Number(event.target.value)
        })
    }

    handleyear = (event) => {
        this.setState({
            'isbytimer':false,
            'year': Number(event.target.value)
        })
    }
    handleendday = (event) => {
        this.setState({
            'isbytimer':false,
            'endday': Number(event.target.value)
        })
    }
    handledendmonth = (event) => {
        this.setState({
            'isbytimer':false,
            'endmonth': Number(event.target.value)
        })
    }
        handleendyear = (event) => {
            this.setState({
                'isbytimer':false,
                'endyear': Number(event.target.value)
            })
        }
        handlehour = (event) => {
            this.setState({
                'isbytimer':false,
                'hour': Number(event.target.value)
            })
        }

        handlemin = (event) => {
            this.setState({
                'isbytimer':false,
                'min': Number(event.target.value)
            })
        }
        handlendhour = (event) => {
            this.setState({
                'isbytimer':false,
                'endhour': Number(event.target.value)
            })
        }
            handleendmin = (event) => {
                this.setState({
                    'isbytimer':false,
                    'endmin': Number(event.target.value)
                })

            }

            /////////////////////////////////////////////////////////////////

            handlesubmit = (event) => {
                event.preventDefault();

                const user =
                {
                    code: this.state.code,
                    url: this.state.url,
                    time: this.state.time,
                    month: this.state.month,
                    day: this.state.day,
                    hour: this.state.hour ,
                    year: this.state.year ,
                    min: this.state.min ,
                    endmonth: this.state.endmonth ,
                    endday: this.state.endday,
                    endyear: this.state.endyear ,
                    endhour: this.state.endhour ,
                    endmin: this.state.endmin,
                    isbytimer:this.state.isbytimer
                }
                axios.post('/CreateForm/add', user).then(res => {
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
                        <div className='w-100'><label className='font-weight-bolder mr-1 w-100'>Time Limit By date and time
                             <input className='input ml-1 w-2 ' value={this.state.day} onChange={this.handleday} type='Number' placeholder='day' ></input> /
                            <input className='input ml-1 w-2 ' value={this.state.month} onChange={this.handlemon} type='Number' placeholder='month' ></input> /
                            <input className='input ml-1 w-3 ' value={this.state.year} onChange={this.handleyear} type='Number' placeholder='year' ></input> --
                            <input className='input ml-1 w-1 ' value={this.state.hour} onChange={this.handlehour} type='Number' placeholder='hour' ></input> :
                            <input className='input ml-1 w-1 ' value={this.state.min} onChange={this.handlemin} type='Number' placeholder='minute' ></input></label></div>
                        <div className='w-100'><label className='font-weight-bolder mr-1 w-100'>end date and time
                             <input className='input ml-1 w-2 ' value={this.state.endday} onChange={this.handleendday} type='Number' itemID='endday' placeholder='day' ></input> /
                            <input className='input ml-1 w-2 ' value={this.state.endmonth} onChange={this.handledendmonth} type='Number' itemID='endmonth' placeholder='month' ></input> /
                            <input className='input ml-1 w-3 ' value={this.state.endyear} onChange={this.handleendyear} type='Number' itemID='endyear' placeholder='year' ></input> --
                            <input className='input ml-1 w-1 ' value={this.state.endhour} onChange={this.handlendhour} type='Number' itemID='endhour' placeholder='hour' ></input> :
                            <input className='input ml-1 w-1 ' value={this.state.endmin} onChange={this.handleendmin} type='Number' itemID='endmin' placeholder='minute' ></input></label></div>

                        <button className='btn btn-info mt-5' onClick={this.handlesubmit} type="submit">Submit</button>
                    </div>
                )
            }
        }
