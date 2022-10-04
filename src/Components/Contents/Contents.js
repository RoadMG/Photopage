import React, { useState, useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import "./contents.css";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { useSelector } from "react-redux";

const contVariants = {
  hidden: {
    opacity: 0,
  },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
};

const Contents = ({ datas, link }) => {
  const setScreenSize = () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  };

  useEffect(() => {
    setScreenSize();
  }, []);

  const click = useSelector((state) => state.menuClick);
  const length = datas.length;
  const [current, setCurrent] = useState(0);
  const [sorce, setSorce] = useState(true);

  const getImg = (id) => {
    setCurrent(id - 1);
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
            onClick={() => {
              setSorce(false);
            }}
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
        <AnimatePresence initial={false}>
          <motion.div
            className="c-conbox"
            variants={contVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ type: "tween", duration: 0.5 }}
            key={current}
          >
            {datas.slice(current, current + 1).map((prop) => (
              <div key={"total" + prop.id}>
                <motion.div
                  className="c-cont"
                  style={{
                    backgroundImage: `url(${prop.img})`,
                  }}
                  key={"big" + prop.id}
                >
                  <button
                    className="p-left"
                    onClick={() => preSlide()}
                  ></button>
                  <button
                    className="p-right"
                    onClick={() => nextSlide()}
                  ></button>
                </motion.div>
                <section className="c-section">
                  <hr />
                  <div className="c-desc">
                    <p>Project</p>
                    <h4>{prop.project}</h4>
                  </div>
                  <div className="c-desc">
                    <p>{prop.descName}</p>
                    <h4>{prop.desc}</h4>
                  </div>
                  <div className="c-desc">
                    <p>Location</p>
                    <h4>{prop.location}</h4>
                  </div>
                  <hr />
                </section>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
      <div className={sorce ? "thumb close" : "thumb"}>
        <Navbar />
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
