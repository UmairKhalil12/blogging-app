import create from 'zustand';

const useStore = create((set) => ({
  email: '',
  pass: '',
  name: '',
  user: null,
  userInfo: null,
  selectedOption: 'yes',
  setEmail: (value) => set({ email: value }),
  setPass: (value) => set({ pass: value }),
  setName: (value) => set({ name: value }),
  setUser: (value) => set(({ user: value })),
  setUserInfo: (value) => set(({ userInfo: value })),
  setSelectedOption: (value) => set(({ selectedOption: value }))
}));


export default useStore