import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ChevronLeft, PlayCircle, Clock, BookOpen, Palette, Brush, Image } from 'lucide-react';

export default function DigitalArt() {
    const navigator = useNavigate()
  const lessons = [
    {
      id: 1,
      title: "Raqamli sanat asoslari",
      description: "Raqamli sanat turlari va asosiy tushunchalar",
      thumbnail: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&auto=format&fit=crop&q=60',
      duration: '12 daqiqa',
      difficulty: 'Boshlangich',
      views: "1.2k",
      likes: 856,
      instructor: "Srojddin Komilov",
      youtubeId:"https://www.youtube.com/watch?v=2BlETkdYFJk&list=PLY4N-4FJdZQCzjRxjFfHQ57xAYvKmk2Yo&index=1",
      linik:"/video/digital-art/2",
      videoUrl: '#'
    },
    {
      id: 2,
      title: 'Piksel art yaratish',
      description: 'Piksel art texnikasi va asboblari',
      thumbnail: 'https://images.unsplash.com/photo-1563206767-5b18f218e8de?w=800&auto=format&fit=crop&q=60',
      duration: '20 daqiqa',
      views: "1.2k",
      likes: 856,
      instructor: "Srojddin Komilov",
      youtubeId:"https://www.youtube.com/watch?v=pYiGITH2z3s&list=PLY4N-4FJdZQCzjRxjFfHQ57xAYvKmk2Yo&index=2",
      linik:"/video/digital-art/2",
      difficulty: "O'rta",
      videoUrl: '#'
    },
    {
      id: 3,
      title: '3D modellashtirish',
      description: 'Blender da sodda 3D modellar yaratish',
      thumbnail: 'https://images.unsplash.com/photo-1617791160505-6f00504e3519?w=800&auto=format&fit=crop&q=60',
      duration: '30 daqiqa',
      views: "1.2k",
      likes: 856,
      linik:"/video/digital-art/2",
      instructor: "Srojddin Komilov",
      youtubeId:"https://www.youtube.com/watch?v=IgO3wN-17yw&list=PLY4N-4FJdZQCzjRxjFfHQ57xAYvKmk2Yo&index=3",
      linik:"/video/game-programming/1",
      difficulty: 'Murakkab',
      videoUrl: '#'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-900 via-slate-900 to-violet-900">
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center mb-8 mt-4Asosiy sahifaga qaytish">
          <Link to="/dashboard" className="flex items-center text-pink-300 hover:text-pink-200 transition">
            <ChevronLeft className="h-5 w-5 mr-1" />
            Kutubxonaga qaytish
          </Link>
        </div>

        <div className="relative mb-12">
          <div className="absolute -top-8 -left-8 w-40 h-40 bg-pink-500/20 rounded-full blur-2xl"></div>
          <div className="absolute top-0 right-0 w-32 h-32 bg-violet-500/20 rounded-full blur-xl"></div>
          <div className="relative flex items-center space-x-4 mb-2">
            <Palette className="h-12 w-12 text-pink-400" />
            <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-violet-400">
              Raqamli sanat darslari
            </h1>
          </div>
          <p className="text-pink-200/80 ml-16">Tasavvuringizni raqamli sanatga aylantiring</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {lessons.map((lesson) => (
            <div 
              key={lesson.id} 
              onClick={()=>navigator(lesson?.linik, {state:{lessons:lesson, nextLessons:lessons}})}
              className="group relative bg-slate-800/50 backdrop-blur-xl rounded-xl overflow-hidden border border-pink-500/20 hover:border-pink-400/40 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-pink-600/10 to-violet-600/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative">
                <img src={lesson.thumbnail} alt={lesson.title} className="w-full h-48 object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 to-transparent"></div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <PlayCircle className="h-16 w-16 text-pink-400" />
                </div>
              </div>
              <div className="p-6 relative">
                <div className="flex items-center space-x-2 mb-3">
                  <Brush className="h-5 w-5 text-pink-400" />
                  <span className="text-xs text-pink-300 uppercase tracking-wider">Sanat</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-pink-300 transition-colors">
                  {lesson.title}
                </h3>
                <p className="text-gray-400 mb-4">{lesson.description}</p>
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center text-pink-300/70">
                    <Clock className="h-4 w-4 mr-1" />
                    <span>{lesson.duration}</span>
                  </div>
                  <div className="flex items-center text-violet-300/70">
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