import './ContactPage.css';

export default function ContactPage() {
  return (
    <div className="contact-page">
      <h1>Contact Us</h1>

      <div className="contact-container">
        {/* Left: Contact Form */}
        <div className="contact-form">
          <h2>Send Us a Message</h2>
          <form>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" placeholder="Your Name" required />

            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="you@example.com" required />

            <label htmlFor="message">Message</label>
            <textarea id="message" placeholder="Your message..." rows="5" required />

            <button type="submit">Send Message</button>
          </form>
        </div>

        {/* Right: Map and Info */}
        <div className="contact-info">
          <h2>Visit Us</h2>
          <iframe
            title="Google Maps"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.072973072665!2d-122.4194152846813!3d37.77492927975964!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c9e4b3a9f%3A0x5097e9d82d77aee3!2sSan%20Francisco!5e0!3m2!1sen!2sus!4v1680000000000"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>

          <p><strong>Address:</strong> 123 MediLink Blvd, San Francisco, CA</p>
          <p><strong>Phone:</strong> (123) 456-7890</p>
          <p><strong>Email:</strong> contact@medilink.com</p>
        </div>
      </div>
    </div>
  );
}
