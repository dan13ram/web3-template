import {
  Box,
  HStack,
  Image,
  Link as ChakraLink,
  Stack,
  Switch,
  Text,
  useColorMode,
  VStack,
} from '@chakra-ui/react';
import NextLink from 'next/link';
import { useState } from 'react';

import LogoImage from '@/assets/logo.png';
import { NavToggle } from '@/components/NavToggle';

export const AppLayout: React.FC<{ children?: React.ReactNode }> = ({
  children,
}) => {
  const [isOpen, setOpen] = useState(false);
  const toggleOpen = () => setOpen(o => !o);
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Stack align="center" p="0" m="0" spacing="0">
      <VStack
        p={{ base: 6, lg: 8 }}
        alignItems="center"
        borderBottomRadius="md"
        w="100%"
        maxW="8xl"
        mx="auto"
      >
        <HStack w="100%" justify="space-between" pos="relative">
          <NextLink href="/" passHref>
            <ChakraLink display="block" _hover={{}}>
              <HStack align="center" role="group" h={12} gap={4}>
                <Image
                  src={LogoImage.src}
                  h={16}
                  alt="logo"
                  _groupHover={{
                    transition: 'transform 1.5s',
                    transform: 'scale(1.25)',
                  }}
                />
                <Text
                  color={colorMode === 'dark' ? 'white' : 'black'}
                  fontWeight="bold"
                  fontSize="xl"
                >
                  Web3 Template
                </Text>
              </HStack>
            </ChakraLink>
          </NextLink>

          <HStack align="center" role="group" gap={4}>
            <Switch
              colorScheme={colorMode === 'dark' ? 'whiteAlpha' : 'blackAlpha'}
              isChecked={colorMode == 'dark'}
              onChange={toggleColorMode}
            />
            <NavToggle isOpen={isOpen} onClick={toggleOpen} />
          </HStack>
        </HStack>
      </VStack>
      <Box w="100%" p={{ base: 6, md: 8, lg: 12 }} maxW="8xl" mx="auto">
        {children}
      </Box>
    </Stack>
  );
};
