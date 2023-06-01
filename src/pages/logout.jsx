import React, { useEffect, useContext } from "react";
import { redirect } from "react-router-dom";
import ElsegchContext from "../context/ElsegchContext";

const Logout = (props) => {
  const Ectx = useContext(ElsegchContext);
  useEffect(() => {
    Ectx.logout();
  }, []);

  return redirect("/");
};

export default Logout;
