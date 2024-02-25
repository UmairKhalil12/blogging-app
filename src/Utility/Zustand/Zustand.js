import create from 'zustand';
// import { onAuthStateChanged } from 'firebase/auth';
// import { auth } from '../Firebase/firebase';
// import { useEffect, useState } from 'react';

const useStore = create((set) => ({
    email: '',
    pass: '',
    name: '',
    user: null,
    setEmail: (value) => set({ email: value }),
    setPass: (value) => set({ pass: value }),
    setName: (value) => set({ name: value }),
    setUser: (value) => set(({user : value })),

  }));


export default useStore