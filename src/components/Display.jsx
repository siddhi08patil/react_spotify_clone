import React, { useEffect, useRef } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import DisplayHome from './DisplayHome'
import DisplayAlbum from './DisplayAlbum'
import { albumsData } from '../assets/assets'

const Display = () => {
  const displayRef = useRef()
  const location = useLocation()
  
  // Extract the album ID from the URL (path)
  const isAlbum = location.pathname.includes("album")
  const albumId = isAlbum ? location.pathname.split('/')[2] : "" // Extract album ID
  
  useEffect(() => {
    // Only set background color if albumId is valid and exists in albumsData
    if (isAlbum && albumId && albumsData[Number(albumId)]) {
      const bgColor = albumsData[Number(albumId)].bgColor
      displayRef.current.style.background = `linear-gradient(${bgColor}, #121212)`
    } else {
      displayRef.current.style.background = `#121212` // Default background color for non-album routes
    }
  }, [isAlbum, albumId]) // Re-run the effect when route changes

  return (
    <div ref={displayRef} className='w-[100%] m-2 px-6 pt-4 rounded bg-[#121212] text-white overflow-auto lg:w-[75%] lg:ml-0'>
      <Routes>
        <Route path='/' element={<DisplayHome />} />
        <Route path='/album/:id' element={<DisplayAlbum />} />
      </Routes>
    </div>
  )
}

export default Display
