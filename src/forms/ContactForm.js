import React from "react";
import { useFormik } from "formik";

export default function ContactForm({ product }) {
  const formik = useFormik({
    initialValues: { name: "", phone: "", address: "", email: "" },
    onSubmit: (values) => {
      handleSubmit(values);
    },
  });
  const handleSubmit = async (values) => {
    // Block native form submission.
    console.log(values);
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
    <form onSubmit={formik.handleSubmit}>
      {inputs.map((input) => (
        <InputField
          key={input.id}
          input={input}
          onChange={formik.handleChange}
          value={formik.values}
        />
      ))}
    
        <button type="submit" disabled={false}>Envoyer</button>

    </form>
  );
}

const InputField = ({ input, onChange, value }) => {
  if (input.type === "text-area") {
    return <textarea name="Text1" cols="20" rows="5"></textarea>;
  } else {
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
