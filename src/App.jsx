import './App.css'
import Blogs from './components/Blogs'
import Bookmarks from './components/Bookmarks'
import Header from './components/Header'

function App() {

  return (
    <div className='w-5/6 mx-auto'>
      <Header></Header>
      <div className='flex gap-10 mt-10'>
        <Blogs></Blogs>
        <Bookmarks></Bookmarks>
      </div>
    </div>
  )
}

export default App
