import { Section, Photo, Container, Text, Title, Description, Wrapper, Price } from './Item.styled';
import ButtonSquare from '../ButtonSquare/ButtonSquare';

const Item = () => {
  return (
    <Section>
      <Photo></Photo>
      <Container>
        <Text>
          <Title></Title>
          <Description></Description>
        </Text>
        <Wrapper>
          <Price></Price>
          <ButtonSquare type={'background'}></ButtonSquare>
        </Wrapper>
      </Container>
    </Section>
  );
};

export default Item;
