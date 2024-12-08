import React from 'react';

const Contact = ({ title = "Contact Us", onSubmit }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSubmit) {
      onSubmit({
        name: e.target.name.value,
        email: e.target.email.value,
        message: e.target.message.value,
      });
    } else {
      console.log("Form submitted");
    }
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2>{title}</h2>
        <form onSubmit={handleSubmit} aria-label="Contact form">
          <fieldset>
            <legend className="sr-only">{title}</legend>
            <label htmlFor="name" className="sr-only">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Name"
              required
              aria-label="Enter your name"
            />

            <label htmlFor="email" className="sr-only">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              required
              aria-label="Enter your email"
            />

            <label htmlFor="message" className="sr-only">Message</label>
            <textarea
              id="message"
              name="message"
              placeholder="Message"
              required
              aria-label="Enter your message"
            ></textarea>

            <button type="submit">Send Message</button>
          </fieldset>
        </form>
      </div>
    </section>
  );
};

export default Contact;
