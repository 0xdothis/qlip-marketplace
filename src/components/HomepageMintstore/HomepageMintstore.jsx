import styled from "styled-components/macro";

import Hero from "../Hero";
import UnstyledButton from "../UnstyledButton";

function HomepageMintstore() {
  return (
    <Hero
      heading="QLIP Mint store"
      description="Mint your artworks of any format, audio, text, video, or Picture, with low fees"
      display="flex"
      flexDirection="column"
      alignItems="center"
    >
      <Wrapper>
        <IconWrapper
          style={{
            "--backgroundColor": "var(--color-outline)",
            "--borderRounded": "100%",
            "--padding": "1.375rem",
            height: "100px",
            width: "100px",
          }}
        >
          <picture>
            <source
              type="image/png"
              srcSet={`
              ./images/paint.png 1x,
              ./images/paint@2x.png 2x,
              ./images/paint@3x.png 3x
            `}
            />

            <img src="./images/paint.png" alt="upload file in any format" />
          </picture>
        </IconWrapper>
        <HeadingL6>Upload File in Any Format</HeadingL6>
        <DescriptionText>PNG, GIF, JPG, WMV, MP4, MP3</DescriptionText>
        <BrowseButton>Browse Files</BrowseButton>
        <IconWrapper
          style={{
            "--backgroundColor": "var(--color-white)",
            "--borderRounded": "8px",
            "--padding": "1rem",
            "--absolute": "absolute",
            "--top": "10px",
            "--left": "0px",
            "--translateX": "-50%",
            "--translateY": "75%",
          }}
        >
          <ImgWrapper>
            <picture>
              <source
                type="image/png"
                srcSet={`./images/audio.png 1x, ./images/audio@2x.png 2x, ./images/audio@3x.png 3x`}
              />
              <img src="./images/audio.png" alt="audio icon" />
            </picture>
          </ImgWrapper>
        </IconWrapper>
        <IconWrapper
          style={{
            "--backgroundColor": "var(--color-white)",
            "--borderRounded": "8px",
            "--padding": "1rem",
            "--absolute": "absolute",
            "--top": "0px",
            "--right": "15px",
            "--translateX": "100%",
            "--translateY": "0%",
          }}
        >
          <ImgWrapper>
            <picture>
              <source
                type="image/png"
                srcSet={`
              ./images/video_call.png 1x,
              ./images/video_call@2x.png 2x,
              ./images/video_call@3x.png 3x
                `}
              />
              <img src="./images/video_call.png" alt="video icon" />
            </picture>
          </ImgWrapper>
          <Text>Videos</Text>
        </IconWrapper>
      </Wrapper>
    </Hero>
  );
}

const Wrapper = styled.div`
  max-width: 44rem;
  width: 100%;
  border: 3px solid var(--color-outline);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 2rem;
  padding-bottom: 2rem;
  position: relative;
`;

const IconWrapper = styled.div`
  padding: var(--padding);
  background-color: var(--backgroundColor);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: var(--borderRounded);
  gap: 0px 16px;

  /* Use to posotion icons freely within the container */
  position: var(--absolute);
  top: var(--top);
  left: var(--left);
  right: var(--right);
  transform: translate(var(--translateX), var(--translateY));
`;

const ImgWrapper = styled.div`
  background-color: inherit;
  padding: 1rem;
  height: 60px;
  width: 60px;
  border-radius: 100px;
  display: flex;
  box-shadow: 0 6px 10px -2px hsl(157deg 85% 37% / 0.4);

  & img {
    width: 100%;
  }
`;

const Text = styled.span`
  font-size: var(--font-body);
  color: var(--color-secondary);
  margin-right: 2rem;
`;

const HeadingL6 = styled.h6`
  font-size: var(--font-h6);
  margin-top: 1.25rem;
  margin-bottom: 1.25rem;
`;

const DescriptionText = styled.p`
  color: var(--color-text-light);
`;

const BrowseButton = styled(UnstyledButton)`
  border: 1px solid var(--color-primary);
  padding: 1rem 4rem;
  border-radius: 100px;
  font-size: var(--font-h6);
  margin-top: 2rem;
`;

export default HomepageMintstore;
