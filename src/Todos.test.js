import React from 'react';

import renderer from 'react-test-renderer';

import Todos from './Todos';

it("renders correctly when there are no todos", () => {
  const tree = renderer.create(<Todos />).toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders correctly when there are empty todo", () => {
  const todos = [];
  const tree = renderer.create(<Todos todos={todos} />).toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders correctly when there are 3 todos", () => {
  const todos = ["Shopping", "Yoga class", "Doctor Appointment"];
  const tree = renderer.create(<Todos todos={todos} />).toJSON();
  expect(tree).toMatchSnapshot();
});
