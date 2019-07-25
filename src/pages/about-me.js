import React from 'react';
import styled from 'styled-components';
import * as Mixins from '../Mixins';
import * as t from '../Typography';
import Layout, { Content } from '../components/Layout';
import HireMePopup from '../components/HireMePopup.js';
import { LinkButton } from '../components/Button.js';
import { media } from '../MediaQueries';
import Img from 'gatsby-image';
import { graphql } from 'gatsby';
import Colors from '../Colors';

const AboveFold = styled.div`
  ${Mixins.aboveFoldMixin}
  padding-bottom: 100px;

  ${t.H1} {
    margin-bottom: 25px;
  }
  ${t.H4} {
    line-height: 1.14;
  }
  ${media.tablet`background-position: center top 0px;`};
`;

const AboutMeWrapper = styled.div`
  ${Mixins.wrapper}
  .m-b-60 {
    margin-bottom: 60px;
  }
  ${t.LargeP} {
    margin-bottom: 28px;
  }
  .background {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    z-index: -1;
    min-height: 540px;
    ${media.phone`min-height: 620px;`};
  }
  .gatsby-image {
    ${media.tablet`text-align: center;`}
    div {
      padding: 0;
    }
    picture img {
      max-width: 85%;
      position: relative;
      ${media.tablet`max-width: 80%;`}
    }
  }
  .avatar {
    max-width: 400px;
    width: 80%;
    margin: 0 auto 100px auto;
    border-radius: 50%;
    display: block;
    ${media.tablet`max-width: 70%;`}
  }
  #resume {
    padding: 0;
    color: ${Colors.darkest};
    text-decoration: underlined;
    font-size: 23px;
  }
`;

class AboutMe extends React.Component {
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
      <AboutMeWrapper>
        <Layout theme="white" openContactPopup={this.openContactPopup}>
          <AboveFold>
            <t.H1 green align="center">
              Beth Urban
            </t.H1>
            <LinkButton
              primary
              bold
              id="resume"
              as="a"
              target="_blank"
              href="https://drive.google.com/file/d/1BuVOUtCVrYW6i5gUGZPdlj1JHKti66Yd/view?usp=sharing"
            >
              Resume
            </LinkButton>
            <t.LargeP align="center" max70>
              <p>
                I’m a web developer who spent 10 years as a digital journalist before learning software engineering with
                the Flatiron School. My career as a front page editor showed me the power of digital tools like mobile
                apps and websites. I’ve always loved to craft and build things, and I decided to take my interest in
                coding to the next level by transitioning to a career in tech.
              </p>
              <p>
                I'm currently working as an online technical coach for Flatiron School students who are making their way
                through the software engineering curriculum. I work directly with students, acting as an on-demand
                instructor while they work through the software engineering curriculum, and guide them through debugging
                their code while explaining key programming concepts.
              </p>
              <p>
                I’ve worked in React and Redux, JavaScript, Ruby on Rails, Sinatra, Bootstrap, CSS and HTML, and I have
                extensive experience working remotely and in high-pressure, deadline-driven environments.
              </p>
            </t.LargeP>
          </AboveFold>
          <Content>
            <Img fluid={data.avatarAbout.childImageSharp.fluid} alt="Beth Urban" className="avatar" />
          </Content>
        </Layout>
        <HireMePopup open={openHireMePopup} handleClose={this.handleRequestDemoClose} />
      </AboutMeWrapper>
    );
  }
}

export default AboutMe;

export const pageQuery = graphql`
  query {
    avatarAbout: file(relativePath: { eq: "avatar.jpg" }) {
      ...fluidImage
    }
  }
`;
