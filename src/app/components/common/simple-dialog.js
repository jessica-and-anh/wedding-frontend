import React, { Component, PropTypes } from 'react';
import MediaQuery from 'react-responsive';
import Dialog from 'material-ui/Dialog';
import FullscreenDialog from 'material-ui-fullscreen-dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

/**
 * Dialog with action buttons. The actions are passed in as an array of React objects,
 * in this example [FlatButtons](/#/components/flat-button).
 *
 * You can also close this dialog by clicking outside the dialog, or with the 'Esc' key.
 */
class SimpleDialog extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
    this.onClose = this.onClose.bind(this);
  }

  onSubmit() {
    const {
      onDialogSubmit,
      userGroup,
      users,
    } = this.props;
    onDialogSubmit(userGroup, users);
  }

  onClose() {
    const {
      onDialogClose,
      initialUserGroup,
      initialUsers,
      modalType,
    } = this.props;
    onDialogClose(modalType, initialUserGroup, initialUsers);
  }

  render() {
    const {
      cancelText,
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

    const customAppBarStyle = {
      background: 'linear-gradient(to right, #44a5c9, #44b8c9)',
      paddingTop: '5px',
    };

    const customBodyStyle = {
      padding: 0,
    };

    const customContainerStyle = {
      padding: '10%',
    };

    const actions = actionable ? [
      <FlatButton
        label={cancelText}
        primary={false}
        onTouchTap={this.onClose}
      />,
      <FlatButton
        label={submitText}
        primary={true}
        onTouchTap={this.onSubmit}
        disabled={disableSubmit}
      />,
    ] : [];

    const actionButton = actionable ? <RaisedButton
      label={submitText}
      onTouchTap={this.onSubmit}
      disabled={disableSubmit}
    /> : <div/>

    return (
      <MediaQuery minDeviceWidth={1224}>
        {(matches) => {
          if (matches) {
            return <Dialog
                    title={title}
                    actions={actions}
                    modal={false}
                    open={isOpen}
                    onRequestClose={this.onClose}
                    autoScrollBodyContent={true}
                    children={content}
                    contentStyle={customContentStyle}
                    bodyStyle={customBodyStyle}
                  />;
          } else {
            return <FullscreenDialog
                    title={title}
                    actionButton={actionButton}
                    modal={false}
                    open={isOpen}
                    onRequestClose={this.onClose}
                    autoScrollBodyContent={true}
                    children={content}
                    appBarStyle={customAppBarStyle}
                    containerStyle={customContainerStyle}
                  />;
          }
        }}
      </MediaQuery>

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
