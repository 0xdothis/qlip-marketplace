import styled from "styled-components/macro";
import MaxWidthWrapper from "../components/MaxWidthWrapper";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import HomepageToken from "../components/HomepageToken";
import PurpleCollectibles from "../components/PurpleCollectibles";
import Footer from "../components/Footer";
import { QUERIES } from "../constant";

function QlipToken() {
  return (
    <>
      <Navbar
        value="Join Community"
        style={{ backgroundColor: "var(--color-bg-dark)" }}
      />
      <MaxWidthWrapper>
        <Hero>
          <PurpleCollectibles
            style={{
              backgroundColor: "transparent",
              marginLeft: "0",
              marginRight: "0",
              gridTemplateColumns: "1fr",
              paddingLeft: "64px",
              paddingRight: "64px",
              width: "100%",
            }}
          >
            <TextContent>
              <HeadingH2 style={{ marginTop: "0px" }}>
                QLIP Tokenomics
              </HeadingH2>
              <>
                <DisplayText style={{ width: "60ch", marginBottom: "1rem" }}>
                  The Qlip token is built on the Binance Smart Chain Network and
                  it is the token required to use the Qlip platform.
                </DisplayText>
                <DisplayText style={{ width: "60ch" }}>
                  <List>
                    <ListItem>
                      Qlip Tokens are required for minting by staking Qlip
                      tokens
                    </ListItem>
                    <ListItem>
                      Art in the Market Place are listed and traded in Qlip
                      tokens and other tokens
                    </ListItem>
                    <ListItem>
                      Every Mainstream Artiste that will collaborate with Qlip
                      would be required to Stake and lock up Qlip Tokens for a
                      period of 6 months on the Qlip platform.
                    </ListItem>
                    <ListItem>
                      DeFi Utility on Qlip will only be interacted with using
                      Qlip tokens.
                    </ListItem>
                    <ListItem>
                      5% of sales on the NFT Market Place go to Qlip.
                    </ListItem>
                  </List>
                </DisplayText>
              </>
            </TextContent>
            {/* <ImgContent>
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
            </ImgContent> */}
          </PurpleCollectibles>
          <HomepageToken />
          <PurpleCollectibles
            style={{ display: "revert", backgroundColor: "transparent" }}
          >
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
                    ½ a Million Tokens will be sold at $0.1 = $50,000 Soft Cap
                    with 50% locked for 6 months.
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
                    1.5 Million Tokens will be sold at $0.5 = $750,000 Hard Cap
                    with 50% locked for 2 months.
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
                    2.5 Million Tokens will be mined via staking Qlip
                    Collectibles.
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
                    2.5 Million for Company future activities, locked for 2
                    years
                  </TableData>
                </TableRow>
              </TableBody>
            </Table>
          </PurpleCollectibles>
          <Footer />
        </Hero>
      </MaxWidthWrapper>
    </>
  );
}

const HeadingH2 = styled.h2`
  font-size: var(--font-h2);
  margin-top: 4rem;
`;

const TextContent = styled.div`
  /* align-items: start; */
  /* width: 100%; */
  display: flex;
  flex-direction: column;

  ${HeadingH2} {
    /* width: 600px; */
    align-self: center;
    margin-bottom: 2rem;

    @media ${QUERIES.phoneAndSmaller} {
      margin-bottom: 0.5rem;
    }
  }

  @media ${QUERIES.laptopAndSmaller} {
    width: 100%;
    align-items: center;
  }
`;

const DisplayText = styled.div`
  font-size: var(--font-h6);
  width: 35ch;
  margin-top: 1rem;

  @media ${QUERIES.laptopAndSmaller} {
    max-width: fit-content;
    /* text-align: center; */
  }
`;

const ImgContent = styled.div``;

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

const List = styled.ol`
  list-style: decimal;
  margin-left: 1rem;
`;

const ListItem = styled.li`
  /* transform: translateX(20px); */
  /* color: var(--color-text-dark); */

  &:not(:last-of-type) {
    margin-bottom: 1rem;
  }

  @media ${QUERIES.phoneAndSmaller} {
    font-size: var(--font-small);
  }
`;

const Img = styled.img`
  width: 100%;
`;

const HeadingH4 = styled.h4`
  font-size: var(--font-h4);
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
  width: 200px;
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

export default QlipToken;
