import "./App.css";
import { Grid, GridItem, Show } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import ImageGrid from "./components/ImageGrid";
import { useState } from "react";
import SideMenu from "./components/SideMenu";

function App() {
  const [images, setImages] = useState<string>('');
  const [collection, setCollection] = useState<string[]>([]);



  //console.log(`These are the ${images}`); 
  //console.log(`These are the collections ${collection}`);
  return (
    <Grid
      templateAreas={{
        lg: `"header header" "nav main"`,
        base: `"header" "main"`,
      }}
      gridTemplateRows={{
        lg: "80px 1fr",
        base: "80px 1fr",
      }}
      gridTemplateColumns={{
        lg: "20vw 1fr",
        base: "1fr",
      }}
      h="100vh"
      gap="1"
      fontWeight="bold"
    >
      <GridItem area={"header"}>
        <Navbar onSearch = {(image_url) => {
          setImages(image_url)
          setCollection((prevcollection) => [...prevcollection, image_url])
          }}/>
      </GridItem>
      <Show above="lg">
        <GridItem pl="2" borderRight = 'inset' borderTop = 'inset' borderTopRightRadius = '20px' boxShadow='dark-lg' p='6' borderRightColor = 'grey' area={"nav"}>
          <SideMenu onSubmit = {(final_prompt) => {
            setImages(final_prompt)
            setCollection((prevcollection) => [...prevcollection, final_prompt])
          }}/>
        </GridItem>
      </Show>
      <GridItem pl="2"  area={"main"} backgroundImage="url('https://static.vecteezy.com/system/resources/previews/000/830/014/original/futuristic-banner-background-with-wireframe-terrain-vector.jpg')" bgRepeat="no-repeat" bgPosition="center" bgSize='cover'>
        <ImageGrid input = {images} input_arr = {collection}/>
      </GridItem>
    </Grid>
  );
}

export default App;
