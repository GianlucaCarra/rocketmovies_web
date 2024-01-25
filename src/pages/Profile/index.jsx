import { Container } from "./style";

import { ButtonText } from "../../components/ButtonText";
import { Input } from "../../components/Input";

import { FiArrowLeft } from "react-icons/fi";

export function Profile(){
  return(
    <Container>
      <div className="head">
        <ButtonText icon={FiArrowLeft} title="Back" />
      </div>

    </Container>
  );
}