import React from 'react'
import './HomePage.css'
//import useStore from '../../Utility/Zustand/Zustand'
import { useState, useEffect } from 'react';
import { onSnapshot } from 'firebase/firestore';
import { collection } from 'firebase/firestore';
import { db } from '../../Utility/Firebase/firebase';
import { toast } from 'react-toastify';
import BlogSection from '../../Components/BlogSection/BlogSection';
// Heading from '../../Components/Heading/Heading';
import Spinner from '../../Components/Spinner/Spinner';
import Tags from '../../Components/Tags/Tags';
import MostPopular from '../../Components/MostPopular/MostPopular';
import Trending from '../../Components/Trending/Trending';
import useStore from '../../Utility/Zustand/Zustand';


export default function HomePage() {
  const [loading, setLoading] = useState(true);
  const { blogs, setBlogs } = useStore();
  const {tags, setTags} = useStore();
  const [trend, setTrend] = useState([]);

  useEffect(() => {
    const subscribe = onSnapshot(
      collection(db, 'blogs'),
      (snapshot) => {
        let list = []
        let tags = []
        snapshot.docs.forEach((doc) => {
          list.push({ id: doc.id, ...doc.data() })
          tags.push(...doc.get('tags'));
        })
        setBlogs(list)
        setLoading(false)
        const uniqueTags = [...new Set(tags)];
        setTags(uniqueTags);
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

  }, [setBlogs , setTags])

  useEffect(() => {

    const uniqueTrendingBlogs = new Set(trend);

    blogs.forEach(blog => {
      if (blog.trending === 'yes' && !uniqueTrendingBlogs.has(blog)) {
        uniqueTrendingBlogs.add(blog);
      }
    });

    setTrend([...uniqueTrendingBlogs]);
  }, [blogs, trend]);

  console.log('homepage trend blog', trend);

  if (loading) {
    return <Spinner />
  }

  // console.log('home trend blog', trend);

  return (
    <div className='main-home'>
      <Trending blogs={trend} />
      <div className='main-home-blogs'>
        <div className='home-blog-blogsection'>
          <BlogSection blogs={blogs} />
        </div>

        <div className='home-tag-popular'>
          <Tags tags={tags} />
          <MostPopular blogs={blogs} />
        </div>

      </div>
    </div>
  )
}
