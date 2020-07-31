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
    }
    componentDidMount(){
        
    }
    geturl = async () => {
        const code = {
            code: this.state.code
        }
        const res = await axios.post('/CreateForm/exam', code);
        this.setState({
            url: res.data.url,
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
            window.location.reload()
        }, time)
    }


    

    starttimer = () => {
        
        
            this.setTime(this.state.time*60000)
            this.setCountDown()
        document.querySelector('#start').hidden=true
        document.querySelector('#form').hidden=false

    }

    // myVar = setInterval(myTimer, 1000);
    // myTimer() {
    //     var d = new Date();
    //     document.getElementById("demo").innerHTML = d.toLocaleTimeString();
    // }

    setCountDown = async () => {
        let min = this.state.time;
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
            if (min === 0) {
                clearInterval(clear)
            }
        }, 1000)
    }

    render() {
        return (
            <div>
                <input value={this.state.code} onChange={this.handlecode}></input>
                <button onClick={this.geturl} >Enter code</button>

                <div  id="exam">
                    <h1>This is first google embed</h1>
                    <div><button onClick={this.starttimer} id='start'>Start</button></div>
                    <div color='red'>once you click start the timer will star. do not refresh . Do click the submit button before time end</div>
                    <div id='demo'></div>
                    <div><span id='min'></span> : <span id='sec'></span></div>
                    <iframe hidden='true' id='form' title='googleform' src={this.state.url}
                        width="640" height="1517" frameBorder="0" marginHeight="0" marginWidth="0">Loading…</iframe>
                </div>
                
            </div>


        )
    }
}

