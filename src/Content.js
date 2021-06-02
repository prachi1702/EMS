import React, { Component } from 'react';
import './Content.css';

export class Content extends Component {
    constructor(props){
        super(props);
        this.state={
            title: "Employee Data",
            employeeData : [],
            act : 0,
            index : ''
            
        }
      
    }

    handleSubmit =(e)=>{
        e.preventDefault();
        let employeeData = this.state.employeeData;
        let name=this.refs.txtName.value;
        let age=this.refs.txtAge.value;
        let email=this.refs.txtEmail.value;

        if(this.state.act === 0)
        {
            let newEmployee={
                "name" : name,
                "email" : email,
                "age" : age
            }
            employeeData.push(newEmployee);

        }
        else {
            let index =this.state.index;
            employeeData[index].name=name;
            employeeData[index].email=email;
            employeeData[index].age=age;
            
            }

        this.setState({
            employeeData : employeeData,
            act : 0
        })

        this.refs.myForm.reset();

    }

    handleEdit =(i) =>{
        let data =this.state.employeeData[i];
        this.refs.txtName.value =data.name;
        this.refs.txtEmail.value =data.email;
        this.refs.txtAge.value =data.age;

        this.setState ({
           
            act : 1,
            index : i
        })

    }

    handleDelete =(i)=>{
        let employeeData =this.state.employeeData;
        employeeData.splice(i,1);
        this.setState({
            employeeData : employeeData
        })

    }
    render() {
        let employeeData=this.state.employeeData;
        return (
            <div className="content">
            
            <form ref="myForm" className="myForm">
                <h1>{this.state.title}</h1>
                <label>Name</label>
                <input type="text" ref="txtName" placeholder="Enter Name" className="formField"/>
                <label>Email</label>
                <input type="text" ref="txtEmail" placeholder="Enter email" className="formField" />
                <label>Age</label>
                <input type="text" ref="txtAge" placeholder="Enter age" className="formField"/>
                <button onClick={e => this.handleSubmit(e)} className="myButton">Save</button>
            </form>
            <table className="table">
              <tbody> 
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Age</th>
                    <th>Edit</th>
                    <th>Delete</th>
                
                </tr>
                 {
                    employeeData.map((data, i)=>
                     <tr key ={i}> 
                        <td>{data.name}</td>
                        <td>{data.email}</td>
                        <td>{data.age}</td>
                        <td>
                          <button onClick = {() =>this.handleEdit(i)} className="myButton">Edit</button>
                        </td> 
                        <td>
                            <button onClick = {() =>this.handleDelete(i)} className="myButton">Delete</button>
                        </td>
                    </tr>   )
                
                 }
                 </tbody> 
            </table>
           </div>
        )
    }
}

export default Content


