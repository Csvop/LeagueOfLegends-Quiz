import styled from 'styled-components'
import db from '../db.json';
import Widget from '../src/components/Widget'
import QuizLogo from '../src/components/QuizLogo'
import QuizBackground from '../src/components/QuizBackground'
import Footer from '../src/components/Footer'
import GitHubCorner from '../src/components/GitHubCorner'
import Button from '../src/components/Button';
import LolQuizLogo from '../src/components/LolQuizlogo';
import QuizContainer from '../src/components/QuizContainer';
import Input from '../src/components/Input';
import {useRouter} from "next/router";

export default function Home() {
  const router = useRouter();
  const [name, setName] = React.useState("");
  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <LolQuizLogo />
        <Widget>
          <Widget.Header>
            <h1>{db.title}</h1>
          </Widget.Header>
          <Widget.Content>
            <p>{db.description}</p>
            <form onSubmit={function(infosDoEvento){
              infosDoEvento.preventDefault();
              router.push(`/quiz?name=${name}`);
            }}>
              <Input
                name="nomeDoUser"
                onChange={function(infosDoEvento){setName(infosDoEvento.target.value);}}
                placeholder="Insira seu nome"
                value={name}
              />
              <Button type="submit" disabled={name.length === 0}>
                {`Jogar ${name}`}
              </Button>
            </form>
          </Widget.Content>
        </Widget>

        <Widget>
          <Widget.Content>
            <h1>Outros quizes:</h1>
            <p href="https://www.alura.com.br/">- Marvel</p>
            <p href="https://www.alura.com.br/">- DC commics</p>
            <p href="https://www.alura.com.br/">- Space and Beyond</p>
          </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/csvop" />
    </QuizBackground>
  );
}