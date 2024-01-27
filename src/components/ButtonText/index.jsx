import { Container } from "./style";

export function ButtonText({ title, icon: Icon, to }) {
  return(
    <Container href={to}>
      { Icon && <Icon size={18}/> } 

      { title }
    </Container>
  );
}