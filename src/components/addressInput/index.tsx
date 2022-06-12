import { Input } from "@chakra-ui/react";
import { FC, Dispatch, SetStateAction } from "react";

interface ISearchInputProps {
  setFunction: Dispatch<SetStateAction<string>>;
  value: string;
}

const SearchInput: FC<ISearchInputProps> = ({ setFunction, value }) => {
  const setValue = (e: any) => {
    setFunction(e.target.value);
  };

  return (
    <>
      <Input
        onChange={setValue}
        placeholder="Public address"
        color="#e9ecef"
        background="#1A202C"
        value={value}
      />
    </>
  );
};

export default SearchInput;
