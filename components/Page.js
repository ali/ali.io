import { Component, PropTypes } from 'react'
import Meta from '../components/meta'

export default class Page extends Component {
  static propTypes = {
    children: PropTypes.node,
  }

  render() {
    return (
      <div className="Page">
        <Meta />

        {this.props.children}

        <style jsx>{`
          .Page {
            max-width: 680px;
            margin: 2rem;
          }
        `}
        </style>
      </div>
    )
  }
}