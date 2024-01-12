import { Container, Logo, Profile } from './style';

import { Input } from '../Input';

export function Header() {
  return(
    <Container>
      <Logo>
        RocketMovies
      </Logo>

      <Input title={"Search by name"}/>

      <Profile>
        <div>
          <strong>
            Gianluca Carra
          </strong>
          <a href="">
            logout
          </a>
        </div>

        <img src="https://github.com/gianlucacarra.png" alt="" />
      </Profile>
    </Container>
  );
}