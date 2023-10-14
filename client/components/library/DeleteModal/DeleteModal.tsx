import React from 'react';

import PropTypes from 'prop-types';

import Card from 'react-bulma-companion/lib/Card';
import Content from 'react-bulma-companion/lib/Content';
import Modal from 'react-bulma-companion/lib/Modal';

export interface DeleteModalProps {
  active: boolean;
  closeModal: () => void;
  deleteTodo: () => void;
}

export default function DeleteModal({
  active,
  closeModal,
  deleteTodo,
}: DeleteModalProps) {
  return (
    <Modal className="confirm-modal" active={active}>
      <Modal.Background />
      <Modal.Content>
        <Card>
          <Card.Content>
            <Content textAlign="center">
              Are you sure you want to delete this item?
            </Content>
          </Card.Content>
          <Card.Footer>
            <Card.FooterItem onClick={closeModal} onKeyPress={closeModal} component="a">
              Cancel
            </Card.FooterItem>
            <Card.FooterItem onClick={deleteTodo} onKeyPress={deleteTodo} component="a">
              Delete
            </Card.FooterItem>
          </Card.Footer>
        </Card>
      </Modal.Content>
      <Modal.Close size="large" aria-label="close" onClick={closeModal} />
    </Modal>
  );
}

DeleteModal.propTypes = {
  active: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
};
