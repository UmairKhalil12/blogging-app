import "./AddEditBlog.css"

import React, { useState } from 'react'

const initialState = {
    title: "",
    tags: [],
    trending: 'no',
    category: '',
    description: ''
}

const categoryOption = [
    "Fashion",
    "Technology",
    "Food",
    "Politics",
    "Sports",
    "Buisness"
]

export default function AddEditBlog() {
    const [form, setForm] = useState(initialState)
    const [file, setFile] = useState(null)

    const { title, tags, category, trending, description } = form
    return (
        <div>
            <div className="main-container-add-edit-blog">
                <div className="2-container-add-edit-blog">
                    <h1>Create Blog</h1>
                </div>

            </div>

        </div>
    )
}
