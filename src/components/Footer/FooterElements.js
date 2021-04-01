import styled from 'styled-components';
import ImgBg2 from '../../images/featured3.jpg';




export const FooterContainer = styled.section`
  
  min-height:100vh;
  position: relative;
  padding-top:30%;
  padding: 50px 100px;
  display:flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: linear-gradient(to right, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.7)),
    url(${ImgBg2  });
  background-size: cover;

  @media (max-width: 991px) {
    padding: 50px;
  
  }
  

`;


export const Footerdiv = styled.div`
  max-width: 800px;
  text-align: center;
`;

export const Footerh2 = styled.h2`
  font-size: 36px;
  font-weight: 500;
  color: #fff;

`;


export const FooterP = styled.p`
  font-weight: 300;
  color: #fff;
  
`;

export const Footerp = styled.p`
  letter-spacing: 2px;
  line-height: 25px;
  font-weight: 300;
  color: #fff;
  
  
`;
export const Form = styled.form`
  font-weight: 300;
  color: #fff;
  
`;

export const FooterMiddleDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 5%;

  @media (max-width: 991px) {
    flex-direction: column;
  }

`;

export const FooterMiddle = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;

  @media (max-width: 991px) {
    margin-bottom: 40px;
  }

`;


export const FooterBox = styled.div`
  position: relative;
  padding: 20px 0;
  display: flex;

`;

export const FooterIcon = styled.div`
  min-width: 60px;
  height: 60px;
  background: #fff;
  display: flex;
  justify-content:center;
  align-items: center;
  border-radius: 50%;
  font-size: 22px;

  &:hover {
    color: #fff;
    background: #e31837;
    transition: 0.2s ease-out;
    cursor: pointer;
  }

`;

export const FooterText = styled.div`
  display: flex;
  margin-left: 20px;
  color: #fff;
  font-size: 16px;
  flex-direction: column;
  font-weight: 300;
  

`;

export const Footerh3= styled.h3`
  letter-spacing: 2px;
  line-height: 25px;
  color: #fff;
  font-weight: 500;
`;


export const FormContainer= styled.div`
  width: 40%;
  padding: 40px;
  background: #fff;

  @media (max-width: 991px) {
    width: 100%;
  }

`;

export const Formh2= styled.h2`
  font-size: 30px;
  color: #333;
  font-weight: 500;
`;


export const FormDiv= styled.div`
  position: relative;
  width: 100%;
  margin-top: 10px;
`;

export const Input= styled.input`
  width: 100%;
  padding: 5px 0;
  font-size: 16px;
  margin: 10px 0;
  border: none;
  border-bottom: 2px solid #333;
  outline: none;
  resize: none;




`;

export const Textarea = styled.textarea`
  width: 100%;
  padding: 5px 0;
  font-size: 16px;
  margin: 10px 0;
  border: none;
  border-bottom: 2px solid #333;
  outline: none;
  resize: none;
`;


export const Span = styled.span`
  position: absolute;
  left: 0;
  padding: 5px 0;
  font-size: 16px;
  margin: 10px 0;
  pointer-events: none;
  transition: 0.5s;
  color: #666;


`;



export const Button = styled.button`
font-size: 1.0rem;
padding: 0.6rem 3rem;
border: none;
background: #ffc500;
color: #000;
transition: 0.2s ease-out;

&:hover {
  color: #fff;
  background: #e31837;
  transition: 0.2s ease-out;
  cursor: pointer;
}
`;

export const FooterBottomdiv = styled.div`
  margin-top:10%;
  max-width: 800px;
  text-align: center;
  positiom: absolute;
  display: block;
  background: #252525;
  
`;

export const FooterBh3 = styled.h3`
  letter-spacing: 2.5px;
  font-size: 14px;
  font-weight: 400;
  color: #fff;
  

`;
