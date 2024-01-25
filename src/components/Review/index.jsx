import { Container, Description } from "./style";

import { Rating } from "../Rating";
import { Tag } from "../Tag";

export function Review({ data, ...rest }) {
  return(
    <Container {...rest}>
      <h1>Titulo</h1>

      <Rating size={12} />

      <Description> 
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos sunt dolorum aliquam explicabo. Voluptatem beatae soluta officia quos consequatur animi facere cupiditate, hic, quo vel quidem, iusto quasi nam esse.
        Dolorem eum facilis deserunt recusandae quibusdam officiis! Debitis nostrum vitae exercitationem nobis sit in facere. Soluta non voluptas, amet aut quia pariatur consectetur sit eum rem qui eos nam ducimus.
        Molestiae soluta doloribus magni, laboriosam commodi harum omnis, reiciendis sequi maiores laborum repellat alias enim molestias. Nemo commodi excepturi veniam, id esse harum debitis ipsa ratione explicabo magnam, distinctio laboriosam?
        Similique distinctio ducimus earum labore doloremque voluptatem possimus nobis beatae omnis odio soluta deleniti sunt suscipit neque tempore laboriosam cupiditate, alias dolores culpa aut deserunt dolorem delectus eos enim. Voluptatem!
        Quasi inventore fuga, vel, ex illo ullam mollitia recusandae eligendi impedit maxime voluptatibus laudantium beatae quisquam, maiores vitae distinctio aperiam! Fugit, labore saepe. Mollitia nemo ratione doloribus repudiandae, dicta quo!
        Praesentium architecto veritatis reprehenderit fugit nam in aliquid sed deleniti iste, quod itaque at blanditiis rerum. Blanditiis ab, sequi voluptas placeat distinctio magni aspernatur, laborum excepturi esse quod incidunt dolorem?
      </Description>

      {/* {
        data.tags &&
          <footer>
            {
              data.tags.map(tag => <Tag key={tag.name} title={tag.name} />)
            }
          </footer>
      } */}

      <footer>
        <Tag title="titulo" />
        <Tag title="terror agagaggagagagaggaga" />
        <Tag title="terror agagaggagagagaggaga" />
        <Tag title="terror agagaggagagagaggaga" />
        <Tag title="terror agagaggagagagaggaga" />
        <Tag title="terror agagaggagagagaggaga" />
        <Tag title="terror agagaggagagagaggaga" />
        <Tag title="terror agagaggagagagaggaga" />

      </footer>
    </Container>
  );
}