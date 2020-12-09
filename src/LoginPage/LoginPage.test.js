import React from 'react'
import ReactDOM from 'react-dom'
import LoginPage from './LoginPage'
import renderer from 'react-test-renderer';
import {BrowserRouter} from 'react-router-dom'

describe(`LoginPage component`, () =>{
  it(`renders without crashing`, () =>{
    const div = document.createElement('div');
  
    ReactDOM.render(<BrowserRouter><LoginPage/></BrowserRouter>, div);
  
    ReactDOM.unmountComponentAtNode(div);
  })
  it(`Renders UI as expected`, () =>{
    const tree = renderer
      .create(<BrowserRouter><LoginPage/></BrowserRouter>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  })
})
