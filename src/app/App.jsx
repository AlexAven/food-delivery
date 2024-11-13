import { Routes, Route } from 'react-router-dom';

import Main from '../layout/Main/Main.jsx';
import Card from '../components/Card/Card.jsx';

// data вместо стейта
const data = {
  entity: {
    1: {
      id: 1,
      title: 'Устрицы по рокфеллеровски 1',
      description: 'Значимость этих проблем настолько очевидна',
      price: 100,
      photo: './src/assets/images/1.png',
    },
    2: {
      id: 2,
      title: 'Устрицы по рокфеллеровски 2',
      description: 'Значимость этих проблем настолько очевидна',
      price: 250,
      photo: './src/assets/images/1.png',
    },
    3: {
      id: 3,
      title: 'Устрицы по рокфеллеровски 3',
      description: 'Значимость этих проблем настолько очевидна',
      price: 400,
      photo: './src/assets/images/1.png',
    },
    4: {
      id: 4,
      title: 'Устрицы по рокфеллеровски 4',
      description: 'Значимость этих проблем настолько очевидна',
      price: 467,
      photo: './src/assets/images/1.png',
    },
    5: {
      id: 5,
      title: 'Устрицы по рокфеллеровски 5',
      description: 'Значимость этих проблем настолько очевидна',
      price: 320,
      photo: './src/assets/images/1.png',
    },
    6: {
      id: 6,
      title: 'Устрицы по рокфеллеровски 6',
      description: 'Значимость этих проблем настолько очевидна',
      price: 9340,
      photo: './src/assets/images/1.png',
    },
  },
  ids: [1, 2, 3, 4, 5, 6],
};

const App = () => {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <Main>
              {data.ids.map((element) => {
                const { id, title, description, price, photo } = data.entity[element];

                return (
                  <Card
                    key={id}
                    id={id}
                    title={title}
                    description={description}
                    price={price}
                    photo={photo}
                  />
                );
              })}
            </Main>
          }
        />
      </Routes>
    </>
  );
};

export default App;

/* <Card
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
      title="Креветки по-королевски в лимонном соке"
      description="Значимость этих проблем настолько очевидна, что укрепление и развитие структуры обеспечивает широкому кругу"
      photo="./src/assets/images/1.png"
    /> */
