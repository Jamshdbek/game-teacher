import { ChevronLeft } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'

function Scratch() {
    return (
        <div>
            <div className="flex items-center mb-8 mt-4">
                <Link to="/dashboard" className="flex items-center     text-black hover:text-black-200 transition">
                    <ChevronLeft className="h-5 w-5 mr-1" />
                    Kutubxonaga qaytish
                </Link>
            </div>
            <iframe style={{ width: "100%", height: "80vh" }} src="https://scratch.mit.edu/projects/1160944530/embed" allowtransparency="true" width="485" height="402" frameborder="0" scrolling="no" allowfullscreen></iframe>
        </div>
    )
}

export default Scratch
