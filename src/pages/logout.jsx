import React, { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import ElsegchContext from "../context/ElsegchContext";

const Logout = (props) => {
  let navigate = useNavigate();
  const Ectx = useContext(ElsegchContext);
  useEffect(() => {
    Ectx.logout();
    navigate('/')
  }, []);

  return <>
  </>
};

export default Logout;
