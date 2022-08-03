import { Box, BoxProps, useColorMode } from '@chakra-ui/react';
import { useMemo } from 'react';

const LINE_PROPS = {
  borderRadius: '0.3rem',
  content: '""',
  display: 'block',
  height: '0.4rem',
  margin: '0.4rem 0',
  width: '100%',
  transition: 'all 0.25s ease-in-out',
};

export const NavToggle: React.FC<BoxProps & { isOpen: boolean }> = ({
  isOpen,
  ...props
}) => {
  const { colorMode } = useColorMode();
  const lineProps = useMemo(
    () => ({
      ...LINE_PROPS,
      backgroundColor: colorMode === 'dark' ? 'white' : 'black',
    }),
    [colorMode],
  );
  return (
    <Box
      sx={{
        cursor: 'pointer',
        padding: 0,
        margin: 0,
        width: '2.5rem',
      }}
      _before={{
        ...lineProps,
        transform: isOpen ? 'translateY(0.8rem) rotate(45deg)' : 'unset',
      }}
      _after={{
        ...lineProps,
        transform: isOpen ? 'translateY(-0.8rem) rotate(-45deg)' : 'unset',
      }}
      {...props}
    >
      <Box sx={{ ...lineProps, transform: isOpen ? 'scale(0)' : 'unset' }} />
    </Box>
  );
};
