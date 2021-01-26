import styled from "styled-components";
import db from "../db.json";
import MetaTags from 'react-meta-tags';
import QuizBackground from '../src/components/QuizBackground';
import Widget from '../src/components/Widget';
import Footer from '../src/components/Footer';
import GithubCorner from '../src/components/GithubCorner';

class Component1 extends React.Component {
  render() {
    return (
        <div className="wrapper">
          <MetaTags>
            <title>{db.title}</title>
            <meta name="description" content={db.description} />
            <meta property="og:title" content={db.title + 'Alura Quiz'} />
            <meta property="og:image" content={db.bg} />
          </MetaTags>
          <div className="content"> Some Content </div>
        </div>
      )
  }
}

export const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;

export default function Home() {
  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <Widget>
          <Widget.Header>
            <h1>{db.title}</h1>
          </Widget.Header>
          <Widget.Content>
            <p>{db.description}</p>
          </Widget.Content>
        </Widget>

        <Widget>
          <Widget.Content>
            <p>{db.description}</p>
          </Widget.Content>
        </Widget>

        <Footer />
      </QuizContainer>

      <GithubCorner projectUrl="https://github.com/rodrigoaraujo7" />
    </QuizBackground>
  );
}
