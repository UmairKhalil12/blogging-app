import Button from "../../Components/Button/Button"
import Input from "../../Components/Input/Input"
import Label from "../../Components/Label/Label"
import "./AddEditBlog.css"
import React from 'react'
import { useState } from "react"
import useStore from "../../Utility/Zustand/Zustand"

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
    const {selectedOption} = useStore();
    // const [form, setForm] = useState(initialState)
    // const [file, setFile] = useState(null)

    // const { title, tags, category, trending, description } = form
    

    return (
        <div>
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
                            <Input type='radio' id='yes' value={selectedOption === 'yes'} />
                            <Label text='Yes' />
                        </div>

                        <div className="trending-form-yes-no">
                            <Input type='radio' id='no' value={selectedOption === 'no'} />
                            <Label text='No' />
                        </div>

                    </div>
                    <select value='Please Select Category'>
                        {categoryOption.map((category, index) => {
                            return (
                                <option key={index}>{category}</option>
                            )
                        })}
                    </select>
                    <Input type='textarea' placeholder='Description' />
                    <div>
                        <button className="create-blog-form-choose-file-btn"> Choose file</button>
                    </div>

                    <Button text='Submit' />
                </form>
            </div>

        </div>
    )
}
