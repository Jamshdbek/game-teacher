import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, PlayCircle, Clock, BookOpen, Brain, Lightbulb, Puzzle as PuzzlePiece } from 'lucide-react';

export default function LogicalThinking() {
  const lessons = [
    {
      id: 1,
      title: 'Algoritmlarga kirish',
      description: 'Kundalik hayotdagi algoritmlar va ularning ahamiyati',
      thumbnail: 'https://images.unsplash.com/photo-1509228627152-72ae9ae6848d?w=800&auto=format&fit=crop&q=60',
      duration: '10 daqiqa',
      difficulty: 'Boshlangich',
      videoUrl: '#'
    },
    {
      id: 2,
      title: 'Mantiqiy masalalar yechish',
      description: 'Qiziqarli mantiqiy masalalar va ularni yechish usullari',
      thumbnail: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=800&auto=format&fit=crop&q=60',
      duration: '15 daqiqa',
      difficulty: 'Orta',
      videoUrl: '#'
    },
    {
      id: 3,
      title: 'Matematik boshqotirmalar',
      description: 'Matematik fikrlashni rivojlantiruvchi mashqlar',
      thumbnail: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&auto=format&fit=crop&q=60',
      duration: '20 daqiqa',
      difficulty: 'Murakkab',
      videoUrl: '#'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-900 via-slate-900 to-teal-900">
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center mb-8 mt-4">
          <Link to="/dashboard" className="flex items-center text-emerald-300 hover:text-emerald-200 transition">
            <ChevronLeft className="h-5 w-5 mr-1" />
            Kutubxonaga qaytish
          </Link>
        </div>

        <div className="relative mb-12">
          <div className="absolute -top-8 -left-8 w-40 h-40 bg-emerald-500/10 rounded-full blur-2xl"></div>
          <div className="absolute top-0 right-0 w-32 h-32 bg-teal-500/10 rounded-full blur-xl"></div>
          <div className="relative flex items-center space-x-4 mb-2">
            <Brain className="h-12 w-12 text-emerald-400" />
            <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">
              Mantiqiy fikrlash darslari
            </h1>
          </div>
          <p className="text-emerald-200/80 ml-16">Aqlni charxlash va rivojlantirish</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {lessons.map((lesson) => (
            <div 
              key={lesson.id} 
              className="group relative bg-slate-800/50 backdrop-blur-xl rounded-xl overflow-hidden border border-emerald-500/20 hover:border-emerald-400/40 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/10 to-teal-600/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative">
                <img src={lesson.thumbnail} alt={lesson.title} className="w-full h-48 object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 to-transparent"></div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <PlayCircle className="h-16 w-16 text-emerald-400" />
                </div>
              </div>
              <div className="p-6 relative">
                <div className="flex items-center space-x-2 mb-3">
                  <Lightbulb className="h-5 w-5 text-emerald-400" />
                  <span className="text-xs text-emerald-300 uppercase tracking-wider">Mashq</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-emerald-300 transition-colors">
                  {lesson.title}
                </h3>
                <p className="text-gray-400 mb-4">{lesson.description}</p>
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center text-emerald-300/70">
                    <Clock className="h-4 w-4 mr-1" />
                    <span>{lesson.duration}</span>
                  </div>
                  <div className="flex items-center text-teal-300/70">
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