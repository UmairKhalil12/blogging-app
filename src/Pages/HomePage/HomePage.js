import React from 'react'
import './HomePage.css'
import useStore from '../../Utility/Zustand/Zustand'
import { useState, useEffect } from 'react';
import { onSnapshot } from 'firebase/firestore';
import { collection } from 'firebase/firestore';
import { db } from '../../Utility/Firebase/firebase';
import { toast } from 'react-toastify';
import BlogSection from '../../Components/BlogSection/BlogSection';
import Heading from '../../Components/Heading/Heading';
import Spinner from '../../Components/Spinner/Spinner';


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
        setLoading(false)
      }, (error) => {
        toast.error('Error fetching blogs')
        console.log("Error fetching blogs", error)
        console.log("Error fetching blogs", error.message)
        setLoading(false)

      }
    )

    return () => {
      subscribe()
    }

  }, [])

  console.log('homepage blogs', blogs);

  if (loading) {
    return <Spinner />
  }

  return (
    <div className='main-home'>
      <Heading text='Trending' />
      <div className='main-home-blogs'>
        <div className='home-blog-blogsection'>
          <BlogSection blogs={blogs} />
        </div>

        <div>
          <h3>Tags</h3>
          <h3>Most Popular</h3>
        </div>

      </div>
    </div>
  )
}
