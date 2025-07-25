import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          setStatus('Message sent successfully 🎉');
          setTimeout(() => setStatus(''), 4000);
          form.current.reset();
        },
        (error) => {
          setStatus('Failed to send. Please try again 😓');
          setTimeout(() => setStatus(''), 4000);
        }
      );
  };

  return (
    <section className="min-h-screen flex items-center justify-center p-8">
      <div className="max-w-xl w-full bg-white bg-opacity-20 backdrop-blur-sm p-6 rounded-lg shadow-lg text-white">
        <h2 className="text-3xl font-bold mb-4">Contact Me</h2>

        {status && (
          <div className="mb-4 p-3 rounded bg-green-700 text-white text-center transition">
            {status}
          </div>
        )}

        <form ref={form} onSubmit={sendEmail} className="space-y-4">
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
            className="w-full p-2 rounded bg-white bg-opacity-20 backdrop-blur-sm text-white"
          />
          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
            className="w-full p-2 rounded bg-white bg-opacity-20 backdrop-blur-sm text-white"
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            required
            className="w-full p-2 rounded bg-white bg-opacity-20 backdrop-blur-sm text-white"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            required
            rows="5"
            className="w-full p-2 rounded bg-white bg-opacity-20 backdrop-blur-sm text-white"
          />
          <button
            type="submit"
            className="bg-white bg-opacity-20 backdrop-blur-sm hover:bg-opacity-30 px-6 py-2 rounded text-white transition"
          >
            Send
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
