import { Container } from "./style";

export function PopUp({ message, trigger }) {
  return trigger ? (
    <Container>
      <span>{message}</span>
    </Container>
  ) : "";
}