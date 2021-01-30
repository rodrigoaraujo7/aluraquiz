import React from "react";
import db from "../db.json";
import QuizContainer from "../src/components/QuizContainer";
import QuizBackground from "../src/components/QuizBackground";
import Widget from "../src/components/Widget";
import Input from "../src/components/Input";
import GithubCorner from "../src/components/GithubCorner";

export default function QuizPage() {
  const [name, setName] = React.useState("");

  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <Widget>
          <Widget.Header>
            <h1>Pergunta 1 de {` &{db.questions.length} `}</h1>
          </Widget.Header>
            <img
                alt="Description"
                style={{
                    width: '100%',
                    height: '150px',
                    objectFit: 'cover'
                }}
                src="https://placehold.it/400x400"
            />
          <Widget.Content>
            <h1>Title</h1>
            <p>Description</p>
            <Input.Button type="submit">CONFIRMAR</Input.Button>
          </Widget.Content>
        </Widget>
      </QuizContainer>

      <GithubCorner projectUrl="https://github.com/rodrigoaraujo7" />
    </QuizBackground>
  );
}
