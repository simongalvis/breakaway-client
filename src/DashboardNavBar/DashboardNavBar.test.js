import React from 'react'
import ReactDOM from 'react-dom'
import DashboardNavBar from './DashboardNavBar'
import renderer from 'react-test-renderer';

describe(`DashboardNavbBar component`, () =>{
  it(`renders without crashing`, () =>{
    const div = document.createElement('div');
  
    ReactDOM.render(<DashboardNavBar/>, div);
  
    ReactDOM.unmountComponentAtNode(div);
  })
  it(`Renders UI as expected`, () =>{
    const tree = renderer
      .create(<DashboardNavBar/>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  })
})
