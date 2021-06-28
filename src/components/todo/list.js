import React from 'react';

import { useState } from 'react';
import If from './If'

import { Button } from 'react-bootstrap';
import { ListGroup, Form } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';


// class TodoList extends React.Component {
function TodoList(props) {
    // render() {

    const [flag, setFlag] = useState(false)
    const [id, setId] = useState('')

    const toggleHandler = e => {
        setFlag(!flag)
        setId(e)
    }

    const editHandler = e => {
        e.preventDefault();
        toggleHandler(e);

        let update = e.target.text.value;
        props.editHandler(update, e)
    }

    return (
        <>
            <ListGroup>

                {props.list.map(item => (
                    <ListGroup.Item action variant={item.complete ? 'dark' : 'light'}
                        className={`complete-${item.complete.toString()}`}
                        key={item._id}
                    >
                        <span onClick={() => props.handleComplete(item._id)}>
                            {item.text} : {item.assignee} , difficulty :  {item.difficulty} , due : {item.duedate}
                        </span>
                    </ListGroup.Item>
                ))}
            </ListGroup>

            <If condition={flag}
            >
                <Form> onSubmit={editHandler}

                    <Form.Label>
                        <span>Edit Task</span>
                        <Form.Control type="text" name="text" />
                    </Form.Label>
                    <Button variant="outline-secondary" type='submit' >Edit</Button>

                </Form>

            </If>

        </>

    );
    // }
    // }
}


export default TodoList;
