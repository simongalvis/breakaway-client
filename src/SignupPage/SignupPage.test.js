import React from 'react'
import ReactDOM from 'react-dom'
import SignupPage from './SignupPage'
import renderer from 'react-test-renderer';
import {BrowserRouter} from 'react-router-dom'

describe(`SignupPage component`, () =>{
  it(`renders without crashing`, () =>{
    const div = document.createElement('div');
  
    ReactDOM.render(<BrowserRouter><SignupPage/></BrowserRouter>, div);
  
    ReactDOM.unmountComponentAtNode(div);
  })
  it(`Renders UI as expected`, () =>{
    const tree = renderer
      .create(<BrowserRouter><SignupPage/></BrowserRouter>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  })
})
