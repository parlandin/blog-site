import BuyCoffeeIcon from "@Icons/BuyCoffee";
import React from "react";
import * as S from "./styles";
import { StaticImage } from "gatsby-plugin-image";
import useNoBodyScroll from "@src/hooks/useNoBodyScroll";

interface CoffeeBModalProps {
  show: boolean;
  onClose: () => void;
}

const CoffeeButton = () => {
  const [showModal, setShowModal] = React.useState(false);

  const handleModal = () => {
    setShowModal((prev) => !prev);
  };

  const closedModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <CoffeeModal show={showModal} onClose={closedModal} />
      <S.Container>
        <S.Button onClick={handleModal} title="botão ajudar o blog com um café">
          <BuyCoffeeIcon />
          Que tal um café?
        </S.Button>
      </S.Container>
    </>
  );
};

const CoffeeModal: React.FC<CoffeeBModalProps> = ({ show, onClose }) => {
  useNoBodyScroll(show);
  return (
    <>
      {show && (
        <>
          <S.Overlay onClick={onClose} title="fechar modal" />

          <S.Modal>
            <S.QrCode>
              <StaticImage
                src="../../images/bmc_qr.png"
                alt="Café"
                placeholder="blurred"
                layout="constrained"
                width={400}
                height={400}
              />
            </S.QrCode>

            <S.Text>
              leia o <span>qrcode</span> ou clique no <span>link abaixo</span>
            </S.Text>

            <S.LinkContainer>
              <a
                href="https://www.buymeacoffee.com/parlandim"
                target="_blank"
                rel="noreferrer"
              >
                https://www.buymeacoffee.com/parlandim
              </a>
            </S.LinkContainer>

            <S.Text>Obrigado pelo apoio username !</S.Text>
          </S.Modal>
        </>
      )}
    </>
  );
};

export default CoffeeButton;
