import React from 'react'
import ReactDOM from 'react-dom'
import LoginNavBar from './LoginNavBar'
import renderer from 'react-test-renderer';

describe(`LoginNavBar component`, () =>{
  it(`renders without crashing`, () =>{
    const div = document.createElement('div');
  
    ReactDOM.render(<LoginNavBar/>, div);
  
    ReactDOM.unmountComponentAtNode(div);
  })
  it(`Renders UI as expected`, () =>{
    const tree = renderer
      .create(<LoginNavBar/>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  })
})
