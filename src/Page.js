import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Page extends Component {
  render = () => {
    const { title, content } = this.props;
    return (
      <div>
        <h1>{ title }</h1>
        { content }
      </div>
    )
  }
}

Page.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.element.isRequired,
};

export default Page;
