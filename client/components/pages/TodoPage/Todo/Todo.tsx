import React, { ChangeEvent, useEffect, useState } from 'react';

import { formatDistanceToNow } from 'date-fns';
import PropTypes from 'prop-types';

import { faSquare } from '@fortawesome/free-regular-svg-icons/faSquare';
import { faSquareCheck } from '@fortawesome/free-regular-svg-icons/faSquareCheck';
import { faBan } from '@fortawesome/free-solid-svg-icons/faBan';
import { faFloppyDisk } from '@fortawesome/free-solid-svg-icons/faFloppyDisk';
import { faPencil } from '@fortawesome/free-solid-svg-icons/faPencil';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons/faTrashCan';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Content from 'react-bulma-companion/lib/Content';
import Icon from 'react-bulma-companion/lib/Icon';
import Level from 'react-bulma-companion/lib/Level';
import Media from 'react-bulma-companion/lib/Media';
import Textarea from 'react-bulma-companion/lib/Textarea';

import DeleteModal from '_components/library/DeleteModal';

import { deleteTodo, toggleCompleteTodo, updateTodo } from '_store/actions/todos';
import { useAppDispatch } from '_store/hooks';

const fromNow = (date: number) => formatDistanceToNow(date, { addSuffix: true });

interface TodoProps {
  id: number,
  text: string,
  completed: boolean,
  createdAt: number,
  updatedAt?: number,
}

export default function Todo({
  id,
  createdAt,
  updatedAt,
  completed,
  text,
}: TodoProps) {
  const dispatch = useAppDispatch();

  const [currentText, setCurrentText] = useState(text);
  const [edit, setEdit] = useState(false);
  const [confirm, setConfirm] = useState(false);
  const [updatedMessage, setUpdatedMessage] = useState('');
  const [createdMessage, setCreatedMessage] = useState('');

  useEffect(() => {
    const updateMessages = () => {
      setUpdatedMessage(updatedAt ? fromNow(updatedAt) : '');
      setCreatedMessage(fromNow(createdAt));
    };

    updateMessages();
    const interval = window.setInterval(updateMessages, 1000);

    return () => clearInterval(interval);
  }, [updatedAt, createdAt]);

  const openModal = () => setConfirm(true);
  const closeModal = () => setConfirm(false);
  const updateText = (e: ChangeEvent<HTMLTextAreaElement>) => setCurrentText(e.target.value);
  const editTodo = () => setEdit(true);

  const cancelEdit = () => {
    setEdit(false);
    setCurrentText(text);
  };

  const handleUpdateTodo = () => {
    if (currentText) {
      setEdit(false);
      dispatch(updateTodo(id, currentText));
    }
  };

  const handleToggleCompleteTodo = () => dispatch(toggleCompleteTodo(id));
  const handleDeleteTodo = () => dispatch(deleteTodo(id));

  return (
    <li className="todo box">
      <Media>
        <Media.Left>
          <Icon onClick={handleToggleCompleteTodo} onKeyPress={handleToggleCompleteTodo}>
            {completed
              ? <FontAwesomeIcon icon={faSquareCheck} size="lg" />
              : <FontAwesomeIcon icon={faSquare} size="lg" />}
          </Icon>
        </Media.Left>
        <Media.Content>
          <Content>
            <p>
              <small>
                {`created ${createdMessage}`}
              </small>
            </p>
            {edit ? (
              <Textarea value={currentText} onChange={updateText} />
            ) : (
              <span>
                {text}
              </span>
            )}
          </Content>
          <Level mobile>
            <Level.Left>
              {!!updatedAt && (
                <small>
                  {`edited ${updatedMessage}`}
                </small>
              )}
            </Level.Left>
            <Level.Right>
              {edit ? (
                <Icon className="space-right" onClick={handleUpdateTodo} onKeyPress={handleUpdateTodo}>
                  <FontAwesomeIcon icon={faFloppyDisk} size="lg" />
                </Icon>
              ) : (
                <Icon className="space-right" onClick={editTodo} onKeyPress={editTodo}>
                  <FontAwesomeIcon icon={faPencil} size="lg" />
                </Icon>
              )}
              {edit ? (
                <Icon onClick={cancelEdit} onKeyPress={cancelEdit}>
                  <FontAwesomeIcon icon={faBan} size="lg" />
                </Icon>
              ) : (
                <Icon onClick={openModal} onKeyPress={cancelEdit}>
                  <FontAwesomeIcon icon={faTrashCan} size="lg" />
                </Icon>
              )}
            </Level.Right>
          </Level>
        </Media.Content>
      </Media>
      <DeleteModal
        active={confirm}
        closeModal={closeModal}
        deleteTodo={handleDeleteTodo}
      />
    </li>
  );
}

Todo.propTypes = {
  id: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  createdAt: PropTypes.number.isRequired,
  updatedAt: PropTypes.number,
};

Todo.defaultProps = {
  updatedAt: null,
};
