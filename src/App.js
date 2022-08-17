import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import UserList from './components/UserList';
import UserSingle from './components/UserSingle';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<UserList />} />
        <Route path=":id" element={<UserSingle/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
