import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const Form = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_o6xd9op', 'template_nsgtkkf', form.current, 'e3Xbd-EiG04SqQ9f4')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <form ref={form} onSubmit={sendEmail} className="max-w-md mx-auto p-4 bg-white rounded shadow-md">
        <div className="mb-4">
            <label className="block font-semibold mb-1">Name</label>
            <input type="text" name="user_name" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500" />
        </div>
        <div className="mb-4">
            <label className="block font-semibold mb-1">Email</label>
            <input type="email" name="user_email" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500" />
        </div>
        <div className="mb-4">
            <label className="block font-semibold mb-1">Message</label>
            <textarea name="message" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"></textarea>
        </div>
        <input type="submit" value="Send" className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded w-full" />
    </form>
  );
};