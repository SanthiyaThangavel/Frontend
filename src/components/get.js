import axios from "axios";
import React,{Component} from "react";
import { Link } from "react-router-dom";
class Get extends Component{
    state={
        data:[]
    }
    componentDidMount()
    {
        axios.get('http://127.0.0.1:8080/getvalues').then(response=>{
            this.setState({data:response.data});
        })
        .catch(error=>{
            console.log(error);
        });
    }
    render()
      {
        return(
            <div>
                <div className="home">
                    <Link to="/"><button className='button'>Home</button></Link>
                </div>
            <div className="box">

                <h1>Customer Details</h1>
                

            <table border={1}>
                <thead>
                    <tr>
                        <th>Product_Id</th>
                        <th>Product_Name</th>
                        <th>Brand_Id</th>
                        <th>CustName</th>
                        <th>CustId</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.data.map(user =>
                    (
                        <tr>
                            <td>{user.Product_Id}</td>
                            <td>{user.Product_Name}</td>
                            <td>{user.Brand_Id}</td>
                            <td>{user.CustName}</td>
                            <td>{user.CustId}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            </div>
            </div>
        )
      }
}
export default Get;