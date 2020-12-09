import React from 'react'
import ReactDOM from 'react-dom'
import LoginNavBar from './LoginNavBar'
import {BrowserRouter} from 'react-router-dom'
import renderer from 'react-test-renderer';

describe(`LoginNavBar component`, () =>{
  it(`renders without crashing`, () =>{
    const div = document.createElement('div');
  
    ReactDOM.render(<BrowserRouter><LoginNavBar/></BrowserRouter>, div);
  
    ReactDOM.unmountComponentAtNode(div);
  })
  it(`Renders UI as expected`, () =>{
    const tree = renderer
      .create(<BrowserRouter><LoginNavBar/></BrowserRouter>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  })
})
