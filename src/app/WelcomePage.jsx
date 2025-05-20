import {
    TowerControl as GameController,
    ChevronRight,
    Github,
    Youtube,
    Gamepad2,
    Sparkles,
    GraduationCap,
    Rocket
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const WelcomePage = () => {
    const nav = useNavigate()
    return (
        <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800">
            {/* Navigation */}
            <nav className="container mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                        <Gamepad2 className="h-8 w-8 text-purple-500" />
                        <span className="text-2xl font-bold text-white">Robbiy Platform</span>
                    </div>
                    <button onClick={() => nav("/register")} className="bg-purple-600 text-white px-6 py-2 rounded-full hover:bg-purple-700 transition">
                        Kirish
                    </button>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="container mx-auto px-6 py-20">
                <div className="flex flex-col md:flex-row items-center">
                    <div className="md:w-1/2">
                        <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
                            Game Development
                            <span className="text-purple-500">Siz uchun</span>
                        </h1>
                        <p className="mt-6 text-xl text-gray-300">
                            Bizning keng qamrovli kurslarimiz bilan Game Devni o'zlashtiring.
                            Bizda bolalardan tortib o‘smirlargacha, hamma uchun o‘rganish yo‘llari bor.
                        </p>
                        <div className="mt-8 flex space-x-4 text-center justify-center">
                            <button onClick={() => nav("/register")} className="bg-purple-600 text-white px-8 py-3 rounded-full hover:bg-purple-700 transition flex items-center">
                                Platformaga Kirish
                                <ChevronRight className="ml-2 h-5 w-5" />
                            </button>

                        </div>
                    </div>
                    <div className="md:w-1/2 mt-10 md:mt-0 relative group">
                        <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000"></div>
                        {/* <img
                            src="https://images.unsplash.com/photo-1552820728-8b83bb6b773f?auto=format&fit=crop&w=800&q=80"
                            alt="Game Development"
                            className="relative rounded-lg shadow-2xl transform transition duration-500 group-hover:scale-105"
                        /> */}
                        <img
                            src="https://img-c.udemycdn.com/course/750x422/6463367_837e.jpg"
                            alt="Game Development"
                            className="relative rounded-lg shadow-2xl transform transition duration-500 group-hover:scale-105"
                        />
                    </div>
                </div>
            </section>

            {/* Age Groups Section */}
            <section className="container mx-auto px-6 py-20">
                <h2 className="text-4xl font-bold text-white text-center mb-16">Har bir yosh uchun o'rganish yo'llari</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    <div className="relative group">
                        <div className="absolute -inset-1 bg-gradient-to-r from-pink-600 to-purple-600 rounded-xl blur opacity-25 group-hover:opacity-75 transition duration-1000"></div>
                        <div className="relative bg-slate-800 p-8 rounded-xl transform transition duration-500 group-hover:-translate-y-2">
                            <Sparkles className="h-12 w-12 text-pink-500 mb-4" />
                            <h3 className="text-2xl font-bold text-white mb-4">Bolalar (7-12)</h3>
                            <p className="text-gray-400 mb-6">O'yin yaratish orqali asosiy dasturlash tushunchalarini o'rgatadigan qiziqarli, interaktiv platforma</p>
                            <ul className="space-y-3 text-gray-300">
                                <li>• Dasturlash</li>
                                <li>• Boshlang'ich Game Logic</li>
                                <li>• 2D O'yinlar</li>
                            </ul>
                        </div>
                    </div>
                    <div className="relative group">
                        <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl blur opacity-25 group-hover:opacity-75 transition duration-1000"></div>
                        <div className="relative bg-slate-800 p-8 rounded-xl transform transition duration-500 group-hover:-translate-y-2">
                            <GraduationCap className="h-12 w-12 text-purple-500 mb-4" />
                            <h3 className="text-2xl font-bold text-white mb-4">O'smirlar (13-17)</h3>
                            <p className="text-gray-400 mb-6">Haqiqiy dasturlash tillari va o'yin codingga qaratilgan oraliq kurslar.</p>
                            <ul className="space-y-3 text-gray-300">
                                <li>• Python darslar</li>
                                <li>• Unity Basics darslar</li>
                                <li>• JavaScript darslar</li>
                            </ul>
                        </div>
                    </div>
                    <div className="relative group">
                        <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl blur opacity-25 group-hover:opacity-75 transition duration-1000"></div>
                        <div className="relative bg-slate-800 p-8 rounded-xl transform transition duration-500 group-hover:-translate-y-2">
                            <Rocket className="h-12 w-12 text-blue-500 mb-4" />
                            <h3 className="text-2xl font-bold text-white mb-4">Kattalar</h3>
                            <p className="text-gray-400 mb-6">Professional o'yinlarni ishlab chiqish va sanoat standartlarini o'z ichiga olgan ilg'or kurslar.</p>
                            <ul className="space-y-3 text-gray-300">
                                <li>• Unreal Engine darslar</li>
                                <li>• 3D O'yinlar bo'yicha ko'nikma</li>
                                <li>• Game Architecture bo'yicha darslar</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Popular Courses Section */}
            <section className="container mx-auto px-6 py-20">
                <h2 className="text-4xl font-bold text-white text-center mb-16">Loyihalar</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="group relative overflow-hidden rounded-xl">
                        <img
                            src="https://realpython.com/cdn-cgi/image/width=1920,format=auto/https://files.realpython.com/media/Build-an-AI-Game-Engine-for-Tic-Tac-Toe-in-Python_Watermarked.b90cdf84c417.jpg"
                            alt="Tok Tak Toe mashxur o'yinin yaratish"
                            className="w-full h-64 object-cover transform transition duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex items-end p-6">
                            <div>
                                <h3 className="text-xl font-bold text-white">Tik Tak Toe O'yin yaratish</h3>
                                <p className="text-gray-300 mt-2">2D oyinlar</p>
                            </div>
                        </div>
                    </div>
                    <div className="group relative overflow-hidden rounded-xl">
                        <img
                            src="	https://miro.medium.com/v2/resize:fit:1400/format:webp/0*KbrAjjJaeHlrObLj.png"
                            alt="Puzzle Game"
                            className="w-full h-64 object-cover transform transition duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex items-end p-6">
                            <div>
                                <h3 className="text-xl font-bold text-white">Ilon o'yin (Snake 2d game)</h3>
                                <p className="text-gray-300 mt-2">Ilon o'yin yaratish </p>
                            </div>
                        </div>
                    </div>
                    <div className="group relative overflow-hidden rounded-xl">
                        <img
                            src="https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?auto=format&fit=crop&w=800&q=80"
                            alt="3D Game"
                            className="w-full h-64 object-cover transform transition duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex items-end p-6">
                            <div>
                                <h3 className="text-xl font-bold text-white">3D Adventure</h3>
                                <p className="text-gray-300 mt-2">Qo'shimcha darslar</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="container mx-auto px-6 py-20">
                <div className="bg-gradient-to-r from-purple-600 to-purple-800 rounded-2xl p-12 text-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=2000&q=80')] opacity-10 bg-cover bg-center"></div>
                    <div className="relative z-10">
                        <h2 className="text-4xl font-bold text-white mb-6">Game Dev olamiga sayohatingizni boshlashga tayyormisiz?</h2>
                        <p className="text-xl text-purple-100 mb-8">Aynan shu yerda boshlangan minglab muvaffaqiyatli oʻyin ishlab chiqaruvchilariga qoʻshiling.</p>
                        <button onClick={()=>nav("/register")} className="bg-white text-purple-600 px-8 py-3 rounded-full hover:bg-gray-100 transition font-semibold">
                            Boshlash
                        </button>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-slate-900 py-12">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <div className="flex items-center space-x-2 mb-4 md:mb-0">
                            <Gamepad2 className="h-6 w-6 text-purple-500" />
                            <span className="text-xl font-bold text-white">Robbiy</span>
                        </div>
                        <div className="flex space-x-6">
                            <a href="#" className="text-gray-400 hover:text-white transition">
                                <Github className="h-6 w-6" />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white transition">
                                <Youtube className="h-6 w-6" />
                            </a>
                        </div>
                    </div>
                    <div className="mt-8 text-center text-gray-400">
                        <p>&copy; 2025.</p>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default WelcomePage