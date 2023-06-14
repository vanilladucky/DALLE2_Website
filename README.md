# DALLE Website for images

This is a website where users can prompt for artificially generated images using OpenAI's DALLE2 model. 

To run the website on a local host, one needs to clone this repository into their local machine. 

They would then need to run `npm install` to install all the dependencies. 

To run the actual website on the localhost website, type `npm start` and click on the link shown in the terminal. 

### Inserting personal API key

In the `src/services/api-client.ts` file, you would need to include your own API key from the OpenAI website. 

If you are new member, they offer a free API key for certain amount of calls and after which you would have to pay.

### Tech used

This was built using the React framework, with the TypeScript language. 

For calling on OpenAI's API, axios was used. 