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
          <Text align={"center"} fontSize="4xl">
            Hi Thera fas d fae afwe awef wef fewf wef awe fwe faw awef ew f aef
            awef ew f fwea
          </Text>
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
