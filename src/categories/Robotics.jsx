import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, PlayCircle, Clock, BookOpen, Cpu, Cog, Zap } from 'lucide-react';

export default function Robotics() {
  const lessons = [
    {
      id: 1,
      title: 'Robotlar haqida asosiy tushunchalar',
      description: 'Robotlar tarixi va ularning turlari',
      thumbnail: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&auto=format&fit=crop&q=60',
      duration: '15 daqiqa',
      difficulty: 'Boshlangich',
      videoUrl: '#'
    },
    {
      id: 2,
      title: 'Arduino bilan ishlash',
      description: 'Arduino platformasida dasturlash asoslari',
      thumbnail: 'https://images.unsplash.com/photo-1568144628871-ccbb00fc297c?w=800&auto=format&fit=crop&q=60',
      duration: '25 daqiqa',
      difficulty: "O'rta",
      videoUrl: '#'
    },
    {
      id: 3,
      title: 'Robot qol yasash',
      description: 'Oddiy materiallardan robot qol yasash loyihasi',
      thumbnail: 'https://images.unsplash.com/photo-1535378917042-10a22c95931a?w=800&auto=format&fit=crop&q=60',
      duration: '30 daqiqa',
      difficulty: 'Murakkab',
      videoUrl: '#'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-900 via-slate-900 to-indigo-900">
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center mb-8 mt-4">
          <Link to="/dashboard" className="flex items-center text-cyan-300 hover:text-cyan-200 transition">
            <ChevronLeft className="h-5 w-5 mr-1" />
            Kutubxonaga qaytish
          </Link>
        </div>

        <div className="relative mb-12">
          <div className="absolute -top-6 -left-6 w-32 h-32 bg-cyan-500/20 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute -top-4 right-4 w-24 h-24 bg-indigo-500/20 rounded-full blur-xl"></div>
          <div className="relative flex items-center space-x-4 mb-2">
            <Cpu className="h-12 w-12 text-cyan-400" />
            <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400">
              Robototexnika darslari
            </h1>
          </div>
          <p className="text-cyan-200/80 ml-16">Kelajak texnologiyalarini bugun organing</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {lessons.map((lesson) => (
            <div 
              key={lesson.id} 
              className="group relative bg-slate-800/50 backdrop-blur-xl rounded-xl overflow-hidden border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-600/10 to-indigo-600/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative">
                <img src={lesson.thumbnail} alt={lesson.title} className="w-full h-48 object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 to-transparent"></div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <PlayCircle className="h-16 w-16 text-cyan-400" />
                </div>
              </div>
              <div className="p-6 relative">
                <div className="flex items-center space-x-2 mb-3">
                  <Cog className="h-5 w-5 text-cyan-400 animate-spin-slow" />
                  <span className="text-xs text-cyan-300 uppercase tracking-wider">Loyiha</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                  {lesson.title}
                </h3>
                <p className="text-gray-400 mb-4">{lesson.description}</p>
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center text-cyan-300/70">
                    <Clock className="h-4 w-4 mr-1" />
                    <span>{lesson.duration}</span>
                  </div>
                  <div className="flex items-center text-indigo-300/70">
                    <BookOpen className="h-4 w-4 mr-1" />
                    <span>{lesson.difficulty}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}