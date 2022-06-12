import { Heading, Text } from "@chakra-ui/react";
import { FC } from "react";

interface ITitleProps {
  text: string;
}

const Title: FC<ITitleProps> = ({ text }) => {
  return (
    <>
      <Heading fontWeight={"black"} textAlign={"center"}>
        {text}
      </Heading>
      <Text textAlign="center" marginBottom={"5"}>
        Know which Stellar accounts are trustable!
      </Text>
    </>
  );
};

export default Title;
