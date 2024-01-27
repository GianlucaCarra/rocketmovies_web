import { Container, Form, Avatar } from "./style";

import { ButtonText } from "../../components/ButtonText";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

import { FiArrowLeft, FiCamera, FiUser, FiMail, FiLock } from "react-icons/fi";

export function Profile(){
  return(
    <Container>
      <header>
        <ButtonText to="/" icon={FiArrowLeft} title="Back" />
      </header>

      <Form>
        <Avatar>
          <img src="https://github.com/gianlucacarra.png" alt="" />

          <label htmlFor="avatar">
            <FiCamera />

            <input id="avatar" type="file" />
          </label>
        </Avatar>

        <div className="text-input">
          <div>
            <Input icon={FiUser} placeholder="Username" type="text" />
            <Input icon={FiMail} placeholder="E-mail" type="email" />
          </div>

          <div>
            <Input icon={FiLock} placeholder="New password" type="password" />
            <Input icon={FiLock} placeholder="Current Password" type="password" />
          </div>

          <Button title="Save" />
        </div>
      </Form>
    </Container>
  );
}