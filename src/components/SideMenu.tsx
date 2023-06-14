import {
  VStack,
  Text,
  Input,
  Button,
  Flex,
  FormControl,
  FormLabel,
} from "@chakra-ui/react";
import { useState } from "react";
import { BsFillArrowRightSquareFill } from "react-icons/bs";

interface Props {
  onSubmit: (submitText: string) => void;
}

const SideMenu = ({ onSubmit }: Props) => {
  const [image_description, setImage_description] = useState<string>("");
  const [action_description, setAction_description] = useState<string>("");
  const [mood_description, setMood_description] = useState<string>("");
  const [artform, setArtform] = useState<string>("");
  const [lighting, setLighting] = useState<string>("");
  const [framing, setFraming] = useState<string>("");

  let final_prompt = [image_description, action_description, mood_description, artform, lighting, framing].join(" ")


  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (final_prompt) onSubmit(final_prompt);
        console.log("submitted form");
        console.log(`This is the final prompt: ${final_prompt}`);
      }}
    >
      <VStack spacing={5} marginY="10px" marginRight="10px">
        <FormLabel>Description of Image</FormLabel>
        <Input
          marginTop="-15px"
          onChange={(event) => setImage_description(event.target.value)}
          focusBorderColor="pink.100"
          placeholder="Description of Image"
          size="sm"
        />
        <FormLabel>Description of action</FormLabel>
        <Input
          marginTop="-15px"
          onChange={(event) => setAction_description(event.target.value)}
          placeholder="Description of action"
          size="sm"
        />
        <FormLabel>Description of mood</FormLabel>
        <Input
          marginTop="-15px"
          onChange={(event) => setMood_description(event.target.value)}
          placeholder="Description of mood"
          size="sm"
        />
        <FormLabel>Description of art form</FormLabel>
        <Input
          marginTop="-15px"
          onChange={(event) => setArtform(event.target.value)}
          placeholder="Description of art form"
          size="sm"
        />
        <FormLabel>Description of lighting</FormLabel>
        <Input
          marginTop="-15px"
          onChange={(event) => setLighting(event.target.value)}
          placeholder="Description of lighting"
          size="sm"
        />
        <FormLabel>Description of framing</FormLabel>
        <Input
          marginTop="-15px"
          onChange={(event) => setFraming(event.target.value)}
          placeholder="Description of framing"
          size="sm"
        />

        <FormControl>
          <Flex justifyContent={"space-around"}>
            <Button
              marginTop="15px"
              type="submit"
              rightIcon={<BsFillArrowRightSquareFill />}
              colorScheme="whatsapp"
            >
              Submit
            </Button>
          </Flex>
        </FormControl>
      </VStack>
    </form>
  );
};

export default SideMenu;
