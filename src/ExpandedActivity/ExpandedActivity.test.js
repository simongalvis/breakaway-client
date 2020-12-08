import React from 'react'
import ReactDOM from 'react-dom'
import ExpandedActivity from './ExpandedActivity'
import renderer from 'react-test-renderer';

describe(`ExpandedActivity component`, () =>{
  it(`renders without crashing`, () =>{
    const div = document.createElement('div');
  
    ReactDOM.render(<ExpandedActivity/>, div);
  
    ReactDOM.unmountComponentAtNode(div);
  })
  it(`Renders UI as expected`, () =>{
    const tree = renderer
      .create(<ExpandedActivity/>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  })
})
