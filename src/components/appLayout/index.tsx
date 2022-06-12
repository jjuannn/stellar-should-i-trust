import { Box, Flex } from "@chakra-ui/react";
import { FC, ReactNode } from "react";

interface IAppLayoutProps {
  children: ReactNode;
}

const AppLayout: FC<IAppLayoutProps> = ({ children }) => {
  return (
    <Box
      as="section"
      display="flex"
      flexDirection="column"
      minHeight="100vh"
      bg="#1A202C"
    >
      <Flex
        direction="column"
        as="main"
        flex="1"
        paddingY="20px"
        paddingX="5vw"
      >
        {children}
      </Flex>
    </Box>
  );
};

export default AppLayout;
