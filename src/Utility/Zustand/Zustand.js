import create from 'zustand';

const useStore = create((set) => ({
    email: '',
    pass: '',
    name: '',
    setEmail: (value) => set({ email: value }),
    setPass: (value) => set({ pass: value }),
    setName: (value) => set({ name: value }),
  }));

export default useStore