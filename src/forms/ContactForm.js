import React from "react";
import { useFormik } from "formik";
import { useAlert } from 'react-alert'
import axios from "axios";

export default function ContactForm({ product }) {
  const alert = useAlert();
  const formik = useFormik({
    initialValues: { name: "", phone: "", email: "" },
    onSubmit: (values) => {
      handleSubmit(values);
    },
  });
  const handleSubmit = async (values) => {
    console.log(values);
    // Block native form submission.
    const response = await axios.post("http://localhost:3001/contact/new_msg",{...values})
    console.log(response)
    alert.show('Oh look, an alert!')
  };

  const inputs = [
    { id: "name", name: "name", placeholder: "Nom - Prenom", type: "text" },
    {
      id: "phone",
      name: "phone",
      placeholder: "Numero de telephone",
      type: "tel",
    },
    { id: "email", name: "email", placeholder: "Courriel", type: "email" },
    { id: "msg", name: "msg", placeholder: "Message", type: "text-area" },
  ];
  return (
    <form className="col" onSubmit={formik.handleSubmit}>
      {inputs.map((input) => (
        <InputField
          key={input.id}
          input={input}
          onChange={formik.handleChange}
          value={formik.values}
        />
      ))}

      <button type="submit" disabled={false}>
        Envoyer
      </button>
    </form>
  );
}

const InputField = ({ input, onChange, value }) => {
  switch (input.type) {
    case "text-area":
      return (
        <textarea
          name={input.name}
          placeholder={input.placeholder}
          cols="25"
          rows="10"
        ></textarea>
      );
    default:
      return (
        <input
          id={input.id}
          name={input.name}
          placeholder={input.placeholder}
          type={input.type}
          onChange={onChange}
          value={value[input.name]}
        />
      );
  }
};
