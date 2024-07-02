import { useState } from "react";
import { api } from "../../services/api";

import { Container, Form, Background } from "./style";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";

import { FiMail, FiLock } from "react-icons/fi";
import { useAuth } from '../../hooks/auth';

export function SignIn(){
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signIn } = useAuth();

  const handleSignIn = async () => {
    await signIn({email, password})
  }

  return(
    <Container>
      <Form>
        <h1>RocketMovies</h1>
        <span>Application to keep track of everything you watch.</span>

        <h2>Make your login</h2>

        <div>
          <Input icon={FiMail} placeholder="E-mail" type="email" onChange={e => setEmail(e.target.value)} />
          <Input icon={FiLock} placeholder="Password" type="password" onChange={e => setPassword(e.target.value)} />
        </div>
        
        <Button title="Sign in" onClick={handleSignIn} />

        <ButtonText to="/create" title="Create Acount" />
      </Form>

      <Background />
    </Container>
  );
}