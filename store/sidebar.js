export const state = () => ({
  opened: true,
  sidebar: [
    { id: 1, name: "1" },
    { id: 2, name: "2" },
    { id: 3, name: "3" },
    { id: 4, name: "4" },
    { id: 5, name: "5" },
    { id: 6, name: "6" },
    { id: 7, name: "7" },
    { id: 8, name: "8" },
    { id: 9, name: "9" },
    { id: 10, name: "10" },
    { id: 11, name: "11" }
  ]
});

export const mutations = {};

export const getters = {
  sidebar: state => {
    return state.sidebar;
  },
  sidebars: (state, getters) => {
    console.log(getters.sidebar())
    return state.sidebar;
  },
  opened: state => {
    return state.opened;
  },
  getTodoById: state => id => {
    return state.sidebar.find(todo => todo.id === id);
  }
};

export const actions = {};
