import React, { useState } from 'react'
import Input from "./form-field/Input"
import "./index.css";

function App(){
  const [values, setValues ] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: ""

  })
  


  const formField = [
    {
      id: 1,
      name: 'username',
      type: 'text',
      placeholder: 'Username',
      label: 'Username',
      required: true,
      pattern: `^[A-za-z0-9]{3-16}$`,
      errorMessage:"Username should be 3-16 characters and shouldn't include any special character!",
      autocomplete: 'off'
      
      
    },
    {
      id: 2,
      name: 'email',
      type: 'email',
      placeholder: 'Email',
      label: 'Email',
      required: true,
      autocomplete: 'off',
      errorMessage: "Enter a valid email address"
      
    },
    {
      id: 3,
      name: 'password',
      type: 'text',
      placeholder: 'Password',
      label: 'Password',
      required: true,
      autocomplete: 'off',
      errorMessage: 'Password should be 8-20 characters and include atleast 1 letter,1 number and 1 special character',
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      
    },
    {
      id: 4,
      name: 'confirmpassword',
      type: 'text',
      placeholder: 'Confirm Password',
      label: "Confirm passwrord",
      required: true,
      pattern: values.password,
            autocomplete: "off",
      
      
    }
  ];

  const onChange = (e) => {
    setValues({...values, [e.target.name]: e.target.values})
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return <form>
    {formField.map(field => (
      <Input key={field.id} {...field} onChange={onChange} value={values[field.name]} />
    ))}
    <button className='button'>Submit</button>
  </form>
}

export default App