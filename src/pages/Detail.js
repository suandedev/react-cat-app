import { Link } from "react-router-dom";
import Card from "../components/Card";

var Detail = (props) => {
  return (
    <div className="content">
      <h3 className="text-gray-700 font-semibold text-xl capitalize">
        Detail page
      </h3>
      {/* card */}
      <div className="flex flex-col m-auto max-w-screen-lg shadow-lg rounded-lg p-4 bg-gray-100 space-y-2">
        <div className="relative">
          <img className="block rounded-lg" src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1143&q=80" alt={props.alt} />
          <span className="absolute top-2 right-2 bg-gray-800/30 text-gray-100 p-2 rounded-md text-xs">3 minute ago</span>
        </div>
        <h3 className="text-gray-700 text-xl font-semibold capitalize">Cat One</h3>
        <p className="text-gray-600 ">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt quam ipsam vitae modi a nesciunt minus blanditiis impedit voluptas voluptatem.</p>
        <Link className="text-right uppercase text-xs font-semibold  text-indigo-500 hover:text-indigo-700" to="/posts">
          back
        </Link>
      </div>
      {/* end card */}
    </div>
  );
};

export default Detail;
