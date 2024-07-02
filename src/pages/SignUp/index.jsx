import { useState } from "react";
import { api } from "../../services/api";

import { useNavigate } from "react-router-dom";
 
import { Container, Form, Background } from "./style";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";
import { PopUp } from "../../components/PopUp";

import { FiUser, FiMail, FiLock, FiArrowLeft} from "react-icons/fi";

export function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [pop, setPop] = useState({
    state: false,
    message: ""
  });
  const navigate = useNavigate();

  if(pop.state) {
    setTimeout(() => {
      setPop({
        state: false,
        messageAlert: ""
      })
    }, 6000);
  }

  function handleSignUp() {
    if(!name || !email || !password) {
      setPop({
        state: true,
        messageAlert: "Fill all the fields"
      })
      
      return;
    }

    console.log("aqui")

    api.post("/users", {name, email, password})
    .then(() => {
      navigate("/");
    }).catch(error => {
      if(error.response) {
        setPop({
          state: true,
          messageAlert: error.response.data.message
        })
      } else {
        setPop({
          state: true,
          messageAlert: "Unable to register this user"
        })
      }
    });
  }

  return(
    <Container>
      <PopUp message={pop.messageAlert} trigger={pop.state}/>

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