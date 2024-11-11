import { Routes, Route } from 'react-router-dom';

import Main from '../layout/Main/Main.jsx';
import Card from '../components/Card/Card.jsx';

const App = () => {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <Main>
              <Card
                key={1}
                price={100}
                title="Устрицы по рокфеллеровски"
                description="Значимость этих проблем настолько очевидна, что укрепление и развитие структурыЗначимость этих проблем настолько очевидна, что укрепление и развитие структурыЗначимость этих проблем настолько очевидна, что укрепление и развитие структурыЗначимость этих проблем настолько очевидна, что укрепление и развитие структуры "
                photo="./src/assets/images/1.png"
              />
              <Card
                key={2}
                price={250}
                title="Устрицы по рокфеллеровски"
                description="Значимость этих проблем настолько очевидна, что укрепление и развитие структуры "
                photo="./src/assets/images/1.png"
              />
              <Card
                key={3}
                price={165}
                title="Устрицы по рокфеллеровски"
                description="Значимость этих проблем настолько очевидна, что укрепление и развитие структуры "
                photo="./src/assets/images/1.png"
              />
              <Card
                key={4}
                price={743}
                title="Устрицы по рокфеллеровски"
                description="Значимость этих проблем настолько очевидна, что укрепление и развитие структуры "
                photo="./src/assets/images/1.png"
              />
              <Card
                key={5}
                price={412}
                title="Свиные ребрышки на гриле с зеленью"
                description="Не следует, однако забывать, что реализация намеченных плановых"
                photo="./src/assets/images/1.png"
              />
              <Card
                key={6}
                price={960}
                title="Креветки по-королевски
в лимонном соке"
                description="Значимость этих проблем настолько очевидна, что укрепление и развитие структуры обеспечивает широкому кругу"
                photo="./src/assets/images/1.png"
              />
            </Main>
          }
        />
      </Routes>
    </>
  );
};

export default App;
