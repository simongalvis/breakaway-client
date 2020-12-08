import React from 'react'
import ReactDOM from 'react-dom'
import AddActivity from './AddActivity'
import renderer from 'react-test-renderer';

describe(`AddActivity component`, () =>{
  it(`renders without crashing`, () =>{
    const div = document.createElement('div');
  
    ReactDOM.render(<AddActivity/>, div);
  
    ReactDOM.unmountComponentAtNode(div);
  })
  it(`Renders UI as expected`, () =>{
    const tree = renderer
      .create(<AddActivity/>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  })
})
