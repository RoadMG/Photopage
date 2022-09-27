import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import "./contents.css";
import { Link } from "react-router-dom";

const Contents = ({ datas, link }) => {
  const [current, setCurrent] = useState(0);
  const length = datas.length;
  const [sorce, setSorce] = useState(true);
  const [click, setClick] = useState(true);

  const MenuChange = () => {
    setClick(!click);
  };
  const getImg = (id) => {
    setCurrent(id - 1);
    setSorce(true);
  };
  const SetFalse = () => {
    setSorce(true);
  };

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const preSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(datas) || datas.length <= 0) {
    return null;
  }

  return (
    <div className="cont">
      <div className={sorce ? "content" : "content close"}>
        <div className="p-nav">
          <p
            style={{ fontWeight: "bold", cursor: "pointer", width: "100px" }}
            onClick={() => setSorce(false)}
          >
            Thumbnails
          </p>
          <p>
            ({current + 1}/{length})
          </p>
          <Link
            to={link}
            style={{
              fontWeight: "bold",
              color: "#2E2E2E",
              width: "100px",
              textAlign: "end",
            }}
          >
            Close
          </Link>
        </div>

        <div
          className="c-cont"
          style={{ backgroundImage: `url(${datas[current].img})` }}
        >
          <button className="p-left" onClick={preSlide}></button>
          <button className="p-right" onClick={nextSlide}></button>
        </div>

        <section className="c-section">
          <hr />
          <div className="c-desc">
            <p>Project</p>
            <h4>{datas[current].project}</h4>
          </div>
          <div className="c-desc">
            <p>{datas[current].descName}</p>
            <h4>{datas[current].desc}</h4>
          </div>
          <div className="c-desc">
            <p>Location</p>
            <h4>{datas[current].location}</h4>
          </div>
          <hr />
        </section>
      </div>
      <div className={sorce ? "thumb close" : "thumb"}>
        <Navbar MenuChange={MenuChange} SetFalse={SetFalse} />

        <div className={click ? "c-thumb open" : "c-thumb"}>
          {datas.map((item) => {
            return (
              <div key={item.id} onClick={() => getImg(item.id)}>
                <img
                  className="c-thumbpic"
                  src={item.img}
                  alt=""
                  style={{ width: "100%" }}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Contents;
