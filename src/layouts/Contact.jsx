// import bottom_gradient from '/images/icon/bottom-radius.svg'
import location from "/images/icon/location.svg";
import address from "/images/icon/address.svg";
import contact from "/images/icon/contact.svg";
import email from "/images/icon/email.svg";
import send from "/images/icon/send.svg";
// import  black_infinity  from "./assets/images/black-infinity.svg";
// import
import black_infinity from "/images/black-infinity.svg";
import { SocialMedia } from "./SocialMedia";
import { FormField } from "../components/FormField";
import { useState } from "react";
import emailjs from "@emailjs/browser";
let initialVal = {
  name: "",
  email: "",
  message: "",
};
export const Contact = () => {
  let [form, setForm] = useState(initialVal);
  let [error, setError] = useState(initialVal);
  let [global, setGlobal] = useState("");
  const handleChange = (e) => {
    setError(initialVal);
    const { name, value } = e.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.name === "") {
      setError((prevError) => ({ ...prevError, name: "Name is required" }));
    } else if (form.email === "") {
      setError((prevError) => ({ ...prevError, email: "Email is required" }));
    } else if (
      form.email !== "" &&
      !form.email.includes("@") &&
      !form.email.includes(".")
    ) {
      setError((prevError) => ({ ...prevError, email: "Email is invalid" }));
    } else if (form.message === "") {
      setError((prevError) => ({
        ...prevError,
        message: "Message is required",
      }));
    } else {
      emailjs
        .send(
          import.meta.env.VITE_SERVICE_ID,
          import.meta.env.VITE_TEMPLATE_ID,
          form,
          import.meta.env.VITE_PUBLIC_KEY
        )
        .then(() => {
          setGlobal("Thanks for contacting us, we will get back to you soon!");
          setForm(initialVal);
          setTimeout(() => {
            setGlobal("");
          }, 5000);
        });
    }
  };

  return (
    <>
      <div className="contact-full-width circle-section" id="contact">
        <div className="container contact container-gap">
          <h2 className="heading">
            Lets <span className="highlight">Connect</span>
          </h2>
          <div className="flex wrap icon-form">
            <ul className="icon">
              <li className="flex-center">
                <img src={email} alt="" />
                <a href="mailto:shahayush480@gmail.com">
                  shahayush480@gmail.com
                </a>
              </li>
              <li className="flex-center">
                <img src={contact} alt="" />
                <a href="tel:00000000">+91-0000000000</a>
              </li>
              <li className="flex-center">
                <img src={address} alt="" />
                <a href="#">Developer Ayush</a>
              </li>
              <li className="flex-center">
                <img src={location} alt="" />
                <a href="#">Mumbai, India</a>
              </li>
            </ul>

            <form action="#" onSubmit={handleSubmit}>
              <p className="paragraph">{global}</p>

              <FormField
                placeholder="Name"
                name="name"
                value={form.name}
                onChange={handleChange}
                errorMessage={error.name}
              />
              <FormField
                placeholder="Email"
                name="email"
                value={form.email}
                onChange={handleChange}
                errorMessage={error.email}
              />
              <FormField
                type="textarea"
                placeholder="Message"
                name="message"
                value={form.message}
                onChange={handleChange}
                errorMessage={error.message}
              />

              <button className="circle-button">
                <img src={send} alt="" />
              </button>
            </form>

            <div className="circle-parent">
              <span className="circle orange filter-2 position-1"></span>
              <span className="circle orange position-2 filter-4"></span>
              <span className="circle white position-3"></span>
              <span className="circle black position-4 filter-2"></span>
            </div>
          </div>

          <SocialMedia />

          <div className="bottom-shape">
            <img src={black_infinity} alt="" className="back-infinity" />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width=""
              height=""
              viewBox="0 0 1440 1134"
              fill="none"
              className="bottom-orange-shape"
            >
              <g>
                <path
                  d="M1459 1120L1441.5 378.002C1405.5 663 1061 838 -41 1120L1459 1120Z"
                  fill="#FF5813"
                />
              </g>
              <defs></defs>
            </svg>
          </div>
        </div>
      </div>
    </>
  );
};
