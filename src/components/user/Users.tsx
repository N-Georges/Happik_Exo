/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from 'react';
import {
    Button,
    Divider,
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
import { FiXCircle, FiChevronUp, FiEdit3 } from 'react-icons/fi';
import { MdAdd } from 'react-icons/md';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { RiDeleteBinLine } from 'react-icons/ri';
import { HiOutlineAdjustments } from 'react-icons/hi';
import { useQuery } from '@apollo/client';
import { GetUsersDocument } from 'src/graphql-generated/apollo-hooks';
import Moment from 'moment';
import DeleteUser from './DeleteUser';
import UpdateUser from './UpdateUser';
import GetUsers from './GetUsers';
const Transaction = () => {
    const [display, changeDisplay] = useState('hide');
    const [active, setActive] = useState(false);
    const { loading, error, data } = useQuery(GetUsersDocument);
    if (loading) {
        return <div>Loading...</div>;
    }
    if (error) {
        console.error(error);
        return <div>Error!</div>;
    }
    return (
        <Flex
            w={['100%', '100%', '60%', '60%', '55%']}
            p="2%"
            flexDir="column"
            overflow="auto"
            minH="100vh"
        >
            <Flex align="center" justifyContent="space-between" mt={8}>
                <Flex align="flex-end">
                    <Heading as="h2" size="lg" letterSpacing="tight">
                        {active ? 'Mise a jour des utilisateurs' : 'Utitlisateurs'}
                    </Heading>
                </Flex>
                <IconButton
                    onClick={() => setActive(!active)}
                    icon={active ? <FiXCircle /> : <HiOutlineAdjustments />}
                    aria-label="calendar"
                />
            </Flex>
            {active ? (
                <GetUsers />
            ) : (
                <Flex flexDir="column">
                    <Flex className="horizontal-scroll" overflow="auto">
                        <Table variant="unstyled" mt={4}>
                            <Thead>
                                <Tr color="gray">
                                    <Th>Nom</Th>
                                    <Th>Prénom</Th>
                                    <Th>Email</Th>
                                    <Th>Créé à</Th>
                                    <Th></Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                {data.users.map(
                                    (item: {
                                        id: number;
                                        first_name: string;
                                        last_name: string;
                                        email: string;
                                        created_at: string;
                                    }) => (
                                        <Tr key={item.id}>
                                            <Td>
                                                <Heading size="sm" letterSpacing="tight">
                                                    {item.last_name}
                                                </Heading>
                                            </Td>
                                            <Td>
                                                <Text>{item.first_name}</Text>
                                            </Td>
                                            <Td>{item.email}</Td>
                                            <Td>{Moment(item.created_at).format('MM/D/YY')}</Td>
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
                                                                    <DeleteUser id={item.id} />
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
                                                                    rightIcon={<RiDeleteBinLine />}
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
                                                                    rightIcon={<RiDeleteBinLine />}
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
                                                                    rightIcon={<RiDeleteBinLine />}
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
            )}
            {/* {active && <GetUsers />} */}
        </Flex>
    );
};

export default Transaction;
