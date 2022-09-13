import React from 'react';
import { Avatar, AvatarGroup, Flex, Heading } from '@chakra-ui/react';
import { FiPlus } from 'react-icons/fi';

const SendMoneyList = () => {
    return (
        <>
            <Heading letterSpacing="tight" size="md" my={4}>
                Envoyez de l&apos;argent à
            </Heading>
            <Flex>
                <AvatarGroup size="md" max={3}>
                    <Avatar src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80" />
                    <Avatar src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" />
                    <Avatar src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" />
                    <Avatar src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" />
                    <Avatar src="avatar-4.jpg" />
                </AvatarGroup>
                <Avatar icon={<FiPlus />} ml={2} color="#fff" bgColor="gray.300" />
            </Flex>
        </>
    );
};

export default SendMoneyList;
