import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

const ParamsProduct = () => {
  const { uniqueid } = useParams();

  //   useEffect(() => {
  //     if (uniqueid) {
  //       fetch(`/${uniqueid}`);
  //     }
  //   }, [uniqueid]);

  return <div>ParamsProduct - {uniqueid}</div>;
};

export default ParamsProduct;
