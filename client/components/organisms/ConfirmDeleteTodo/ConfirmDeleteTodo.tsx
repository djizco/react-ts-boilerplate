import React from 'react';
import PropTypes from 'prop-types';

import Card from 'react-bulma-companion/lib/Card';
import Content from 'react-bulma-companion/lib/Content';

export interface ConfirmDeleteTodoProps {
  closeModal: () => void;
  deleteTodo: () => void;
}

export default function ConfirmDeleteTodo({
  closeModal,
  deleteTodo,
}: ConfirmDeleteTodoProps) {
  return (
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
  );
}

ConfirmDeleteTodo.propTypes = {
  closeModal: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
};
