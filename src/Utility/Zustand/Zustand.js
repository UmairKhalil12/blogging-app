import create from 'zustand';

const useStore = create((set) => ({
  user: null,
  userInfo: null,
  setUser: (value) => set(({ user: value })),
  setUserInfo: (value) => set(({ userInfo: value })),

}));


export default useStore