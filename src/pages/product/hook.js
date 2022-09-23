import React, { useState, useEffect } from "react";
import { AxiosGet } from "../../api/axios/index";

const useHook = (id) => {
  const [product, setState] = useState([]);
  useEffect(async () => {
    let response = await AxiosGet("Product");
    setState(response);
  }, []);
  return { product };
};

export default useHook;
