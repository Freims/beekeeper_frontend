import React from "react";
import "./Loading.scss";

const Loading = ({ visible }) =>
  visible && (
    <div className="wall">
      <div className={`loading-bee `}>
        <img
          className="bee-gif"
          src={require("../../assets/images/loading_beekeeper.gif")}
          alt="flying bee"
        />
      </div>
    </div>
  );

export default Loading;
