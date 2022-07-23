import React, { useState, useEffect } from 'react';

function CustomerSupport() {
    // const [ customerSupport, setCustomerSupport] = useState({}); 

    const [ inputs, setInputs ] = useState({
        first_name:"",
        last_name: "",
        email: "",
        message: ""
    });

    const handleSubmit = (event) => {
        event.preventDefault();

        fetch('http://localhost:3021/api/customer_support/create', {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(inputs),
        })
        .then(response => response.json())
        .then(data => {
            alert("Message submitted successfully")       
            setInputs({ 
                first_name:"",
                last_name: "",
                email: "",
                message: ""
            })
        })
        .catch((err) => {
            alert("Unable to send message")
            console.log(err)
        })
    }

    const handleChange = (event) => {
        const {name, value} = event.target;
        setInputs(prevState => {
            return {...prevState, [name]: value};
        });
    }


    return (
        <section className="customer container">
            <div className="row">
                {/* <div className="col">
                    <h2>{customerSupport.title}</h2>
                    <p>{customerSupport.body}</p>
                </div> */}
            </div>
            <div className="row">
                <div className="col-lg-12 formCol">
                    <form onSubmit={handleSubmit} name="sentMessage" id="contactForm" noValidate>

                        <div className="mb-6">
                            <label for="firstName" className="form-label">First Name
                                <input name="first_name" type="text" className="form-control" id="firstName" required data-validation-required-message="Please enter your first name." placeholder="First Name" onChange={handleChange}/>
                            </label>
                        </div>

                        <div className="mb-6">
                            <label for="lastName" className="form-label">Last Name
                                <input name="last_name" type="text" className="form-control" id="lastName" required data-validation-required-message="Please enter your last name." placeholder="Last Name" onChange={handleChange}/>
                            </label>
                        </div>

                        <div className="mb-6">
                            <label for="emailAddress" className="form-label">Email address
                                <input name="email" type="email" className="form-control" id="emailAddress" placeholder="name@example.com" onChange={handleChange}/>
                            </label>
                        </div>
                        <div className="mb-6">
                            <label for="message" className="form-label">Enter Your Message
                                <textarea name="message" className="form-control" id="message" rows="3" onChange={handleChange}required data-validation-required-message="Please enter message."></textarea>
                            </label>
                        </div>

                        <div className="mb-6">
                            <label for="submit" className="form-label">
                                <input name="submit" type="submit" className="submitButton" id="submit" required data-validation-required-message="Please submit." placeholder="Submit" />
                            </label>
                        </div>

                    </form>
                </div>
            </div>

        </section>
    );
}

export default CustomerSupport;