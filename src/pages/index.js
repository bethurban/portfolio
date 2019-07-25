import React from 'react';
import styled from 'styled-components';
import * as Mixins from '../Mixins';
import * as t from '../Typography';
import Layout, { Content } from '../components/Layout';
import Mycomps from '../images/mycomps.png';
import Placeholder from '../images/placeholder.png';
import Flatiron from '../images/flatironhotel.png';
import Wishlist from '../images/travelwishlist.png';
import Dogbreeds from '../images/dogbreeds.png';
import { HireMe, LinkButton } from '../components/Button.js';
import HireMePopup from '../components/HireMePopup.js';
import { media } from '../MediaQueries';
import Colors from '../Colors';
import Img from 'gatsby-image';
import { graphql } from 'gatsby';
import { darken } from 'polished';

const AboveFold = styled.div`
  ${Mixins.aboveFoldMixin}
  padding: 140px 0 60px 0;
  ${t.H1} {
    color: ${Colors.darkest};
  }
`;

const Block = styled.div`
  &:nth-child(odd) {
    border: solid 1px ${darken(0.1, Colors.light)};
    background-color: ${Colors.light};
  }
`;

const BlockContent = styled(Content)`
  ${Mixins.block}
  padding: 100px 40px;
  ${media.tablet`
    flex-direction: column;
    align-items: baseline;
  `};
  ${media.phone`
    padding: 40px 10px;
  `};
  ${t.P} {
    margin-top: 10px;
  }
  ${t.H2} {
    margin-top: 0;
  }
  img {
    width: 100%;
    height: auto;
  }
`;

const DivWrapper = styled.div`
  padding: 80px 30px;
  ${media.tablet`padding: 50px 0;`}
  &:first-child {
    ${media.tablet`
      margin-bottom: 40px;
  `};
  }
`;

const ItemImage = styled.img`
  max-width: 85%;
  position: relative;
  ${media.tablet`max-width: none;`}
`;

const HomepageWrapper = styled.div`
  ${Mixins.wrapper}
  .who-desc {
    display: block;
    margin: 0 auto 60px auto;
    max-width: 90%;
  }
  ${t.LargeP} {
    margin-bottom: 0px;
  }
  ${t.H1} {
    margin: 0 0 20px 0;
  }
  .avatar {
    max-width: 200px;
    width: 80%;
    margin: 0 auto 50px auto;
    border-radius: 50%;
    display: block;
    ${media.tablet`max-width: 70%;`}
  }
  .link {
    padding: 0;
    color: ${Colors.darkest};
    text-decoration: underlined;
    svg {
      margin-left: 7px;
    }
  }
  .topLink {
    padding: 0px 10px;
    color: ${Colors.darkest};
    text-decoration: underlined;
    svg {
      margin-left: 7px;
    }
    font-size: 20px;
  }
  .portfolio {
    margin: 50px 0;
    font-size: 42px;
  }
`;

const WorkWithMe = styled.div`
  padding: 80px;
  width: 73%;
  border-radius: 6px;
  box-shadow: 0 2px 26px 0 rgba(57, 55, 55, 0.08);
  background-color: #ffffff;
  text-align: center;
  position: relative;
  margin: 100px auto -150px auto;
  ${t.LargeP} {
    max-width: 80%;
    margin: 0 auto 28px auto;
  }
  ${media.tablet`
    width: auto;
    padding: 40px;
    margin: 50px 30px -100px 30px;
  `};
`;

class Homepage extends React.Component {
  state = {
    openHireMePopup: false
  };

  handleRequestDemoClose = () => {
    this.setState({
      openHireMePopup: false
    });
  };

  openContactPopup = () => {
    this.setState({
      openHireMePopup: true
    });
  };

  render() {
    const { openHireMePopup } = this.state;
    const { data } = this.props;
    return (
      <HomepageWrapper>
        <Layout theme="white" bigFooter openContactPopup={this.openContactPopup}>
          <AboveFold>
            <Img fluid={data.avatarHomepage.childImageSharp.fluid} alt="Beth Urban" className="avatar" />
            <t.H1 primary align="center">
              Beth Urban
            </t.H1>
            <t.LargeP align="center" max45>
              Software engineer, technical coach
            </t.LargeP>
          </AboveFold>
          <Content>
            <t.H2 primary align="center" bold>
              Flatiron School full-stack web development graduate
            </t.H2>
            <t.P align="center" max70 className="who-desc">
              <LinkButton primary bold className="topLink" as="a" target="_blank" href="https://github.com/bethurban">
                Github
              </LinkButton>
              <LinkButton
                primary
                bold
                className="topLink"
                as="a"
                target="_blank"
                href="https://drive.google.com/file/d/1BuVOUtCVrYW6i5gUGZPdlj1JHKti66Yd/view?usp=sharing"
              >
                Resume
              </LinkButton>
              <p>
                Full-stack web developer based in the New York City area with a passion for creating, building and
                learning.
              </p>
              <p>I am experienced in Redux, React, JavaScript, Rails, Ruby, SQL, Bootstrap, CSS and HTML.</p>
              <p>I discovered software engineering through nearly 10 years of experience in digital newsrooms.</p>
            </t.P>
            <t.H2 primary align="center" bold className="portfolio">
              Portfolio
            </t.H2>
          </Content>
          <Block>
            <BlockContent>
              <DivWrapper>
                <ItemImage src={Mycomps} alt="Placeholder title" />
              </DivWrapper>
              <DivWrapper>
                <t.H2 bold>My Comps</t.H2>
                <t.P>
                  Users can search an address and see comparable properties with details such as last sold price, plus a
                  map of all properties.
                </t.P>
                <t.P>React/Redux with a Rails API to store registered users and saved searches.</t.P>
                <t.P>
                  Accesses the Zillow and Google APIs to return property details, map properties and log users in.
                </t.P>
                <LinkButton primary bold className="link" as="a" target="_blank" href="https://my-comps.herokuapp.com/">
                  Live site
                </LinkButton>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <LinkButton
                  primary
                  bold
                  className="link"
                  as="a"
                  target="_blank"
                  href="https://github.com/bethurban/my-comps-client"
                >
                  Front-end code
                </LinkButton>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <LinkButton
                  primary
                  bold
                  className="link"
                  as="a"
                  target="_blank"
                  href="https://github.com/bethurban/my-comps-api"
                >
                  Back-end code
                </LinkButton>
              </DivWrapper>
            </BlockContent>
          </Block>
          <Block>
            <BlockContent>
              <DivWrapper>
                <t.H2 bold>The Flatiron Hotel</t.H2>
                <t.P>
                  Using this mock hotel app, guests can view and book available rooms, and admins can manage rooms and
                  reservations.
                </t.P>
                <t.P>Developed a Ruby on Rails API with endpoints for hotel guests, rooms and reservations.</t.P>
                <t.P>Added dynamic search and display features using JavaScript and a JSON API.</t.P>
                <LinkButton
                  primary
                  bold
                  className="link"
                  as="a"
                  target="_blank"
                  href="https://github.com/bethurban/flatiron-hotel"
                >
                  Code
                </LinkButton>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <LinkButton
                  primary
                  bold
                  className="link"
                  as="a"
                  target="_blank"
                  href="https://www.youtube.com/watch?v=fkN8lO62-go&feature=youtu.be"
                >
                  Demo
                </LinkButton>
              </DivWrapper>
              <DivWrapper>
                <ItemImage src={Flatiron} alt="Flatiron Hotel" />
              </DivWrapper>
            </BlockContent>
          </Block>
          <Block>
            <BlockContent>
              <DivWrapper>
                <ItemImage src={Wishlist} alt="Travel Wishlist" />
              </DivWrapper>
              <DivWrapper>
                <t.H2 bold>Travel Wishlist</t.H2>
                <t.P>Users can add destinations to their travel wishlists and track where they've been.</t.P>
                <t.P>
                  Built with Sinatra and a focus on the MVC pattern and CRUD actions to create a content management
                  system.
                </t.P>
                <t.P>Employed ActiveRecord to build and maintain the database.</t.P>
                <LinkButton
                  primary
                  bold
                  className="link"
                  as="a"
                  target="_blank"
                  href="https://github.com/bethurban/travel-wishlist"
                >
                  Code
                </LinkButton>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <LinkButton
                  primary
                  bold
                  className="link"
                  as="a"
                  target="_blank"
                  href="https://www.youtube.com/watch?v=wlyPgzF_Kmc"
                >
                  Demo
                </LinkButton>
              </DivWrapper>
            </BlockContent>
          </Block>
          <Block>
            <BlockContent>
              <DivWrapper>
                <t.H2 bold>Dog Breeds Gem</t.H2>
                <t.P>A CLI app that lists American Kennel Club dog breeds and prints details about a chosen breed.</t.P>
                <t.P>Used Object-Oriented Ruby to scrape and parse data from the AKC's website.</t.P>
                <LinkButton
                  primary
                  bold
                  className="link"
                  as="a"
                  target="_blank"
                  href="https://rubygems.org/gems/akc_dog_breeds"
                >
                  RubyGems
                </LinkButton>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <LinkButton
                  primary
                  bold
                  className="link"
                  as="a"
                  target="_blank"
                  href="https://github.com/bethurban/dog_breeds-cli-app"
                >
                  Code
                </LinkButton>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <LinkButton
                  primary
                  bold
                  className="link"
                  as="a"
                  target="_blank"
                  href="https://www.youtube.com/watch?v=0eTmBbFYxbA&feature=youtu.be"
                >
                  Demo
                </LinkButton>
              </DivWrapper>
              <DivWrapper>
                <ItemImage src={Dogbreeds} alt="Dog Breeds Gem" />
              </DivWrapper>
            </BlockContent>
          </Block>
          <WorkWithMe>
            <t.H1 green>Get in touch with me</t.H1>
            <HireMe onClick={this.openContactPopup} book>
              Contact me
            </HireMe>
          </WorkWithMe>
        </Layout>
        <HireMePopup open={openHireMePopup} handleClose={this.handleRequestDemoClose} />
      </HomepageWrapper>
    );
  }
}

export default Homepage;

export const pageQuery = graphql`
  query {
    avatarHomepage: file(relativePath: { eq: "avatar.jpg" }) {
      ...fluidImage
    }
  }
`;
