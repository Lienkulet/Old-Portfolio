// import  { createClient } from '@sanity/client';
// import imageUrlBuilder  from '@sanity/image-url';
// // import SanityImage from '@sanity/sanity-image';

 const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
 const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;
 const token = process.env.NEXT_PUBLIC_SANITY_TOKEN;
 const apiVersion = process.env.NEXT_PUBLIC_SANITY__API_VERSION;

// export const client = createClient({
//     projectId,
//     dataset,
//     apiVersion,
//     token,
//     useCdn: true,
//   });
  

//   // const builder = imageUrlBuilder(client);
    
//   // export const urlFor = (source) => builder.image(source);
  
// function urlFor(source){
//   imageUrlBuilder(client).image(source);
// }

// export default urlFor;

// // export const urlFor = (source) => 


import { createClient } from "@sanity/client";
import createImageUrlBuilder from "@sanity/image-url";



export const config = {
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
};

export const client = createClient(config);
export const urlFor = (source) => createImageUrlBuilder(config).image(source);
