import React, { useState } from "react";
import "./contents.css";
import Contents from "./Contents";

const Thumbnail = () => {
  return (
    <div>
      <div className="contents-thumb">
        {datas.map((item, index) => {
          return (
            <div
              className="contents-thumpic"
              key={index}
              onClick={() => <Contents />}
            >
              <img src={item.img} alt="" style={{ width: "100%" }} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Thumbnail;
