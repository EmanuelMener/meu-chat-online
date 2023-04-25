import styled from "styled-components";
import bg from "../../img/bg-zap8.png";

export const Container = styled.div`
    flex: 1;
    background-image: url(${bg});
    background-repeat: no-repeat;
    background-size: cover;
    overflow-y: auto;

    &::-webkit-scrollbar{
        width: 6px;
        border-radius: 10px;
    }

    &::-webkit-scrollbar-thumb{
        border-radius: 10px;
        background-color: rgba(0, 0, 0, 0.2);
    }
`;
