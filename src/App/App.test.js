import React from 'react'
import {ReactDOM } from 'react-dom'
import {BrowserRouter} from 'react-router-dom'
import App from './App'
import renderer from 'react-test-renderer';

describe(`App component`, () =>{
  it(`renders without crashing`, () =>{
    const div = document.createElement('div');
  
    ReactDOM.render(<BrowserRouter><App/></BrowserRouter>, div);
  
    ReactDOM.unmountComponentAtNode(div);
  }) 
  it(`renders UI as expected`, () =>{
    const tree = renderer
      .create(<BrowserRouter><App/></BrowserRouter>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  })
})
