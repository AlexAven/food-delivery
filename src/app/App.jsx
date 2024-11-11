import { Routes, Route } from 'react-router-dom';

import Main from '../layout/Main.jsx';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </>
  );
};

export default App;
