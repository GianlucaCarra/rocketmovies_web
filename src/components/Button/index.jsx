import { Container } from "./style";

export function Button({ title, icon: Icon }) {
  return(
    <Container>
      { Icon && <Icon size={18}/> }

      { title }
    </Container>
  );
}