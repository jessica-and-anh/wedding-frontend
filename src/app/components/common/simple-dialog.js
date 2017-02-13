import React, { Component, PropTypes } from 'react';

import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

/**
 * Dialog with action buttons. The actions are passed in as an array of React objects,
 * in this example [FlatButtons](/#/components/flat-button).
 *
 * You can also close this dialog by clicking outside the dialog, or with the 'Esc' key.
 */
class SimpleDialog extends Component {
  constructor(props) {
    super(props);
    this.onDialogSubmit = this.onDialogSubmit.bind(this);
  }

  onDialogSubmit() {
    const {
      code,
      onDialogClose,
      onRouteToConfirmation,
    } = this.props;
    onDialogClose();
    onRouteToConfirmation(code);
  }

  render() {
    const {
      cancelText,
      onDialogClose,
      submitText,
      title,
      isOpen,
      content,
      actionable,
      disableSubmit,
    } = this.props;

    const customContentStyle = {
      width: '80%',
      maxWidth: 'none',
    };

    const customBodyStyle = {
      padding: 0,
    };

    const actions = actionable ? [
      <FlatButton
        label={cancelText}
        primary={false}
        onTouchTap={onDialogClose}
      />,
      <FlatButton
        label={submitText}
        primary={true}
        onTouchTap={this.onDialogSubmit}
        disabled={disableSubmit}
      />,
    ] : [];

    return (
      <Dialog
        title={title}
        actions={actions}
        modal={false}
        open={isOpen}
        onRequestClose={onDialogClose}
        autoScrollBodyContent={true}
        children={content}
        contentStyle={customContentStyle}
        bodyStyle={customBodyStyle}
      />
    );
  }
}

SimpleDialog.propTypes = {
  submitText: PropTypes.string,
  cancelText: PropTypes.string,
  title: PropTypes.string,
  content: PropTypes.node,
  actionable: PropTypes.bool,
  disableSubmit: PropTypes.bool,
  onDialogClose: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
};

SimpleDialog.defaultProps = {
  submitText: 'Submit',
  cancelText: 'Cancel',
  title: '',
  content: <div/>,
  actionable: true,
  disableSubmit: false,
};

export default SimpleDialog;
