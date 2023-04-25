import styled from "styled-components";
import { content } from "../SidebarChats/style";


export const Container = styled.div`
    height: 59px;
    background-color: #202C33;
    padding: 10px 15px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-shadow: 0 1px 2px #0003;
    z-index: 1;
`;

export const UserInfo = styled.div`
    display: flex;
    align-items: center;

    svg{
        width: 30px;
        height: 30px;
        background-color: #E9EDEF;
        border-radius: 50%;
        margin-right: 10px;
        min-width: fit-content;
    }
`;

export const NameContent = styled.div`
    display: grid;
`;

export const Name = styled.div`
    font-size: 18px;
    overflow: hidden;
    text-overflow: ellipsis;
`;


export const  Avatar = styled.img`
width: 30px;
height: 30px;
background-color: #E9EDEF;
border-radius: 50%;
margin-right: 10px;
min-width: fit-content;
`;

export const Options = styled.div`
    display: flex;
    gap: 10px;

    svg{
        width: 24px;
        height: 24px;
        color: #E9EDEF;
        cursor: pointer;
    }
`;