import React from 'react'
import ReactDOM from 'react-dom'
import ExpandedActivity from './ExpandedActivity'
import renderer from 'react-test-renderer';
import {BrowserRouter} from 'react-router-dom'

describe(`ExpandedActivity component`, () =>{
  it(`renders without crashing`, () =>{
    const div = document.createElement('div');
  
    ReactDOM.render(<BrowserRouter><ExpandedActivity/></BrowserRouter>, div);
  
    ReactDOM.unmountComponentAtNode(div);
  })
  it(`Renders UI as expected`, () =>{
    const tree = renderer
      .create(<BrowserRouter><ExpandedActivity/></BrowserRouter>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  })
})
