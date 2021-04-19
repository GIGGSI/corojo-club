import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { setColor, setRem } from '../../stlyes';
import { FaPhoneAlt } from 'react-icons/fa'
import { AiOutlineMail } from 'react-icons/ai'
import { SiFacebook, SiInstagram } from 'react-icons/si';

const Footer = () => {
    return <Container>
        <Wrapper>
            <Row>
                <Column>
                    <Title>За Контакти</Title>
                    <Paragrapht>Corojo Club</Paragrapht>
                    <Paragrapht><FaPhoneAlt />  08761117890</Paragrapht>
                    <Paragrapht><AiOutlineMail />corojoClub@gmail.com</Paragrapht>
                    <Paragrapht> ул. „Солунска“ 6, 1000 Център, София</Paragrapht>
                    <Paragrapht>Работно време: </Paragrapht>
                    <Paragrapht> Пон. - Събота: 10:30 - 19:30
                        Неделя: 11:00–18:00</Paragrapht>
                </Column>
                <Column>
                    <Title>Нашите Пури</Title>
                    <Links to='/cigar/padron'>Padron</Links>
                    <Links to='/cigar/arturo-fuente'>Arturo Fuente</Links>
                    <Links to='/cigar/oliva'>Oliva</Links>
                    <Links to='/cigar/nub'>Nub</Links>
                    <Links to='/cigar/cain'>Cain</Links>
                    <Links to='/cigar/la-garela'>La Garela</Links>
                    <Links to='/cigar/la-flor-dominicana'>La Flor Dominicana</Links>
                    <Links to='/cigar/ciboa'>Ciboa</Links>
                </Column>
                <Column>
                    <Links to='/'>   <Title>Corojo Club</Title></Links>
                    <Links to='/coffe'>Coffe</Links>
                    <Links to='/beer'>Julia</Links>
                    <Links to='/events'>Информация за ивенти и блог статии</Links>
                    <AncorTag href="https://www.facebook.com/" target="_blank" ><SiFacebook /> Corojo Club</AncorTag>
                    <AncorTag href="https://www.instagram.com/" target="_blank" ><SiInstagram /> Instagram</AncorTag>

                </Column>

            </Row>
        </Wrapper>
    </Container>
}


export const Container = styled.div`
  padding: 80px 60px;
   background: radial-gradient(circle, rgb(19,19,21) 0%, rgb(18,17,15) 100%); 
  /* background:#131315; */

  @media (max-width: 1000px) {
    padding: 70px 30px;
  }
`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 1000px;
    margin: 0 auto;
    /* background: red; */
`

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-left: 60px;
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-gap: 20px;

  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  }
`;

export const Links = styled(Link)`
  color: #fff;
  margin-bottom: 10px;
  font-size: 18px;
  text-decoration: none;

  &:hover {
      color: #ff9c00;
      transition: 200ms ease-in;
  }
`;

export const Title = styled.h3`
  font-size: ${setRem(24)};
  color: ${setColor.mainWhite};

  font-weight: bold;
`;
export const Paragrapht = styled.p`
color:${setColor.mainWhite};
padding-bottom:0.3rem;

`

const AncorTag = styled.a`
  color: #fff;
  margin-bottom: 10px;
  font-size: 18px;
  text-decoration: none;

  &:hover {
      color: #ff9c00;
      transition: 200ms ease-in;
  }
`
export default Footer
