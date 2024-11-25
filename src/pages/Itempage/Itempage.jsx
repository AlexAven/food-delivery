import { Wrapper, Container } from './Itempage.styled';
import Header from '../../components/Header/Header';
import Item from '../../components/Item/Item';

const Itempage = () => {
  return (
    <Wrapper>
      <Header nav={true} counter={true} cart={true}></Header>
      <Container>
        <Item />
      </Container>
    </Wrapper>
  );
};

export default Itempage;
