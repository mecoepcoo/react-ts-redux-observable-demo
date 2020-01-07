//types
const LOAD = 'LOAD'
const CREATE = 'CREATE'
const UPDATE = 'UPDATE'
const REMOVE = 'REMOVE'

//reducer
export default function reducer(state = {}, action = {}) {
  switch (action.type) {
    // do reducer stuff
    default:
      return state
  }
}

//action
export function loadUser() {
  return {
    type: LOAD
  }
}

export function createUser(data) {
  return {
    type: CREATE,
    data
  }
}

export function updateUser(data) {
  return {
    type: UPDATE,
    data
  }
}

export function removeUser(data) {
  return {
    type: REMOVE,
    data
  }
}
