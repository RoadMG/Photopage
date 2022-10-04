import Navbar from "../Navbar/Navbar";
import "./project.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Project() {
  const projMobile = useSelector((state) => state.projClick);
  const mobile = useSelector((state) => state.contClick);
  console.log(mobile, projMobile);
  return (
    <div className="project">
      <Navbar />

      <div
        className={
          mobile
            ? `p-cont p-tmargin ${projMobile ? "" : "top"}`
            : "p-cont close"
        }
      >
        <Link to="/palace" className="p-imglink">
          <img className="p-img" src={"/image/Palace/Palace6.jpg"} alt="..." />
          <p>Korean Palace</p>
        </Link>
        <Link to="/coldtree" className="p-imglink">
          <img className="p-img" src={"/image/City/City2.jpeg"} alt="..." />
          <p>Memories</p>
        </Link>
        <Link to="/archtr" className="p-imglink">
          <img
            className="p-img"
            src={"/image/Architecture/Architecture6.jpg"}
            alt="..."
          />
          <p>Architecture</p>
        </Link>
        <Link to="/sea" className="p-imglink">
          <img className="p-img" src={"/image/Sea/Sea2.jpg"} alt="..." />
          <p>See the Sea</p>
        </Link>
      </div>
    </div>
  );
}

export default Project;
