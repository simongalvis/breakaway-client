import React from 'react'
import ReactDOM from 'react-dom'
import Dashboard from './Dashboard'
import renderer from 'react-test-renderer';

describe(`Dashboard component`, () =>{
  it(`renders without crashing`, () =>{
    const div = document.createElement('div');
  
    ReactDOM.render(<Dashboard/>, div);
  
    ReactDOM.unmountComponentAtNode(div);
  })
  it(`Renders UI as expected`, () =>{
    const tree = renderer 
      .create(<Dashboard/>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  })
})
