import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ChevronLeft, PlayCircle, Clock, BookOpen, Code, Terminal, Gamepad } from 'lucide-react';

export default function GameProgramming() {
  const navigator = useNavigate()
  const lessons = [
    {
      id: 1,
      title: "Scratch bilan dasturlashni organamiz",
      description: "Scratch yordamida o'yin yaratishning asosiy tushunchalari",
      thumbnail: 'https://images.unsplash.com/photo-1603354350317-6f7aaa5911c5?w=800&auto=format&fit=crop&q=60',
      duration: '15 daqiqa',
      difficulty: 'Boshlangich',
      views: "1.2k",
      likes: 856,
      instructor: "John Smith",
      youtubeId:"https://www.youtube.com/watch?v=ykJ8cJ8QR7A",
      linik:"/video/game-programming/1",
      videoUrl: '#'
    },
    {
      id: 2,
      title: "Python da birinchi oyinimiz",
      description: "Python Pygame kutubxonasi bilan sodda o'yin yaratish",
      thumbnail: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&auto=format&fit=crop&q=60',
      duration: '20 daqiqa',
      instructor: "John Smith",
      difficulty: "O'rta",
      views: "2k",
      youtubeId:"https://www.youtube.com/watch?v=zAcwouPol9c",
      likes: 1056,
      videoUrl: '#'
    },
    {
      id: 3,
      title: "JavaScript o'yin frameworklari",
      description: "Phaser.js yordamida 2D o'yin yaratish",
      thumbnail: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=800&auto=format&fit=crop&q=60',
      duration: '25 daqiqa',
      difficulty: 'Murakkab',
      youtubeId:"https://www.youtube.com/watch?v=cUCZDZeYHjE&list=PL5Wwi-DUrgVR_doALTONhcucfW_y7HoZ2",
      instructor: "John Smith",
      views: "4k",
      likes: 856,
      videoUrl: '#'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-slate-900 to-purple-900">
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center mb-8 mt-4">
          <Link to="/dashboard" className="flex items-center text-blue-300 hover:text-blue-200 transition">
            <ChevronLeft className="h-5 w-5 mr-1" />
            Kutubxonaga qaytish
          </Link>
        </div>

        <div className="relative mb-12">
          <div className="absolute -top-6 -left-6 w-24 h-24 bg-blue-500/20 rounded-full blur-xl"></div>
          <div className="absolute -top-4 -right-4 w-32 h-32 bg-purple-500/20 rounded-full blur-xl"></div>
          <div className="relative flex items-center space-x-4 mb-2">
            <Terminal className="h-12 w-12 text-blue-400" />
            <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              O'yin dasturlash kurslari
            </h1>
          </div>
          <p className="text-blue-200/80 ml-16">Kelajakning o'yinlarini yarating</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {lessons.map((lesson) => (
            <div 
              key={lesson.id} 
              onClick={()=>navigator(lesson?.linik, {state:{lessons:lesson, nextLessons:lessons}})}
              className="group relative cursor-pointer bg-slate-800/50 backdrop-blur-xl rounded-xl overflow-hidden border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative">
                <img src={lesson.thumbnail} alt={lesson.title} className="w-full h-48 object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 to-transparent"></div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  {/* <PlayCircle cl÷assName="h-16 w-16 text-blue-400" /> */}
                </div>
              </div>
              <div className="p-6 relative">
                <div className="flex items-center space-x-2 mb-3">
                  <Code className="h-5 w-5 text-blue-400" />
                  <span className="text-xs text-blue-300 uppercase tracking-wider">Dars</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-300 transition-colors">
                  {lesson.title}
                </h3>
                <p className="text-gray-400 mb-4">{lesson.description}</p>
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center text-blue-300/70">
                    <Clock className="h-4 w-4 mr-1" />
                    <span>{lesson.duration}</span>
                  </div>
                  <div className="flex items-center text-purple-300/70">
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