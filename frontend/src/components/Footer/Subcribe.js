import { useState } from "react";

const Subscribe = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email submitted:", email);
  };
  return (
    <>
      <div className="newsletter-form">
        <h2 className="row-1-header">JOIN OUR NEWSLETTER!</h2>
        <form onSubmit={handleSubmit}>

          <label htmlFor="email"></label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            required
          />
          <button className="suscribe-button" type="submit">
            Subscribe
          </button>
        </form>
      </div>
    </>
  );
};

export default Subscribe;
