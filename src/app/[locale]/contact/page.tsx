"use client"

import { useState } from "react";

const ContactPage = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [suscess, setSuscess] = useState(false);


  const handleSubmit = async (e: any) => {
    e.preventDefault();
  
    const formData = { email, message };
  
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/send-email`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setSuscess(true);
        console.log('Email sent successfully');
      } else {
        console.error('Failed to send email');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="mx-auto my-8 h-fit flex-1 bg-white p-4 shadow-sm md:rounded mb-20 container">
      <div className="flex flex-col text-center w-full mb-12">
        <h1 className="text-2xl mb-2 font-bold text-black">Contact Us</h1>
        <p className="lg:w-2/3 mx-auto leading-relaxed text-base">If you have any questions, complaints, or claims with respect to the our Services, please send us a message to <a className="hover:text-decoration-underline" href={`mailto:${process.env.NEXT_PUBLIC_EMAIL}`}>{process.env.NEXT_PUBLIC_EMAIL}</a></p>
      </div>
      <section className="text-gray-600 body-font relative">
        <div className="absolute inset-0 bg-gray-300">
          <iframe className="w-full h-full" frameBorder="0" title="map" scrolling="no" src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=%C4%B0zmir+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed" ></iframe>
        </div>
        <div className="container px-5 py-24 mx-auto flex">
          {!suscess && <form className="lg:w-1/2 md:w-1/2 bg-white rounded p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md" onSubmit={handleSubmit}>
            <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">Feedback</h2>
            {/* <p className="leading-relaxed mb-5 text-gray-600">Post-ironic portland shabby chic echo park, banjo fashion axe</p> */}
            <div className="relative">
              <label className="leading-7 text-sm text-gray-600">Email</label>
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required id="email" name="email" className="w-full rounded border border-gray-300 focus:border-primary focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            </div>
            <div className="relative mb-4">
              <label className="leading-7 text-sm text-gray-600">Message</label>
              <textarea value={message} onChange={(e) => setMessage(e.target.value)} required id="message" name="message" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
            </div>
            <button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg" type="submit">Submit</button>
            {/* <p className="text-xs text-gray-500 mt-3">Chicharrones blog helvetica normcore iceland tousled brook viral artisan.</p> */}
          </form>}
          {suscess &&
            <div className="lg:w-1/2 md:w-1/2 bg-white rounded p-8 min-h-[300px] flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md text-center text-green-500">Email sent successfully !</div>
          }
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
