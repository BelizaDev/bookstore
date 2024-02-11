import Home from './components/Home';
import Nav from './components/Nav';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AddBook from './components/book/AddBook';
import ViewBook from './components/book/ViewBook';
import { BookProvider } from './context';
import BookDetails from './components/book/BookDetails';
import Register from './components/user/Register';
import Login from './components/user/Login';
import NyBestSeller from './components/NyBestSeller';
import ProtectedRoute from './components/protected-route/protected-route';



function App() {
  return (
    <div className="App">
      <>
       
        <BrowserRouter>
        <Nav />
        <BookProvider>
        <Routes>
          <Route path='/' element={<Home />}/>

          {/* <Route path='/addbook' element={<AddBook />}/> */}
          <Route path='/viewbook' element={<ViewBook />}/>
          <Route path='book/:id' element={<BookDetails />}/>
          <Route path='/register' element={<Register />}/>
          <Route path='/login' element={<Login />}/>
          <Route path='/nybooks' element={<NyBestSeller />}/>
          <Route
            path="/addbook"
            element={
              <ProtectedRoute>
                <AddBook />
              </ProtectedRoute>
            }
          />
        </Routes>
        </BookProvider>
        </BrowserRouter>
      </>
      
    </div>
  );
}

export default App;
