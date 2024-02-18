import React, { useState } from "react";

const Form = ({ bookingformRef }) => {
  const [localItem, setLocalItem] = useState({
    name: "",
    tel: "",
    email: "",
    description: "",
    check: false,
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    console.log("handleInputChange: ", "name: ", name, "value: ", value);
    if (name === "check") {
      console.log("run check")
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
  };
  console.log("localItem: ", localItem);
  return (
    <form
      ref={bookingformRef}
      className="my-0 lg:mt-[100px]  flex flex-col justify-center  border-0 shadow-2xl border-stone-300 mx-10 p-2 rounded-xl"
    >
      <h2 className="text-center font-bold text-xl lg:text-2xl uppercase lg:my-10">
        Időpontfogalás
      </h2>
      <div className="w-full my-4 relative lg:px-10">
        <div className="px-1 absolute mt-[-12px] ml-[10px] z-20 bg-white w-auto">
          <p>
            {" "}
            Név <span className=" text-red-600">* </span>
          </p>
        </div>
        <input
          type="text"
          name="name"
          value={localItem.name}
          onChange={handleInputChange}
          className="w-full z-10 border-2 border-stone-300 h-11 rounded-xl "
        />
      </div>

      <div className="w-full my-4 relative lg:px-10">
        <div className="px-1 absolute mt-[-12px] ml-[10px] z-20 bg-white w-auto">
          <p>
            {" "}
            E-mail <span className=" text-red-600">* </span>
          </p>
        </div>
        <input
          type="text"
          name="email"
          onChange={handleInputChange}
          value={localItem.email}
          className="w-full z-10 border-2 border-stone-300 h-11 rounded-xl "
        />
      </div>
      <div className="w-full my-4 relative lg:px-10">
        <div className="px-1 absolute mt-[-12px] ml-[10px] z-20 bg-white w-auto">
          <p>
            {" "}
            Telefonszám <span className=" text-red-600">* </span>
          </p>
        </div>
        <input
          type="text"
          name="tel"
          onChange={handleInputChange}
          value={localItem.tel}
          className="w-full z-10 border-2 border-stone-300 h-11 rounded-xl "
        />
      </div>

      <div className="w-full my-4 relative lg:px-10">
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

      <div className="flex items-center m-1 my-4 lg:px-10">
        <input
          onChange={handleInputChange}
          value={localItem.check}
          type="checkbox"
          id="terms"
          name="check"
          className="h-5 w-5 text-indigo-600 rounded-md border-gray-300"
        />
        <label for="terms" className="ml-2 text-gray-700">
          Elfogadom az általános szerződési feltételeket
        </label>
      </div>
      <div className="lg:px-10 lg:my-10">
        <button className="w-full block  px-5 py-2 bg-red-600 text-white uppercase font-bold rounded-full">
          Küldés
        </button>
      </div>
    </form>
  );
};

export default Form;
//mx-auto
