import { Routes, Route } from 'react-router-dom';

import Mainpage from '../pages/Mainpage/Mainpage.jsx';
import Cartpage from '../pages/Cartpage/Cartpage.jsx';
import Itempage from '../pages/Itempage/Itempage.jsx';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Mainpage />} />
        <Route path="/cart" element={<Cartpage />} />
        <Route path="/:id" element={<Itempage />} />
      </Routes>
    </>
  );
};

export default App;
