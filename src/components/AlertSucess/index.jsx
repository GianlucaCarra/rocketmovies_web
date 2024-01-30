import { Container } from "./style";

export function AlertSucess({ title, $sucess }) {
  return(
    <Container $sucess={$sucess} >
      {title}
    </Container> 
  );
}