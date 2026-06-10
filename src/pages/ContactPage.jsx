import React, { useEffect } from 'react';

export default function ContactPage() {
  useEffect(() => {
    document.title = "Contact Us - Very Wild Jacks";
  }, []);

  return (
    <div className="page-container content-page">
      <h1>Contact Us</h1>
      <p>Have a question, feedback, or found a bug? We'd love to hear from you!</p>
      
      <div className="contact-info">
        <h2>Get in Touch</h2>
        <p>Email: <a href="mailto:support@verywildjacks.com">support@verywildjacks.com</a></p>
        
        <h2>Follow Us</h2>
        <p>Stay updated with the latest news, updates, and community events on our social media channels.</p>
        <ul>
          <li><a href="#">Twitter</a></li>
          <li><a href="#">Facebook</a></li>
          <li><a href="#">Discord</a></li>
        </ul>
      </div>

      <div className="contact-form-placeholder">
        <h2>Send us a message</h2>
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="form-group">
            <label>Name</label>
            <input type="text" placeholder="Your Name" />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input type="email" placeholder="Your Email" />
          </div>
          <div className="form-group">
            <label>Message</label>
            <textarea rows="5" placeholder="Your Message"></textarea>
          </div>
          <button type="submit" className="btn-primary">Send Message</button>
        </form>
      </div>
    </div>
  );
}
