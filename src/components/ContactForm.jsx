import { Send } from "lucide-react";

export default function ContactForm() {
  return (
    <form className="contact-form">
      <label>
        Name
        <input name="name" placeholder="Your name" />
      </label>
      <label>
        Email
        <input name="email" type="email" placeholder="you@example.com" />
      </label>
      <label>
        Message
        <textarea name="message" rows="5" placeholder="Project idea, job offer, collaboration..." />
      </label>
      <button className="button-primary" type="button">
        <Send size={18} />
        API coming next
      </button>
    </form>
  );
}
