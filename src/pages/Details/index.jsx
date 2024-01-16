import { Container, Content, Title, Infos, Author, Date, Tags } from './style';

import { Header } from "../../components/Header";
import { ButtonText } from "../../components/ButtonText";
import { Rating } from "../../components/Rating";
import { Tag } from "../../components/Tag";

import { FiArrowLeft, FiClock } from "react-icons/fi"

export function Details() {
  return(
    <Container>
      <Header />
      
      <main>
        <Content>
          <ButtonText icon={FiArrowLeft} title="Back" />

          <Title>
            <h1>Interestelar</h1>

            <Rating />
          </Title>

          <Infos>
            <Author>
              <img src="https://github.com/gianlucacarra.png" alt="" />
              <span>Gianluca Carra</span>
            </Author>

            <Date>
              <FiClock />
              22/12/22 at 12:35
            </Date>
          </Infos>

          <Tags>
            <Tag title="Ação" />
            <Tag title="suspense" />
            <Tag title="Terror" />
            <Tag title="Avião" />
          </Tags>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio neque illo iste maiores odit placeat quas nam eaque dicta molestias velit eos, a accusantium voluptas, doloribus veniam ullam nisi rem.
            Quos corrupti exercitationem blanditiis quis aliquid dignissimos mollitia voluptas! Quae accusamus, dolorum accusantium impedit iste error ullam voluptatem assumenda vitae at et maxime aliquam quis ab cupiditate nemo. Eveniet, consequatur?
            Asperiores, libero alias adipisci debitis incidunt doloribus ex, ab quibusdam ullam, inventore optio quasi. Tempore voluptatibus neque iure magni quia iste quo temporibus tempora rem sed eveniet, culpa ipsam atque.
            Nemo ex in alias totam voluptatem cum tempora repudiandae hic veniam cumque, corrupti debitis eius dignissimos eveniet laboriosam doloremque? Sit expedita cupiditate rem vel recusandae, ut cumque quaerat eveniet iure.
            Voluptatum possimus non ipsa quam repudiandae dolores deserunt, vel dignissimos commodi delectus cumque iure labore aut nobis veniam. Eaque libero porro vitae ut deserunt reprehenderit dolor debitis autem aliquid id.
            Illum in cumque labore eaque repellendus voluptas laborum dolor a! Provident eius fugiat soluta a, mollitia quisquam debitis ipsa asperiores exercitationem laudantium at quia ratione obcaecati consectetur voluptas tempora. Inventore.
            Cupiditate voluptate repellat vitae rem, neque soluta ipsa alias tenetur aliquam odio quaerat incidunt deserunt ad commodi corrupti nesciunt hic autem, laboriosam sunt. Laboriosam suscipit quo, consequuntur quasi natus nihil.
            Quae nesciunt placeat vel itaque iure dolores omnis facilis unde eum ipsam. Quisquam aliquam exercitationem doloribus officiis suscipit sunt cum atque eveniet, quas eligendi vero impedit, eum voluptatum! Ut, ex!
            Perspiciatis illo impedit harum fuga repellat sequi et aut esse veritatis, placeat iusto aperiam officia dolore, eaque quaerat error ipsum recusandae cum. Ullam nostrum tempora maiores quia magnam sunt optio.
            Excepturi vel inventore praesentium. Expedita soluta cupiditate rem fugiat saepe, quo laborum blanditiis asperiores temporibus, ea error nihil sint cum laboriosam dignissimos recusandae, ullam fugit. Minus cum quisquam doloribus exercitationem?
            Qui sed fugiat, accusamus suscipit accusantium quasi, mollitia cumque sit nostrum labore cum rerum laudantium nisi velit eligendi amet porro reiciendis! Animi nostrum deserunt praesentium? Laborum error assumenda vel distinctio.
            Est ipsam eum saepe, nisi ex cumque maxime atque ipsum ut, aliquam, sequi reiciendis excepturi corporis amet tenetur labore doloremque nulla eos repudiandae laborum corrupti alias architecto! Voluptatem, quos saepe?
            Perspiciatis fugiat aperiam nulla blanditiis, eaque sequi quod fugit, distinctio ullam recusandae animi dolores. Pariatur expedita soluta cupiditate debitis iste, quo alias praesentium sapiente itaque? Ipsam libero delectus esse est!
            Quae iste perferendis cupiditate nam odit est maiores mollitia dolores adipisci eligendi expedita sint temporibus praesentium illum fugit doloribus officia amet, voluptate consequuntur? Pariatur culpa molestias, numquam doloribus voluptatum aliquid.
            Iste fugiat ipsum quibusdam tenetur, neque natus maxime error, architecto quae, aliquid molestias quidem provident nesciunt laudantium fugit. Debitis libero modi alias molestiae optio magni blanditiis hic obcaecati quibusdam dignissimos!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam delectus ratione, harum, quidem tempore aliquid perspiciatis hic cum tempora impedit dolores nihil quia labore non. Itaque illum voluptas excepturi molestiae.
            Architecto quam accusantium, labore asperiores, cum sunt adipisci provident vitae tenetur ex quaerat ut impedit delectus quae, dolorum facilis corrupti? Sequi ad nihil perspiciatis explicabo, illum praesentium accusamus veritatis error!
            Minima nesciunt, eos libero molestias debitis vel cupiditate obcaecati eius ut voluptates atque, dolorum amet? Perspiciatis harum quibusdam cupiditate autem molestiae dignissimos aliquid maiores ea nesciunt? Explicabo odio tempora sit.
            Asperiores illo sit modi sint, cumque tempora officia pariatur quia neque inventore est corrupti laudantium ipsa iste debitis iusto dolore perferendis! Eius ullam excepturi nobis error vitae asperiores est nihil!
            Fugit veritatis reprehenderit esse cumque nesciunt perspiciatis ducimus aperiam necessitatibus, illo voluptas praesentium reiciendis inventore laboriosam! Voluptatum quae cupiditate eum delectus asperiores numquam, voluptas sint quis deserunt repellendus, aliquid ea?
            Earum, placeat ipsum? Repellat, deleniti? Et amet nisi aperiam reiciendis, veniam porro. Totam illo vel quia, molestias adipisci maxime accusamus, nihil iusto modi itaque aperiam commodi consequuntur? Cum, quidem eaque.
          </p>
        </Content>
      </main>
    </Container>
  );
}