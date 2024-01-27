import { Container, Content, NewButton } from "./style";

import { Header } from "../../components/Header";
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
              <NewButton href="/new"> 
                <FiPlus/>
                New movie
              </NewButton>
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