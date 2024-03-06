import React from 'react'
import './HomePage.css'
// import Header from '../../Components/Header/Header'
import useStore from '../../Utility/Zustand/Zustand'
// import BlogSection from '../../Components/BlogSection/BlogSection';
import { useState, useEffect } from 'react';
import { onSnapshot } from 'firebase/firestore';
import { collection } from 'firebase/firestore';
import { db } from '../../Utility/Firebase/firebase';
import { toast } from 'react-toastify';
import BlogSection from '../../Components/BlogSection/BlogSection';


export default function HomePage() {
  const { name } = useStore();
  const { userInfo } = useStore();


  const [loading, setLoading] = useState(true);
  const [blogs, setBlogs] = useState([])

  useEffect(() => {
    const subscribe = onSnapshot(
      collection(db, 'blogs'),
      (snapshot) => {
        let list = []
        snapshot.docs.forEach((doc) => {
          list.push({ id: doc.id, ...doc.data() })
        })
        setBlogs(list)
      }, (error) => {
        toast.error('Error fetching blogs')
        console.log("Error fetching blogs", error)
        console.log("Error fetching blogs", error.message)

      }
    )

    return () => {
      subscribe()
    }

  }, [])

  console.log('homepage blogs', blogs);

  return (
    <div className='main-home'>
      <div>
        <div className='home-trending'>
          <h2>Trending</h2>
          <BlogSection blogs={blogs} />
          <div className='home-trending-blog-tag-popular'>
            <div className='home-treding-blog'>
              <h2>Blog section</h2>
            </div>

            <div className='home-treding-tag-popular'>
              <h2>Tags</h2>
              <h2>Most popular</h2>
            </div>

          </div>
        </div>


      </div>
    </div>
  )
}
