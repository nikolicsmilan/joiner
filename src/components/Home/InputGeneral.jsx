import React from 'react'

const InputGeneral = ({name, error, label, value, type, onChange}) => {
  return (
    <div className="">
    {error && (
      <p className="text-red-400 absolute mt-[-35px] ml-[10px]">
        {error}
      </p>
    )}
    <div className="px-1 absolute mt-[-12px] ml-[10px] z-20 bg-white w-auto">
      <p>
        {label} <span className=" text-red-600">* </span>
      </p>
    </div>
    <input
      name={name}
      type={type}
      value={value}
      onChange={onChange}
      className={`w-full z-10 border-2 h-11 rounded-xl ${
        error ? "border-red-400" : "border-stone-300"
      } `}
    />
  </div>
  )
}

export default InputGeneral