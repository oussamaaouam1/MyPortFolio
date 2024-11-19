import "./contactus.css";
import { useForm, ValidationError } from "@formspree/react";

import Lottie from "lottie-react";
import doneAnimation from "../../../public/animations/done.json"
import emailAnimation from "../../../public/animations/emailAnim.json";


const ContactUs = () => {
  const [state, handleSubmit] = useForm("xanybedj");
  if (state.succeeded) {
    return (
      <h1 className="text-green-600 text-xl font-bold flex items-center">
        Thank You 😊,Your Email has been sent successfully !
        <Lottie className="w-14 h-14" animationData={doneAnimation} loop={false} />
      </h1>
    );
  }

  return (
    <div className="flex justify-around items-center">
      <section className="left-section">
        <div className="mb-12">
          <h1 className="title text-white text-3xl font-bold mb-4">
            <span className="icon-envelope mr-2"></span> Contact us
          </h1>
          <p className=" sub-title text-white ">
            contact me for more information and get notified for my new
            publications
          </p>
        </div>
        <form onSubmit={handleSubmit} className="mt-4">
          <div className="mb-6">
            <label htmlFor="input" className="mr-3 text-sm">
              Email Address :
            </label>
            <input
              required
              type="email"
              name="email"
              placeholder="Email Address"
              className="input p-1 "
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>
          <div className="flex items-center mb-6">
            <label htmlFor="message" className="mr-3  text-sm">
              Your message :
            </label>
            <textarea
              required
              name="message"
              id=""
              rows="4"
              cols="23"
              placeholder="Message"
              className=" input p-2 text-white"
            ></textarea>

            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>

          <button
            type="submit"
            disabled={state.submitting}
            className="submit-btn"
          >
            Submit
          </button>
        </form>
      </section>
      <section className="anim-section w-1/3">
        <Lottie
          className="contactAnim"
          animationData={emailAnimation}
          loop={true}
        />
      </section>
    </div>
  );
};

export default ContactUs;
