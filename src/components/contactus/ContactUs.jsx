import "./contactus.css";

const ContactUs = () => {
  return (
    <div>
      <section className="left-section">
        <div className="mb-12">
          <h1 className="text-white text-3xl font-bold mb-4">
            <span className="icon-envelope mr-2"></span> Contact us
          </h1>
          <p className="text-white ">
            contact me for more information and get notified for my new
            publications
          </p>
        </div>
        <form className="mt-4">
          <div className="mb-6">
            <label htmlFor="input" className="mr-3 text-white text-sm">
              Email Address :
            </label>
            <input required type="email" placeholder="Email Address" className="input p-1 text-white"/>
          </div>
          <div className="flex items-center mb-6">
            <label htmlFor="message" className="mr-3 text-white text-sm">
              Your message :
            </label>
            <textarea
            required
              name=""
              id=""
              rows="4"
              cols="23"
              placeholder="Message"
              className=" input p-2 text-white"
            ></textarea>
          </div>

          <button className="submit-btn">Submit</button>
        </form>
      </section>
      <section className="  right-section"></section>
    </div>
  );
};

export default ContactUs;
