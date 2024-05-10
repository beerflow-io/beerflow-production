import React, { useState } from 'react';

function BetaRegistration() {

    const[name, setName] = useState();
      const [formData, setFormData] = useState({
        name: "",
        brewery: '',
        email: '',
      });


    const handleSubmit = (e) => {
        e.preventDefault();
        // fetch('http://localhost:8000/send-email', {
        //   method: 'POST',
        //   headers: {
        //     'Content-Type': 'application/json',
        //   },
        //   body: JSON.stringify(formData),
        // })
        //   .then((response) => response.json())
        //   .then((data) => console.log(data))
        //   .catch((error) => console.error('Error:', error));
        //   setFormData({
        //     name: "",
        //     brewery: '',
        //     email: '',
        //   });
        //   window.alert(`Thank you for your submission, keep an eye on your inbox for more details!`);
      };
      
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };

    return ( 
        <>
        <div className="absolute landing-nav-background left-[25%] bg-white rounded-lg beta-registration-div items-center w-1/2 h-auto p-2 mt-16 border shadow-xl min-w-[400px] ">
                    <div className="beta-form-row mt-2">
                        <h1 className="text-3xl font-bold">Join the Waiting List</h1>
                    </div>
                    <div className="beta-form-row mt-4">
                      <h2 className="text-2xl font-bold">Get the latest updates and release information</h2>
                    </div>
                    <div className="flex flex-col items-center justify-center w-1/2 h-full">
                    <form onSubmit={handleSubmit} className="w-1/2 h-full gap-4 mt-8 items-center flex flex-col">
                        <div className="beta-form-row w-full">
                            <input 
                            type="text" 
                            placeholder="Your Name"
                            name="name"
                            value={formData.name}
                            className="p-2 border shadow-xl rounded-lg mb-4 w-full"
                            onChange={handleChange}
                        />
                        </div>
                        <div className="beta-form-row w-full">
                        <input 
                        type="text"
                        placeholder="Your Brewery"
                        name="brewery"
                        value={formData.brewery}
                        className="p-2 border shadow-xl rounded-lg mb-4 w-full"
                        onChange={handleChange}
                    />
                        </div>
                    <div className="beta-form-row w-full">
                        <input 
                            type="text"
                            placeholder="Your Email Address"
                            name="email"
                            value={formData.email}
                            className="p-2 border shadow-xl rounded-lg mb-4 w-full"
                            onChange={handleChange}
                        />
                    </div>
                    <button className="w-full p-2 mb-2 text-xl tracking-wide text-white bg-blue-500 rounded-lg shadow-xl bold" type="submit">Register</button>
                    </form>
                    </div>
                    
    </div>
    
        </>
     );
}

export default BetaRegistration;