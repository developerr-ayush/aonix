import { SocialMedia } from "./SocialMedia";
import { FormField } from "../components/FormField";
import { useState } from "react";
import emailjs from "@emailjs/browser";
let initialVal = {
  name: "",
  email: "",
  message: "",
};
export const ProductForm = () => {
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
    <div className="sub-product-form relative circle-section">
      <div className="container">
        <h3 className="title">
          <span>Get</span>
          <span className="highlight">Involved</span>
        </h3>
        <form action="" onSubmit={handleSubmit}>
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
          <div className="form-btn">
            <button className="btn">
              Send
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.92522 3.52499L15.0586 7.09166C18.2586 8.69166 18.2586 11.3083 15.0586 12.9083L7.92522 16.475C3.12522 18.875 1.16689 16.9083 3.56689 12.1167L4.29189 10.675C4.47522 10.3083 4.47522 9.69999 4.29189 9.33332L3.56689 7.88332C1.16689 3.09166 3.13355 1.12499 7.92522 3.52499Z"
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M4.5332 10H9.0332"
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </form>
        <SocialMedia />
      </div>

      <div className="bottom-shape">
        <svg
          width="349"
          height="341"
          viewBox="0 0 349 341"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g>
            <path
              d="M-53 367L-48.31 -4.21637e-06C-38.662 140.963 53.664 227.52 349 367L-53 367Z"
              fill="#FF5813"
            />
          </g>
        </svg>
      </div>

      <div className="circle-parent">
        <span className="white circle position-1"></span>
        <span className="black circle position-2"></span>
        <span className="black circle position-3"></span>
        <span className="orange circle position-4"></span>
        <span className="white circle position-5"></span>
        <span className="white circle position-6"></span>
        <span className="orange circle position-7"></span>
        <span className="theme circle position-8"></span>
        <span className="black circle position-9"></span>
        <span className="theme circle position-10"></span>
      </div>
    </div>
  );
};
