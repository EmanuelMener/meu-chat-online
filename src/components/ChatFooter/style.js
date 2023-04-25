import styled from "styled-components";

export const Container = styled.div`
    height: 62px;
    buttom: 0;
    width: 100%;
    padding: 10px 20px;
    background-color: #202C33;
    display: flex;
    box-shadow: 2px 1px 3px 1px #0003;
    
    svg {
        width: 25px;
        height: 25px;
        color: #E9EDEF;
    }
`;

export const Form = styled.form`
    display: flex;
    align-items: center;
    gap: 5px;
    width: 100%;
`;

export const Input = styled.input`
    padding: 10px;
    outline: none;
    border: none;
    border-radius: 5px;
    background-color: #2A3942;
    color: #E9EDEF;
    width: 100%;
    box-shadow: inset 0 0 1px 1px #0003;
`;