import styled from 'styled-components';
import db from '../db.json';

const BackgroundImage = styled.div`
  background-image: url(${db.bg});
  flex: 1;
  background-size: cover;
  background-position: center;
  min-height: 100vh;
`;

export default function Home() {
  return (
    <BackgroundImage>
    </BackgroundImage>
  );
}
