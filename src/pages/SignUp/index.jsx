import { useState } from "react";
import { api } from "../../services/api";

import { useNavigate } from "react-router-dom";
 
import { Container, Form, Background } from "./style";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";
import { AlertError } from "../../components/AlertError";
import { AlertSucess } from "../../components/AlertSucess";

import { FiUser, FiMail, FiLock, FiArrowLeft} from "react-icons/fi";

export function SignUp(){
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function handleSignUp() {
    if(!name || !email || !password) {
      return;
    }

    api.post("/users", {name, email, password})
    .then(() => {
      sucessMessage = "User successfully registered";
      console.log(sucessMessage);

      navigate("/");
    }).catch(error => {
      if(error.response) {
        errorMessage = error.response.data.message;
        console.log(errorMessage);
      } else {
        errorMessage = "Unable to register this user"
      }
    });
  }

  return(
    <Container>
      <Form>
        <h1>RocketMovies</h1>
        <span>Application to keep track of everything you watch.</span>

        <h2>Make your account</h2>

        <div>
          <Input icon={FiUser} placeholder="Username" type="text" onChange={e => setName(e.target.value)} />
          <Input icon={FiMail} placeholder="E-mail" type="email" onChange={e => setEmail(e.target.value)} />
          <Input icon={FiLock} placeholder="Password" type="password" onChange={e => setPassword(e.target.value)} />
        </div>
        
        <Button type="button" title="Sign up" onClick={handleSignUp} />

        <ButtonText to="/" icon={FiArrowLeft} title="Return to Log In" />
      </Form>

      <Background />
    </Container>
  );
}