import React, { useState, useRef, useEffect } from 'react';

const OtpInput = ({ length, onChange }) => {
    const [otp, setOtp] = useState(['', '', '', '']); // Initialize an array to store OTP values
    const inputRefs = [useRef(), useRef(), useRef(), useRef()]; // Create an array of refs for input elements

    useEffect(() => {
        inputRefs[0].current.focus(); // Auto-focus on the first input box
    }, []); // Empty dependency array ensures it runs once when the component mounts

    const handleChange = (e, index) => {
        const value = e.target.value;
        const newOtp = [...otp];

        if (value.length === 1) {
            newOtp[index] = value;
            setOtp(newOtp);

            if (index >= 0) {
                inputRefs[index + 1].current.focus(); // Auto-focus to the next input box
            } else {
                // If the last box and a digit is entered, trigger OTP verification
                verifyOtp();
            }
        } else if (value.length === 0) {
            newOtp[index] = '';
            setOtp(newOtp);

            if (index > 0) {
                inputRefs[index - 1].current.focus(); // Auto-focus to the previous input box
            }
        }

        onChange(newOtp.join('')); // Pass the OTP value to the parent component
    };

    const verifyOtp = () => {
        // You can add your OTP verification logic here
        // For now, we'll just print the OTP to the console
        console.log('Verifying OTP:', otp.join(''));
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white rounded-lg shadow-2xl py-4 px-8 w-full md:w-1/2 lg:w-1/3">
                <h2 className="text-3xl font-semibold text-blue-700 mb-3 text-center">Enter OTP</h2>
                <div className="mb-4 text-center">
                    <p>Please enter the OTP sent to your mobile number.</p>
                </div>
                <div className="flex justify-center mb-4">
                    {otp.map((digit, index) => (
                        <input
                            key={index}
                            ref={inputRefs[index]}
                            type="text"
                            value={digit}
                            onChange={(e) => handleChange(e, index)}
                            maxLength="1"
                            autoComplete="none"
                            className="w-12 h-12 text-4xl text-center border border-gray-300 rounded mx-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        />
                    ))}
                </div>
                <button
                    type="button"
                    className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 focus:outline-none w-full"
                    onClick={verifyOtp}
                >
                    Verify OTP
                </button>
            </div>
        </div>
    );
};

export default OtpInput;