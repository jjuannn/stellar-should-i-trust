import { Text } from "@chakra-ui/react";
import { FC, ReactNode } from "react";

interface IErrorMessageProps {
  children: ReactNode;
  margin?: string;
}

const ErrorMessage: FC<IErrorMessageProps> = (props) => {
  const { children } = props;

  return (
    <Text marginTop="5px" color="red" {...props}>
      {children}
    </Text>
  );
};

export default ErrorMessage;
