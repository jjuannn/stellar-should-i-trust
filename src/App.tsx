import { Button, Flex, Spinner } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import ErrorMessage from "./components/errorMessage";
import SearchInput from "./components/addressInput";
import Title from "./components/cardTitle";
import { getSuspiciousAccount } from "./service/stellar";
import DataDisplay from "./components/dataDisplay";

const App = () => {
  const [inputValue, setinputValue] = useState<string>("");
  const [result, setResult] = useState<{ data: any }>({ data: null });
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAccount = async () => {
      setError(null);
      setLoading(true);
      try {
        setResult({ data: null });
        if (inputValue.length === 56) {
          const account = await getSuspiciousAccount(inputValue);
          setResult({ data: account });
        }
      } catch (err: any) {
        setError(err.message);
      }
      setLoading(false);
    };

    fetchAccount();
  }, [inputValue]);

  return (
    <Flex
      width={["90vw", "90vw", "50vw"]}
      bg="#e9ecef"
      borderRadius={"16px"}
      boxShadow="dark-lg"
      margin="auto"
      height={"auto"}
      direction="column"
      paddingX="16"
      paddingY="5"
    >
      <Title text="Should I Trust?" />
      <Flex>
        <SearchInput setFunction={setinputValue} value={inputValue} />
        <Button
          onClick={() => setinputValue("")}
          marginLeft="5px"
          variant="outline"
          colorScheme={"red"}
        >
          Clear
        </Button>
      </Flex>
      <ErrorMessage>
        {inputValue.length !== 56 && "Must introduce a 56 characters address"}
      </ErrorMessage>
      {loading && <Spinner margin={"auto"} size="xl" color="#1A202C" />}
      {error && <ErrorMessage margin="auto">{error}</ErrorMessage>}
      {result.data && <DataDisplay {...result.data} />}
    </Flex>
  );
};

export default App;
