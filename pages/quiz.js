import React from "react";
import db from "../db.json";
import QuizContainer from "../src/components/QuizContainer";
import QuizBackground from "../src/components/QuizBackground";
import Widget from "../src/components/Widget";
import Input from "../src/components/Input";
import GithubCorner from "../src/components/GithubCorner";

const QuestionWidget = ({ questionsIndex, totalQuestions, questions, onSubmit }) => {
  const questionId = `question__${questionsIndex}`;

  return (
        <Widget>
          <Widget.Header>
            <h1>Pergunta {questionsIndex + 1} de {totalQuestions}</h1>
          </Widget.Header>
            <img
                alt="Description"
                style={{
                    width: '100%',
                    height: '150px',
                    objectFit: 'cover'
                }}
                src={questions.image}
            />
          <Widget.Content>
            <h1>{questions.title}</h1>
            <p>{questions.description}</p>
            <form onSubmit={(infosDoEvento) => {
              infosDoEvento.preventDefault();
              onSubmit();
            }}>
              {questions.alternatives.map((alternative, alternativeIndex) => {
                const alternativeId = `alternative__${alternativeIndex}`;
                return (
                  <Widget.Topic as="label" htmlFor={alternativeId}>
                    <input id={alternativeId} name={questionId} type="radio" />
                    {alternative}
                  </Widget.Topic>
                );
              })}

              <Input.Button type="submit">CONFIRMAR</Input.Button>
            </form>
          </Widget.Content>
        </Widget>
  );
}

const screenStates = {
      QUIZ: 'QUIZ',
      LOADING: 'LOADING',
      RESULT: 'RESULT'
    }

export default function QuizPage() {
    const [screenState, setScreenState] = React.useState(screenStates.LOADING);
    const totalQuestions = db.questions.length;
    const [currentQuestion, setcurrentQuestion] = React.useState(0);
    const questionsIndex = currentQuestion;
    const questions = db.questions[questionsIndex];
    
    React.useEffect(() => {
      setTimeout(() => {
        setScreenState(screenStates.QUIZ);
      }, 1 * 1000); 
    }, []);

    function handleSubmit() {
      const nextQuestion = questionsIndex + 1;
      if (nextQuestion < totalQuestions) {
        setcurrentQuestion(questionsIndex + 1);
      } else {
        setScreenState(screenStates.RESULT)
      }
    }

    return (
        <QuizBackground backgroundImage={db.bg}>
        <QuizContainer>
            {screenState === screenStates.QUIZ && (
              <QuestionWidget 
                  questionsIndex={questionsIndex}
                  totalQuestions={totalQuestions}
                  questions={questions}
                  onSubmit={handleSubmit}
              />
            )}

            {screenState === screenStates.LOADING && <Widget.Content style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: '350px'
            }}> 
              <Widget.Loading />   
            </Widget.Content>}
            {screenState === screenStates.RESULT && <Widget.Content style={{ height: '350px' }}>
              <center> 
                <h1>Congratulations!!!</h1>
                <h3>You got X questions right</h3>
              </center>
            </Widget.Content>}
        </QuizContainer>

         <GithubCorner projectUrl="https://github.com/rodrigoaraujo7" />
      </QuizBackground>
    )
}