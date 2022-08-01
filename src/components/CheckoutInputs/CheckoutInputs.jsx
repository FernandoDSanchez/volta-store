import React from 'react';
import { Formik, Form, Field } from 'formik';
import { UserSchema } from "../../utils/CheckoutSchemas";
import { useState } from 'react';
import { CCInputs } from './CCInputs';
import { UserInputs } from './UserInputs';


export const CheckoutInputs = () => {
    const [isCC, setIsCC] = useState(true);
    const [isUser, setIsUser] = useState(false);
    const [isShipping, setIsShipping] = useState(false);
    const [isBilling, setIsBilling] = useState(false);
    const [isReview, setIsReview] = useState(false);
    const [isComplete, setIsComplete] = useState(false);

    return (
        <div>
            {isCC ? <CCInputs setIsCC={setIsCC}/> : null}
            {isUser ? <UserInputs setIsUser={setIsUser}/> : null}
        </div>
    )

}