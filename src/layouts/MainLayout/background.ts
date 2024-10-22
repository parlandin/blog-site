import styled, { createGlobalStyle, css, keyframes } from "styled-components";

//@ts-ignore
import Background1700 from "../../images/Background1700.webp";
//@ts-ignore
import Background700 from "../../images/Background700.webp";
//@ts-ignore
import Background1000 from "../../images/Background1000.webp";
//@ts-ignore
import Background300 from "../../images/Background300.webp";

const zoom = keyframes`
   0%{
        transform: scale(1);
    }
    100%{
        transform: scale(1.5);
    }
`;

export const Background = createGlobalStyle`
  ${({ theme }) => css`
    
    body {
      background-color: ${theme.colors.background}; 
    }


   .background.default {
    position: fixed;
    background-color: ${theme.colors.galaxyStars};
    z-index: 1;
    top: 50%;
    left: 50%;
    height: 1px;
    width: 1px;
    border-radius: 50%;
    box-shadow: -42vw -4vh 0px 0px ${theme.colors.galaxyStars},25vw -41vh 0px 0px ${theme.colors.galaxyStars},-20vw 49vh 0px 1px ${theme.colors.galaxyStars},5vw 40vh 1px 1px ${theme.colors.galaxyStars},29vw 19vh 1px 0px ${theme.colors.galaxyStars},-44vw -13vh 0px 0px ${theme.colors.galaxyStars},46vw 41vh 0px 1px ${theme.colors.galaxyStars},-3vw -45vh 0px 1px ${theme.colors.galaxyStars},47vw 35vh 1px 0px ${theme.colors.galaxyStars},12vw -8vh 1px 0px ${theme.colors.galaxyStars},-34vw 48vh 1px 1px ${theme.colors.galaxyStars},32vw 26vh 1px 1px ${theme.colors.galaxyStars},32vw -41vh 1px 1px ${theme.colors.galaxyStars},0vw 37vh 1px 1px ${theme.colors.galaxyStars},34vw -26vh 1px 0px ${theme.colors.galaxyStars},-14vw -49vh 1px 0px ${theme.colors.galaxyStars},-12vw 45vh 0px 1px ${theme.colors.galaxyStars},-44vw -33vh 0px 1px ${theme.colors.galaxyStars},-13vw 41vh 0px 0px ${theme.colors.galaxyStars},-36vw -11vh 0px 1px ${theme.colors.galaxyStars},-23vw -24vh 1px 0px ${theme.colors.galaxyStars},-38vw -27vh 0px 1px ${theme.colors.galaxyStars},16vw -19vh 0px 0px ${theme.colors.galaxyStars},28vw 33vh 1px 0px ${theme.colors.galaxyStars},-49vw -4vh 0px 0px ${theme.colors.galaxyStars},16vw 32vh 0px 1px ${theme.colors.galaxyStars},36vw -18vh 1px 0px ${theme.colors.galaxyStars},-25vw -30vh 1px 0px ${theme.colors.galaxyStars},-23vw 24vh 0px 1px ${theme.colors.galaxyStars},-2vw -35vh 1px 1px ${theme.colors.galaxyStars},-25vw 9vh 0px 0px ${theme.colors.galaxyStars},-15vw -34vh 0px 0px ${theme.colors.galaxyStars},-8vw -19vh 1px 0px ${theme.colors.galaxyStars},-20vw -20vh 1px 1px ${theme.colors.galaxyStars},42vw 50vh 0px 1px ${theme.colors.galaxyStars},-32vw 10vh 1px 0px ${theme.colors.galaxyStars},-23vw -17vh 0px 0px ${theme.colors.galaxyStars},44vw 15vh 1px 0px ${theme.colors.galaxyStars},-40vw 33vh 1px 1px ${theme.colors.galaxyStars},-43vw 8vh 0px 0px ${theme.colors.galaxyStars},-48vw -15vh 1px 1px ${theme.colors.galaxyStars},-24vw 17vh 0px 0px ${theme.colors.galaxyStars},-31vw 50vh 1px 0px ${theme.colors.galaxyStars},36vw -38vh 0px 1px ${theme.colors.galaxyStars},-7vw 48vh 0px 0px ${theme.colors.galaxyStars},15vw -32vh 0px 0px ${theme.colors.galaxyStars},29vw -41vh 0px 0px ${theme.colors.galaxyStars},2vw 37vh 1px 0px ${theme.colors.galaxyStars},7vw -40vh 1px 1px ${theme.colors.galaxyStars},15vw 18vh 0px 0px ${theme.colors.galaxyStars},25vw -13vh 1px 1px ${theme.colors.galaxyStars},-46vw -12vh 1px 1px ${theme.colors.galaxyStars},-18vw 22vh 0px 0px ${theme.colors.galaxyStars},23vw -9vh 1px 0px ${theme.colors.galaxyStars},50vw 12vh 0px 1px ${theme.colors.galaxyStars},45vw 2vh 0px 0px ${theme.colors.galaxyStars},14vw -48vh 1px 0px ${theme.colors.galaxyStars},23vw 43vh 0px 1px ${theme.colors.galaxyStars},-40vw 16vh 1px 1px ${theme.colors.galaxyStars},20vw -31vh 0px 1px ${theme.colors.galaxyStars},-17vw 44vh 1px 1px ${theme.colors.galaxyStars},18vw -45vh 0px 0px ${theme.colors.galaxyStars},33vw -6vh 0px 0px ${theme.colors.galaxyStars},0vw 7vh 0px 1px ${theme.colors.galaxyStars},-10vw -18vh 0px 1px ${theme.colors.galaxyStars},-19vw 5vh 1px 0px ${theme.colors.galaxyStars},1vw 42vh 0px 0px ${theme.colors.galaxyStars},22vw 48vh 0px 1px ${theme.colors.galaxyStars},39vw -8vh 1px 1px ${theme.colors.galaxyStars},-6vw -42vh 1px 0px ${theme.colors.galaxyStars},-47vw 34vh 0px 0px ${theme.colors.galaxyStars},-46vw 19vh 0px 1px ${theme.colors.galaxyStars},-12vw -32vh 0px 0px ${theme.colors.galaxyStars},-45vw -38vh 0px 1px ${theme.colors.galaxyStars},-28vw 18vh 1px 0px ${theme.colors.galaxyStars},-38vw -46vh 1px 1px ${theme.colors.galaxyStars},49vw -6vh 1px 1px ${theme.colors.galaxyStars},-28vw 18vh 1px 1px ${theme.colors.galaxyStars},10vw -24vh 0px 1px ${theme.colors.galaxyStars},-5vw -11vh 1px 1px ${theme.colors.galaxyStars},33vw -8vh 1px 0px ${theme.colors.galaxyStars},-16vw 17vh 0px 0px ${theme.colors.galaxyStars},18vw 27vh 0px 1px ${theme.colors.galaxyStars},-8vw -10vh 1px 1px ${theme.colors.galaxyStars};
  
  /* stars were too big with the layers above but left the code in case no one cares  -- as in, if noone's just that  one other loner who actually cares    */
  
  box-shadow: 24vw 9vh 1px 0px ${theme.colors.galaxyStars},12vw -24vh 0px 1px ${theme.colors.galaxyStars},-45vw -22vh 0px 0px ${theme.colors.galaxyStars},-37vw -40vh 0px 1px ${theme.colors.galaxyStars},29vw 19vh 0px 1px ${theme.colors.galaxyStars},4vw -8vh 0px 1px ${theme.colors.galaxyStars},-5vw 21vh 1px 1px ${theme.colors.galaxyStars},-27vw 26vh 1px 1px ${theme.colors.galaxyStars},-47vw -3vh 1px 1px ${theme.colors.galaxyStars},-28vw -30vh 0px 1px ${theme.colors.galaxyStars},-43vw -27vh 0px 1px ${theme.colors.galaxyStars},4vw 22vh 1px 1px ${theme.colors.galaxyStars},36vw 23vh 0px 0px ${theme.colors.galaxyStars},-21vw 24vh 1px 1px ${theme.colors.galaxyStars},-16vw 2vh 1px 0px ${theme.colors.galaxyStars},-16vw -6vh 0px 0px ${theme.colors.galaxyStars},5vw 26vh 0px 0px ${theme.colors.galaxyStars},-34vw 41vh 0px 0px ${theme.colors.galaxyStars},1vw 42vh 1px 1px ${theme.colors.galaxyStars},11vw -13vh 1px 1px ${theme.colors.galaxyStars},48vw -8vh 1px 0px ${theme.colors.galaxyStars},22vw -15vh 0px 0px ${theme.colors.galaxyStars},45vw 49vh 0px 0px ${theme.colors.galaxyStars},43vw -27vh 1px 1px ${theme.colors.galaxyStars},20vw -2vh 0px 0px ${theme.colors.galaxyStars},8vw 22vh 

0 px 1px ${theme.colors.galaxyStars},39vw 48vh 1px 1px ${theme.colors.galaxyStars},-21vw -11vh 0px 1px ${theme.colors.galaxyStars},-40vw 45vh 0px 1px ${theme.colors.galaxyStars},11vw -30vh 1px 0px ${theme.colors.galaxyStars},26vw 30vh 1px 0px ${theme.colors.galaxyStars},45vw -29vh 0px 1px ${theme.colors.galaxyStars},-2vw 18vh 0px 0px ${theme.colors.galaxyStars},-29vw -45vh 1px 0px ${theme.colors.galaxyStars},-7vw -27vh 1px 1px ${theme.colors.galaxyStars},42vw 24vh 0px 0px ${theme.colors.galaxyStars},45vw -48vh 1px 0px ${theme.colors.galaxyStars},-36vw -18vh 0px 0px ${theme.colors.galaxyStars},-44vw 13vh 0px 1px ${theme.colors.galaxyStars},36vw 16vh 0px 1px ${theme.colors.galaxyStars},40vw 24vh 0px 0px ${theme.colors.galaxyStars},18vw 11vh 0px 0px ${theme.colors.galaxyStars},-15vw -23vh 1px 0px ${theme.colors.galaxyStars},-24vw 48vh 0px 1px ${theme.colors.galaxyStars},27vw -45vh 1px 0px ${theme.colors.galaxyStars},-2vw -24vh 0px 1px ${theme.colors.galaxyStars},-15vw -28vh 0px 0px ${theme.colors.galaxyStars},-43vw 13vh 1px 0px ${theme.colors.galaxyStars},7vw 27vh 1px 0px ${theme.colors.galaxyStars},47vw 5vh 0px 0px ${theme.colors.galaxyStars},-45vw 15vh 1px 1px ${theme.colors.galaxyStars},-5vw -28vh 0px 1px ${theme.colors.galaxyStars},38vw 25vh 1px 1px ${theme.colors.galaxyStars},-39vw -1vh 1px 0px ${theme.colors.galaxyStars},5vw 0vh 1px 0px ${theme.colors.galaxyStars},49vw 13vh 0px 0px ${theme.colors.galaxyStars},48vw 10vh 0px 1px ${theme.colors.galaxyStars},19vw -28vh 0px 0px ${theme.colors.galaxyStars},4vw 7vh 0px 0px ${theme.colors.galaxyStars},21vw 21vh 1px 1px ${theme.colors.galaxyStars},-15vw -15vh 0px 1px ${theme.colors.galaxyStars},-6vw -42vh 1px 0px ${theme.colors.galaxyStars},-15vw 48vh 1px 1px ${theme.colors.galaxyStars},-23vw 25vh 1px 1px ${theme.colors.galaxyStars},-48vw 25vh 0px 1px ${theme.colors.galaxyStars},-31vw -19vh 0px 1px ${theme.colors.galaxyStars},4vw 37vh 1px 1px ${theme.colors.galaxyStars},-43vw 28vh 0px 0px ${theme.colors.galaxyStars},3vw -25vh 0px 1px ${theme.colors.galaxyStars},-39vw 14vh 0px 1px ${theme.colors.galaxyStars},-40vw 31vh 0px 1px ${theme.colors.galaxyStars},35vw -36vh 1px 1px ${theme.colors.galaxyStars},16vw 49vh 0px 0px ${theme.colors.galaxyStars},6vw 39vh 0px 0px ${theme.colors.galaxyStars},3vw -35vh 0px 1px ${theme.colors.galaxyStars},-44vw -2vh 1px 0px ${theme.colors.galaxyStars},-6vw 21vh 1px 0px ${theme.colors.galaxyStars},48vw 9vh 1px 1px ${theme.colors.galaxyStars},-43vw 30vh 1px 1px ${theme.colors.galaxyStars},29vw -12vh 1px 1px ${theme.colors.galaxyStars},-48vw 13vh 1px 0px ${theme.colors.galaxyStars},-42vw 32vh 1px 1px ${theme.colors.galaxyStars},34vw 15vh 1px 1px ${theme.colors.galaxyStars},29vw -37vh 1px 1px ${theme.colors.galaxyStars},28vw 2vh 0px 0px ${theme.colors.galaxyStars};
  animation: ${zoom} 13s alternate infinite; 
  `}
 
`;

export const BackgroundStyle = styled.div`
  &.halloween {
    position: fixed;
    min-width: 100%;
    min-height: 100%;
    background: #000;
    background-image: url(${Background1700});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;

    @media (max-width: 1100px) {
      background-image: url(${Background1000});
    }

    @media (max-width: 800px) {
      background-image: url(${Background700});
    }

    @media (max-width: 500px) {
      background-image: url(${Background300});
    }
  }
`;
