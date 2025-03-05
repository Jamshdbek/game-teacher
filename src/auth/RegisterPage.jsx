import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';

export default function Register() {
    const nav = useNavigate()
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        age: '',
        school: '',
        grade: '',
        parentName: '',
        phoneNumber: '',
        email: '',
        interests: []
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log('Form submitted:', formData);
        localStorage.setItem("user", JSON.stringify(formData));
        nav('/dashboard')
        // Handle form submission logic here
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800">
            <div className="container mx-auto px-4 py-8">
                {/* Header */}
                <div className="flex items-center justify-between mb-8">
                    <Link to="/" className="flex items-center text-gray-300 hover:text-white transition">
                        <ChevronLeft className="h-5 w-5 mr-1" />
                        Asosiy sahifaga qaytish
                    </Link>
                    <Link to="/login" className="text-gray-300 hover:text-white transition">
                        Kirish
                    </Link>
                </div>

                {/* Registration Form */}
                <div className="max-w-2xl mx-auto">
                    <div className="bg-slate-800 rounded-xl p-8 shadow-xl">
                        <h2 className="text-3xl font-bold text-white mb-6">O'quvchi ro'yxatdan o'tishi</h2>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {/* Personal Information */}
                                <div>
                                    <label className="block text-gray-300 mb-2">Ism</label>
                                    <input
                                        type="text"
                                        name="firstName"
                                        value={formData.firstName}
                                        onChange={handleChange}
                                        className="w-full bg-slate-700 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                                        required
                                    />
                                </div>

                                <div>
                                    <label className="block text-gray-300 mb-2">Familiya</label>
                                    <input
                                        type="text"
                                        name="lastName"
                                        value={formData.lastName}
                                        onChange={handleChange}
                                        className="w-full bg-slate-700 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                                        required
                                    />
                                </div>

                                <div>
                                    <label className="block text-gray-300 mb-2">Yosh</label>
                                    <input
                                        type="number"
                                        name="age"
                                        value={formData.age}
                                        onChange={handleChange}
                                        min="7"
                                        max="18"
                                        className="w-full bg-slate-700 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                                        required
                                    />
                                </div>

                                <div>
                                    <label className="block text-gray-300 mb-2">Sinf</label>
                                    <select
                                        name="grade"
                                        value={formData.grade}
                                        onChange={handleChange}
                                        className="w-full bg-slate-700 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                                        required
                                    >
                                        <option value="">Sinfni tanlang</option>
                                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map(grade => (
                                            <option key={grade} value={grade}>{grade}-sinf</option>
                                        ))}
                                    </select>
                                </div>

                                <div className="md:col-span-2">
                                    <label className="block text-gray-300 mb-2">Maktab nomi</label>
                                    <input
                                        type="text"
                                        name="school"
                                        value={formData.school}
                                        onChange={handleChange}
                                        className="w-full bg-slate-700 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                                        required
                                    />
                                </div>

                                {/* Contact Information */}
                                <div>
                                    <label className="block text-gray-300 mb-2">Ota-ona ismi</label>
                                    <input
                                        type="text"
                                        name="parentName"
                                        value={formData.parentName}
                                        onChange={handleChange}
                                        className="w-full bg-slate-700 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                                        required
                                    />
                                </div>

                                <div>
                                    <label className="block text-gray-300 mb-2">Telefon raqami</label>
                                    <input
                                        type="tel"
                                        name="phoneNumber"
                                        value={formData.phoneNumber}
                                        onChange={handleChange}
                                        placeholder="+998 XX XXX XX XX"
                                        className="w-full bg-slate-700 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                                        required
                                    />
                                </div>

                                <div className="md:col-span-2">
                                    <label className="block text-gray-300 mb-2">Email manzili</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full bg-slate-700 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                                        required
                                    />
                                </div>
                            </div>

                            {/* Submit Button */}
                            <div className="mt-8">
                                <button
                                    type="submit"
                                    className="w-full bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 transition duration-300"
                                >
                                    Ro'yxatdan o'tish
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}