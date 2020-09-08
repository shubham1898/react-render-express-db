import React, { Component } from 'react'
import axios from 'axios'


export default class Exam extends Component {
    constructor() {
        super();
        this.state = {
            url: '',
            time: 0,
            code: '',
            month: null,
            day: null,
            hour: null,
            year: null,
            min: null,
            endmonth: null,
            endday: null,
            endyear: null,
            endhour: null,
            endmin: null,
            isbytimer:true,
            startDate:new Date(),
            endDate:new Date()
        }
         this.exam_over=<div></div>
         this.form_dis=false
         this.btn_dis=false
         this.url1=''
         this.exam_hid=true
         this.clock_hid=true
         this.form_hid=true
         this.start_hid=false
         this.timer=true
         this.myVar={}
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
        if(res.data.isbytimer)
        {
            document.getElementById("min").innerHTML = res.data.time-1
            document.getElementById("sec").innerHTML = 60
            this.exam_hid=false
            this.timer=false
            this.setState({
                time: res.data.time,
                isbytimer:res.data.isbytimer
            })
        }else {
            this.exam_hid=false
            this.clock_hid=false
            this.myVar = setInterval(function(){
               var d = new Date();
            document.getElementById("currentclock").innerHTML = d.toLocaleTimeString();
             }, 1000);
            this.setState({
                month: res.data.month,
                day: res.data.day,
                hour: res.data.hour,
                year: res.data.year,
                min: res.data.min,
                endmonth: res.data.endmonth,
                endday: res.data.endday,
                endyear: res.data.endyear,
                endhour: res.data.endhour,
                endmin: res.data.endmin,
                isbytimer:false
            })
            this.setState({
                startDate:new Date(this.state.year,this.state.month-1,this.state.day,this.state.hour,this.state.min),
                endDate:new Date(this.state.endyear,this.state.endmonth-1,this.state.endday,this.state.endhour,this.state.endmin)
            })

        }
    }

    handlecode = (event) => {
        this.setState({
            'code': event.target.value
        })
    }

    
    
    //clock.js
    checkclock=async ()=>{
         let current=new Date();
         alert('method executed')
         if(current>this.state.startDate&&current<this.state.endDate){
             alert('yes checked')
            document.getElementById("form").hidden=false

            this.setTime(this.state.endDate-current);
         } else if(current<this.state.startDate){ alert(`Please Wait ,Exam starts at ${this.state.startDate}  ,Time left to begin : ${(this.state.startDate-current)/60000} Minutes`)}
         else if(current>this.state.endDate){ alert(`Sorry you missed the exam ,Exam over at ${this.state.endDate}`)}
    }

    //timer.js
       setTime = async (time) => {
           console.log('times executed')
        setTimeout(() => {
            // window.location.reload()
            this.form_hid=true;
            document.getElementById("form").hidden=true

            this.exam_over=<h3 className='text-success text-center'>Exam Over</h3>

            if ( window.history.replaceState ) {
                window.history.replaceState( null, null, window.location.href );
              }
               this.url1='';
              this.setState({
                  code:'',
                  url:'',
                  time:0
              })
        }, time)
    }  

    starttimer = () => {
         //timechecker
            // this.start_hid=true
            this.setTime(this.state.time*60000);
            this.setCountDown();
            document.getElementById("start_des").hidden=true
            document.getElementById("start").hidden=true
            document.getElementById("form").hidden=false
    }
    
    setCountDown = async () => {
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

                <div className='mt-lg-3' hidden={this.exam_hid} id="exam">
                    <div hidden={this.timer} id="timer">
                    <h3 id='start_des' className='text-dark '>Click start to begin the exam</h3>
                    <div ><button  className='btn btn-primary border-danger' hidden={this.start_hid}  onClick={this.starttimer} id='start'>Start</button></div>
                    <div className='text-danger red'>Once you click start, the timer will start. Do not refresh . Do click the submit button before time end</div>
                    <div className='font-weight-bolder'><span className='font-weight-bolder text-success' id='min'></span> min : <span className='font-weight-bolder text-sucess' id='sec'></span> sec</div>
                    </div>

                    <div hidden={this.clock_hid} id="clock">
                    <div className='text-danger red'>Once you click start, Do not refresh . Do click the submit button before time end</div>
                    <div>current time : <span id='currentclock'></span> <div className="d-flex flex-fill"><span className="text-success mr-5">Exam starts at : {this.state.day}/{this.state.month}/{this.state.year} - {this.state.hour} : {this.state.min}</span>   <span className="text-warning flex-end">Exam End at : {this.state.endday}/{this.state.endmonth}/{this.state.endyear} - {this.state.endhour} : {this.state.endmin} </span></div></div>
                    <div><button className='btn btn-primary border-danger' disabled={this.btn_dis} onClick={this.checkclock} id='startclock'>Start</button></div>

                    </div>

                    <iframe className='w-100' hidden={this.form_hid} id='form' title='googleform' src={this.url1}
                        width="640" height="1517" frameBorder="0" marginHeight="0" marginWidth="0">Loading…</iframe>

                        {this.exam_over}
                </div>
                
            </div>


        )
    }
}



    // myVar = setInterval(myTimer, 1000);
    // myTimer() {
    //     var d = new Date();
    //     document.getElementById("demo").innerHTML = d.toLocaleTimeString();
    // }