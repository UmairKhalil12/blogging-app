import { excerpt } from '../../Utility/excerpt'
import BlogButton from '../BlogButton/BlogButton'
import Button from '../Button/Button'
import Heading from '../Heading/Heading'
import './BlogSection.css'
import React from 'react'

export default function BlogSection({ blogs }) {
    const url = blogs.map((blog) => {
        return blog.imgUrl
    })
    console.log('blogs img url', url)
    return (
        <div className='blogsection-main' >
            <Heading text='Daily Blogs' />
            {
                blogs?.map((item, index) => {
                    return (
                        <div className='blogsection-map' key={item.id}>
                            <div>
                                <img src={item.imgUrl} alt={item.title} />
                            </div>

                            <div>
                                <p>{item.category}</p>
                                <div className='title-timestamp'>
                                    <p>{item.title}</p>
                                    <p>{item.timestamp.toDate().toDateString()}</p>
                                </div>

                                <p>{excerpt(item.description, 120)}</p>

                                <div className='blog-readmore-edit-btn'>
                                    <div>
                                        <BlogButton text='Read More' />
                                    </div>
                                    <div className='blog-edit-delete'>
                                        <BlogButton text='Edit' />
                                        <BlogButton text='Delete' />
                                    </div>
                                </div>

                            </div>

                        </div>
                    )

                })
            }

        </div>
    )
}
