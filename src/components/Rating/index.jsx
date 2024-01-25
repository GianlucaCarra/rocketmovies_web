import { Container } from "./style";

import { FiStar } from "react-icons/fi";

export function Rating({ size }) {
  return(
    <Container>
      <li>
        <FiStar size={size} />
      </li>

      <li>
        <FiStar size={size} />
      </li>

      <li>
        <FiStar size={size} />
      </li>
      
      <li>
        <FiStar size={size} />
      </li>

      <li>
        <FiStar size={size} />
      </li>
    </Container>
  );
}