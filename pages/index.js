import { useRouter } from 'next/router';
import db from "../db.json";
import QuizContainer from '../src/components/QuizContainer';
import QuizBackground from '../src/components/QuizBackground';
import Widget from '../src/components/Widget';
import Input from '../src/components/Input';
import Footer from '../src/components/Footer';
import GithubCorner from '../src/components/GithubCorner';

export default function Home() {
  const router = useRouter();
  const [name, setName] = React.useState('');

  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <Widget>
          <Widget.Header>
            <h1>{db.title}</h1>
          </Widget.Header>
          <Widget.Content>
            <p>{db.description}</p>
            <form onSubmit={function (infosDoEvento) {
              infosDoEvento.preventDefault();
              router.push(`/quiz?name=${name}`);
            }}>
              <Input 
                onChange={function (infosDoEvento) {setName(infosDoEvento.target.value)}}
                placeholder="Send your nickname" 
              />
              <Input.Button type="submit" disabled={name.length === 0}>
                Jogar {name}
              </Input.Button>
            </form>
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
