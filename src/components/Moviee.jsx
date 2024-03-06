import React from 'react'

const Moviee = ({ movie }) => {
  return (
    <div className='flex flex-row mt-4 items-center justify-center'>
        <div className='shadow-sm shadow-gray-500 m-2'>
          

          <div className='shadow-sm'>
            <img
            className='flex justify-center'
              src={
                movie.Poster !== "N/A"
                  ? movie.Poster
                  : "https://via.placeholder.com/400"
              }
              alt={movie.Title}
            />
          </div>

          <div className='shadow-sm shadow-gray-300'>
            <span className='flex justify-center m-2 font-mono'>Type : {movie.Type}</span>
            <h3 className='flex justify-center m-2 font-mono'>Title : {movie.Title}</h3>
          </div>
        </div>
      </div>
  )
}

export default Moviee;
