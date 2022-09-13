import { Icon } from '@chakra-ui/icons';
import { Avatar, AvatarBadge, Box, Flex, Heading, Text } from '@chakra-ui/react';
import { FiHome, FiBox, FiLayout, FiUser } from 'react-icons/fi';
import Link from 'next/link';
import { useRouter } from 'next/router';
const SideBar = () => {
    const router = useRouter();
    return (
        <Flex
            w={['100%', '100%', '10%', '15%', '15%']}
            flexDir="column"
            alignItems="center"
            backgroundColor="#020202"
            color="#fff"
        >
            <Flex flexDir="column" justifyContent="space-between" h={[null, null, '100vh']}>
                <Flex flexDir="column" as="nav">
                    <Link href="/" passHref>
                        <Heading
                            cursor="pointer"
                            mt={50}
                            mb={[25, 50, 100]}
                            fontSize={['4xl', '4xl', 'xl', '3xl', '4xl']}
                            alignSelf="center"
                            letterSpacing="tight"
                        >
                            Happik.
                        </Heading>
                    </Link>
                    <Flex
                        flexDir={['row', 'row', 'column', 'column', 'column']}
                        align={['center', 'center', 'center', 'flex-start', 'flex-start']}
                        wrap={['wrap', 'wrap', 'nowrap', 'nowrap', 'nowrap']}
                        justifyContent="center"
                    >
                        <Link href="/dashboard" passHref>
                            <Flex cursor="pointer" className="sidebar-items" mr={[2, 6, 0, 0, 0]}>
                                <Box display={['none', 'none', 'flex', 'flex', 'flex']}>
                                    <Icon
                                        as={FiHome}
                                        fontSize="2xl"
                                        className={
                                            router.pathname == '/dashboard' ? 'active-icon' : ''
                                        }
                                    />
                                </Box>
                                <Box
                                    _hover={{ textDecor: 'none' }}
                                    display={['flex', 'flex', 'none', 'flex', 'flex']}
                                >
                                    <Text
                                        className={router.pathname == '/dashboard' ? 'active' : ''}
                                    >
                                        Acceuil
                                    </Text>
                                </Box>
                            </Flex>
                        </Link>
                        <Link href="/dashboard/utilisateurs" passHref>
                            <Flex cursor="pointer" className="sidebar-items" mr={[2, 6, 0, 0, 0]}>
                                <Box display={['none', 'none', 'flex', 'flex', 'flex']}>
                                    <Icon
                                        className={
                                            router.pathname == '/dashboard/utilisateurs'
                                                ? 'active-icon'
                                                : ''
                                        }
                                        as={FiUser}
                                        fontSize="2xl"
                                    />
                                </Box>
                                <Box
                                    _hover={{ textDecor: 'none' }}
                                    display={['flex', 'flex', 'none', 'flex', 'flex']}
                                >
                                    <Text
                                        className={
                                            router.pathname == '/dashboard/utilisateurs'
                                                ? 'active'
                                                : ''
                                        }
                                    >
                                        Utilisateurs
                                    </Text>
                                </Box>
                            </Flex>
                        </Link>
                        <Link href="/dashboard/portefeuille" passHref>
                            <Flex cursor="pointer" className="sidebar-items" mr={[2, 6, 0, 0, 0]}>
                                <Box display={['none', 'none', 'flex', 'flex', 'flex']}>
                                    <Icon
                                        className={
                                            router.pathname == '/dashboard/portefeuille'
                                                ? 'active-icon'
                                                : ''
                                        }
                                        as={FiLayout}
                                        fontSize="2xl"
                                    />
                                </Box>
                                <Box
                                    _hover={{ textDecor: 'none' }}
                                    display={['flex', 'flex', 'none', 'flex', 'flex']}
                                >
                                    <Text
                                        className={
                                            router.pathname == '/dashboard/portefeuille'
                                                ? 'active'
                                                : ''
                                        }
                                    >
                                        Portefeuille
                                    </Text>
                                </Box>
                            </Flex>
                        </Link>
                        <Link href="/dashboard/services" passHref>
                            <Flex cursor="pointer" className="sidebar-items" mr={[2, 6, 0, 0, 0]}>
                                <Box display={['none', 'none', 'flex', 'flex', 'flex']}>
                                    <Icon
                                        className={
                                            router.pathname == '/dashboard/services'
                                                ? 'active-icon'
                                                : ''
                                        }
                                        as={FiBox}
                                        fontSize="2xl"
                                    />
                                </Box>
                                <Box
                                    _hover={{ textDecor: 'none' }}
                                    display={['flex', 'flex', 'none', 'flex', 'flex']}
                                >
                                    <Text
                                        className={
                                            router.pathname == '/dashboard/services' ? 'active' : ''
                                        }
                                    >
                                        Services
                                    </Text>
                                </Box>
                            </Flex>
                        </Link>
                    </Flex>
                </Flex>
                <Flex flexDir="column" alignItems="center" mb={10} mt={5}>
                    <Avatar
                        my={2}
                        src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                    >
                        <AvatarBadge boxSize="1.25em" bg="green.500" />
                    </Avatar>
                    <Text textAlign="center">Georges Nodari</Text>
                </Flex>
            </Flex>
        </Flex>
    );
};

export default SideBar;
