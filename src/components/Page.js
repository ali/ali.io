import styled from 'emotion/react'
import { injectGlobal } from 'emotion'

injectGlobal`
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
`

export default styled('div')`
  max-width: 680px;
  margin: 2rem;
`
