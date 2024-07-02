import { Container, Content, Form, Textarea, AddTag } from "./style";

import { Header } from "../../components/Header";
import { ButtonText } from "../../components/ButtonText";
import { Input } from "../../components/Input";
import { TagItem } from "../../components/TagItem";
import { Button } from "../../components/Button";

import { FiArrowLeft } from "react-icons/fi";

export function New() {
  return(
    <Container>
      <Header />

      <main>
        <Content>
          <ButtonText to="/" icon={FiArrowLeft} title={"Back"} />

          <h1>New Movie</h1>

          <Form>
            <div>
              <Input title="Movie name" />
              <Input title="Rating (0 to 5)" />
            </div>
            
            <Textarea placeholder="Description" />

            <AddTag>
              <h2>Tags</h2>
              
              <section>
                <TagItem isNew placeholder="New tag" />
              </section>
            </AddTag>
            
            <Button title="Save review" />
          </Form>

        </Content>
      </main>
    </Container>
  );
}