import { ChevronLeft } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'

function SnackGame() {
    return (
        <div>
            <div className="flex items-center my-2">
                <Link to="/dashboard" className="flex items-center     text-black hover:text-black-200 transition">
                    <ChevronLeft className=" w-5 mr-1" />
                    Kutubxonaga qaytish
                </Link>
            </div>
            <iframe style={{ width: "100%", height: "100vh" }} src="https://snake-simple-game.vercel.app" allowtransparency="true" width="485" height="402" frameborder="0" scrolling="no" allowfullscreen></iframe>
        </div>
    )
}

export default SnackGame
