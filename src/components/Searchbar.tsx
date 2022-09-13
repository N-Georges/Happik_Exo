/* eslint-disable react/no-children-prop */
import React from 'react';
import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { FiSearch } from 'react-icons/fi';

const Searchbar = () => {
    return (
        <>
            <InputGroup bgColor="#fff" mb={4} border="none" borderColor="#fff" borderRadius="10px">
                <InputLeftElement pointerEvents="none" children={<FiSearch color="gray" />} />
                <Input type="number" placeholder="Chercher" borderRadius="10px" />
            </InputGroup>
        </>
    );
};

export default Searchbar;
