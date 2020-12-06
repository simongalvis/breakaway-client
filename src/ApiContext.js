import React from 'react'

export default React.createContext({
  activities: [],
  users: [],
  loggedUser: {},
  addActivity: () => {},
  setLoggedUser: () =>{},
  createUser: () => {},
  refreshDatabase: () => {}
  
  
  
})