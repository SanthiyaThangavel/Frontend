import axios from "axios";
import { Link } from "react-router-dom";
import React, { Component } from "react";
class Put extends Component {
    constructor(props){
        super(props);
        this.state={
            Product_Id:" ",
            Product_Name:" ",
            Brand_Id:" ",
            CustName:" ",
            CustId:" ",
        }
    }
handleIdChange = (event) => {
    this.setState({Product_Id :event.target.value});
}

handleNameChange = (event) => {
    this.setState({ Product_Name:event.target.value});
}
handleDobChange = (event) => {
    this.setState({ Brand_Id:event.target.value});
}
handleContactChange = (event) => {
    this.setState({ CustName:event.target.value});
}
handleSportChange = (event) => {
    this.setState({ CustId:event.target.value});
}

handleSubmit = (event) =>{
    event.preventDefault();
    const data = {
        Product_Id: this.state.Product_Id,
        Product_Name : this.state.Product_Name,
        Brand_Id : this.state.Brand_Id,
        CustName : this.state.CustName,
        CustId : this.state.CustId        
    }
    axios.post('http://127.0.0.1:8080/posts',data)
    this.setState ({
        Product_Id: "",
        Product_Name: "", 
        Brand_Id : "",
        CustName : "",
        CustId : ""        
    })
};
render(){
    return ( 
        <div>

        <div className="home">
            <Link to="/"><button className='button'>Home</button></Link>
        </div>

            <h1 className="head">New Member details</h1>
        <form onSubmit={this.handleSubmit} className="form">
            <label className="label">Product_Id : </label>
            <input
                className="inp" 
                type="text" 
                value={this.state.Product_Id}
                onChange ={this.handleIdChange}
            />
            <br/>
            <br/>

            <label className="label">Product_Name :  </label>
            <input
                className="inp" 
                type="text" 
                value={this.state.Product_Name}
                onChange ={this.handleNameChange}
            />
             <br/>
             <br/>

            <label className="label">Brand_Id :  </label>
            <input
                className="inp" 
                type="text" 
                value={this.state.Brand_Id}
                onChange ={this.handleDobChange}
            />
             <br/>
             <br/>

            <label className="label">CustName : </label>
            <input
                className="inp" 
                type="text" 
                value={this.state.CustName}
                onChange ={this.handleContactChange}
            />
             <br/>
             <br/>

            <label className="label">CustId : </label>
            <input
                className="inp" 
                type="text" 
                value={this.state.CustId}
                onChange ={this.handleSportChange}
            />
             <br/>
             <br/>

            <button className="sub" type="submit"> Submit </button>
        </form>
        </div>
    );
  }
}
export default Put;