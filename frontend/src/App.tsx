import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SignUp from './pages/SignUp'
import SignIn from './pages/Signin'
import { Blogs } from './pages/Blogs'
import PublishBlog from './pages/PublishBlog'
import Blogdetail from './pages/Blogdetail'
function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
        
         <Route path="/signin" element={<SignIn />} /> 
          <Route path="/signup" element={<SignUp />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/publish" element={<PublishBlog />} />
          <Route path="/blogs/:id" element={<Blogdetail />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App