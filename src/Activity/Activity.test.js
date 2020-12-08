import React from 'react'
import ReactDOM from 'react-dom'
import Activity from './Activity'
import renderer from 'react-test-renderer';

describe(`Avtivity component`, () =>{
  it(`renders without crashing`, () =>{
    const div = document.createElement('div');
  
    ReactDOM.render(<Activity/>, div);
  
    ReactDOM.unmountComponentAtNode(div);
  })
  it(`renders UI as expected`, () =>{
    const tree = renderer
      .create(<Activity/>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  })
})
