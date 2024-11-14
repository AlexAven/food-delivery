import { Routes, Route } from 'react-router-dom';

import Mainpage from '../pages/Mainpage/Mainpage.jsx';
// import Cartpage from '../pages/Cartpage/Cartpage.jsx';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Mainpage />} />
        {/* <Route path="/cart" element={<Cartpage />} /> */}
      </Routes>
    </>
  );
};

export default App;
