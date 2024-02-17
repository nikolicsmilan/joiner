import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import Heading from "../components/Home/Heading";
import Introduction from "../components/Home/Introduction";
import Form from "../components/Home/Form";
import sink from "../assets/icons/sink.png";
import { useOutletContext } from "react-router-dom";

const Home = () => {
  const bookingformRef = useOutletContext();

  return (
    <div>
      <Heading bookingformRef={bookingformRef} />
      <Introduction />
      <Form bookingformRef={bookingformRef} />
    </div>
  );
};

export default Home;


