import Header from '../components/Header/Header.jsx';

const Main = ({ children }) => (
  <>
    <Header title={'НАША ПРОДУКЦИЯ'} />
    {children}
  </>
);

export default Main;
