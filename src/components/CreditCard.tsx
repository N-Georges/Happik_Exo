import { Box, Button, Flex, Heading, Image, Text } from '@chakra-ui/react';
import React, { useState } from 'react';

const CreditCard = () => {
    const [value, changeValue] = useState(1);

    return (
        <div>
            <Heading letterSpacing="tight">Mes cartes</Heading>
            {value == 1 && (
                <Box
                    borderRadius="25px"
                    mt={4}
                    w="100%"
                    h="200px"
                    bgGradient="linear(to-t, #B57295, #29259A)"
                >
                    <Flex p="1em" color="#fff" flexDir="column" h="100%" justify="space-between">
                        <Flex justify="space-between" w="100%" align="flex-start">
                            <Flex flexDir="column">
                                <Text color="gray.400">Solde actuel</Text>
                                <Text fontWeight="bold" fontSize="xl">
                                    5,750.20€
                                </Text>
                            </Flex>
                            <Flex align="center">
                                <Image
                                    w="60px"
                                    src="https://www.ing.be/static-fe/ing-app-be-daily-banking-shell/node_modules/ing-platform/packages/ing-top-bar/assets/images/ing-logo-full.svg"
                                    alt="logo ING"
                                />
                            </Flex>
                        </Flex>
                        <Text mb={4}>**** **** **** 1289</Text>
                        <Flex align="flex-end" justify="space-between">
                            <Flex>
                                <Flex flexDir="column" mr={4}>
                                    <Text textTransform="uppercase" fontSize="xs">
                                        VALIDE JUSQU&apos;AU
                                    </Text>
                                    <Text fontSize="lg">12/23</Text>
                                </Flex>
                                <Flex flexDir="column">
                                    <Text textTransform="uppercase" fontSize="xs">
                                        CVV
                                    </Text>
                                    <Text fontSize="lg">***</Text>
                                </Flex>
                            </Flex>
                        </Flex>
                    </Flex>
                </Box>
            )}
            {value == 2 && (
                <Box
                    borderRadius="25px"
                    mt={4}
                    w="100%"
                    h="200px"
                    bgGradient="linear(to-t, yellow.300, blue.500)"
                >
                    <Flex p="1em" color="#fff" flexDir="column" h="100%" justify="space-between">
                        <Flex justify="space-between" w="100%" align="flex-start">
                            <Flex flexDir="column">
                                <Text color="gray.400">Solde actuel</Text>
                                <Text fontWeight="bold" fontSize="xl">
                                    350.00€
                                </Text>
                            </Flex>
                            <Flex align="center">
                                <Image
                                    w="60px"
                                    src="https://upload.wikimedia.org/wikipedia/commons/9/97/Beobank-logo.png"
                                    alt="logo beobank"
                                />
                            </Flex>
                        </Flex>
                        <Text mb={4}>**** **** **** 8956</Text>
                        <Flex align="flex-end" justify="space-between">
                            <Flex>
                                <Flex flexDir="column" mr={4}>
                                    <Text textTransform="uppercase" fontSize="xs">
                                        VALIDE JUSQU&apos;AU
                                    </Text>
                                    <Text fontSize="lg">9/24</Text>
                                </Flex>
                                <Flex flexDir="column">
                                    <Text textTransform="uppercase" fontSize="xs">
                                        CVV
                                    </Text>
                                    <Text fontSize="lg">***</Text>
                                </Flex>
                            </Flex>
                        </Flex>
                    </Flex>
                </Box>
            )}
            {value == 3 && (
                <Box
                    borderRadius="25px"
                    mt={4}
                    w="100%"
                    h="200px"
                    bgGradient="linear(to-t, orange.300, pink.600)"
                >
                    <Flex p="1em" color="#fff" flexDir="column" h="100%" justify="space-between">
                        <Flex justify="space-between" w="100%" align="flex-start">
                            <Flex flexDir="column">
                                <Text color="gray.400">Solde actuel</Text>
                                <Text fontWeight="bold" fontSize="xl">
                                    2,150.72€
                                </Text>
                            </Flex>
                            <Flex align="center">
                                <Image
                                    w="60px"
                                    src="https://www.belfius.be/about-us/dam/corporate/other/logos/Belfius-logo.png/jcr:content/renditions/cq5dam.web.600.600.png"
                                    alt="logo belfius"
                                />
                            </Flex>
                        </Flex>
                        <Text mb={4}>**** **** **** 8353</Text>
                        <Flex align="flex-end" justify="space-between">
                            <Flex>
                                <Flex flexDir="column" mr={4}>
                                    <Text textTransform="uppercase" fontSize="xs">
                                        VALIDE JUSQU&apos;AU
                                    </Text>
                                    <Text fontSize="lg">11/22</Text>
                                </Flex>
                                <Flex flexDir="column">
                                    <Text textTransform="uppercase" fontSize="xs">
                                        CVV
                                    </Text>
                                    <Text fontSize="lg">***</Text>
                                </Flex>
                            </Flex>
                        </Flex>
                    </Flex>
                </Box>
            )}
            <Flex justifyContent="center" mt={2} gap={2}>
                <Button
                    borderRadius="full"
                    size="xs"
                    bgColor={value == 1 ? 'gray.600' : 'gray.400'}
                    onClick={() => changeValue(1)}
                />
                <Button
                    borderRadius="full"
                    size="xs"
                    bgColor={value == 2 ? 'gray.600' : 'gray.400'}
                    onClick={() => changeValue(2)}
                />
                <Button
                    borderRadius="full"
                    size="xs"
                    bgColor={value == 3 ? 'gray.600' : 'gray.400'}
                    onClick={() => changeValue(3)}
                />
            </Flex>
            <Flex flexDir="column" my={4}>
                <Flex justify="space-between" mb={2}>
                    <Text>Solde</Text>
                    <Text fontWeight="bold">140.42€</Text>
                </Flex>
                <Flex justify="space-between">
                    <Text>Limite de crédit</Text>
                    <Text fontWeight="bold">150.00€</Text>
                </Flex>
            </Flex>
        </div>
    );
};

export default CreditCard;
