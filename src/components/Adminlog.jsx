import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Restt from './Restt'
import { BrowserRouter as Router } from 'react-router-dom'

const Adminlog = () => {
    let [data, cng] = useState({ user: "", pwd: "" });
    const getdata = (event) => {
        cng({ ...data, [event.target.name]: event.target.value });
    }
    const submits = (event) => {
        event.preventDefault();
        if (data.user === "admin" && data.pwd === "12345") {
            ReactDOM.render(
                <React.StrictMode>
                    <Router>
                        <Restt />
                    </Router>
                </React.StrictMode>,
                document.getElementById('root')
            );
        } else {
            alert("invalid user!!! please enter valid user or password");
        }
    }
    return (
        <div className="container mt-2">
            <h2 className="text-white-50 bg-warning">Admin Login</h2>
            <form action="" onSubmit={submits}>
                <div className="form-group mt-1">
                    <lable for="User">User name</lable>
                    <input className="form-control" type="text" name="user" value={data.user} onChange={getdata} placeholder="User admin is admin" />
                </div>
                <div className="form-group mt-2">
                    <lable for="pwd">Product price</lable>
                    <input className="form-control" type="password" name="pwd" value={data.pwd} onChange={getdata} placeholder="User password is 12345" />
                </div><br />
                <div className="d-grid">
                    <button className="btn btn-outline-warning ">login</button>
                </div>
            </form>
        </div>
    )
}

export default Adminlog
