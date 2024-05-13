import React, { useState } from 'react';
import axios from 'axios';

function BetaRegistration() {

      const [formData, setFormData] = useState({
        name: "",
        brewery: '',
        email: '',
      });

    // const handleSubmit = (e) => {
    // //     e.preventDefault();
    // //     // fetch('http://localhost:8000/send-email', {
    // //     //   method: 'POST',
    // //     //   headers: {
    // //     //     'Content-Type': 'application/json',
    // //     //   },
    // //     //   body: JSON.stringify(formData),
    // //     // })
    // //     //   .then((response) => response.json())
    // //     //   .then((data) => console.log(data))
    // //     //   .catch((error) => console.error('Error:', error));
    // //     //   setFormData({
    // //     //     name: "",
    // //     //     brewery: '',
    // //     //     email: '',
    // //     //   });
    // //     //   window.alert(`Thank you for your submission, keep an eye on your inbox for more details!`);
    // //     fetch('https://h5nhljg5jj.execute-api.us-east-2.amazonaws.com/dev/test', {
    // //     method: 'GET',
    // //     headers: {
    // //         'Access-Control-Allow-Origin': '*',
    // //         'Access-Control-Allow-Headers': '*'
    // //     }
    // // })
    // // .then((response) => {
    // //     if (response.ok) {
    // //         console.log('Request successful');
    // //         window.alert('Request Successful');
    // //     } else {
    // //         console.error('Request failed');
    // //         window.alert('Request Unsuccessful');
    // //     }
    // // })
    // // .catch((error) => console.error('Error:', error));
    // fetch('http://petstore.execute-api.us-east-2.amazonaws.com/petstore/pets', {
    //     method: 'GET',
    //     headers: {
    //                 'Access-Control-Allow-Origin': '*',
    //                 'Access-Control-Allow-Headers': '*'
    //             }
    // })
    // .then((response) => {
    //         if (response.ok) {
    //             console.log('Request successful');
    //             window.alert('Request Successful');
    //         } else {
    //             console.error('Request failed');
    //             window.alert('Request Unsuccessful');
    //         }
    //     })
    //     .catch((error) => console.error('Error:', error));
    //   };
    const handleSubmit = async (e) => {
        e.preventDefault();
    
        fetch('https://fszp6ryo79.execute-api.us-east-2.amazonaws.com/dev')
            .then(response => response.json())
            .then(console.log)
            .catch(console.error);
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
        <div className="absolute green-gradient-background right-0 bg-white beta-registration-div items-center w-[40%] h-[94%] p-2 top-[6%] min-w-[400px] flex flex-col">
            <div className="flex flex-col">
                {/* <div className="absolute flex flex-row w-auto top-4">
                    <h1 className="w-full text-5xl font-bold text-white">Brew better beer, better</h1>
                </div> */}
                <div className="glass w-[100%] rounded-lg shadow flex flex-col p-2">
                    <div className="justify-center mt-2 beta-form-row">
                        <h1 className="text-3xl font-bold">Join the Waiting List</h1>
                    </div>
                    <div className="mt-4 beta-form-row">
                      <h2 className="text-2xl font-bold">Get the latest updates and release information</h2>
                    </div>
                    <div className="flex flex-col items-center justify-center w-full h-full">
                    <form onSubmit={handleSubmit} className="flex flex-col items-center justify-center w-1/2 h-full gap-4 mt-8">
                        <div className="w-full beta-form-row">
                            <input 
                            type="text" 
                            placeholder="Your Name"
                            name="name"
                            value={formData.name}
                            className="w-full p-2 mb-4 text-black border rounded-lg shadow-xl"
                            onChange={handleChange}
                        />
                        </div>
                        <div className="w-full beta-form-row">
                        <input 
                        type="text"
                        placeholder="Your Brewery"
                        name="brewery"
                        value={formData.brewery}
                        className="w-full p-2 mb-4 text-black border rounded-lg shadow-xl"
                        onChange={handleChange}
                    />
                        </div>
                    <div className="w-full beta-form-row">
                        <input 
                            type="text"
                            placeholder="Your Email Address"
                            name="email"
                            value={formData.email}
                            className="w-full p-2 mb-4 text-black border rounded-lg shadow-xl"
                            onChange={handleChange}
                        />
                    </div>
                    <button className="w-full p-2 mb-2 text-xl tracking-wide text-white bg-blue-500 rounded-lg shadow-xl bold" type="submit">Register</button>
                    </form>
                    </div>
                    </div>
            </div>
             
                    
                    
                    
    </div>
    
        </>
     );
}

export default BetaRegistration;