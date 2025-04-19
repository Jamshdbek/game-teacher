import React, { useState } from 'react';
import { Link, useParams, useNavigate, useLocation } from 'react-router-dom';
import { ChevronLeft, PlayCircle, Clock, BookOpen, ThumbsUp, MessageCircle, Share2, Bookmark, ChevronRight } from 'lucide-react';
import ReactPlayer from 'react-player/youtube'
export default function VideoPlayer() {
  const { category, id } = useParams();
  const navigate = useNavigate();
  const [isPlaying, setIsPlaying] = useState(false);
  const {state} = useLocation()
  console.log(state, "state")
  // This would come from your actual data source
  const video = {
    title: "Introduction to Game Development",
    description: "Learn the fundamentals of game development with practical examples and industry best practices.",
    duration: "15 minutes",
    instructor: "John Smith",
    views: "1.2k",
    likes: 856,
    thumbnail: "https://images.unsplash.com/photo-1556438064-2d7646166914?w=800&auto=format&fit=crop&q=60",
    difficulty: "Beginner",
    youtubeId: "https://www.youtube.com/watch?v=niKXOofTckE" // Example YouTube video ID
  };

  const nextVideos = [
    {
      id: 2,
      title: "Game Design Principles",
      duration: "20 minutes",
      thumbnail: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=800&auto=format&fit=crop&q=60",
      difficulty: "Intermediate",
      youtubeId: "https://www.youtube.com/watch?v=niKXOofTckE"
    },
    {
      id: 3,
      title: "Character Animation Basics",
      duration: "18 minutes",
      thumbnail: "https://images.unsplash.com/photo-1548484352-ea579e5233a8?w=800&auto=format&fit=crop&q=60",
      difficulty: "Beginner",
      youtubeId: "https://www.youtube.com/watch?v=niKXOofTckE"
    },
    {
      id: 4,
      title: "Level Design Workshop",
      duration: "25 minutes",
      thumbnail: "https://images.unsplash.com/photo-1551103782-8ab07afd45c1?w=800&auto=format&fit=crop&q=60",
      difficulty: "Advanced",
      youtubeId: "https://www.youtube.com/watch?v=niKXOofTckE"
    }
  ];

  const opts = {
    height: '100%',
    width: '100%',
    playerVars: {
      autoplay: 1,
      modestbranding: 1,
      rel: 0
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800">
      <div className="container mx-auto px-4 py-8">
        {/* Navigation */}
        <div className="flex items-center justify-between mb-8">
          <Link to={`/${category}`} className="flex items-center text-gray-300 hover:text-white transition">
            <ChevronLeft className="h-5 w-5 mr-1" />
            Back to Course
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Video Player */}
            <div className="relative bg-slate-800 rounded-xl overflow-hidden aspect-video mb-6">
              {isPlaying ? (
                // <ReactPlayer
                //   videoId={video.youtubeId}
                //   opts={opts}
                //   className="w-full aspect-video"
                // />
                <ReactPlayer playing url={state.lessons.youtubeId} width={'100%'} height={'100%'} className="w-full aspect-video" style={{width:"100%"}} />
              ) : (
                <>
                  <img 
                    src={state.lessons.thumbnail} 
                    alt={state.lessons.title} 
                    className="w-full h-full object-cover"
                  />
                  <div 
                    className="absolute inset-0 flex items-center justify-center bg-slate-900/50 cursor-pointer"
                    onClick={() => setIsPlaying(true)}
                  >
                    <PlayCircle className="h-20 w-20 text-white hover:text-purple-400 transition-colors" />
                  </div>
                </>
              )}
            </div>

            {/* Video Info */}
            <div className="bg-slate-800/50 backdrop-blur-xl rounded-xl p-6 mb-6">
              <h1 className="text-2xl font-bold text-white mb-2">{state.lessons.title}</h1>
              <div className="flex items-center text-gray-400 text-sm mb-4">
                <Clock className="h-4 w-4 mr-1" />
                <span className="mr-4">{state.lessons.duration}</span>
                <BookOpen className="h-4 w-4 mr-1" />
                <span className="mr-4">{state.lessons.difficulty}</span>
                <span>{state.lessons.views} views</span>
              </div>
              <p className="text-gray-300 mb-6">{state.lessons.description}</p>
              
              {/* Action Buttons */}
              <div className="flex items-center space-x-4">
                <button className="flex items-center space-x-2 bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition">
                  <ThumbsUp className="h-4 w-4" />
                  <span>{state.lessons.likes}</span>
                </button>
                <button className="flex items-center space-x-2 bg-slate-700 text-white px-4 py-2 rounded-lg hover:bg-slate-600 transition">
                  <MessageCircle className="h-4 w-4" />
                  <span>Comment</span>
                </button>
                <button className="flex items-center space-x-2 bg-slate-700 text-white px-4 py-2 rounded-lg hover:bg-slate-600 transition">
                  <Share2 className="h-4 w-4" />
                  <span>Share</span>
                </button>
                <button className="flex items-center space-x-2 bg-slate-700 text-white px-4 py-2 rounded-lg hover:bg-slate-600 transition">
                  <Bookmark className="h-4 w-4" />
                  <span>Save</span>
                </button>
              </div>
            </div>

            {/* Instructor Info */}
            <div className="bg-slate-800/50 backdrop-blur-xl rounded-xl p-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-xl">
                    {state.lessons.instructor.charAt(0)}
                  </span>
                </div>
                <div>
                  <h3 className="text-white font-semibold">{state.lessons.instructor}</h3>
                  <p className="text-gray-400 text-sm">Course Instructor</p>
                </div>
              </div>
            </div>
          </div>

          {/* Next Videos */}
          <div className="lg:col-span-1">
            <div className="bg-slate-800/50 backdrop-blur-xl rounded-xl p-6">
              <h2 className="text-xl font-bold text-white mb-4">Next in Course</h2>
              <div className="space-y-4">
                {state?.nextLessons.map((nextVideo) => (
                  <div 
                    key={nextVideo.id}
                    className="group flex items-center space-x-4 p-2 rounded-lg hover:bg-slate-700/50 transition cursor-pointer"
                    onClick={() => {
                      setIsPlaying(false);
                      navigate(`/video/${category}/${nextVideo.id}`, {state:{ lessons:nextVideo, nextLessons:state?.nextLessons}});
                    }}
                  >
                    <div className="relative w-32 h-20 rounded-lg overflow-hidden">
                      <img 
                        src={nextVideo.thumbnail} 
                        alt={nextVideo.title} 
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 flex items-center justify-center bg-slate-900/50 opacity-0 group-hover:opacity-100 transition-opacity">
                        <PlayCircle className="h-8 w-8 text-white" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-white font-medium group-hover:text-purple-400 transition-colors">
                        {nextVideo.title}
                      </h3>
                      <div className="flex items-center text-gray-400 text-sm">
                        <Clock className="h-3 w-3 mr-1" />
                        <span className="mr-2">{nextVideo.duration}</span>
                        <span>{nextVideo.difficulty}</span>
                      </div>
                    </div>
                    <ChevronRight className="h-5 w-5 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}