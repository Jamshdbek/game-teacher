import { useState } from "react";
import { Link } from 'react-router-dom';
import { ChevronLeft, Lock, Mail } from 'lucide-react';
import { account } from "../appwriteConfig";
const LoginPage = () => {

    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        try {
            account.create("unique()", formData.email, formData.password).then((res) => {
                console.log(res)
                console.log("User created:", res);
            })
        } catch (error) {
            console.error("Sign-up error:", error);
        }
        // Handle login logic here
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
                    <Link to="/register" className="text-gray-300 hover:text-white transition">
                        Ro'yxatdan o'tish
                    </Link>
                </div>

                {/* Login Form */}
                <div className="max-w-md mx-auto">
                    <div className="bg-slate-800 rounded-xl p-8 shadow-xl">
                        <h2 className="text-3xl font-bold text-white mb-6">Tizimga kirish</h2>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="space-y-4">
                                <div>
                                    <label className="block text-gray-300 mb-2">Email manzili</label>
                                    <div className="relative">
                                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="w-full bg-slate-700 text-white rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                                            required
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-gray-300 mb-2">Parol</label>
                                    <div className="relative">
                                        <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                                        <input
                                            type="password"
                                            name="password"
                                            value={formData.password}
                                            onChange={handleChange}
                                            className="w-full bg-slate-700 text-white rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="flex items-center justify-between">
                                    <div className="flex items-center">
                                        <input
                                            type="checkbox"
                                            id="remember"
                                            className="h-4 w-4 rounded border-gray-300 text-purple-600 focus:ring-purple-500"
                                        />
                                        <label htmlFor="remember" className="ml-2 block text-sm text-gray-300">
                                            Meni eslab qol
                                        </label>
                                    </div>
                                    <a href="#" className="text-sm text-purple-400 hover:text-purple-300">
                                        Parolni unutdingizmi?
                                    </a>
                                </div>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 transition duration-300"
                            >
                                Kirish
                            </button>

                            <p className="text-center text-gray-400 text-sm">
                                Hisobingiz yo'qmi?{' '}
                                <Link to="/register" className="text-purple-400 hover:text-purple-300">
                                    Ro'yxatdan o'ting
                                </Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default LoginPage