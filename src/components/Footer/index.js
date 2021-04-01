import React from 'react';
import {BiPhoneIncoming} from 'react-icons/bi';
import {MdEditLocation, MdLocalShipping} from 'react-icons/md';
import {RiCopyrightFill} from 'react-icons/ri'



import {
  FooterContainer,
  Footerdiv,
  Footerh2,
  FooterP,
  FooterMiddleDiv, FooterMiddle,FooterBox,FooterIcon, FooterText,
  Footerh3, FormContainer, Form,Formh2, FormDiv, Input, Span, Textarea, Footerp, Button, FooterBottomdiv,FooterBh3

} from './FooterElements';

const Footer = () => {
  const navStyle ={
    color: "white"
};
  

  return (
    <FooterContainer id='Contact'>
      <Footerdiv>
        <Footerh2>Habarlaşmak üçin!</Footerh2>
        <FooterP> </FooterP>
      </Footerdiv>
      <FooterMiddleDiv>
        <FooterMiddle>
          <FooterBox>
            <FooterIcon> <a href="tel:+99365555109"><BiPhoneIncoming/></a>  </FooterIcon>
            <FooterText>
              <Footerh3></Footerh3>
              <Footerp> +99365-55-51-09 <br/> +99365-69-27-94</Footerp>

            </FooterText>
          </FooterBox>

          <FooterBox>
            <FooterIcon> <a href="https://goo.gl/maps/9qsbxHSEn87sT6QB8" target="_blanc"> <MdEditLocation/>  </a> </FooterIcon>
            <FooterText>
              <Footerh3> </Footerh3>
              <Footerp> Adress: <br/> Aşgabat ş., Atatürk köçe, Buzly köşk </Footerp>
            </FooterText>
          </FooterBox>

          
          <FooterBox>
            <FooterIcon> <a href="tel:+99365692794"><MdLocalShipping/> </a> </FooterIcon>
            <FooterText>
              <Footerh3>  </Footerh3>
              <Footerp> Eltip bermek hyzmaty <br/> Her gün  <br/> 10:00-21:00</Footerp>
            </FooterText>
          </FooterBox>

        </FooterMiddle>

        <FormContainer>
          <Form action="mailto:shahymerdana@gmail.com" method="post" encType="text/plain" >
              <Formh2> Bize ýazyň!</Formh2>
              <FormDiv>
                  <Input type="text" name="name" placeholder="Doly adyňyz"></Input>
                  <Span></Span>
              </FormDiv>
              <FormDiv>
                  <Input type="email" name="Email" placeholder='Email'></Input>
                  <Span></Span>
              </FormDiv>
              <FormDiv>
                  <Textarea name="message" placeholder="Şu ýere ýazyň!"></Textarea>
                  <Span></Span>
              </FormDiv>
              <FormDiv>
                  <Button> Ugrat!</Button>
              </FormDiv>
          </Form>
      </FormContainer>
      <h1>sssss</h1>

      </FooterMiddleDiv>
      <FooterBottomdiv>
        <FooterBh3> <RiCopyrightFill/> 2021 Ähli hukuklar goragly <br/> Powered by <a href="https://www.parlakulgam.com/" style={navStyle} >ParlakUlgam</a> </FooterBh3>
      </FooterBottomdiv>
    </FooterContainer>
  );
};

export default Footer;
