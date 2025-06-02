import styled from "styled-components/macro";

import Logo from "../components/Logo";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero/Hero";
import {
  USE_CASES,
  PLATFORM,
  QLIP_MARKETPLACE,
  QLIP_SOLUTIONS,
  QLIP_DESCRIPTION,
} from "../data";
import CardItem from "../components/CardItem/CardItem";
import PurpleCollectibles from "../components/PurpleCollectibles/PurpleCollectibles";
import HomepageSolution from "../components/HomepageSolution";
import HomepageToken from "../components/HomepageToken";
import HomepageRoadmap from "../components/HomepageRoadmap";
import HomepageGaming from "../components/HomepageGaming";
import MaxWidthWrapper from "../components/MaxWidthWrapper";
import { QUERIES } from "../constant";

function Whitepaper() {
  return (
    <WhitepaperWrapper>
      <Navbar
        value="Join Community"
        style={{ backgroundColor: "var(--color-bg-dark)" }}
      />
      <WhitepaperHero>
        <Logo
          style={{
            height: "100%",
            transform: "scale(2)",
            justifySelf: "center",
          }}
        />
        <HeadingH2>Whitepaper</HeadingH2>
      </WhitepaperHero>
      <Hero heading="The NFT Industry">
        <DescriptionText>
          The Blockchain technology made it possible for NFT’s to exist and to
          go beyond just “Art”. In the past 2 years, we’ve seen NFT use cases
          and adoption increase across Europe, North America and some other
          parts of the world. We’ve seen adoption in the Sports industry, Comic
          industry, a little from the movie and music industry and other
          industry players in different frontiers are getting ready to roll out.
          Creative artists have made a secondary market out of their creative
          products and we’ve watched NFT traders turn NFT collectors and then
          NFT curators.
        </DescriptionText>
      </Hero>
      <Hero heading="QLIP Solution">
        <DescriptionText>
          There however, still remains much untapped resource, use case, market,
          industry adoption and potential profits to be made in the NFT
          industry, especially from Africa. Qlip is bringing the use cases of
          NFT into other industries that are related and not directly related to
          art. We understand that the NFT industry’s use case is beyond art and
          we know how to make it relevant to these industries and provide
          solutions.
        </DescriptionText>
      </Hero>
      <Hero heading="About The QLIP Platform">
        <HeadingH5>Who can use Qlip?</HeadingH5>
        <Text>
          Qlip is a Cross Chain NFT platform that opens new frontiers in the NFT
          space, for;
        </Text>
        <Wrapper>
          <CardItem
            data={PLATFORM}
            display="flex"
            gap="24px"
            width="max-content"
            alignItems="center"
            padding="1rem"
          />
        </Wrapper>
      </Hero>
      <Hero>
        <HeadingH5>Industry Use cases to Qlip?</HeadingH5>
        <Text>Qlip provides an entry into the NFT market for;</Text>
        <Wrapper>
          <CardItem
            data={USE_CASES}
            display="flex"
            gap="24px"
            width="max-content"
            alignItems="center"
            padding="1rem"
          />
        </Wrapper>
      </Hero>

      <Hero
        heading="QLIP MarketPlace"
        description="Qlip Market place is a Cross Chain NFT Market Place for Qlip Collectibles and NFT Creators.
Here NFT creators can easily sell their Art in various formats in these categories;"
        display="flex"
        flexDirection="column"
        alignItems="center"
      >
        <Wrapper>
          <CardItem
            data={QLIP_MARKETPLACE}
            padding="2rem"
            paddingBottom="2rem"
            marginTop="1rem"
            marginBottom="1rem"
            fontBody="var(--font-body)"
            fontHeading="var(--font-h6)"
          />
        </Wrapper>
        <Notice>
          <NoticeText>
            As much as we love NFT’s, let’s not forget that people will need
            physical art, hence, Qlip makes it easier for artists to display
            their art via the blockchain and collaborate to have an exhibit
            digitally or physically
          </NoticeText>
        </Notice>
      </Hero>

      <PurpleCollectibles>
        <TextContent>
          <HeadingH2>Qlip Collectibles</HeadingH2>
          <DisplayText>
            Qlip Collectibles are created by Qlip, of various African Artists
            and Legends in the Arts and Entertainment Industry
          </DisplayText>
        </TextContent>
        <ImgContent>
          <ContentWrapper>
            <ImgWrapper>
              <img src="./images/cards.png" alt="" />
            </ImgWrapper>
            <p>Packs of Cards</p>
          </ContentWrapper>
          <ContentWrapper>
            <ImgWrapper>
              <img src="./images/audio_wave.png" alt="" />
            </ImgWrapper>
            <p>Packs of Audio Visuals</p>
          </ContentWrapper>
        </ImgContent>
      </PurpleCollectibles>
      <PurpleCollectibles style={{ alignItems: "start" }}>
        <TextContent>
          <HeadingH2>Qlip collectibles will have 4 major features</HeadingH2>
          <DisplayText>
            <List>
              <ListItem>
                Scarce (Limited editions and General editions)
              </ListItem>
              <ListItem>Numbered and verifiable on the Blockchain</ListItem>
              <ListItem>Tradebale</ListItem>
              <ListItem> They will be staked to mine Qlip tokens</ListItem>
            </List>
          </DisplayText>
        </TextContent>
        <ImgContent>
          <ContentWrapper
            style={{
              flexDirection: "column",
              alignItems: "flex-start",

              padding: "1.25rem",
            }}
          >
            <ImgWrapper>
              <Img src="./images/collectibles.png" alt="" />
            </ImgWrapper>
            <HeadingH6>Use case</HeadingH6>
            <p style={{ width: "25ch", lineHeight: "2" }}>
              Let’s take the African HipHop industry for example, fans across
              african countries always brag about their rappers being King of
              Africa, what if a rapper like MI can actually show his Fan Loyalty
              Base is No.1 through the amount of MI NFT’s that are traded on
              Qlip?
            </p>
          </ContentWrapper>
        </ImgContent>
      </PurpleCollectibles>
      <HomepageSolution />
      <Hero
        heading="QLIP Solutions"
        display="flex"
        flexDirection="column"
        alignItems="center"
      >
        <Wrapper>
          {QLIP_SOLUTIONS.map(({ alt, imgSrc, heading, description }) => {
            return (
              <Solution key={Math.random() * 100}>
                <SolutionWrapper>
                  <Img src={imgSrc} alt={alt} />
                </SolutionWrapper>
                <HeadingH6>{heading}</HeadingH6>
                <SolutionText>
                  {description.map((list) => (
                    <ListItem key={Math.random() * 100}>{list}</ListItem>
                  ))}
                </SolutionText>
              </Solution>
            );
          })}
        </Wrapper>
        <Solution style={{ "--width": "100%", marginTop: "3rem" }}>
          <SolutionWrapper>
            <Img src="./images/creative_commons.png" alt="" />
          </SolutionWrapper>
          <HeadingH6>Value for Creators</HeadingH6>
          <SolutionText
            style={{
              "--text-width": "75ch",
            }}
          >
            <ListItem>
              Extremely Low minting fees and ability to mint from mobile device
              via software wallets.
            </ListItem>
            <ListItem>Support marketing from the Qlip Marketing team.</ListItem>

            <ListItem>
              Intellectual property proof, for example, fashion designers can
              prove that a trend started with them and sell that value, meme
              creators can prove that a meme trend started with them and sell
              that value.
            </ListItem>
          </SolutionText>
        </Solution>
      </Hero>
      <PurpleCollectibles style={{ alignItems: "start" }}>
        <TextContent>
          <HeadingH2 style={{ marginTop: "0px" }}>QLIP Token</HeadingH2>
          <>
            <DisplayText>
              The Qlip token is built on the Binance Smart Chain Network and it
              is the token required to use the Qlip platform.
            </DisplayText>
            <DisplayText style={{ width: "50ch" }}>
              <List>
                <ListItem>
                  Qlip Tokens are required for minting by staking Qlip tokens
                </ListItem>
                <ListItem>
                  Art in the Market Place are listed and traded in Qlip tokens
                  and other tokens
                </ListItem>
                <ListItem>
                  Every Mainstream Artiste that will collaborate with Qlip would
                  be required to Stake and lock up Qlip Tokens for a period of 6
                  months on the Qlip platform.
                </ListItem>
                <ListItem>
                  DeFi Utility on Qlip will only be interacted with using Qlip
                  tokens.
                </ListItem>
                <ListItem>
                  5% of sales on the NFT Market Place go to Qlip.
                </ListItem>
              </List>
            </DisplayText>
          </>
        </TextContent>
        <ImgContent>
          <ImgWrapper
            background="transparent"
            style={{
              alignItems: "center",
              width: "150px",
              transform: "translateY(200%)",
            }}
          >
            <Img src="./images/logo@3x.png" alt="" />
          </ImgWrapper>
        </ImgContent>
      </PurpleCollectibles>
      <HomepageToken heading="QLIP Token" />
      <PurpleCollectibles style={{ display: "revert" }}>
        <HeadingH4 style={{ textAlign: "center" }}>
          TOKENOMICS BREAK DOWN TOTAL SUPPLY OF 10,000,000 $QLP
        </HeadingH4>
        <Table>
          <TableHeading>
            <TableRow>
              <TableHead style={{ width: "20%" }} scope="col">
                Allocation
              </TableHead>
              <TableHead style={{ width: "15%" }} scope="col">
                Share
              </TableHead>
              <TableHead style={{ width: "40%" }} scope="col">
                Distribution
              </TableHead>
            </TableRow>
          </TableHeading>
          <TableBody>
            <TableRow>
              <TableData scope="row">Private Sale</TableData>
              <TableData>5%</TableData>
              <TableData
                style={{
                  textAlign: "left",
                  paddingLeft: "4rem",
                  paddingRight: "4rem",
                }}
              >
                ½ a Million Tokens will be sold at $0.1 = $50,000 Soft Cap with
                50% locked for 6 months.
              </TableData>
            </TableRow>
            <TableRow>
              <TableData scope="row">Public Sale</TableData>
              <TableData>15%</TableData>
              <TableData
                style={{
                  textAlign: "left",
                  paddingLeft: "4rem",
                  paddingRight: "4rem",
                }}
              >
                1.5 Million Tokens will be sold at $0.5 = $750,000 Hard Cap with
                50% locked for 2 months.
              </TableData>
            </TableRow>
            <TableRow>
              <TableData scope="row">Airdrops</TableData>
              <TableData>10%</TableData>
              <TableData
                style={{
                  textAlign: "left",
                  paddingLeft: "4rem",
                  paddingRight: "4rem",
                }}
              >
                1 Million Tokens will be airdropped across various times to
                early users for various activities.
              </TableData>
            </TableRow>
            <TableRow>
              <TableData scope="row">Marketing</TableData>
              <TableData>10%</TableData>
              <TableData
                style={{
                  textAlign: "left",
                  paddingLeft: "4rem",
                  paddingRight: "4rem",
                }}
              >
                1 Million Tokens Allocated for Marketing.
              </TableData>
            </TableRow>
            <TableRow>
              <TableData scope="row">Team</TableData>
              <TableData>10%</TableData>
              <TableData
                style={{
                  textAlign: "left",
                  paddingLeft: "4rem",
                  paddingRight: "4rem",
                }}
              >
                1 Million Tokens reserved for Team locked for 1 year with 5%
                unlock from the 13th month.
              </TableData>
            </TableRow>
            <TableRow>
              <TableData scope="row">Mined via Staking</TableData>
              <TableData>25%</TableData>
              <TableData
                style={{
                  textAlign: "left",
                  paddingLeft: "4rem",
                  paddingRight: "4rem",
                }}
              >
                2.5 Million Tokens will be mined via staking Qlip Collectibles.
              </TableData>
            </TableRow>
            <TableRow>
              <TableData scope="row">Treasury</TableData>
              <TableData>25%</TableData>
              <TableData
                style={{
                  textAlign: "left",
                  paddingLeft: "4rem",
                  paddingRight: "4rem",
                }}
              >
                2.5 Million for Company future activities, locked for 2 years
              </TableData>
            </TableRow>
          </TableBody>
        </Table>
      </PurpleCollectibles>
      <HomepageRoadmap />
      <Hero>
        <HeadingH4>QLIP Collectible Description</HeadingH4>
        <DescriptionText>
          Qlip Collectibles are exclusive only to African artistes and art
          creators in various formats. Packs would be made out of their most
          creative and loved content, past, present, future.
        </DescriptionText>
        <Wrapper>
          <CardItem
            data={QLIP_DESCRIPTION}
            padding="2rem"
            // paddingBottom="1rem"
            marginTop="1rem"
            // marginBottom="1rem"
            fontHeading="var(--font-body)"
          />
        </Wrapper>
      </Hero>
      <HomepageGaming />
      <PurpleCollectibles
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "700px",
        }}
      >
        <HeadingH2>Thank You</HeadingH2>
        <HeadingH4>Visit Qlipit.io to participate in Pre-Sale</HeadingH4>
      </PurpleCollectibles>
    </WhitepaperWrapper>
  );
}

const WhitepaperWrapper = styled(MaxWidthWrapper)``;

const WhitepaperHero = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  min-height: 700px;
  background-color: var(--color-primary);
  margin-left: -72px;
  margin-right: -72px;

  @media ${QUERIES.laptopAndSmaller} {
    margin-left: 0px;
    margin-right: 0px;
  }
`;

const HeadingH2 = styled.h2`
  font-size: var(--font-h2);
  margin-top: 4rem;

  @media ${QUERIES.phoneAndSmaller} {
    text-align: center;
    width: 100%;
  }
`;

const DescriptionText = styled.p`
  max-width: 62ch;
  color: var(--color-text-dark);

  @media ${QUERIES.laptopAndSmaller} {
    /* max-width: fit-content; */
    /* margin: 0 auto; */
  }
`;

const HeadingH5 = styled.h5`
  font-size: var(--font-h5);
  margin-bottom: 1rem;
`;

const Text = styled.p`
  font-size: var(--font-body);
  color: var(--color-text-dark);
`;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(275px, 1fr));
  gap: 24px;
  width: 100%;
  margin-top: 2rem;
`;

const Notice = styled.div`
  padding: 2rem 4rem;
  width: 95ch;
  background-color: hsl(244deg 100% 89%);
  text-align: center;
  margin-top: 2rem;
  margin-bottom: 2rem;

  &::selection {
    background-color: var(--color-primary);
    color: var(--color-white);
  }

  @media ${QUERIES.laptopAndSmaller} {
    width: revert;
  }
`;

const NoticeText = styled.p`
  font-size: var(--font-h6);
  color: hsl(240deg 14% 7%);
`;

const ImgWrapper = styled.div`
  height: 60px;
  width: 60px;
  background-color: ${(p) =>
    p.background ? p.background : "var(--color-white)"};
  border-radius: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;

  & img {
    display: block;
    width: 100%;
  }
`;

const TextContent = styled.div`
  /* align-items: start; */

  ${HeadingH2} {
    width: 600px;

    @media ${QUERIES.tabletAndSmaller} {
      width: fit-content;
    }
  }
`;

const DisplayText = styled.div`
  font-size: var(--font-h6);
  width: 35ch;
  margin-top: 1rem;

  @media ${QUERIES.phoneAndSmaller} {
    width: fit-content;
    margin-bottom: 2rem;
    /* text-align: center; */
  }
`;

const ImgContent = styled.div`
  @media ${QUERIES.phoneAndSmaller} {
    display: none;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  border: 1px solid var(--color-white);
  width: fit-content;
  padding: 0.5rem 1rem;
  justify-self: start;
  min-width: 295px;
  width: fit-content;
  font-size: var(--font-body);

  &:last-of-type {
    margin-top: 2rem;
  }

  @media ${QUERIES.phoneAndSmaller} {
    margin: 0 auto;
  }
`;
const List = styled.ol`
  list-style: decimal;
  margin-left: 1rem;

  @media ${QUERIES.phoneAndSmaller} {
    /* margin: auto; */
  }
`;

const ListItem = styled.li`
  /* transform: translateX(20px); */
  /* color: var(--color-text-dark); */

  &:not(:last-of-type) {
    margin-bottom: 1rem;
  }
`;

const HeadingH6 = styled.h6`
  font-size: var(--font-h6);
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

const Solution = styled.article`
  padding: 2rem;
  padding-bottom: 2rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
  font-size: var(--font-body);
  width: var(--width);

  background-color: ${(p) =>
    p.background ? "var(--color-outline)" : undefined};

  &:nth-child(even) {
    border: ${(p) => (p.border ? "2px solid var(--color-outline)" : undefined)};
    background-color: transparent;
  }

  border: ${(p) =>
    p.background ? undefined : "2px solid var(--color-outline)"};
`;

const SolutionWrapper = styled.div`
  padding: 1rem;
  width: max-content;
  border-radius: 100px;
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${(p) =>
    !p.background ? "var(--color-outline)" : undefined};

  &:nth-child(even) {
    border: ${(p) => (p.border ? "2px solid var(--color-white)" : undefined)};
    background-color: transparent;
  }

  border: ${(p) =>
    !p.background ? undefined : "2px solid var(--color-white)"};

  li {
    color: var(--color-text-dark);
  }
`;

const Img = styled.img`
  width: 100%;
`;

const SolutionText = styled.ol`
  list-style: disc;
  margin-top: 2rem;
  width: var(--text-width);

  ${ListItem} {
    color: var(--color-text-dark);
  }

  @media ${QUERIES.phoneAndSmaller} {
    width: revert;
  }
`;

const HeadingH4 = styled.h4`
  font-size: var(--font-h4);

  @media ${QUERIES.laptopAndSmaller} {
    text-align: center;
  }
`;

const Table = styled.table`
  width: 100%;
  border: 2px solid var(--color-white);
  height: 600px;
  font-size: var(--font-body);
  margin-top: 3rem;

  @media ${QUERIES.phoneAndSmaller} {
    margin-top: 1.5rem;
  }
`;

const TableHeading = styled.thead`
  /* display: inline-block; */
  font-size: var(--font-h5);

  border-bottom: 2px solid;
`;

const TableBody = styled.tbody`
  /* text-align: center; */
`;

const TableData = styled.td`
  vertical-align: middle;
  width: 30ch;

  &:not(:last-child) {
    border-right: 1px solid var(--color-white);
  }

  @media ${QUERIES.phoneAndSmaller} {
    width: fit-content;
    padding: 0.5rem !important;
    font-size: var(--font-small);
  }
`;

const TableRow = styled.tr`
  /* padding: 1rem; */
  text-align: center;

  &:not(:last-of-type) {
    border-bottom: 1px solid var(--color-white);
  }
`;

const TableHead = styled.th`
  padding: 1rem;

  &:not(:last-of-type) {
    border-right: 1px solid var(--color-white);
  }
`;

export default Whitepaper;
