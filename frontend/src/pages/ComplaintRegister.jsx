import React, { useState } from 'react';

const ComplaintRegister = () => {
    const [data, setData] = useState({
        title: "",
        description: "",
        category: "",
        location: "",
        image: null, // Initialize image as null
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData({
            ...data,
            [name]: value,
        });
    };


    const handleImageChange = (e) => {
        const imageFile = e.target.files[0];
        setData({
            ...data,
            image: imageFile, // Store the selected image file
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newComplaint = {
            title: data.title,
            description: data.description,
            category: data.category,
            location: data.location,
            image: data.image,
        };
        console.log(newComplaint);
        // Reset the form after submission
        setData({
            title: '',
            description: '',
            category: '',
            location: '',
            image: null,
        });
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white rounded-lg shadow-2xl py-4 px-8 w-full md:w-1/2 lg:w-1/3">
                <h2 className="text-3xl font-semibold text-blue-700 mb-3 text-center">Register Issue</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="title" className="block font-semibold mb-1 text-md text-gray-700">
                            Title:
                        </label>
                        <input
                            type="text"
                            id="title"
                            value={data.title}
                            onChange={handleChange}
                            required
                            name="title"
                            className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="description" className="block font-semibold mb-1 text-md text-gray-700">
                            Description:
                        </label>
                        <textarea
                            id="description"
                            value={data.description}
                            onChange={handleChange}
                            required
                            name="description"
                            className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="category" className="block font-semibold mb-1 text-md text-gray-700">
                            Category:
                        </label>
                        <select
                            id="category"
                            value={data.category}
                            onChange={handleChange}
                            name="category"
                            className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        >
                            <option value="">Select a category</option>
                            <option value="Category 1">Environmental Concerns</option>
                            <option value="Category 2">Infrastructure Issues</option>
                            <option value="Category 3">Transportation & Mobility</option>
                            <option value="Category 4">Public Safety & Security</option>
                            <option value="Category 5">Civic amenities & Services</option>
                            {/* Add more categories as needed */}
                        </select>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="location" className="block font-semibold mb-1 text-md text-gray-700">
                            Location:
                        </label>
                        <input
                            type="text"
                            id="location"
                            value={data.location}
                            onChange={handleChange}
                            required
                            name="location"
                            className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="image" className="block font-semibold mb-1 text-md text-gray-700">
                            Upload Image:
                        </label>
                        <input
                            type="file"
                            id="image"
                            onChange={handleImageChange}
                            accept="image/*" // Limit file selection to image types
                            className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>

                    <button
                        type="submit"
                        className="bg-blue-500 text-white p-2 rounded hover-bg-blue-600 focus:outline-none"
                    >
                        Submit Complaint
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ComplaintRegister;
