import aboutImg from "./../../assets/coding.svg";
import Container from "./style";

const About = () => {
  return (
    <Container>
      <div>
        <img style={{ width: "20rem" }} src={aboutImg} alt="" />
      </div>
      <div>
        <h1 style={{ margin: "2rem" }}>HI I'M EKREM</h1>
        <hr />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint,
          incidunt alias? Laborum magni dolor quis deserunt! Consectetur
          accusantium a nemo dolores aspernatur quidem labore eos nostrum
          architecto vel, cumque ab enim optio repudiandae ratione non adipisci
          veniam. Accusantium animi corrupti consequatur! Explicabo ab natus
          recusandae ut ipsam fuga accusantium minima.
        </p>
        <br />
        <hr />
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi
          ducimus optio magnam nobis, ex aliquam vitae. Officia, dolor neque!
          Hic voluptas sed, voluptatum qui, ipsum deleniti et aut ex accusamus
          magnam quasi eos labore. Quasi accusamus reprehenderit ducimus
          inventore quidem temporibus minus commodi veniam, ullam numquam soluta
          explicabo, quis porro nisi neque dicta in quas exercitationem, vitae
          odio voluptas natus ad sed maiores. Quasi eaque accusantium minus
          alias quaerat architecto possimus quod dicta laudantium et? Veniam
          corrupti magni magnam quo, facere debitis natus dolorem, vitae, unde
          reprehenderit ipsum eligendi aperiam harum tenetur soluta. Nihil
          exercitationem at, ex beatae cumque quisquam.
        </p>
      </div>
    </Container>
  );
};

export default About;
