import React from "react";

const Loading = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img
        className="spinner"
        style={{ backgroundColor: "white", borderRadius: "50%" }}
        src="/loading.gif"
      />
    </div>
  );
};

export default Loading;
