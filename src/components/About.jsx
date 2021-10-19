import React from 'react';
// import prod from '../../src/assests/prod.jpg';
const About = () => {
    return (
        <div className="container mt-4">
            <div className="card dl2" >
                <img src={"https://blog.hubspot.com/hubfs/what-is-product-marketing.jpg"} className="card-img-top img1" alt="img1" />

                <div className="card-body">
                    <h5 className="card-title ">About us</h5>
                    <h6 className="card-subtitle mb-2 text-muted">Lorum</h6>
                    <p className="card-text">"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo itaque praesentium beatae quasi, iste saepe amet expedita illum. Dolor dolorum, molestias veniam saepe corporis fugiat rem consequatur in exercitationem provident.."</p>

                </div>
            </div>
            <div className="dl1">
            <h3><mark> headline or about main here </mark> </h3>
                <p><u> Lorem ipsum dolor sit amet consectetur adipisicing elit.</u> <i> Pariatur ex aliquid eius incidunt aspernatur, a cupiditate tempora odio omnis excepturi? <b> Atque,</b> iste temporibus voluptatum aspernatur incidunt quam natus molestiae quo! Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid nam earum cumque, rem at hic a dolores modi maxime, repellat dolorem repudiandae, iure voluptates ullam reprehenderit dicta sit. Ab, dolorem?...</i></p>
                <br />
                <h4> <mark> second head line here </mark></h4>
                <p><i> Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus atque, quaerat, deleniti nostrum necessitatibus corporis iusto eos magni magnam aperiam accusantium eveniet sapiente ullam officia distinctio reprehenderit? Nostrum, facilis nihil? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur veniam labore cum, quibusdam fugiat veritatis optio dignissimos corrupti tenetur consequuntur possimus odio rem impedit a est vero! Quisquam, numquam impedit.</i> <b> lorem.</b></p>
            </div>
        </div>
    )
}

export default About;
