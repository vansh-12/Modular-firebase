import React, { useState, useEffect } from 'react'
import { database } from '../firebase'
import { addDoc, doc, setDoc, getDoc, getDocs, collection, deleteDoc } from 'firebase/firestore';
import { updateDoc } from 'firebase/firestore';


function Firestore() {
    const [name, SetName] = useState("");
    const [age, SetAge] = useState("");
    //CRUD
    //C
    //METHOD 1
    let Create = async () => {
        //how to add one more folder layer after users

        let res = await addDoc(database.users, {
            name: name,
            Age: age
        })
        console.log(res);
    }
    //Method 2
    /*let Create=async ()=>{

        let userRef = doc(database.users);
        
        // Setdoc method doesnot returns any value so cant print res
        let res= await setDoc(userRef, {
            name: name,
            age: age
        })

        //console.log(res);
    }*/
    //R
    //the useEffect hook is using an async function as its callback. However, useEffect does not directly support the use of async functions as its callback. This is because async functions always return a Promise, and the cleanup function in useEffect is expected to be a synchronous function
    //It turns out this almost always happens when you try to return anything from your useEffect hook that is not a function.
    /*useEffect(async() => {

       let data= await getDoc(doc(database.users,"EUlviHZyinp6GOH3ck7D"))
        console.log(data.data())
    }, []);*/
    //M 1:To Retrive only one doc
    /*useEffect(() => {
        const fetchData = async () => {
          let data = await getDoc(doc(database.users, "EUlviHZyinp6GOH3ck7D"));
          console.log(data.data());
        };
      
        fetchData();
      }, []);*/
    //M 2: To retrive all docs
    useEffect(() => {
        const fetchData = async () => {
            const querySnapshot = await getDocs(database.users); // Replace "users" with your collection name

            querySnapshot.forEach((doc) => {
                // doc.data() is never undefined for query doc snapshots
                console.log(doc.id, " => ", doc.data());
            });
        };

        fetchData();
    }, []);
    //U
    let Update = async () => {
        const documentRef = doc(database.users, "xyz");
        //only for existing uid here,xyz
        await updateDoc(documentRef, {
            name:name,age:age
        });
    }
    //D
    let Delete = async ()=>{
        await deleteDoc(doc(database.users,"3rBuMdMxhRaVQWE4ZnsO"))
        //press the delete button
    }


    return (
        <>
            <div>
                <label htmlFor='name'>Name</label>
                <input type='text' value={name} onChange={(e) => SetName(e.target.value)} />
                <br></br>
                <label htmlFor='age'>Age</label>
                <input type='text' value={age} onChange={(e) => SetAge(e.target.value)} />
                <br></br>
                <button onClick={Create}>Create</button>
                <button onClick={Update}>Update</button>
                <button onClick={Delete}>Delete</button>

            </div>

        </>
    )
}

export default Firestore
