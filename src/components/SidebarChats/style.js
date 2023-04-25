import styled from "styled-components";

export const Container = styled.div`
    height: calc(100vh - 70px);
    overflow-y: auto;

    background-color: #111B21;

    &::-webkit-scrollbar{
        width: 6px;
        border-radius: 10px;
    }

    &::-webkit-scrollbar-thumb{
     border-radius: 10px;
     background-color: rgba(0, 0, 0, 0.2);   
    }
`;

export const content = styled.div``;

export const Divider = styled.div`
    margin: 0 10px;
    border-top: 0.5px solid rgba(255, 255, 255, 0.1);
`;