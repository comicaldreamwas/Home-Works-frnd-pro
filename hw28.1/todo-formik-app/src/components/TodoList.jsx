
import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';


function TodoList() {
  const [todos, setTodos] = useState([]);

  
  const validationSchema = Yup.object().shape({
    todo: Yup.string()
      .min(5, 'Завдання має бути не менше 5 символів')
      .required('Це поле є обов’язковим'),
  });

  return (
    <div>
      <h1>TODO List з Formik</h1>

      <Formik
        initialValues={{ todo: '' }}
        validationSchema={validationSchema}
        onSubmit={(values, { resetForm }) => {
          setTodos([...todos, values.todo]);
          resetForm(); 
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <div>
              <Field
                name="todo"
                type="text"
                placeholder="Введіть завдання"
              />
              <ErrorMessage
                name="todo"
                component="div"
                style={{ color: 'red' }}
              />
            </div>
            <button type="submit">Додати</button>
          </Form>
        )}
      </Formik>

      {}
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
