"use client";
import React, { useState, FormEvent, ChangeEvent } from "react";

interface FormData {
    name: string;
    phone: string;
    email: string;
    resumeLink: string;
    position: string;
}

const Careers = () => {
    const [formData, setFormData] = useState<FormData>({
        name: "",
        phone: "",
        email: "",
        resumeLink: "",
        position: "",
    });
    const [focusedField, setFocusedField] = useState<string>("");

    const handleFocus = (fieldName: string) => {
        setFocusedField(fieldName);
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Handle form submission here, you can use formData to send the data to your backend
        console.log("Form submitted with data:", formData);
        // Reset form after submission
        setFormData({
            name: "",
            phone: "",
            email: "",
            resumeLink: "",
            position: "",
        });
    };
    return (
        <section className="container mx-auto lg:px-16 px-4 md:my-20 my-16">
            <p className="py-2 px-4 rounded-full border inline ">
                join our team
            </p>
            <h2 className="md:text-7xl text-6xl mt-6 uppercase font-semibold">
                Be the part of our mission
            </h2>
            <p className="md:w-10/12 md:text-base text-xs pt-6">
                Discover exciting career opportunities at Diginite it. Join our
                dynamic team dedicated to innovation and collaboration. Grow
                personally and professionally in a supportive environment. Shape
                the future with us – explore our openings today.
            </p>
            <div className="my-16">
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label
                            className="block text-gray-400 text-sm font-bold mb-2"
                            htmlFor="name"
                        >
                            Your Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            className="appearance-none border-b bg-transparent border-gray-300 py-4 w-full px-3 text-gray-700 leading-tight focus:outline-none focus:border-indigo-500"
                            onFocus={() => handleFocus("name")}
                            onBlur={() => setFocusedField("")}
                            value={formData.name}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mb-4">
                        <label
                            className="block text-gray-400 text-sm font-bold mb-2"
                            htmlFor="phone"
                        >
                            Phone Number
                        </label>
                        <input
                            type="text"
                            id="phone"
                            name="phone"
                            className="appearance-none border-b bg-transparent border-gray-300 py-4 w-full px-3 text-gray-700 leading-tight focus:outline-none focus:border-indigo-500"
                            onFocus={() => handleFocus("phone")}
                            onBlur={() => setFocusedField("")}
                            value={formData.phone}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mb-4">
                        <label
                            className="block text-gray-400 text-sm font-bold mb-2"
                            htmlFor="email"
                        >
                            Your Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="appearance-none border-b bg-transparent border-gray-300 py-4 w-full px-3 text-gray-700 leading-tight focus:outline-none focus:border-indigo-500"
                            onFocus={() => handleFocus("email")}
                            onBlur={() => setFocusedField("")}
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mb-4">
                        <label
                            className="block text-gray-400 text-sm font-bold mb-2"
                            htmlFor="resumeLink"
                        >
                            Your Resume Link
                        </label>
                        <input
                            type="text"
                            id="resumeLink"
                            name="resumeLink"
                            className="appearance-none border-b bg-transparent border-gray-300 py-4 w-full px-3 text-gray-700 leading-tight focus:outline-none focus:border-indigo-500"
                            onFocus={() => handleFocus("resumeLink")}
                            onBlur={() => setFocusedField("")}
                            value={formData.resumeLink}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mb-4">
                        <label
                            className="block text-gray-400 text-sm font-bold mb-2"
                            htmlFor="position"
                        >
                            Position
                        </label>
                        <input
                            type="text"
                            id="position"
                            name="position"
                            className="appearance-none border-b bg-transparent border-gray-300 py-4 w-full px-3 text-gray-700 leading-tight focus:outline-none focus:border-indigo-500"
                            onFocus={() => handleFocus("position")}
                            onBlur={() => setFocusedField("")}
                            value={formData.position}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mb-6 mt-2">
                        <button
                            type="submit"
                            className="bg-primary w-full text-white font-semibold py-4 px-4 focus:outline-none focus:shadow-outline"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default Careers;
