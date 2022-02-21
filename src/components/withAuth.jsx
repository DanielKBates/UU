import React, { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import axios from "axios";

import Admin from "../pages/Admin";

function WithAuth(props) {
  const [loading, setLoading] = useState(true);
  const [redirect, setRedirect] = useState(false);
  axios.defaults.withCredentials = true;
  useEffect(() => {
    axios
      .get("https://uuexpress.herokuapp.com/api/admin/check-token")
      .then((res) => {
        if (res.status === 200) {
          setLoading(false);
        } else {
          const error = new Error(res.error);
          throw error;
        }
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
        setRedirect(true);
      });
  });
  const authRender = () => {
    if (loading) {
      return null;
    }
    if (redirect) {
      return <Navigate to="/login" />;
    }
    return <Admin {...props} />;
  };
  return <>{authRender()}</>;
}

export default WithAuth;
