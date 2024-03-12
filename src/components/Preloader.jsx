import React, { useEffect, useState } from "react";
import { loader } from "../assets";
const PreLoader = () => {
  const [phase, setPhase] = useState("");

  useEffect(() => {
    setTimeout(() => {
      setPhase("end");
    }, 4000);
  }, []);
  useEffect(() => {
    setTimeout(() => {
      setPhase("ends");
    }, 4300);
  }, []);

  return (
    <>
      <div
        style={{
          inset: 0,
          margin: "auto",
          position: "fixed",
          zIndex: 9999,
          width: phase.includes("end") ? "0" : "100%",
          height: phase.includes("end") ? "0" : "100vh",
          backgroundColor: "black",
          transition: "0.5s",
        }}
      >
        {phase === "ends" ? null : (
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <img src={loader} alt="loader" className="w-20 h-20" />
            <p className="ml-2">Loading ...</p>
          </div>
        )}
      </div>
    </>
  );
};

export default PreLoader;
