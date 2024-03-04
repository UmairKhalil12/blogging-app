import create from 'zustand';

const useStore = create((set) => ({
  email: null,
  pass: null,
  name: null,
  user: null,
  userInfo: null,
  selectedOption: 'yes',
  file : '',
  text : null,
  tag : null,
  form : '',
  setEmail: (value) => set({ email: value }),
  setPass: (value) => set({ pass: value }),
  setName: (value) => set({ name: value }),
  setUser: (value) => set(({ user: value })),
  setUserInfo: (value) => set(({ userInfo: value })),
  setSelectedOption: (value) => set(({ selectedOption: value })),
  setFile: (value) => set(({ file: value })),
  setText: (value) => set(({ text: value })),
  setTag : (value) => set(({tags : value})) ,
  setForm : (value) => set(({form : value})) 

}));


export default useStore