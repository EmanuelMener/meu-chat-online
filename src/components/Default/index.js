import React from "react";
import * as C from "./style";
import {MdMessage} from "react-icons/md"

const Default = () => {
    return (
        <C.Container>
            <MdMessage/>
            <C.Title>Chat App</C.Title>
            <C.Info>
                Agora você pode enviar e receber mensagens pela internet.
            </C.Info>
        </C.Container>
    )
}

export default Default;