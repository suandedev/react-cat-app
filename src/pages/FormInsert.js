import {Link} from 'react-router-dom';
var FormInsert = () => {
  return (
    <>
      <div className="content">
        <h3 className="text-gray-700 font-semibold text-xl capitalize ">
          Post Form
        </h3>
        <form
          method=""
          action="#"
          className="flex flex-col max-w-xl m-auto bg-sky-200 p-4 rounded-lg shadow-lg space-y-4"
        >
          <div className="flex flex-col space-y-2">
            <label className="capitalize text-gray-700 font-sans">title</label>
            <input
              className="bg-gray-100 p-2 rounded shadow-lg focus:outline-none focus:ring-1 focus:ring-sky-500 text-gray-600"
              type="text"
              placeholder="title..."
            />
          </div>
          <div className="flex flex-col space-y-2">
            <label className="capitalize text-gray-700 font-sans">
              description
            </label>
            <input
              className="bg-gray-100 p-2 rounded shadow-lg focus:outline-none focus:ring-1 focus:ring-sky-500 text-gray-600"
              type="text"
              placeholder="description..."
            />
          </div>
          <div className="flex flex-col space-y-2 font-sans text-gray-700">
            <label>Upload Image</label>
            <input
              className="block w-full tegray-700 bg-gray-100 rounded-lg shadow-lg cursor-pointer focus:outline-none p-1"
              type="file"
            ></input>
          </div>
          <div className="flex flex-row space-x-2 items-center">
            <button
              type="button"
              className="bg-sky-500 rounded-lg p-2 text-gray-100 hover:bg-sky-600 hover:text-gray-50 transition-all w-fit uppercase font-semibold text-sm"
            >
              save
            </button>
            <Link to='/posts' className="w-fit text-red-500 font-semibold capitalize hover:text-red-600 transition-all">cancel</Link>
          </div>
        </form>
      </div>
    </>
  );
};
export default FormInsert;
