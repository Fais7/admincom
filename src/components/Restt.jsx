import React, { useEffect, useState } from "react";
import axios from 'axios';
const Restt = () => {
    var [data, updta] = useState([]);
    var [fdata, fcn] = useState({ name: "", price: "", cat: "", cmp: "" });
    var [udata, ucn] = useState({ id: "", name: "", price: 0, cat: "", cmp: "" });
    useEffect(
        () => {
            async function show() {
                var d = await axios.get('https://restapittt.herokuapp.com/products/');
                updta(d.data);
            }
            show();
        }
    )
    const getdata = (event) => {
        fcn({ ...fdata, [event.target.name]: event.target.value });
    }
    async function submit(event) {
        event.preventDefault();
        var d = await axios.post('https://restapittt.herokuapp.com/products/', fdata);
        fcn({ name: "", price: "", cat: "", cmp: "" })
        if (d.status === 201) {
            alert("product added successfully");
        }
    }
    const getuData = (event) => {
        ucn({ ...udata, [event.target.name]: event.target.value });
    }
    async function submits(event) {
        event.preventDefault();
        var d = await axios.put(`https://restapittt.herokuapp.com/products/${udata.id}/`, udata);
        if (d.status === 200) {
            alert("updated");
        }
    }

    return (
        <>
            <div className='container'>
                <marquee behavior="scroll" direction="left"><h1>wecome admin !!!  **welcome to admin portal** </h1></marquee>
                <table className="table table-success table-striped table-hover text-center table-bordered border-dark">
                    {<thead>
                        <tr>
                            <th>Product id</th>
                            <th>Product Name</th>
                            <th>Product Price</th>
                            <th>Product Category</th>
                            <th>Product Company</th>
                            <th>Delete Product</th>
                            <th>Update Product</th>
                        </tr>
                    </thead>}
                    {data.map((val) => {
                        return (
                            <><tbody>
                                <tr>
                                    <td>{val.id}</td>
                                    <td>{val.name}</td>
                                    <td>{val.price}</td>
                                    <td>{val.cat}</td>
                                    <td>{val.cmp}</td>
                                    <td><button className="btn btn-danger" onClick={() => {
                                        async function del() {
                                            var d = await axios.delete(`https://restapittt.herokuapp.com/products/${val.id}`);
                                            if (d.status === 204) {
                                                alert("deleted successfully!!")
                                            }
                                        }
                                        del();
                                    }}>Delete</button></td>
                                    <td>
                                        <button type="button" class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => {
                                            ucn(val);
                                        }}>
                                            update
                                        </button>


                                        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                            <div class="modal-dialog">
                                                <div class="modal-content">
                                                    <div class="modal-header">
                                                        <h4>Update Details</h4>
                                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                    </div>
                                                    <div class="modal-body">
                                                        <form action="" onSubmit={submits}>
                                                            <input type="hidden" name="id" value={udata.id} onChange={getuData} />
                                                            <div className="form-group">
                                                                <label>Product Name</label>
                                                                <input type="text" name="name" value={udata.name} onChange={getuData} placeholder="please enter product name" class="form-control" />
                                                            </div>
                                                            <div className="form-group">
                                                                <label>Product Price</label>
                                                                <input type="number" name="price" value={udata.price} onChange={getuData} placeholder="please enter product price" class="form-control" />
                                                            </div>
                                                            <div className="form-group">
                                                                <label>Product Category</label>
                                                                <input type="text" name="cat" value={udata.cat} onChange={getuData} placeholder="please enter product category" class="form-control" />
                                                            </div>
                                                            <div className="form-group">
                                                                <label>Product Company</label>
                                                                <input type="text" name="cmp" value={udata.cmp} onChange={getuData} placeholder="please enter product Company" class="form-control" />
                                                            </div><br />
                                                            <center><button className="btn btn-dark" data-bs-dismiss="modal">Update Product</button></center>
                                                        </form>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            </tbody></>
                        )
                    })}
                </table>
                <h3 align="center" className="bg-warning">Add product details </h3>
                <form onSubmit={submit}>
                    <div className="">
                        <lable for="productname">Product name</lable>
                        <input className="form-control" type="text" name="name" id="productname" value={fdata.name} onChange={getdata} />
                    </div>
                    <div className="">
                        <lable for="productprice">Product price</lable>
                        <input className="form-control" type="number" name="price" id="productprice" value={fdata.price} onChange={getdata} />
                    </div>
                    <div className="">
                        <lable for="productcategory">Product category</lable>
                        <input className="form-control" type="text" name="cat" id="productcategory" value={fdata.cat} onChange={getdata} />
                    </div>
                    <div className="">
                        <label for="productcompany">Product company</label>
                        <input className="form-control" type="text" name="cmp" id="productcompany" value={fdata.cmp} onChange={getdata} />
                    </div><br />
                    <div className="d-grid">
                        <button type="submit" className="btn btn-outline-warning">Add product</button>
                    </div>
                </form>

            </div>
        </>
    )

}
export default Restt;