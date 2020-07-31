import React, { Component } from 'react'
import axios from 'axios'


export default class Exam extends Component {
    constructor() {
        super();
        this.state = {
            url: '',
            time: 0,
            code: ''
        }
         this.exam_over=<div></div>
         this.form_dis=true
         this.btn_dis=true
         this.url1=''
    }
    componentDidMount(){
        
    }
    geturl = async () => {
        const code = {
            code: this.state.code
        }
        // document.querySelector('#start').disabled=false
        this.btn_dis=false
        const res = await axios.post('/CreateForm/exam', code);
        this.url1=res.data.url
        this.setState({
            time: res.data.time
        })
    }
    handlecode = (event) => {
        this.setState({
            'code': event.target.value
        })
    }

    //timer.js
       setTime = async (time) => {
           console.log('times executed')
        setTimeout(() => {
            // window.location.reload()
            document.querySelector('#form').hidden=true
            this.form_dis=true
            this.exam_over=<h3 className='text-success text-center'>Exam Over</h3>

            if ( window.history.replaceState ) {
                window.history.replaceState( null, null, window.location.href );
              }
              this.setState({
                  code:'',
                  url:'',
                  time:0
              })

        }, time)
    }


    

    starttimer = () => {
         
            this.setTime(this.state.time*60000);
            this.setCountDown();
            document.querySelector('#form').hidden=false;
            document.querySelector('#start').hidden=true;
        
       

    }

    // myVar = setInterval(myTimer, 1000);
    // myTimer() {
    //     var d = new Date();
    //     document.getElementById("demo").innerHTML = d.toLocaleTimeString();
    // }

    setCountDown = async () => {
        this.form_dis=false
        this.btn_dis=true
        let min = this.state.time-1;
        let sec = 60;
        console.log('cont down executed')
        var clear = setInterval(function () {
            document.getElementById("min").innerHTML = min
            document.getElementById("sec").innerHTML = sec
            if (sec === 0) {
                sec = 60;
                min--;
            }
            sec--;
            if (min === -1) {
                clearInterval(clear)
            }
        }, 1000)
    }

    render() {
        return (
            <div className='center mt-md-5'>
                <input placeholder='exam code' className='w-75' value={this.state.code} onChange={this.handlecode}></input>
                <button className='btn btn-dark btn-outline-info btn-sm ml-2' onClick={this.geturl} >Submit code</button>

                <div className='mt-lg-3'  id="exam">
                    <h3 className='text-dark'>Click start to start the exam</h3>
                    <div><button className='btn btn-primary border-danger' disabled={this.btn_dis} onClick={this.starttimer} id='start'>Start</button></div>
                    <div className='text-danger red'>once you click start, the timer will start. Do not refresh . Do click the submit button before time end</div>
                    <div id='demo'></div>
                    <div className='font-weight-bolder'><span className='font-weight-bolder text-success' id='min'></span> min : <span className='font-weight-bolder text-sucess' id='sec'></span> sec</div>
                    <iframe className='w-100' hidden='true' id='form' title='googleform' src={this.url1}
                        width="640" height="1517" frameBorder="0" marginHeight="0" marginWidth="0">Loading…</iframe>

                        {this.exam_over}
                </div>
                
            </div>


        )
    }
}

