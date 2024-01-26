import { Container, Form, Background } from "./style";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";

import { FiMail, FiLock } from "react-icons/fi";

export function SignIn(){
  return(
    <Container>
      

      <Form>
        <h1>RocketMovies</h1>
        <span>Application to keep track of everything you watch.</span>

        <h2>Make your login</h2>

        <div>
          <Input icon={FiMail} placeholder="E-mail" type="email" />
          <Input icon={FiLock} placeholder="Password" type="password" />
        </div>
        
        <Button title="Sign in" />

        <ButtonText title="Create Acount" />
      </Form>

      <Background />
    </Container>
  );
}