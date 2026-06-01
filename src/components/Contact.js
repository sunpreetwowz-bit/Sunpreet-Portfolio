import React, { useRef } from 'react';
import './Contact.css';
import emailjs from '@emailjs/browser';

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_ef07fqa', 'template_ays4wri', form.current, {
        publicKey: 'dWIWOxYNQuLsSzYNq',
      })
      .then(
        () => {
          console.log('Message sent successfully');
          form.current.reset();
        },
        (error) => {
          console.log('Failed to send:', error.text);
        },
      );
  };

  return (
    <section id="contact">
      <div className="contact">
        <div className="contact-intro" data-aos="fade-up">
          <div className="section-header section-header--left">
            <span className="section-eyebrow">Get in touch</span>
            <h2 className="section-title">Contact Me</h2>
          </div>
          <p>Have a project in mind or want to collaborate? Send a message and I&apos;ll get back to you.</p>
        </div>
        <form ref={form} onSubmit={sendEmail} data-aos="fade-up" data-aos-delay="100">
          <label htmlFor="name">Name</label>
          <input type="text" name="user_name" id="name" placeholder="Your name" required />
          <label htmlFor="email">Email</label>
          <input type="email" name="user_email" id="email" placeholder="you@email.com" required />
          <label htmlFor="message">Message</label>
          <textarea name="message" id="message" placeholder="Tell me about your project..." rows={4} required />
          <button type="submit">Send message</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
