import styled, { css, createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Space Grotesk', sans-serif;
  }
`

const sharedInputStyles = css`
  padding: 10px 14px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  font-size: 13px;
  outline: none;
  font-family: 'Space Grotesk', sans-serif;
  color: #111;
  width: 100%;

  &:focus {
    border-color: #7c3aed;
  }

  &::placeholder {
    color: #bbb;
  }
`

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: linear-gradient(135deg, #1e1b4b, #7c3aed, #db2777);
  padding: 20px;
`

export const FormBox = styled.div`
  background: white;
  padding: 40px;
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.1);
  width: 100%;
  max-width: 480px;
`

export const Title = styled.h2`
  font-size: 25px;
  font-weight: 700;
  color: #111;
  text-align: center;
  margin-bottom: 24px;
`

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-bottom: 16px;
`

export const Label = styled.label`
  font-size: 15px;
  color: #555;
`

export const Input = styled.input`
  ${sharedInputStyles}
`

export const Select = styled.select`
  ${sharedInputStyles}
  background: white;
  cursor: pointer;
`

export const Textarea = styled.textarea`
  ${sharedInputStyles}
  resize: none;
  height: 120px;
`

export const SubmitButton = styled.button`
  width: 100%;
  padding: 14px;
  background: #1e1b4b;
  color: white;
  border: none;
  border-radius: 10px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  margin-top: 8px;

  &:hover {
    background: #7c3aed;
  }
`

export const ErrorMsg = styled.p`
  color: red;
  font-size: 13px;
  text-align: center;
  margin-bottom: 16px;
`