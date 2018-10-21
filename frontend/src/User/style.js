import styled from 'styled-components';
import { Field, Form } from 'formik';
import Select from 'react-select';

export const Heading = styled.h1`
  font-size: 40px;
  transition-duration: 1s;
  transition-timing-function: ease-in-put;
  font-weight: 200;
  color: #fff;
`;

export const StyledSelect = styled(Select)`
  width: 100%;
  margin-bottom: 10px;
`;

export const FullView = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  align-items: center;
  overflow-y: scroll;
  -webkit-transform: translate3d(0, 0, 0);
  background: linear-gradient(to bottom right, #50a3a2 0%, #53e3a6 100%);
`;


export const Content = styled.div`
  width: 100%;
  max-width: 768px;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 32px 16px;
  flex: 1 0 auto;
`;

export const FormContent = styled(Form)`
  width: 40%;
  max-width: 768px;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 32px 16px;
  flex: 1 0 auto;
`;

export const Button = styled.button`
  display: flex;
  flex: none;
  align-self: center;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  font-weight: 600;
  white-space: nowrap;
  word-break: keep-all;
  cursor: pointer;
  font-size: ${props => (props.large ? '18px' : '14px')};
  line-height: 1;
  position: relative;
  text-align: center;
  cursor: pointer;
  margin: 5px;
  padding: 12px 16px;
  font-weight: bold;
  background: linear-gradient( to top, #49CF87, #40C080);
  border-radius: 10px;
`;

export const TextButton = styled(Button)`
  background: transparent;
  background-image: none;
  font-weight: 600;
  transition: color 0.1s ease-out, box-shadow 0.2s ease-out 0.1s, border-radius 0.2s ease-out, padding: 0.2s ease-out;
  &:hover {
    background-color: transparent;
    box-shadow: none;
    transition: color 0.1s ease-in, box-shadow 0.2s ease-in 0.1s, padding 0.2s ease-in;
  }
`;

export const ButtonRow = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
  > button,
  > a {
    margin: 8px;
  }
`;


export const FieldInput = styled(Field)`
  outline: 0;
  border: 1px solid rgba(255, 255, 255, 0.4);
  background-color: rgba(255, 255, 255, 0.2);
  width: 100%;
  border-radius: 3px;
  padding: 10px 15px;
  margin: 0 auto 10px auto;
  display: block;
  text-align: center;
  font-size: 18px;
  color: white;
  transition-duration: 0.25s;
  font-weight: 300;
`;

export const FieldInputError = styled(Field)`
  outline: 0;
  border: 1px solid red;
  background-color: rgba(255, 255, 255, 0.2);
  width: 100%;
  border-radius: 3px;
  padding: 10px 15px;
  margin: 0 auto 10px auto;
  display: block;
  text-align: center;
  font-size: 18px;
  color: white;
  transition-duration: 0.25s;
  font-weight: 300;
`;

export const SubmitButton = styled(Button)`
  padding: 12px 24px;
  margin: .3em 0 1em 0;
  width: 100%;
  font-size: 16px;
  font-weight: 400;
  background: #FF5A5F;
  border: 0;
  border-radius: 0;
  line-height: 20px;
  color: white;
`;


export const RegisterButton = styled.button`
  outline: 0;
  background-color: white;
  border: 0;
  padding: 10px 15px;
  color: #53e3a6;
  border-radius: 3px;
  width: 100%;
  cursor: pointer;
  font-size: 18px;
  transition-duration: 0.25s;
  &:hover{
    background-color: rgb(245, 247, 249);
  }
`;
