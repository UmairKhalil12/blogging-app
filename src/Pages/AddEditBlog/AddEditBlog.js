import Button from "../../Components/Button/Button"
import Input from "../../Components/Input/Input"
import Label from "../../Components/Label/Label"
import "./AddEditBlog.css"
import React, { useEffect } from 'react'
import { useState } from "react"
import useStore from "../../Utility/Zustand/Zustand"
import Navbar from "../../Components/Navbar/Navbar"
import { ref, uploadBytesResumable } from "firebase/storage"
import { storage } from "../../Utility/Firebase/firebase"

// const initialState = {
//     title: "",
//     tags: [],
//     trending: 'no',
//     category: '',
//     description: ''
// }

const categoryOption = [
    "Fashion",
    "Technology",
    "Food",
    "Politics",
    "Sports",
    "Buisness"
]

export default function AddEditBlog() {
    const { selectedOption } = useStore();
    // const [form, setForm] = useState(initialState)
    const [file, setFile] = useState(null)
    // const { title, tags, category, trending, description } = form

    useEffect(() => {
        const uploadFile = () => {
            const storageRef = ref(storage, file.name)
            const uploadTask = uploadBytesResumable(storageRef)
        }
    })


    return (
        <div>
            <Navbar />
            <div className="main-container-add-edit-blog">
                <form className="form-add-edit-blog">
                    <h1>Create Blog</h1>
                    <Input placeholder='Enter Text' />
                    <Input placeholder='Tags' />
                    <div className="trending-form">
                        <div>
                            <Label text='Is is trending blog' />
                        </div>
                        <div className="trending-form-yes-no">
                            <Input type='radio' id='yes' value={selectedOption === 'yes'} name='trendingOptions' />
                            <Label text='Yes' />
                        </div>

                        <div className="trending-form-yes-no">
                            <Input type='radio' id='no' value={selectedOption === 'no'} name='trendingOptions' />
                            <Label text='No' />
                        </div>

                    </div>
                    <select >
                        {categoryOption.map((category, index) => {
                            return (
                                <option key={index} value={category}>{category}</option>
                            )
                        })}
                    </select>

                    <textarea rows='5' className="add-edit-blog-form-description" placeholder="Enter description"></textarea>

                    <div className="trending-form-file-div">
                        <Input type='file' value={file} />
                    </div>

                    <Button text='Submit' />
                </form>
            </div>

        </div>
    )
}
