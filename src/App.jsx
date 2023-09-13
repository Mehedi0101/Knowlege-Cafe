import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs'
import Bookmarks from './components/Bookmarks'
import Header from './components/Header'

function App() {

  const [bookmarked, setBookmarked] = useState([]);
  const [spentTime, setSpentTime] = useState(0);

  console.log(bookmarked);

  return (
    <div className='w-5/6 mx-auto'>
      <Header></Header>
      <div className='flex gap-10 mt-10 flex-col-reverse lg:flex-row'>
        <Blogs bookmarked={bookmarked} setBookmarked={setBookmarked} spentTime={spentTime} setSpentTime={setSpentTime}></Blogs>
        <Bookmarks bookmarked={bookmarked} spentTime={spentTime}></Bookmarks>
      </div>
    </div>
  )
}

export default App
