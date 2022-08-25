import React from 'react';
import { useState } from 'react';
import { CCInputs } from './CCInputs';
import { UserInputs } from './UserInputs';
import { Successful } from './Successful';

export const CheckoutInputs = ({isBilling, setIsBilling}) => {
    const [isCC, setIsCC] = useState(true);
    const [isUser, setIsUser] = useState(false);
    const [cardToken, setCardToken] = useState(null);

    return (
        <div>
            {isCC ? <CCInputs setIsCC={setIsCC} setIsUser={setIsUser} cardToken={cardToken} setCardToken={setCardToken}/> : null}
            {isUser ? <UserInputs setIsUser={setIsUser} cardToken={cardToken} setIsBilling={setIsBilling}/> : null}
            
        </div>
    )

}