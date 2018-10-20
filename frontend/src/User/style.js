import styled from 'styled-components';
import { Field, Form } from 'formik';

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
  resize: none;
  font-size: 18px;
  padding: 10px 10px 10px 5px;
  margin-top: 10px;
  border: none;
  background: #fafafa;
  border-radius: 0;
  width: 100%;
  border-bottom: 1px solid #757575;
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
