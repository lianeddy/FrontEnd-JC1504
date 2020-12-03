const INITIAL_STATE = {
  count: 0,
  username: "",
  password: "",
  bool: false,
};
// See above
// Global State adalah state yang bisa dipakai di semua component

// Action
// Action adalah sebuah object
// Memiliki dua property {type, payload}
// Type itu string
// {type: "TAMBAH"}
// Payload itu data yang kita terima di komponen
// yang kita mau taruh di global state

// Action Creator
// Sebuah function
// return action (object)

const increaseCount = () => {
  return {
    type: "TAMBAH",
  };
};
const decreaseCount = () => {
  return {
    type: "KURANG",
  };
};

const loginAction = (username) => {
  return {
    type: "LOGIN",
    payload: username,
  };
};

const registerAction = (userData) => {
  return {
    type: "REGISTER",
    payload: userData,
  };
};

const toggleBoolean = () => {
  return {
    type: "TOGGLE",
  };
};

// Reducer
// Sebuah function
// function untuk merubah global state
// reducer akan mengganti isi dari global state tergantung dari action yang diterima

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "TAMBAH":
      return {
        ...state,
        count: state.count + 1,
      };
    case "KURANG":
      return {
        ...state,
        count: state.count - 1,
      };
    case "LOGIN":
      return {
        ...state,
        username: action.payload,
      };
    case "REGISTER":
      return {
        ...state,
        username: action.payload.username,
        password: action.payload.password,
      };
    case "TOGGLE":
      return {
        ...state,
        bool: !state.bool,
      };
    default:
      return state;
  }
};

export {
  reducer,
  increaseCount,
  decreaseCount,
  loginAction,
  registerAction,
  toggleBoolean,
};
