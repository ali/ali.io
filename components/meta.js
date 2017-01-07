import Head from 'next/head'

/* global meta tags and styles */

const LINK_COLOR = '#009fd4'

export default () => (
  <div>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>

    <style jsx global>{`
      * {
        margin: 0;
        box-sizing: border-box;
      }
      body {
        font-size: 16px;
        font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", "Roboto", "Helvetica Neue", Arial, sans-serif;
        color: #333;
      }
      a {
        position: relative;
        color: #009fd4;
        -webkit-tap-highlight-color: rgba(0,0,0,0);
        text-decoration: none;
      }
      a:hover {
        color: #fff;
        background-color: #009fd4;
      }

      a, p, ul, h1 {
        line-height: 1.5;
        margin-bottom: 1.25rem;
      }
    `}</style>
  </div>
)