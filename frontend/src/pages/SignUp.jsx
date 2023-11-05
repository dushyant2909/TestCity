import React, { useState } from 'react';
import { FiEye, FiEyeOff } from 'react-icons/fi'; // You will need to install 'react-icons/fi' for the icons
import { Link } from 'react-router-dom';

const SignUp = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [selectedState, setSelectedState] = useState('Andhra Pradesh'); // Default selected state
    const [selectedCity, setSelectedCity] = useState('Visakhapatnam'); // Default selected city

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    // Array of state options
    const states = [
        'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh',
        'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jharkhand',
        'Karnataka', 'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Manipur',
        'Meghalaya', 'Mizoram', 'Nagaland', 'Odisha', 'Punjab',
        'Rajasthan', 'Sikkim', 'Tamil Nadu', 'Telangana', 'Tripura',
        'Uttar Pradesh', 'Uttarakhand', 'West Bengal'
    ];

    const stateCities = {
        'Andhra Pradesh': ['Visakhapatnam', 'Vijayawada', 'Guntur', 'Nellore', 'Kurnool'],
        'Arunachal Pradesh': ['Itanagar', 'Naharlagun', 'Tawang', 'Bomdila'],
        'Assam': ['Guwahati', 'Dispur', 'Silchar', 'Dibrugarh', 'Jorhat'],
        'Bihar': ['Patna', 'Gaya', 'Muzaffarpur', 'Bhagalpur', 'Darbhanga'],
        'Chhattisgarh': ['Raipur', 'Bilaspur', 'Durg', 'Bhilai'],
        'Goa': ['Panaji', 'Margao', 'Vasco da Gama'],
        'Gujarat': ['Ahmedabad', 'Surat', 'Vadodara', 'Rajkot', 'Gandhinagar'],
        'Haryana': ['Chandigarh', 'Faridabad', 'Gurgaon', 'Hisar', 'Rohtak'],
        'Himachal Pradesh': ['Shimla', 'Manali', 'Dharamshala', 'Mandi', 'Solan'],
        'Jharkhand': ['Ranchi', 'Jamshedpur', 'Dhanbad', 'Bokaro', 'Hazaribagh'],
        'Karnataka': ['Bengaluru (Bangalore)', 'Mysore', 'Hubli', 'Mangalore', 'Belgaum'],
        'Kerala': ['Thiruvananthapuram', 'Kochi', 'Kozhikode', 'Thrissur', 'Kollam'],
        'Madhya Pradesh': ['Bhopal', 'Indore', 'Gwalior', 'Jabalpur', 'Ujjain'],
        'Maharashtra': ['Mumbai', 'Pune', 'Nagpur', 'Thane', 'Nashik'],
        // Add more states and cities as needed
    };

    return (
        <div className="bg-indigo-50 min-h-screen flex items-center justify-center">
            <div className="bg-sky-400 p-7 rounded-lg shadow-md max-w-2xl mx-auto">
                <h2 className="text-3xl font-bold text-center mb-3 text-gray-800">Sign Up</h2>
                <form>
                    <div className="grid grid-cols-3 gap-1">
                        <div className="col-span-3">
                            <label htmlFor="name" className="block text-gray-800 font-semibold pb-1">
                                Name<span className="text-rose-500">*</span>
                            </label>
                            <input
                                type="text"
                                id="name"
                                className="w-full p-2 border border-indigo-900 rounded-lg focus:outline-none focus:ring focus:border-rose-400"
                                placeholder="Enter your name"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-gray-800 font-semibold pb-1">
                                Email<span className="text-rose-500">*</span>
                            </label>
                            <input
                                type="email"
                                id="email"
                                className="w-full p-2 border border-indigo-900 rounded-lg focus:outline-none focus:ring focus:border-rose-400"
                                placeholder="Enter your email"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="phone" className="block text-gray-800 font-semibold pb-1">
                                Phone<span className="text-rose-500">*</span>
                            </label>
                            <input
                                type="tel"
                                id="phone"
                                className="w-full p-2 border border-indigo-900 rounded-lg focus:outline-none focus:ring focus:border-rose-400"
                                placeholder="Enter your phone number"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="gender" className="block text-gray-800 font-semibold pb-1">
                                Gender<span className="text-rose-500">*</span>
                            </label>
                            <select
                                id="gender"
                                className="w-full p-2 border border-indigo-900 rounded-lg focus:outline-none focus:ring focus:border-rose-400"
                                required
                            >
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="other">Other</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="state" className="block text-gray-800 font-semibold pb-1">
                                State<span className="text-rose-500">*</span>
                            </label>
                            <select
                                id="state"
                                className="w-full p-2 border border-indigo-900 rounded-lg focus:outline-none focus:ring focus:border-rose-400"
                                required
                                value={selectedState}
                                onChange={(event) => setSelectedState(event.target.value)}
                            >
                                {/* Mapping through the states array to generate options */}
                                {states.map((state, index) => (
                                    <option key={index} value={state}>
                                        {state}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div>
                            <label htmlFor="city" className="block text-gray-800 font-semibold pb-1">
                                City<span className="text-rose-500">*</span>
                            </label>
                            <select
                                id="city"
                                className="w-full p-2 border border-indigo-900 rounded-lg focus:outline-none focus:ring focus:border-rose-400"
                                required
                                value={selectedCity}
                                onChange={(event) => setSelectedCity(event.target.value)}
                            >
                                {stateCities[selectedState].map((city, index) => (
                                    <option key={index} value={city}>
                                        {city}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div>
                            <label htmlFor="password" className="block text-gray-800 font-semibold pb-1">
                                Password<span className="text-rose-500">*</span>
                            </label>
                            <div className="relative">
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    id="password"
                                    className="w-full flex items-center p-2 border border-indigo-900 rounded-lg focus:outline-none focus:ring focus:border-rose-400"
                                    placeholder="Enter your password"
                                    required
                                />
                                <button
                                    type="button"
                                    className="absolute top-2 right-2"
                                    onClick={togglePasswordVisibility}
                                >
                                    {showPassword ? <FiEyeOff style={{ paddingTop: "5px" }} size={23.5} /> : <FiEye size={23.5} style={{ paddingTop: "5px" }} />}
                                </button>
                            </div>
                        </div>
                        <div className="col-span-3">
                            <label htmlFor="address" className="block text-gray-800 font-semibold pb-1">
                                Address<span className="text-rose-500">*</span>
                            </label>
                            <textarea
                                id="address"
                                rows="3"
                                className="w-full p-2 border border-indigo-900 rounded-lg focus:outline-none focus:ring focus:border-rose-400"
                                placeholder="Enter your address"
                                required
                            ></textarea>
                        </div>

                    </div>
                    <button
                        type="submit"
                        className="bg-rose-600 rounded-lg border mt-6 border-black text-white w-full py-2 hover-bg-rose-500 focus:outline-none focus-ring"
                    >
                        Sign Up
                    </button>
                </form>
                <p className="text-center mt-3">
                    Already have an account? <Link to="/login" className="text-rose-600">Login</Link>
                </p>
            </div>
        </div>
    );
};

export default SignUp;
