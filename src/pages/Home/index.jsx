import { Container, Content } from "./style";

import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { Review } from "../../components/Review";

import { FiPlus } from "react-icons/fi";

export function Home() {
  return(
    <Container>
      <Header />

      <main>
        <Content>
          <div className="title">
            <h1>My reviews</h1>

            <div>
              <Button icon={FiPlus} title="New review" />
            </div>
          </div>

          <Review />
          <Review />
          <Review />
          <Review />
          <Review />
        </Content>
      </main>
    </Container>
  );
}