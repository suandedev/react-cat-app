import {Link} from "react-router-dom";
import Button from "./Button";

var Card = (props) => {
  return (
    <>
      {/* card */}
      <div className="flex flex-col max-w-sm mt-4 border rounded-lg shadow-lg space-y-2 p-4">
        <div className="relative hover:scale-110 hover:duration-300 hover:ease-in-out">
          <img
            className="block rounded-lg"
            src={props.url}
            alt={props.alt}
          />
          <span className="absolute top-2 right-2 p-3  rounded-md text-gray-100 bg-gray-500/30">{props.time}</span>
        </div>
        <h3 className="text-gray-700 font-semibold capitalize text-xl">{props.title}</h3>
        <p className="text-gray-600">{props.desc}</p>
        <Link className="text-indigo-500 font-bold inline-block transition-all w-fit rounded-lg hover:text-indigo-600" to="/posts/detail">{props.link}</Link>
      </div>
      {/* end card */}
    </>
  );
};

export default Card;
