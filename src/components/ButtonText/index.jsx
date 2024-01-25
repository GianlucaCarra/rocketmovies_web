import { Container } from "./style";

export function ButtonText({ title, icon: Icon }) {
  return(
    <Container type="button">
      { Icon && <Icon size={18}/> } 

      { title }
    </Container>
  );
}