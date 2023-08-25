import { Box, Button, Flex, Table, Tbody, Td, Th, Thead, Tr, } from '@chakra-ui/react'

import { PiPencilSimpleBold } from 'react-icons/pi'
import { AiOutlineClose } from 'react-icons/ai'

export default function Tabela() {
    return(
        <Box 
            width={1000}
            borderWidth={1}
            borderRadius={8}
            boxShadow='lg'
            p={20}
            mt='25'
        >

            <Table variant="simple" mt={6}>
                <Thead bg="teal.500">
                    <Tr>
                        <Th textColor="white"> Nome do curso </Th>
                        <Th textColor="white"> Categoria </Th>
                        <Th textColor="white"> Professor </Th>
                        <Th textColor="white"> Descrição </Th>
                        <Th textColor="white" textAlign='center'> Ações </Th>
                    </Tr>
                </Thead>

                <Tbody>
                    <Tr>
                        <Td color='#F5F5F5'> Curso de ReactJS </Td>
                        <Td color='#F5F5F5' > Tecnologia </Td>
                        <Td color='#F5F5F5' > Samandra </Td>
                        <Td color='#F5F5F5' > Lorem ipsum dolor sit amet, consectetur adipisicing elit. </Td>
                        <Td justifyContent='space-between'> 

                            <Flex>
                                <Button size="sm" fontSize="small" colorScheme='yellow' mr="2">
                                    <PiPencilSimpleBold style={{color: '#f5f5f5'}}/>
                                </Button>

                                <Button size="sm" fontSize="small" colorScheme='red' mr="2">
                                    <AiOutlineClose style={{color: '#f5f5f5'}}/>
                                </Button>

                                <Button size="sm" fontSize="small" colorScheme='blue' mr="2">
                                    Ativar/Desativar
                                </Button>
                            </Flex>

                        </Td>
                    </Tr>
                </Tbody>
            </Table>

        </Box>
    )
}
