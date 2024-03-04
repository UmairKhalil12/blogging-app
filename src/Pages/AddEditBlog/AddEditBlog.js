import Button from "../../Components/Button/Button"
import Input from "../../Components/Input/Input"
import Label from "../../Components/Label/Label"
import "./AddEditBlog.css"
import React, { useEffect } from 'react'
import { useState } from "react"
import Navbar from "../../Components/Navbar/Navbar"
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage"
import { storage } from "../../Utility/Firebase/firebase"
import { TagsInput } from "react-tag-input-component";

const initialState = {
    title: "",
    tags: [],
    trending: 'no',
    category: 'Please select the category',
    description: '',
    likes: [],
    comments: []

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
    // const [selectedOption, setSelectedOption] = useState();
    const [form, setForm] = useState(initialState);
    const [file, setFile] = useState();
    const [textDescription] = useState();
    const [text] = useState();
    
    const { title, tags, category, trending, description } = form
    const [progress, setProgress] = useState(null);

    useEffect(() => {
        const uploadFile = () => {
            const storageRef = ref(storage, file.name)
            const uploadTask = uploadBytesResumable(storageRef)

            uploadTask.on("state_changed", (snapshot) => {
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                setProgress(progress)
                switch (snapshot.state) {
                    case "paused":
                        console.log("uploading is paused")
                        break
                    case "running":
                        console.log("file uploading running")
                        break
                    default:
                        break
                }

            },
                (error) => {
                    console.log(error);
                    console.log(error.message)
                },

                () => {
                    getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                        setForm((prev) => ({ ...prev, imgUrl: downloadURL }))
                    })
                }

            );
        };

        file && uploadFile();
    }, [file])


    const handleText = (event) => {
        setForm({ ...form, title : event.target.value})
    };

    const handleDescription = (event) => {
        setForm({ ...form, description: event.target.value })
    }

    const handleTrending = (e) => {
        setForm({ ...form, trending: e.target.value });
    };

    const onCategoryChange = (e) => {
        setForm({ ...form, category: e.target.value });
    };

    const handleTags = (tags) => {
        setForm({ ...form, tags });
      };

    console.log(form)

    return (
        <div>
            <Navbar />
            <div className="main-container-add-edit-blog">
                <form className="form-add-edit-blog">
                    <h1>Create Blog</h1>
                    <Input
                        placeholder='Enter Text'
                        value={text}
                        onChange={handleText}
                    />

                    <div className="form-add-edit-blog-input-tag">
                        <TagsInput
                            value={tags}
                            placeholder="Tags"
                            onChange={handleTags}
                        />
                    </div>

                    <div className="trending-form">
                        <div>
                            <Label text='Is is trending blog' />
                        </div>
                        <div className="trending-form-yes-no">
                            <Input
                                type='radio'
                                id='yes'
                                value='yes'
                                name='trendingOptions'
                                onChange={handleTrending}
                            />

                            <Label text='Yes' />
                        </div>

                        <div className="trending-form-yes-no">
                            <Input
                                type='radio'
                                id='no'
                                value='no'
                                name='trendingOptions'
                                onChange={handleTrending}
                            />

                            <Label text='No' />
                        </div>

                    </div>
                    <select className="form-add-edit-blog-category-select" onChange={onCategoryChange} value={category} >
                        {categoryOption.map((category, index) => {
                            return (
                                <option key={index} value={category}>{category}</option>
                            )
                        })}
                    </select>

                    <textarea
                        rows='5'
                        className="add-edit-blog-form-description-textarea"
                        placeholder="Enter description"
                        value={textDescription}
                        onChange={handleDescription}
                    >

                    </textarea>

                    <div className="trending-form-file-div">
                        <Input
                            type='file'
                            onChange={(event) => setFile(event.target.files[0])} />
                    </div>

                    <Button text='Submit' disable={progress != null && progress < 100} />
                </form>
            </div>

        </div>
    )
}
