import React from 'react';
import { Link } from 'react-router-dom';
const Login = () => {
  return (
    <div className="bg-indigo-50 min-h-screen flex py-8 justify-center">
      <div className="bg-sky-400 h-[500px] border-2 border-black p-8 rounded-lg shadow-md w-96">
        <h2 className="text-3xl font-bold  text-center mb-4 text-gray-800">Login</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="username" className="block text-gray-800  font-semibold pb-1">
              Username<span className="text-rose-500">*</span>
            </label>
            <input
              type="text"
              id="username"
              className="w-full p-2 border border-indigo-900 rounded-lg  focus:outline-none focus:ring focus:border-rose-400"
              placeholder="Enter your username"
              required
            />
          </div>
          <div className="mb-4">
          <label htmlFor="username" className="block text-gray-800  font-semibold pb-1">
              Password<span className="text-rose-500">*</span>
            </label>
            <input
              type="password"
              id="password"
              className="w-full p-2 border border-indigo-900 rounded-lg  focus:outline-none focus:ring focus:border-rose-400"
              placeholder="Enter your password"
              required
            />
          </div>
          <div className="mb-4">
          <label htmlFor="username" className="block text-gray-800  font-semibold pb-1">Account Type</label>
            <select
              id="accountType"
              className="w-full p-2 border border-indigo-900 rounded-lg  focus:outline-none focus:ring focus:border-rose-400"
            >
              <option value="citizen">Citizen</option>
              <option value="authority">Authority</option>
              <option value="admin">Admin</option>
            </select>
          </div>
          <button
            type="submit"
            className="bg-rose-600 rounded-lg border mt-3 mb-2 border-black text-white w-full py-2  hover:bg-rose-500 focus:outline-none focus:ring"
          >
            Login
          </button>
        </form>
        <p className="text-center mt-3">
          New user? <Link to="/signup" className="text-rose-600">Sign Up</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
