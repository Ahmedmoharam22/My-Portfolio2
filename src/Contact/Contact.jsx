import React from 'react'
import Lottie from "lottie-react";
import done from "../Image/done.json";

import { useForm, ValidationError } from "@formspree/react";
import "./Contact.css";

const Contact = ({ color }) => {
  
  const [state, handleSubmit] = useForm("mvojdbpq");
  const copyText = (e) => {
    
    navigator.clipboard.writeText(e.target.innerText);
  };
  return (
    <div id='contact' className={`text-center w-100 p-5 borderContact ${color[1]}`}>
      <h1 className='fw-bold'>Contact Me </h1>
      <div className="col-md-12 d-flex justify-content-center py-3">
        <form onSubmit={handleSubmit} className={`${color[2]} form-contact`}>
          <div className="flex-contact my-3">
            <label htmlFor="email" style={{ color: "var(--subTitle)" }}>
              Email Address
            </label>
            <input
              autoComplete="off"
              type="email"
              required
              name="email"
              id="email"
              placeholder=" Email Address"
              className="mx-4 fromControl"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>
          <div className="flex-contact">
            <label htmlFor="message" style={{ color: "var(--subTitle)" }}>
              {" "}
              Your Message{" "}
            </label>
            <textarea
              name="message"
              id="message"
              required
              className="mx-4 fromControl"
              placeholder="Message"
              rows="4"
              cols="30"
            ></textarea>
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>
          <div className="sub">
            <button className={`btn2 btn-project btn-contact mt-3  ${color[3] === "bg-white4"
              ? color[3] + " text-white"
              : color[3] + " text-white"
              }`} type="submit" disabled={state.submitting}> {state.submitting ? "Submiting ..." : "Submit"}</button>
          </div>
          {state.succeeded && (
            <p className="d-flex align-items-center" style={{ fontSize: "14px", marginTop: "1.7rem" }}>
              <Lottie loop={false} animationData={done} style={{ height: "37px" }} />
              Message has been sent. Thank you</p>)}

        </form>
      </div>
      <p className='para-contact' >Linkedin :<span title='Copy Link' onClick={copyText}>https://www.linkedin.com/in/ahmed-moharam-2b70a928b/</span></p>
      <p className='para-contact'>Mobile/WhatsApp/Telegram :<span title='Copy Number' onClick={copyText}> +201092635055</span></p>
      <p className='para-contact' >Email :<span title='Copy Gmail' onClick={copyText}>  ahmedmoharam2002@gmail.com</span></p>
    </div>
  )
}

export default Contact 