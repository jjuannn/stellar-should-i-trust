import { FC } from "react";
import { Flex, Text, Badge, Image } from "@chakra-ui/react";
import dangerousAccountGif from "../../assets/dangerous.gif";
import trustableAccountGif from "../../assets/ok.gif";

interface IDataDisplayProps {
  address?: string;
  name?: string;
  tags?: string[];
  accountIsTrustable?: true;
}

const DataDisplay: FC<IDataDisplayProps> = ({
  address,
  name,
  tags,
  accountIsTrustable,
}) => {
  return (
    <Flex
      marginTop="20px"
      direction={"column"}
      height="100%"
      marginBottom={"auto"}
    >
      {address && (
        <>
          <Flex>
            {tags &&
              tags.map((tag) => {
                return (
                  <>
                    {" "}
                    <Badge
                      marginBottom={"5px"}
                      marginRight={"5px"}
                      width={"fit-content"}
                      colorScheme="red"
                    >
                      {tag}
                    </Badge>{" "}
                  </>
                );
              })}
          </Flex>
          <Text marginBottom={"5px"} fontWeight="bold">
            {address}
          </Text>
          <Text marginBottom="15px" fontSize={"lg"}>
            This account has been flagged as potentialy malicious for
            <strong style={{ textTransform: "lowercase" }}> {name}</strong>.
            Please be careful when interacting with it
          </Text>
          <Flex height={"100%"} direction="column" flex="1">
            <Image
              margin="auto"
              borderRadius={"16px"}
              objectFit="cover"
              height={"100%"}
              src={dangerousAccountGif}
            />
          </Flex>
        </>
      )}
      {accountIsTrustable && (
        <>
          <Text marginBottom={"10px"} fontSize="lg">
            Looks like everything is in order with this account! :)
          </Text>
          <Flex height={"100%"} direction="column" flex="1">
            <Image
              margin="auto"
              borderRadius={"16px"}
              objectFit="cover"
              height={"100%"}
              src={trustableAccountGif}
            />
          </Flex>
        </>
      )}
    </Flex>
  );
};
export default DataDisplay;
