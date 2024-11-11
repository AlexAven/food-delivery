import Header from '../../components/Header/Header.jsx';

const Main = ({ children }) => (
  <>
    <Header title={'НАША ПРОДУКЦИЯ'} />
    <main className="main">
      <div className="wrapper">{children}</div>
    </main>
  </>
);

export default Main;
