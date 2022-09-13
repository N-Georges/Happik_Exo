/* eslint-disable react/no-children-prop */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useMutation } from '@apollo/client';
import {
    Button,
    Flex,
    FormLabel,
    Heading,
    IconButton,
    Input,
    InputGroup,
    InputLeftElement,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { AddUserDocument, GetUsersDocument } from 'src/graphql-generated/apollo-hooks';
import Searchbar from '../Searchbar';
import { FiUser, FiUserPlus } from 'react-icons/fi';
import { MdAlternateEmail } from 'react-icons/md';
const AddUser = () => {
    const [addUser] = useMutation(AddUserDocument);
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = (event: any) => {
        event.preventDefault();
        addUser({
            variables: {
                first_name: firstname,
                last_name: lastname,
                email: email,
            },
            refetchQueries: [
                {
                    query: GetUsersDocument,
                },
            ],
        });
        setFirstname('');
        setLastname('');
        setEmail('');
    };
    return (
        <Flex
            w={['100%', '100%', '30%']}
            bgColor="#F5F5F5"
            p="3%"
            flexDir="column"
            overflow="auto"
            minH="100vh"
            minW={[null, null, '300px', '300px', '100px']}
        >
            <Searchbar />
            <Flex justifyContent="space-between" alignItems="center">
                <Heading letterSpacing="tight" size="md" my={4}>
                    Ajouter un utilisateur
                </Heading>
                <IconButton icon={<FiUserPlus />} aria-label="calendar" />
            </Flex>
            <form onSubmit={handleSubmit}>
                <FormLabel color="gray" mt={4} mb={2} fontWeight="normal" fontSize="md">
                    Firstname
                </FormLabel>
                <InputGroup>
                    <InputLeftElement pointerEvents="none" children={<FiUser color="gray.700" />} />
                    <Input
                        required
                        placeholder="john"
                        value={firstname}
                        onChange={(e) => setFirstname(e.target.value)}
                    />
                </InputGroup>
                <FormLabel color="gray" mt={4} mb={2} fontWeight="normal" fontSize="md">
                    Firstname
                </FormLabel>
                <InputGroup>
                    <InputLeftElement pointerEvents="none" children={<FiUser color="gray.700" />} />
                    <Input
                        required
                        placeholder="Doe"
                        value={lastname}
                        onChange={(e) => setLastname(e.target.value)}
                    />
                </InputGroup>
                <FormLabel color="gray" mt={4} mb={2} fontWeight="normal" fontSize="md">
                    Email
                </FormLabel>
                <InputGroup>
                    <InputLeftElement
                        pointerEvents="none"
                        children={<MdAlternateEmail color="gray.700" />}
                    />
                    <Input
                        required
                        placeholder="example@gmail.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
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
                    Ajouter
                </Button>
            </form>
        </Flex>
    );
};

export default AddUser;
