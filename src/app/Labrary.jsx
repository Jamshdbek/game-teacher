import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ChevronLeft, Gamepad, Brain, Code, Notebook as Robot, Trophy, Star, Clock, TrendingUp } from 'lucide-react';
import set_com from "../assets/Appnormals1.png"
export default function Library() {
  const navigate = useNavigate();
  
  const categories = [
    { id: 1, name: "O'yin dasturlash", icon: Code, color: 'bg-blue-500', path: '/game-programming' },
    { id: 2, name: 'Mantiqiy fikrlash', icon: Brain, color: 'bg-green-500', path: '/logical-thinking' },
    { id: 3, name: 'Robototexnika', icon: Robot, color: 'bg-yellow-500', path: '/robotics' },
    { id: 4, name: "Raqamli sanat", icon: Gamepad, color: 'bg-purple-500', path: '/digital-art' },
  ];

  const games = [
    {
      id: 1,
      title: 'Code Master',
      image: set_com,
      description: 'O\'yin dasturlash simulyatori',
      category: 'O\'yin dasturlash',
      difficulty: 'Oson',
      link:"https://docs.google.com/presentation/d/1v4zPGl5CQjnkWnvfrrO_Vq26zSiCBWVWLiymqXIcrig/edit?slide=id.g2c7713057a1_0_518#slide=id.g2c7713057a1_0_518",
      rating: 4.8
    },
    {
      id: 2,
      title: 'Logic Puzzle',
      description: 'Mantiqiy masalalarni yechish',
      image: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?w=800&auto=format&fit=crop&q=60',
      category: 'Mantiqiy fikrlash',
      difficulty: "O'rta",
      link:"https://docs.google.com/presentation/d/16TmVadAkIYegr4k_VRcj2HqF_BU74Ot5iIZKLuzdx8M/edit?slide=id.g2c7713057a1_0_518#slide=id.g2c7713057a1_0_518",
      rating: 4.5
    },
  ];

  return (
    <div className='flex w-full bg-gradient-to-b from-slate-900 to-slate-800' >
    <div className="container mx-auto px-4 py-8 w-full bg-gradient-to-b from-slate-900 to-slate-800">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <Link to="/" className="flex items-center text-gray-300 hover:text-white transition">
          <ChevronLeft className="h-5 w-5 mr-1" />
          Asosiy sahifaga qaytish
        </Link>
      </div>

      {/* Categories */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        {categories.map((category) => {
          const IconComponent = category.icon;
          return (
            <div
              key={category.id}
              className={`${category.color} rounded-xl p-6 transition-transform hover:scale-105 cursor-pointer`}
              onClick={() => navigate(category.path)}
            >
              <IconComponent className="h-8 w-8 text-white mb-3" />
              <h3 className="text-lg font-semibold text-white">{category.name}</h3>
            </div>
          );
        })}
      </div>

      {/* Featured Section */}
      <div className="mb-12">
        <div className="flex items-center mb-6">
          <Trophy className="h-6 w-6 text-yellow-500 mr-2" />
          <h2 className="text-2xl font-bold text-white">Mashhur o'yinlar</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {games.map((game) => (
            <Link to={game.link}>
            <div key={game.id} className="bg-slate-800 rounded-xl cursor-pointer overflow-hidden shadow-lg hover:shadow-2xl transition-all">
              <img src={game.image} alt={game.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-white mb-2">{game.title}</h3>
                <p className="text-gray-400 text-sm mb-3">{game.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-purple-400 text-sm">{game.category}</span>
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-500 mr-1" />
                    <span className="text-white">{game.rating}</span>
                  </div>
                </div>
              </div>
            </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Recent and Popular Sections */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Recent Games */}
        <div className="bg-slate-800 rounded-xl p-6">
          <div className="flex items-center mb-6">
            <Clock className="h-6 w-6 text-blue-500 mr-2" />
            <h2 className="text-xl font-bold text-white">Yangi qo'shilganlar</h2>
          </div>
          <div className="space-y-4">
            {games.slice(0, 3).map((game) => (
              <div key={game.id} className="flex items-center space-x-4 p-3 rounded-lg hover:bg-slate-700 transition-colors">
                <img src={game.image} alt={game.title} className="w-16 h-16 rounded-lg object-cover" />
                <div>
                  <h3 className="text-white font-medium">{game.title}</h3>
                  <p className="text-gray-400 text-sm">{game.difficulty}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Popular Games */}
        <div className="bg-slate-800 rounded-xl p-6">
          <div className="flex items-center mb-6">
            <TrendingUp className="h-6 w-6 text-green-500 mr-2" />
            <h2 className="text-xl font-bold text-white">Ommabop o'yinlar</h2>
          </div>
          <div className="space-y-4">
            {games.slice().reverse().slice(0, 3).map((game) => (
              <div key={game.id} className="flex items-center space-x-4 p-3 rounded-lg hover:bg-slate-700 transition-colors">
                <img src={game.image} alt={game.title} className="w-16 h-16 rounded-lg object-cover" />
                <div>
                  <h3 className="text-white font-medium">{game.title}</h3>
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-500 mr-1" />
                    <span className="text-white">{game.rating}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}