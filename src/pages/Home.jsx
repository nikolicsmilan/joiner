import React from "react";
import { useNavigate } from "react-router-dom";
import Heading from "../components/Home/Heading";
import Introduction from "../components/Home/Introduction";
import Form from "../components/Home/Form";
import sink from "../assets/icons/sink.png"
const Home = () => {
  const navigate = useNavigate();

  //proglameticly
  const navigateHandler = () => {
    navigate("galery");
  };
  return (
    <div>
      <Heading />
     <Introduction/>
    <Form/>
    </div>
  );
};

export default Home;
/*  <div className="  border-2 shadow-2xl p-10 bg-white w-1/2 rounded-2xl">
<img src={sink}/>
      </div> */
      //absolute bottom-0 right-0