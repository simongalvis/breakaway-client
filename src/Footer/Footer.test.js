import React from 'react'
import ReactDOM from 'react-dom'
import Footer from './Footer'
import renderer from 'react-test-renderer';

describe(`Footer component`, () =>{
  it(`renders without crashing`, () =>{
    const div = document.createElement('div');
  
    ReactDOM.render(<Footer/>, div);
  
    ReactDOM.unmountComponentAtNode(div);
  })
  it(`Renders UI as expected`, () =>{
    const tree = renderer
    .create(<Footer/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
  })
})
