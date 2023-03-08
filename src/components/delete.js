import React,{ Component,} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
class Delete extends Component
{
    state ={
        Expense:[]
    }
    componentDidMount(){
        axios.get('http://127.0.0.1:8080/getvalues')
        .then(response => {
          this.setState({ Expense: response.data });
        })
        .catch(error => {
          console.log(error);
        });
    
    }
    async remove(id)
    {
        axios.delete ('http://localhost:8080/delt' + id,
        {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
        })

            .then(response => response.json());
    }
    render()
    {
        const {Expense} = this.state;
    const rows=
    Expense.map(Expense =>
        <tr key={Expense.Product_Id}>
            <td >{Expense.Product_Id}</td>
            <td >{Expense.Product_Name}</td>
            <td >{Expense.Brand_Id}</td>
            <td >{Expense.CustId}</td>
            <td >{Expense.CustName}</td>
            <td><button  onClick={() => this.remove(Expense.Product_Id)} onChange={Expense}>Delete</button></td>
        </tr>)


    return(
        <div >
            <div className="home">
                <Link to="/"><button className='button'>Home</button></Link>
            </div>

            <div className='box'>
                <div >
                    <h3 className='head'>Data Table</h3>
                </div>

                <table>
                    <thead>
                        <tr>
                            <th >Product_Id</th>
                            <th >Product_Name</th>
                            <th >Brand_Id</th>
                            <th >CustId</th>
                            <th >CustName</th>
                        </tr>
                    </thead>
                            <tbody>
                                {rows}
                            </tbody>
                </table>   
                </div> 
        </div>
    );
}
}
export default Delete;