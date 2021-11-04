import React from 'react';

const Cardd = (props) => {

    const { name, cat, price, cmp } = props;
    return (
        <div className="col-md-3">
            <div class="card mt-2" style={{ width: '16rem', height: '25rem' }}>
                <img src="https://th.bing.com/th/id/R.3dcb2afbcc73576fff118d2da1d9838f?rik=ITZRKz9y7BbDJg&riu=http%3a%2f%2fwww.icone-png.com%2fpng%2f39%2f39302.png&ehk=RrLgE5Ovro4w42nYq1ohFJIyeRxhsASvI%2fb53Y0DEi8%3d&risl=&pid=ImgRaw&r=0" class="card-img-top" alt="agm" style={{ height: '200px', width: '200px' }} />
                <div class="card-body">
                    <h5 class="card-title"><mark>{name}</mark></h5>
                    <p class="card-text">
                        <h6>Price : {price}</h6>
                        <h6>Cat : {cat}</h6>
                        <h6>Company : {cmp}</h6>
                    </p>
                    <a href="/#" class="btn btn-success text-white-50">Add to cart</a>
                </div>
            </div>
        </div>
    )
}

export default Cardd;
