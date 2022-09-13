/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/no-children-prop */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useMutation, useQuery } from '@apollo/client';
import { Button, Input, InputGroup, InputLeftElement, Text } from '@chakra-ui/react';
import React, { useState } from 'react';
import {
    AddTransactionDocument,
    GetTransactionsDocument,
    GetUsersDocument,
} from 'src/graphql-generated/apollo-hooks';
import { FiCreditCard, FiUser } from 'react-icons/fi';
import { MdEuro } from 'react-icons/md';

const AddTransaction = () => {
    const [addTransaction] = useMutation(AddTransactionDocument);
    const { data } = useQuery(GetUsersDocument);

    const [name, setName] = useState('');
    const [accountNumber, setAccountNumber] = useState('');
    const [amount, setAmount] = useState('');
    const [userId, setUserId] = useState(4);

    const handleSubmit = (event: any) => {
        event.preventDefault();
        addTransaction({
            variables: {
                name: name,
                account_number: accountNumber,
                amount: amount,
                user_id: userId,
            },
            refetchQueries: [
                {
                    query: GetTransactionsDocument,
                },
            ],
        });
        setName('');
        setAccountNumber('');
        setAmount('');
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
                        required
                        value={name}
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
                        value={accountNumber}
                        required
                        type="number"
                        placeholder="xxxx xxxx xxxx xxxx"
                        onChange={(e) => setAccountNumber(e.target.value)}
                    />
                </InputGroup>
                <Text color="gray" mt={4} mb={2}>
                    Montant
                </Text>
                <InputGroup>
                    <InputLeftElement pointerEvents="none" children={<MdEuro color="gray.700" />} />
                    <Input
                        value={amount}
                        type="number"
                        required
                        placeholder="130.00"
                        onChange={(e) => setAmount(e.target.value)}
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
                    Finaliser transaction
                </Button>
            </form>
        </>
    );
};

export default AddTransaction;
