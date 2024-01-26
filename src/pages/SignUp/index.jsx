import { Container, Form, Background } from "./style";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";

import { FiUser, FiMail, FiLock, FiArrowLeft} from "react-icons/fi";

export function SignUp(){
  return(
    <Container>
      <Form>
        <h1>RocketMovies</h1>
        <span>Application to keep track of everything you watch.</span>

        <h2>Make your account</h2>

        <div>
          <Input icon={FiUser} placeholder="Username" type="text" />
          <Input icon={FiMail} placeholder="E-mail" type="email" />
          <Input icon={FiLock} placeholder="Password" type="password" />
        </div>
        
        <Button title="Sign up" />

        <ButtonText icon={FiArrowLeft} title="Return to Log In" />
      </Form>

      <Background />
    </Container>
  );
}