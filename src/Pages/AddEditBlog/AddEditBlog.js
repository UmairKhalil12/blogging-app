import Button from "../../Components/Button/Button"
import Input from "../../Components/Input/Input"
import Label from "../../Components/Label/Label"
import "./AddEditBlog.css"
import React, { useEffect } from 'react'
import { useState } from "react"
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage"
import { db, storage } from "../../Utility/Firebase/firebase"
import { TagsInput } from "react-tag-input-component";
import { addDoc, collection, serverTimestamp } from "firebase/firestore"
import useStore from "../../Utility/Zustand/Zustand"
import { toast } from "react-toastify"
import { useNavigate } from "react-router-dom"

const initialState = {
    title: "",
    tags: [],
    trending: 'no',
    category: 'fashion',
    description: '',
    // likes: [],
    // comments: []

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
    const navigate = useNavigate();
    const [form, setForm] = useState(initialState);
    const [file, setFile] = useState();
    const [textDescription] = useState();
    const [text] = useState();

    const { userInfo } = useStore();
    console.log('user', userInfo)

    const { title, tags, category, trending, description } = form
    console.log('form ', title, tags, category, trending, description);
    const [progress, setProgress] = useState(null);

    useEffect(() => {
        const uploadFile = () => {
            const storageRef = ref(storage, file.name)
            const uploadTask = uploadBytesResumable(storageRef, file)

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

                async () => {
                    await getDownloadURL(uploadTask.snapshot.ref).then((downloadUrl) => {
                        toast.info("Image uploaded to firebase sucessfully")
                        setForm((prev) => ({ ...prev, imgUrl: downloadUrl }))
                    })
                }

            );
        };

        file && uploadFile();
    }, [file])


    const handleText = (event) => {
        setForm({ ...form, title: event.target.value })
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

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (category && tags && title && description && trending && file) {
            try {
                await addDoc(collection(db, 'blogs'), {
                    ...form,
                    timestamp: serverTimestamp(),
                    userId: userInfo.uid
                })
                toast.success("Blog added sucessfully");
                navigate('/home')
            } catch (error) {
                toast.error('Error uploading blog');
                console.log("error uploading blog ", error)
                console.log("error uploading blog ", error.message)
            }

        }
        else {
            toast.error('All fields are required')
        }
    }

    return (
        <div>
            <div className="main-container-add-edit-blog">
                <form className="form-add-edit-blog" onSubmit={handleSubmit}>
                    <h1>Create Blog</h1>
                    <Input
                        placeholder='Enter Text'
                        value={text}
                        onChange={handleText}
                    />

                    <div className="form-add-edit-blog-input-tag">
                        <TagsInput
                            value={tags}
                            placeHolder="Tags"
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
