import React from "react"
import SEO from "../components/seo"
import Footer from "../components/footer"
import { motion } from 'framer-motion'
import Marquee from "react-smooth-marquee"
import { graphql, Link } from "gatsby"
import { fadeSlow, fade, revealInOut } from "../helpers/transitionHelper"
import Img from "gatsby-image"

const AboutPage = ({ data: { datoCmsAbout }, location}) => {
  return (
    <>
      <SEO
        titleOverride={datoCmsAbout.metaTags && datoCmsAbout.metaTags.title ? datoCmsAbout.metaTags.title : datoCmsAbout.title }
        descriptionOverride={datoCmsAbout.metaTags && datoCmsAbout.metaTags.description ? datoCmsAbout.metaTags.description : null }
        pathnameOverride={location.pathname}
        imageOverride={datoCmsAbout.metaTags && datoCmsAbout.metaTags.image ? datoCmsAbout.metaTags.image.url : null }
      />
      
      <motion.section
        initial="initial"
        data-scroll-section
        animate="enter"
        exit="exit"
        className="text-black"
      >
        <div>
          <div className="flex flex-wrap" id="pinned-pane">
            <div className="relative w-full container container--content-about">
              <div className="relative w-full">
                <motion.div
                  className="content w-full about-text relative z-10 pb-32 md:pb-32 xl:pb-48"
                  variants={{
                    enter: { transition: { staggerChildren: 0.03 }}
                  }}
                >
                  <span className="hidden md:block">
                    <span className="block overflow-hidden">
                      <motion.span variants={revealInOut} className="block w-full">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I’m a web developer from</motion.span>
                    </span>
                    <span className="block overflow-hidden">
                      <motion.span variants={revealInOut} className="block w-full">Nottingham with 10+ years of</motion.span>
                    </span>
                    <span className="block overflow-hidden">
                      <motion.span variants={revealInOut} className="block w-full">experience in methodical html,</motion.span>
                    </span>
                    <span className="block overflow-hidden">
                      <motion.span variants={revealInOut} className="block w-full">css &amp; javascript. I’m interested</motion.span>
                    </span>
                    <span className="block overflow-hidden">
                      <motion.span variants={revealInOut} className="block w-full">in scaleable code, craft cms</motion.span>
                    </span>
                    <span className="block overflow-hidden">
                      <motion.span variants={revealInOut} className="block w-full">&amp; vuejs.</motion.span>
                    </span>
                  </span>

                  <motion.span variants={fade} className="block md:hidden">
                    I’m a web developer from Nottingham with 10+ years of experience in methodical html, css &amp; javascript. I’m really interested in scaleable front-end development, craft cms &amp; vuejs.
                  </motion.span>
                </motion.div>

                <motion.div
                  variants={{
                    enter: { transition: { delayChildren: 0.3 }}
                  }}
                >
                  <motion.div variants={fadeSlow}>
                    <div className="w-2/3 md:w-7/12 xl:w-1/2 absolute z-0 bottom-0 right-0 pl-8 opacity-75">
                      <Img fluid={ datoCmsAbout.image.fluid } className="w-full mb-0 pb-0" />
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            </div>

            <motion.div 
              className="w-full"
              variants={{
                enter: { transition: { staggerChildren: 0.02 }}
              }}
            >
              <div className="container container--content">

                <span className="block text-xl mb-4">Features &amp; Awards</span>
                <ul className="block w-full border-black border-t">
                  {/* {work.edges.map(({ node }, i) => {
                    return ( */}
                      <li className={`block border-b border-black w-full pt-3 pb-1`}>
                        <div className="overflow-hidden w-full">
                          <motion.div variants={revealInOut} className="flex flex-wrap w-full items-center">
                            <div className="w-full md:w-1/2 flex flex-wrap items-center">
                              <span className="block font-display font-light text-2xl md:text-3xl w-1/2">CSS Design Awards</span>
                              <span className="block text-xl md:text-2xl w-1/2">Public UI Award</span>
                            </div>
                            <div className="w-1/2 md:w-1/4 md:text-left pr-12 md:pr-0">
                              <span className="text-xl md:text-2xl md:ml-auto block md:pl-24">
                                <Link to="/isaac-j-powell" className="inline-block fake-strike--perma">Isaac J Powell</Link>
                              </span>
                            </div>
                            <div className="w-1/2 md:w-1/4 md:text-right">
                              <span className="text-xl block ml-auto">2019</span>
                            </div>
                          </motion.div>
                        </div>
                      </li>



                      <li className={`block border-b border-black w-full pt-3 pb-1`}>
                        <div className="overflow-hidden w-full">
                          <motion.div variants={revealInOut} className="flex flex-wrap w-full items-center">
                            <div className="w-full md:w-1/2 flex flex-wrap items-center">
                              <span className="block font-display font-light text-2xl md:text-3xl w-1/2">CSS Design Awards</span>
                              <span className="block text-xl md:text-2xl w-1/2">Public UX Award</span>
                            </div>
                            <div className="w-1/2 md:w-1/4 md:text-left pr-12 md:pr-0">
                              <span className="text-xl md:text-2xl md:ml-auto block md:pl-24">
                                <Link to="/isaac-j-powell" className="inline-block fake-strike--perma">Isaac J Powell</Link>
                              </span>
                            </div>
                            <div className="w-1/2 md:w-1/4 md:text-right">
                              <span className="text-xl block ml-auto">2019</span>
                            </div>
                          </motion.div>
                        </div>
                      </li>


                      <li className={`block border-b border-black w-full pt-3 pb-1`}>
                        <div className="overflow-hidden w-full">
                          <motion.div variants={revealInOut} className="flex flex-wrap w-full items-center">
                            <div className="w-full md:w-1/2 flex flex-wrap items-center">
                              <span className="block font-display font-light text-2xl md:text-3xl w-1/2">CSS Design Awards</span>
                              <span className="block text-xl md:text-2xl w-1/2">Public Innovation Award</span>
                            </div>
                            <div className="w-1/2 md:w-1/4 md:text-left pr-12 md:pr-0">
                              <span className="text-xl md:text-2xl md:ml-auto block md:pl-24">
                                <Link to="/isaac-j-powell" className="inline-block fake-strike--perma">Isaac J Powell</Link>
                              </span>
                            </div>
                            <div className="w-1/2 md:w-1/4 md:text-right">
                              <span className="text-xl block ml-auto">2019</span>
                            </div>
                          </motion.div>
                        </div>
                      </li>


                      <li className={`block border-b border-black w-full pt-3 pb-1`}>
                        <div className="overflow-hidden w-full">
                          <motion.div variants={revealInOut} className="flex flex-wrap w-full items-center">
                            <div className="w-full md:w-1/2 flex flex-wrap items-center">
                              <span className="block font-display font-light text-2xl md:text-3xl w-1/2">Admire The Web</span>
                              <span className="block text-xl md:text-2xl w-1/2">Featured Website</span>
                            </div>
                            <div className="w-1/2 md:w-1/4 md:text-left pr-12 md:pr-0">
                              <span className="text-xl md:text-2xl md:ml-auto block md:pl-24">
                                <Marquee velocity={0.03} className="max-w-24 w-full">
                                  <Link to="/isaac-j-powell" className="inline-block fake-strike--perma">Isaac J Powell</Link>
                                  &nbsp;&nbsp;—&nbsp;&nbsp;
                                  <Link to="/jess-bright" className="inline-block fake-strike--perma">Jess Bright</Link>
                                  &nbsp;&nbsp;—&nbsp;&nbsp;
                                  <Link to="/isaac-j-powell" className="inline-block fake-strike--perma">Isaac J Powell</Link>
                                  &nbsp;&nbsp;—&nbsp;&nbsp;
                                  <Link to="/jess-bright" className="inline-block fake-strike--perma">Jess Bright</Link>
                                  &nbsp;&nbsp;—&nbsp;&nbsp;
                                  <Link to="/isaac-j-powell" className="inline-block fake-strike--perma">Isaac J Powell</Link>
                                  &nbsp;&nbsp;—&nbsp;&nbsp;
                                  <Link to="/jess-bright" className="inline-block fake-strike--perma">Jess Bright</Link>
                                  &nbsp;&nbsp;—&nbsp;&nbsp;
                                </Marquee>
                              </span>
                            </div>
                            <div className="w-1/2 md:w-1/4 md:text-right">
                              <span className="text-xl block ml-auto">2019 — 20</span>
                            </div>
                          </motion.div>
                        </div>
                      </li>

                      <li className={`block border-b border-black w-full pt-3 pb-1`}>
                        <div className="overflow-hidden w-full">
                          <motion.div variants={revealInOut} className="flex flex-wrap w-full items-center">
                            <div className="w-full md:w-1/2 flex flex-wrap items-center">
                              <span className="block font-display font-light text-2xl md:text-3xl w-1/2">Mindsparkle</span>
                              <span className="block text-xl md:text-2xl w-1/2">Website Feature</span>
                            </div>
                            <div className="w-1/2 md:w-1/4 md:text-left pr-12 md:pr-0">
                              <span className="text-xl md:text-2xl md:ml-auto block md:pl-24">
                                <Link to="/isaac-j-powell" className="inline-block fake-strike--perma">Isaac J Powell</Link>
                              </span>
                            </div>
                            <div className="w-1/2 md:w-1/4 md:text-right">
                              <span className="text-xl block ml-auto">2019</span>
                            </div>
                          </motion.div>
                        </div>
                      </li>

                      <li className={`block border-b border-black w-full pt-3 pb-1`}>
                        <div className="overflow-hidden w-full">
                          <motion.div variants={revealInOut} className="flex flex-wrap w-full items-center">
                            <div className="w-full md:w-1/2 flex flex-wrap items-center">
                              <span className="block font-display font-light text-2xl md:text-3xl w-1/2">Heritage In Motion</span>
                              <span className="block text-xl md:text-2xl w-1/2">Website Of The Year</span>
                            </div>
                            <div className="w-1/2 md:w-1/4 md:text-left pr-12 md:pr-0">
                              <span className="text-xl md:text-2xl md:ml-auto block md:pl-24">
                                <Link to="/v-and-a-culture-in-crisis" className="inline-block fake-strike--perma">V&amp;A Culture In Crisis</Link>
                              </span>
                            </div>
                            <div className="w-1/2 md:w-1/4 md:text-right">
                              <span className="text-xl block ml-auto">2020</span>
                            </div>
                          </motion.div>
                        </div>
                      </li>
                    {/* )
                  })} */}
                </ul>
              </div>
            </motion.div>

            <div className="flex flex-wrap items-center">
            <div className="flex flex-wrap items-start">
              <div className="container container--content w-full flex flex-wrap">
                <div className="w-full md:w-4/12 mb-3 md:mb-0">
                  <span className="block text-2xl md:mb-8">About Me</span>
                </div>
                <div className="w-full md:w-7/12 mb-12">
                  <div className="md:w-8/12 xl:w-8/12">
                    <p className="block collab-text font-light">&nbsp;&nbsp;&nbsp;&nbsp;I’ve loved video games since I got a SEGA Megadrive for Christmas as a kid and would love to one day work in the gaming industry.</p>

                    <p className="block collab-text font-light">I peaked at top 5% EUW in Season 5 of League, not bad for a washed up 30 year old. Final Fantasy VII, Ocarina of Time and Red Alert 2 are my favourite games of all time.</p>

                    <p className="block collab-text font-light">I’m currently being hard carried (on multiple accounts) by Sic Mundus, one of Europes premier gamers &amp; designers.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
            
            <motion.div
              variants={{
                enter: { transition: { delayChildren: 0.45 }}
              }}
              className="mt-auto container self-end w-full"
            >
              <motion.div variants={fadeSlow} className="">
                <Footer borderColor="border-black" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </>
  )
}

export default AboutPage

export const query = graphql`
  query AboutQuery {
    datoCmsAbout {
      metaTags {
        title
        description
        twitterCard
        image {
          url
        }
      }
      title
      heading
      image {
        fluid(
          maxWidth: 2000,
          imgixParams: {w: "2000", h: "1300", fit: "crop" }) {
          ...GatsbyDatoCmsFluid
        }
        alt
      }
      slug
    }
  }
`