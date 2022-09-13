/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useQuery } from '@apollo/client';
import { GetTransactionsDocument } from 'src/graphql-generated/apollo-hooks';
import { useState } from 'react';
import {
    Flex,
    Heading,
    IconButton,
    Popover,
    PopoverArrow,
    PopoverBody,
    PopoverContent,
    PopoverTrigger,
    Stack,
    Table,
    Tbody,
    Td,
    Text,
    Th,
    Thead,
    Tr,
} from '@chakra-ui/react';
import Chart from '../Chart';
import { FiCalendar, FiChevronDown, FiChevronUp, FiEdit3 } from 'react-icons/fi';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { RiDeleteBinLine } from 'react-icons/ri';
import { MdAdd } from 'react-icons/md';
import Moment from 'moment';
import DeleteTransaction from './DeleteTransaction';
import Link from 'next/link';
const Transactions = () => {
    const [display, changeDisplay] = useState('hide');
    const { loading, error, data } = useQuery(GetTransactionsDocument);

    if (loading) {
        return <div>Loading...</div>;
    }
    if (error) {
        console.error(error);
        return <div>Error!</div>;
    }
    return (
        <>
            <Flex
                w={['100%', '100%', '60%', '60%', '55%']}
                p="3%"
                flexDir="column"
                overflow="auto"
                scrollBehavior="smooth"
                minH="100vh"
            >
                <Heading fontWeight="normal" mb={4} letterSpacing="tight">
                    Content de te revoir,{' '}
                    <Flex fontWeight="bold" display="inline-flex">
                        Georges
                    </Flex>
                </Heading>
                <Text color="gray" fontSize="sm">
                    Mon solde
                </Text>
                <Text fontWeight="bold" fontSize="2xl">
                    5,650.20€
                </Text>
                <Chart />
                <Flex align="center" justifyContent="space-between" mt={8}>
                    <Flex align="flex-end">
                        <Heading as="h2" size="lg" letterSpacing="tight">
                            Transactions
                        </Heading>
                        <Text fontSize="small" color="gray" ml={4}>
                            {Moment(new Date()).format('D MMMM YY')}
                        </Text>
                    </Flex>
                    <IconButton icon={<FiCalendar />} aria-label="calendar" />
                </Flex>
                <Flex flexDir="column">
                    <Flex className="horizontal-scroll" overflow="auto">
                        <Table variant="unstyled" mt={4}>
                            <Thead>
                                <Tr color="gray">
                                    <Th>Bénéficiaire</Th>
                                    <Th>Nr° de compte</Th>
                                    <Th>Date</Th>
                                    <Th isNumeric>Montant</Th>
                                    <Th></Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                {data.transactions.map(
                                    (item: {
                                        id: number;
                                        name: string;
                                        date: string;
                                        account_number: number;
                                        amount: number;
                                        user: any;
                                    }) => (
                                        <Tr key={item.id}>
                                            <Td>
                                                <Flex align="center">
                                                    <Flex flexDir="column">
                                                        <Heading size="sm" letterSpacing="tight">
                                                            {item.name}
                                                        </Heading>
                                                    </Flex>
                                                </Flex>
                                            </Td>
                                            <Td>
                                                <Text fontSize="sm" color="gray">
                                                    BE{item.account_number}
                                                </Text>
                                            </Td>
                                            <Td fontSize="sm">
                                                {Moment(item.date).format('MM/D/YY')}
                                            </Td>
                                            <Td isNumeric>
                                                <Text
                                                    fontWeight="bold"
                                                    fontSize="sm"
                                                    display="inline-table"
                                                >
                                                    {item.amount}
                                                </Text>
                                            </Td>
                                            <Td>
                                                <Flex justifyContent="center">
                                                    <Popover placement="bottom" isLazy>
                                                        <PopoverTrigger>
                                                            <IconButton
                                                                aria-label="More server options"
                                                                icon={<BsThreeDotsVertical />}
                                                                variant="solid"
                                                                w="fit-content"
                                                            />
                                                        </PopoverTrigger>
                                                        <PopoverContent
                                                            w="fit-content"
                                                            _focus={{ boxShadow: 'none' }}
                                                        >
                                                            <PopoverArrow />
                                                            <PopoverBody>
                                                                <Stack>
                                                                    {/* <Button
                                                                        w="194px"
                                                                        variant="ghost"
                                                                        rightIcon={<FiEdit3 />}
                                                                        justifyContent="space-between"
                                                                        fontWeight="normal"
                                                                        fontSize="sm"
                                                                    >
                                                                        Modifier transaction
                                                                    </Button> */}
                                                                    <DeleteTransaction
                                                                        id={item.id}
                                                                    />
                                                                </Stack>
                                                            </PopoverBody>
                                                        </PopoverContent>
                                                    </Popover>
                                                </Flex>
                                            </Td>
                                        </Tr>
                                    )
                                )}
                                {/* {display == 'show' && (
                                    <>
                                        <Tr>
                                            <Td>
                                                <Flex align="center">
                                                    <Flex flexDir="column">
                                                        <Heading size="sm" letterSpacing="tight">
                                                            Amazon
                                                        </Heading>
                                                    </Flex>
                                                </Flex>
                                            </Td>
                                            <Td>
                                                <Text fontSize="sm" color="gray">
                                                    BE80 76765 6567 5540
                                                </Text>
                                            </Td>
                                            <Td isNumeric>+$2</Td>
                                            <Td isNumeric>
                                                <Text fontWeight="bold" display="inline-table">
                                                    -$242
                                                </Text>
                                                .00
                                            </Td>
                                            <Td>
                                                <Flex justifyContent="center">
                                                    <Popover placement="bottom" isLazy>
                                                        <PopoverTrigger>
                                                            <IconButton
                                                                aria-label="More server options"
                                                                icon={<BsThreeDotsVertical />}
                                                                variant="solid"
                                                                w="fit-content"
                                                            />
                                                        </PopoverTrigger>
                                                        <PopoverContent
                                                            w="fit-content"
                                                            _focus={{ boxShadow: 'none' }}
                                                        >
                                                            <PopoverArrow />
                                                            <PopoverBody>
                                                                <Stack>
                                                                    <Button
                                                                        w="194px"
                                                                        variant="ghost"
                                                                        rightIcon={<MdAdd />}
                                                                        justifyContent="space-between"
                                                                        fontWeight="normal"
                                                                        fontSize="sm"
                                                                    >
                                                                        Créer transaction
                                                                    </Button>
                                                                    <Button
                                                                        w="194px"
                                                                        variant="ghost"
                                                                        rightIcon={
                                                                            <RiDeleteBinLine />
                                                                        }
                                                                        justifyContent="space-between"
                                                                        fontWeight="normal"
                                                                        colorScheme="red"
                                                                        fontSize="sm"
                                                                    >
                                                                        Supprimer transaction
                                                                    </Button>
                                                                </Stack>
                                                            </PopoverBody>
                                                        </PopoverContent>
                                                    </Popover>
                                                </Flex>
                                            </Td>
                                        </Tr>
                                    </>
                                )} */}
                            </Tbody>
                        </Table>
                    </Flex>
                    {/* <Flex align="center">
                        <Divider />
                        <IconButton
                            icon={display == 'show' ? <FiChevronUp /> : <FiChevronDown />}
                            onClick={() => {
                                if (display == 'show') {
                                    changeDisplay('none');
                                } else {
                                    changeDisplay('show');
                                }
                            }}
                            aria-label="chevron"
                        />
                        <Divider />
                    </Flex> */}
                </Flex>
            </Flex>
        </>
    );
};

export default Transactions;
