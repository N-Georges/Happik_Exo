/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/no-children-prop */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useMutation } from '@apollo/client';
import React, { useState } from 'react';
import {
    GetTransactionsDocument,
    UpdateTransactionsDocument,
} from 'src/graphql-generated/apollo-hooks';

import { Button, Input, InputGroup, InputLeftElement, Text } from '@chakra-ui/react';

import { FiCreditCard, FiUser } from 'react-icons/fi';
import { MdEuro } from 'react-icons/md';

interface UpdateProps {
    id: number;
    name: string;
    account_number: number;
    amount: number;
    date: string;
}

const UpdateTransaction: React.FC<UpdateProps> = ({ id, name, account_number, amount, date }) => {
    const [_name, setName] = useState(name);
    const [accountNumber, setAccountNumber] = useState<number>(account_number);
    const [_amount, setAmount] = useState<number>(amount);
    const [_date, setDate] = useState(date);
    const [updateTransaction] = useMutation(UpdateTransactionsDocument);
    const handleSubmit = (event: any) => {
        event.preventDefault();
        updateTransaction({
            variables: {
                id,
                name: _name,
                account_number: accountNumber,
                amount: _amount,
                date: _date,
            },
            refetchQueries: [
                {
                    query: GetTransactionsDocument,
                },
            ],
        });
    };
    return (
        <>
            <form onSubmit={handleSubmit}>
                <Text color="gray" mt={10} mb={2}>
                    Bénéficiaire
                </Text>
                <InputGroup>
                    <InputLeftElement pointerEvents="none" children={<FiUser color="gray.700" />} />
                    <Input
                        type="text"
                        value={_name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Amazon"
                    />
                </InputGroup>
                <Text color="gray" mt={4} mb={2}>
                    Numéro de compte
                </Text>
                <InputGroup>
                    <InputLeftElement
                        pointerEvents="none"
                        children={<FiCreditCard color="gray.700" />}
                    />
                    <Input
                        type="number"
                        placeholder="xxxx xxxx xxxx xxxx"
                        value={accountNumber}
                        onChange={(e) => setAccountNumber(e.target.valueAsNumber)}
                    />
                </InputGroup>
                <Text color="gray" mt={4} mb={2}>
                    Montant
                </Text>
                <InputGroup>
                    <InputLeftElement pointerEvents="none" children={<MdEuro color="gray.700" />} />
                    <Input
                        type="number"
                        placeholder="130.00"
                        value={_amount}
                        onChange={(e) => setAmount(e.target.valueAsNumber)}
                    />
                </InputGroup>
                <Button
                    type="submit"
                    mt={4}
                    bgColor="blackAlpha.900"
                    color="#fff"
                    p={7}
                    borderRadius={15}
                    flex={1}
                    w="100%"
                >
                    Modifier transaction
                </Button>
            </form>
        </>
    );
};

export default UpdateTransaction;
