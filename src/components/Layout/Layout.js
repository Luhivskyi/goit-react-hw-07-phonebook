import React, { Component } from 'react';
import { connect } from 'react-redux';
import contactsSelectors from '../../redux/contacts-selectors';
import Error from '../Error';

import './Layout.css';

class Layout extends Component {
  render() {
    return (
      <>
        {this.props.isError ? (
          <Error />
        ) : (
          <>
            <div className="Layout">{this.props.children}</div>
          </>
        )}
      </>
    );
  }
}

const mapStateToProps = state => ({
  isError: contactsSelectors.getError(state),
});

export default connect(mapStateToProps)(Layout);
