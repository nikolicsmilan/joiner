import React, { useState } from "react";
import { myAddGeneral } from "../../firebase/Firestore";
import { validateForm } from "./FormValidation";
import InputGeneral from "./InputGeneral";
const Form = ({ bookingformRef }) => {
  const [localItem, setLocalItem] = useState({
    name: "",
    tel: "",
    email: "",
    description: "",
    check: false,
  });
  const [error, setError] = useState({
    name: "",
    tel: "",
    email: "",
    description: "",
    check: "",
  });
/*
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    //console.log("handleInputChange: ", "name: ", name, "value: ", value);
    if (name === "check") {
      // console.log("run check")
      setLocalItem((prevItem) => ({
        ...prevItem,
        [name]: event.target.checked,
      }));
    } else {
      setLocalItem((prevItem) => ({
        ...prevItem,
        [name]: value,
      }));
    }
  };*/
  const handleInputChange = (event) => {
    const { name, value, checked, type } = event.target;
  
    if (type === "checkbox") {
      setLocalItem((prevItem) => ({
        ...prevItem,
        [name]: checked,
      }));
    } else {
      setLocalItem((prevItem) => ({
        ...prevItem,
        [name]: value,
      }));
    }
  };
  

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!validateForm(localItem, setError, setLocalItem)) {
    } else {
      myAddGeneral("message", localItem);
      setLocalItem({
        name: "",
        tel: "",
        email: "",
        description: "",
        check: false,
      });
      setError({
        name: "",
        tel: "",
        email: "",
        description: "",
        check: "",
      });
    }
  };
  console.log("localItem: ", localItem);
  console.log("error: ", error);
  return (
    <form
      onSubmit={handleSubmit}
      ref={bookingformRef}
      className="my-0 lg:mt-[100px]  flex flex-col justify-center  border-0 shadow-2xl border-stone-300 mx-10 p-2 rounded-xl"
    >
      <h2 className="text-center font-bold  text-xl md:text-2xl uppercase lg:my-10">
        Időpontfogalás
      </h2>

      <div className="w-full my-5 mt-10 relative lg:px-10">
        <InputGeneral
          name="name"
          error={error.name}
          label="Név"
          value={localItem.name}
          type="text"
          onChange={handleInputChange}
        />
      </div>

      <div className="w-full my-5 relative lg:px-10">
        <InputGeneral
          name="email"
          error={error.email}
          label="E-mail"
          value={localItem.email}
          type="text"
          onChange={handleInputChange}
        />
      </div>

      <div className="w-full my-5 relative lg:px-10">
        <InputGeneral
          name="tel"
          error={error.tel}
          label="Telefonszám"
          value={localItem.tel}
          type="number"
          onChange={handleInputChange}
        />
      </div>

      <div className="w-full my-5 relative lg:px-10">
        <div className="px-1 absolute mt-[-12px] ml-[10px] z-20 bg-white w-auto">
          <p> Leírás </p>
        </div>
        <textarea
          type="text"
          name="description"
          onChange={handleInputChange}
          value={localItem.description}
          rows="5"
          cols="40"
          className="w-full z-10 p-2 border-2 border-stone-300 h-auto rounded-xl "
        />
      </div>

      <div className="flex items-center m-1 my-6 lg:px-10">
        {error.check && (
          <p className="text-red-400 absolute mt-[-60px] ml-[10px]">
            {error.check}
          </p>
        )}
        <input
          onChange={handleInputChange}
          checked={localItem.check}
          type="checkbox"
          id="terms"
          name="check"
          className="h-5 w-5 text-indigo-600 rounded-md border-gray-300"
        />
        <label htmlFor="terms" className="ml-2 text-gray-700">
          Elfogadom az általános szerződési feltételeket
        </label>
      </div>
      <div className="lg:px-10 lg:my-10">
        <button
          type="submit"
          className="w-full block  px-5 py-2 bg-red-600 text-white uppercase font-bold rounded-full"
        >
          Küldés
        </button>
      </div>
    </form>
  );
};

export default Form;
//mx-auto
