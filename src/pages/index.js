import React, { Component } from 'react'
import { Helmet } from 'react-helmet'
import styled from 'emotion/react'

import Page from '../components/Page'
import { P, A } from '../components/text'
import Link from 'gatsby-link'

const H1 = styled('h1')`
  display: inline-block;
  background-color: #FF4136;
  color: white;
  text-transform: lowercase;
  padding: 0 0.875rem;
  margin-bottom: 1rem;
`

const Header = ({ children }) => (
  <header>
    <Link to='/'>
      <H1>{children}</H1>
    </Link>
  </header>
)

const Footer = styled('footer')`
  font-size: 0.875rem;
`

const FooterLinks = styled('ul')`
  list-style-type: none;
  margin: 0;
  padding: 0;
  line-height: 1.6;
`

const Layout = styled(Page)`
  text-transform: lowercase;
`

export default () => (
  <Layout>
    <Helmet>
      <title>Ali Ukani</title>
    </Helmet>

    <Header>Ali Ukani</Header>

    <P>👋🏽</P>

    <P>
      <A href="https://aliceyoung.xyz">Alice Young</A>’s #1 fan.
    </P>

    <Footer>
      Made in Boston.

      <FooterLinks>
        <li><A href='https://github.com/ali/ali.io'>View Source</A></li>
        <li><A href='https://twitter.com/aliukani'>Twitter</A></li>
      </FooterLinks>
    </Footer>
  </Layout>
)

