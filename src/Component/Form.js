import React from "react"
import {Component} from "react"

class Form extends Component{
    constructor(){
        super()
        this. state = {
            name : "  ",
            emailid : " ",
            Phone : " ",
            Address: " ",
        }
    }
    changename = (event)=>{
        this.setState({
            name: event.target.value
        })
    }

    changeemailid = (event)=>{
        this.setState({
            emailid: event.target.value
        })
    }

    changephone = (event)=>{
        this.setState({
            Phone: event.target.value
        })
    }

    changeAddress = (event)=>{
        this.setState({
            Address: event.target.value
        })
    }

    submitHandler =(event) =>{
        alert(`${this.state.name} ${this.state.emailid} ${this.state.Phone} ${this.state.Address}`)
        event.preventDefault();
    }

    render(){
        return(
            <div className="w-75 border border-2  " >
                <h1 className="mb-5"> User Contact Details Form</h1>
                <form onSubmit={this.submitHandler}>
                    <lable> Name : </lable>
                    <input className="w-75 m-2 " type="text" value={this.state.name} onChange={this.changename} ></input>
                    <br></br>
                    <lable> emailID : </lable>
                    <input className="w-75 m-2" type="text" value={this.state.emailid} onChange={this.changeemailid} ></input>
                    <br></br>

                    <lable> Phone : </lable>
                    <input className="w-75 m-2" type="number" value={this.state.Phone} onChange={this.changephone} ></input> 
                    <br></br>  

                    <lable> Address : </lable>
                    <input className="w-75 m-2" type="text-area" value={this.state.Address} onChange={this.changeAddress} ></input>  
                    <br></br>     

                    <button type="button" className="btn btn-primary">Submit</button>
                </form>
            </div>
        )
    }
};
export default Form