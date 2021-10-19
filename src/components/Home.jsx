import React, { useState, useEffect } from 'react';
import Cardd from './Cardd';
import axios from 'axios';

const Home = () => {
    var [data, updta] = useState([]);
    useEffect(
        () => {
            async function show() {
                var d = await axios.get('https://restapittt.herokuapp.com/products/');
                updta(d.data);
            }
            show();
        }
    )
    return (
        <>
            <div className="container">
                <div className="row">
                    {data.map((val) => {
                        return <Cardd name={val.name} price={val.price} cat={val.cat} cmp={val.cmp} />
                            
                    })}
                </div>
            </div>
        </>
    )
}

export default Home;
