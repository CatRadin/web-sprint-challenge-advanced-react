// write your custom hook here to control your checkout form
import { useState } from 'react'


export default function useForm(initialValue) {

//State-----------------------------------------------------------------------------
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [values, setValues] = useState(initialValue);

//Handle Changes ------------------------------------------------------------------------------
  const handleChanges = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

//Submit--------------------------------------------------------------------------
  const handleSubmit = (e) => {
    e.preventDefault();
    setShowSuccessMessage(true);
  };

//Return---------------------------------------------------------------------------
  return [ showSuccessMessage, values, handleChanges, handleSubmit ]
}