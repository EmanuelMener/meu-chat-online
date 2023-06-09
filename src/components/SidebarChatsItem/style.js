import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: start;
    padding: 15px 20px;
    cursor: pointer;

    &::hover{
        background-color: #202C33;
    }

    svg{
        width: 30px;
        height: 30px;
        background-color: #ccc;
        border-radius: 50%;
        margin-right: 10px;
        min-widht: fit-content;
    }

    &.active {
        background-color: #2A3942;
    }
`;

export const Name = styled.span`
    font-size: 18px;
    overflow: hidden;
    text-overflow: ellipsis;
`;

export const Avatar = styled.img`
    width: 30px;
    height: 30px;
    border-radius: 50%;
    margin-right: 10px;
    min-width: fit-content;
`;