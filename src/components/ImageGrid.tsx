import { Flex, Text, Image, Box } from "@chakra-ui/react";
import useSearch from "../hooks/useSearch";
import ImageSkeleton from "./ImageSkeletons";

interface Props {
  input: string;
  input_arr: string[];
}

const ImageGrid = ({ input, input_arr }: Props) => {
  const { data, error, isLoading } = useSearch({ prompt: input, input_arr });
  const image_url = data?.data[0].url;
  //console.log(image_url);

  return (
    <div>
      <Box marginX="20vw" marginTop="20vh">
        {!isLoading && (
          <Box backgroundColor="rgba(108, 122, 137, .5)">
            <Text align={"center"} fontSize="4xl">
              Welcome!
              <Text fontSize="0.5em">
                <br />
                <br />
                Let your imagination run free and your brain overflow with the
                creative juice you've got, cause the sky is your limit when it
                comes to OpenAI's DALL-E.
                <br />
                <br />
                Utilizing OpenAI's API, and with only a couple of creative,
                detailed prompts, you can be an artist yourself.
                <br />
                <br />
                You can either type in what you want in a full sentence in the
                bar on top, or you can type in all the attributes suggested at
                the side panel. The more detailed and descriptive your prompts
                are, the better the picture would be.
              </Text>
            </Text>
          </Box>
        )}
      </Box>

      <Flex align={"center"} justify={"space-between"} direction={"column"}>
        {isLoading && <ImageSkeleton />}
        {image_url && (
          <Image
            loading="lazy"
            boxSize="70%"
            marginTop="10vh"
            objectFit="cover"
            src={image_url}
            alt="Dan Abramov"
          />
        )}
        {/* {!isLoading && <Image fallbackSrc={placeholderimage} boxSize='50%' marginTop = '10vh' objectFit='cover' src={image_url} alt="Dan Abramov" />} */}
        {image_url && (
          <Text noOfLines={1} maxWidth="70vw" fontSize="1.5em" marginTop="10px">
            {input === "" ? "Image by stable diffusion" : input}
          </Text>
        )}
      </Flex>
    </div>
  );
};

export default ImageGrid;
