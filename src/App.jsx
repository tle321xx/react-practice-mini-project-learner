import Card from './Card/Card';
import './App.css'
import { useState } from 'react'

const movies = [
  {
    title: 'The Matrix',
    image:
      'https://i.pinimg.com/736x/cb/82/6d/cb826d2fc3b9fbc4920cdd7dabb53555.jpg',
  },
  {
    title: 'Inception',
    image:
      'https://images.theconversation.com/files/353512/original/file-20200818-14-1yd1myr.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=900.0&fit=crop',
  },
  {
    title: 'The Dark Knight',
    image:
      'https://www.wallpapermania.eu/images/lthumbs/2012-04/2487_Batman-The-Dark-Knight-Poster-HD-Wallpaper.jpg',
  },
];

export default function App() {

  const [selectedMovie, setSelectedMovie] = useState([])

  // const [movieTitle, setMovieTitle] = useState('')

  const handleClick = (movieTitle) => {
    // กดลบออกได้
    if(selectedMovie.includes(movieTitle)){
      setSelectedMovie(prev => {
        return prev.filter(ele => ele !== movieTitle)
      })
    } else {
      setSelectedMovie(prev => {
        return [...prev, movieTitle]
      })
    }
    // setMovieTitle(movieTitle)
    // prev เอาค่า state เดิมออกมา (selectedMovie ส่งไปที่ prev)
    //กดเลือกแล้วมีอัพเดทใน 
    // setSelectedMovie((prev) => {
    //   return [...prev, movieTitle]
    // })
  }

  return (
    <>
    <ul>
    {selectedMovie.map((movieTitle) => (
        <li key={movieTitle}>{movieTitle}</li>
      ))}
    </ul>
    
    <div className='card-container'>
    {/* {movieTitle} */}
    {/* /* วน render card ออกมาตามจำนวนที่อยู่ใน array */}
    {movies.map((ele) => {
      return <Card key={ele.title} handleClick={handleClick} title={ele.title} image={ele.image}/>
      {/* สำหรับ .map ถ้าไม่มีปีกกาต้องไม่มี return || ถ้ามีปีกกามี return */}
    })}
        {/* <Card /> */}
    </div>
    </>
  );
}
