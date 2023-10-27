import React, { useState } from 'react'
import { storage } from '../firebase'
import { getStorage, ref, uploadBytes, uploadBytesResumable } from "firebase/storage";
import { getDownloadURL } from 'firebase/storage';

function FireStorage() {
    const [file, SetFile] = useState("")
    const Upload = () => {

        const storageRef = ref(storage, `/data/${file.name}`);

        const uploadTask = uploadBytesResumable(storageRef, file);

        uploadTask.on(
            'state_changed',
            (snapshot) => {
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log(`Upload is ${progress}% complete`);
            },
            (error) => {
                console.log('Error uploading file:', error);
            },
            async () => {
                console.log('File uploaded successfully');
                const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
                console.log('Download URL:', downloadURL);
            }
        );

    }


    return (
        <div>
            <label htmlFor='file'>file</label>
            <input type='file' accept="Image/*" onChange={(e) => SetFile(e.target.files[0])} />
            <br></br>
            <button onClick={Upload} >Upload</button>
        </div>
    )
}



export default FireStorage
