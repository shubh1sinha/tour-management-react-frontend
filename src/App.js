import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Navbar from './layout/Navbar';
import Home from './Pages/Home';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import ViewTour from './Frontend/ViewTour';
import ViewCustomer from './Frontend/ViewCustomer';
import AddCustomer from './Frontend/AddCustomer';
import CustomerInfo from './Frontend/CustomerInfo';
import TourAdd from './Frontend/TourAdd';
import BookTour from './Frontend/BookTour';
import BookedToursList from './Frontend/BookedToursList';
import Dashboard from './Frontend/Dashboard';
import BookingLists from './Frontend/BookingLists';

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar />

      <Routes>
        <Route exact path='/' element={<Home/>}></Route>
        <Route exact path='/tour/list/:id' element={<ViewTour/>}></Route>
        <Route exact path='/tour/add' element={<TourAdd/>}></Route>
        <Route exact path='/customer/list/:id' element={<ViewCustomer/>}></Route>
        <Route exact path='/customer/add' element={<AddCustomer/>}></Route>
        <Route exact path='/customer/:id' element={<CustomerInfo/>}></Route>
        <Route exact path='/tour/book/:id' element={<ViewTour/>}></Route>
        <Route exact path='/customer/:id/tour/:tourId' element={<BookTour/>}></Route>
        <Route exact path='/booking/:id' element={<BookedToursList/>}></Route>
        <Route exact path='/dashboard/:id' element={<Dashboard/>}></Route>
        <Route exact path='/booking/list' element={<BookingLists/>}></Route>
      </Routes>
      </Router>
      
    </div>
  );
}

export default App;
