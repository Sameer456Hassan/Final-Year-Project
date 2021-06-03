import React, { Component } from 'react'
import Axios from 'axios';
import Sheet1 from './data';

export default class Guest extends Component{

    constructor(props){
        super(props);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangeCNIC = this.onChangeCNIC.bind(this);
        this.onChangeHost = this.onChangeHost.bind(this);
        this.onChangeMessage = this.onChangeMessage.bind(this);
        this.onChangeFrom = this.onChangeFrom.bind(this);
        this.onChangeTo = this.onChangeTo.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    
        this.state = {
            name:"",
            email:"",
            CNIC:"",
            host:"",
            message:"",
            from:"",
            to:""
        }

    }

    onChangeName(e) {
        this.setState({
            name: e.target.value
        })
    };
    onChangeEmail(e) {
        this.setState({
            email: e.target.value
        })
    };
    onChangeCNIC(e) {
        this.setState({
            CNIC: e.target.value
        })
    };
    onChangeHost(e) {
        this.setState({
            host: e.target.value
        })
    };
    onChangeMessage(e) {
        this.setState({
            message: e.target.value
        })
    };
    onChangeFrom(e) {
        this.setState({
            from: e.target.value
        })
    };
    onChangeTo(e) {
        this.setState({
            to: e.target.value
        })
    };

    

    onSubmit(e){
        e.preventDefault();
        const NAME = this.state.name;
        const EMAIL = this.state.email;
        const CNIC = this.state.CNIC;
        const HOST = this.state.host;
        const MESSAGE = this.state.message;
        const FROM = this.state.from;
        const TO = this.state.to;
        Axios.post('http://localhost:3001/api/insert',{
            NAME: NAME,
            EMAIL: EMAIL,
            CNIC: CNIC,
            HOST: HOST,
            MESSAGE: MESSAGE,
            FROM: FROM,
            TO: TO
        })
        this.setState({
            name: "",
            email:"",
            host:"",
            CNIC:"",
            message:"",
            from:"",
            to:""
        })    
        alert("Submitted Successfull")

        const iskiEmail = (person) => {
            return person.FullName === NAME 
        }
        const yhiEmailChahiye = Sheet1.find(iskiEmail).Email;
        console.log(yhiEmailChahiye);

        Axios.post('http://localhost:3001/api/insert3',{
            NAME: NAME,
            EMAIL: EMAIL,
            CNIC: CNIC,
            MESSAGE: MESSAGE,
            yhiEmailChahiye: yhiEmailChahiye
        })
    }
    
    

    render() {
        return(
            <>
            <form onSubmit={this.onSubmit} ref="form">
                <div className="boxguest">
                    <h1>Enter Your Details</h1>
                    <input placeholder="Your Name" type="text" value={this.state.name} onChange={this.onChangeName}/>
                    <input placeholder="Your Email Address" type="email" value={this.state.email} onChange={this.onChangeEmail} />
                    <input placeholder="CNIC" type="text"   value={this.state.CNIC} onChange={this.onChangeCNIC} />
                    <input placeholder="Host Name" type="text"  value={this.state.host} onChange={this.onChangeHost}/>
                    <input placeholder="Message" type="text" value={this.state.message} onChange={this.onChangeMessage} />
                    <li>Duration of stay</li>
                    <input placeholder="From" type="time" value={this.state.from} onChange={this.onChangeFrom} />
                    <input placeholder="to" type="time" value={this.state.to} onChange={this.onChangeTo} />
                    <button>Submit</button>
                </div>
            </form>
            </>
        )
    }
}

