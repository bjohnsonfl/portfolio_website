import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "./styles/bio.css"

const Bio = () => (
    <Layout headerBar = {"bioBar"}>
      <SEO title="Home" />
      <div className="bio_Header">
          <h1>About Me</h1>
      </div>
      <div className="bio_wrapper">
        <div className="picture_wrapper"> <div className="bio_picture"></div></div>
        <div className = "bio_paragraph_wrapper">
         
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eget tempus nisl. Vivamus eget sem tristique, tincidunt lorem ac, dignissim erat. Etiam leo dolor, pulvinar sed mi vitae, maximus finibus massa. Aliquam mauris massa, malesuada ac libero sit amet, vestibulum tincidunt dui. Morbi sagittis lacus non nibh interdum dignissim. </p>
          <p>Suspendisse nec ultricies nulla. Aliquam varius eu urna vitae elementum. Sed in tellus a nibh tincidunt lacinia. Etiam iaculis elit quis pretium facilisis. Maecenas in sollicitudin purus. Proin dolor lectus, efficitur sit amet est non, euismod aliquam ipsum.</p>
          <p>Sed nec enim arcu. Aliquam erat volutpat. Proin facilisis felis in augue posuere, et semper purus dictum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nullam pulvinar orci auctor eros aliquam dictum.</p>
          <p>Etiam cursus, odio molestie mollis laoreet, lectus ipsum malesuada magna, pretium tempor orci quam sit amet libero. Curabitur quis finibus nunc. Ut ut accumsan enim. Aliquam id accumsan nisi, et mattis orci. Suspendisse eget sodales odio, aliquam accumsan mi.</p>
          <p>Mauris consequat sem scelerisque risus pellentesque, ac convallis nibh malesuada. Phasellus orci urna, interdum in tempus in, aliquam ac est. Quisque aliquet fermentum condimentum. Morbi lobortis interdum odio, sed scelerisque lacus lobortis at. Aliquam ante sapien, scelerisque sit amet ante sed, commodo ultrices libero. Mauris laoreet sapien nec accumsan faucibus. Sed et massa vel sapien dignissim venenatis id quis massa. Etiam viverra porta convallis. Nulla ut velit ac eros efficitur volutpat. Ut sed tempor massa, a condimentum leo. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed lobortis tincidunt lacinia. Pellentesque nunc velit, pulvinar quis rhoncus vitae, luctus a nisi. Phasellus ut est a purus facilisis efficitur vel et nisl.</p>
         
        </div>
      </div>
    </Layout>
)

export default Bio

