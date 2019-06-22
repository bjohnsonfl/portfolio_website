# Portfolio Website
I am currently developing a website to showcase projects that I have done. I am using the Gatsby framework, which uses the React library, JSX, and CSS.

## Try out a live demo
https://blakejohnsonuf.com

Gatsby is a static site generator, so instead of developing html pages, you can create javascript pages with JSX, React, CSS, and let Gatsby handle the rest. Gatsby also handles the server as well as routing which lets you focus on your UI. React makes developing easier by the ability to reuse code, making html cleaner to read, and facilitating passing of data.  

# How To Use This Repository
First, make sure you have Git and Node.js installed. 

Second, Create a Gatsby site using these steps https://www.gatsbyjs.org/docs/quick-start/

Third, navigate to the "src" folder in the gatsby site and delete all its contents. All the files in this respository should go into "src", however if you clone directly into the src directory, an aditional directory will be created so a simple fix is just clone this repository on the desktop and copy and paste the files into the src folder. This would not be an issue if I had just pushed the entire gatsby project instead of just the src, but I didn't so here we are.

Fourth, update plugins and node packages. In gatsby-config.js, comment out the entire gatsby-plugin-manifest because its trying to access an image that you deleted in the src folder. Add `gatsby-plugin-polyfill-io` to this file, forinstane under `gatsby-plugin-sharp`. Next run `npm install react-reveal --save` and `npm install body-scroll-lock`.

Lastly, you will want to launch the website. Navigate to the root of the site and run this command: `gatsby develop`  This will compile the files, start the server, and host the website. Go to your browser and type `localhost:8000` as the url and you will be viewing the website.

If there are bugs (I have not tried my steps yet as I am still developing the site) look at the gatsby-config.js file as there might be a plugin that is complaining because it is trying to access an image that I deleted in the images folder. You can just delete that plugin as I am not using it at the moment. 
