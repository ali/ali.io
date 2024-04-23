import { Component } from 'react';
import Head from 'next/head';
import Page from '../components/Page';
import { P, A } from '../components/text';
import Link from 'next/link';

const Header = ({ children }) => (
  <header>
    <Link href="/">
      <h1 className="HeaderBranding">{children}</h1>
    </Link>

    <style jsx>
      {`
        .HeaderBranding {
          display: inline-block;
          text-transform: lowercase;
          margin-bottom: 1rem;
        }
      `}
    </style>
  </header>
);

const Footer = ({ children }) => (
  <footer className="Footer">
    {children}
    <style jsx>
      {`
        .Footer {
          font-size: 0.875rem;
        }
      `}
    </style>
  </footer>
);

const Links = () => (
  <ul className="Links">
    <li>
      <A href="https://github.com/ali/ali.io">View Source</A>
    </li>
    <li>
      <A href="https://twitter.com/aliukani">Twitter</A>
    </li>
    <li>
      <A href="https://instagram.com/aliukani">IG</A>
    </li>
    <style jsx>
      {`
        .Links {
          list-style-type: none;
          margin: 0;
          padding: 0;
          line-height: 1.6;
        }
      `}
    </style>
  </ul>
);

export default class Index extends Component {
  render() {
    return (
      <Page>
        <Head>
          <title>Ali Ukani</title>
        </Head>

        <Header>Ali Ukani (阿里)</Header>

        <P>👋🏽</P>

        <Footer>
          <Links />
        </Footer>

        <style jsx global>
          {`
            * {
              text-transform: lowercase;
            }
          `}
        </style>
      </Page>
    );
  }
}
