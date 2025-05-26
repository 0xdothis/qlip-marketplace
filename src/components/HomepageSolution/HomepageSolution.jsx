import Hero from "../Hero";
import CardItem from "../CardItem/CardItem";
import { QLIP_EXHIBIT } from "../../data";

function HomepageSolution() {
  return (
    <Hero
      display="grid"
      gridTemplateColumns="repeat(auto-fit, minmax(500px, 1fr))"
      justifyContent="center"
      alignContent="center"
      gap="50px"
    >
      <CardItem
        padding="3.5rem"
        border={true}
        background={true}
        paddingBottom="9.5rem"
        marginTop="2rem"
        marginBottom="2rem"
        data={QLIP_EXHIBIT}
        fontBody="var(--font-h6)"
        fontHeading="var(--font-h4)"
      />
    </Hero>
  );
}

export default HomepageSolution;
