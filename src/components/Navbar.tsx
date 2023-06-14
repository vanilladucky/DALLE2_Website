import { HStack, Image } from "@chakra-ui/react";
import DarkMode from "./DarkMode";
import logo from "../logo.svg";
import SearchNavBar from "./SearchNavBar";

interface Props {
  onSearch: (inputText:string) => void;
}

const Navbar = ({onSearch}:Props) => {
  return (
    <HStack padding = '10px'>
      <Image src={logo} alt='logo' boxSize="60px" />
      <SearchNavBar onSearch = {onSearch}/>
      <DarkMode />
    </HStack>
  );
};

export default Navbar;
