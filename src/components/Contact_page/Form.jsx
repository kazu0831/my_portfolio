import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export const Form = () => {
  const form = useRef();
  const [message,setMessage] = useState(null)

  const sendEmail = (e) => {
    e.preventDefault();

    const name = e.target.user_name.value
    const email = e.target.user_email.value
    const messageText = e.target.message.value

    if (!name || !email || !messageText) {
        setMessage('全てのフィールドを入力してください。');
        return;
    }

    const validate = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.match(validate)) {
      setMessage('有効なメールアドレスを入力してください。');
      return;
    }

    emailjs.sendForm(import.meta.env.VITE_EMAIL_SERVICE_ID, import.meta.env.VITE_EMAIL_TEMPLATE_ID , form.current, import.meta.env.VITE_EMAIL_USER_ID)
      .then((result) => {
        if (result.status === 200) {
            setMessage('送信しました。');
            form.current.reset();
          }
      }, (error) => {
            setMessage('エラーが発生しました。');
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
        {message && <p className="text-red-500 mt-2">{message}</p>}
    </form>
  );
};