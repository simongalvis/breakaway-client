import React from 'react'
import ReactDOM from 'react-dom'
import LoginPage from './LoginPage'
import renderer from 'react-test-renderer';

describe(`LoginPage component`, () =>{
  it(`renders without crashing`, () =>{
    const div = document.createElement('div');
  
    ReactDOM.render(<LoginPage/>, div);
  
    ReactDOM.unmountComponentAtNode(div);
  })
  it(`Renders UI as expected`, () =>{
    const tree = renderer
      .create(<LoginPage/>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  })
})
