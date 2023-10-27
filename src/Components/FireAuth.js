import React, { useState, useEffect } from 'react'
import { auth } from '../firebase';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { setUserId } from 'firebase/analytics';


function FireAuth() {
    const [email, SetEmail] = useState("");
    const [pass, SetPass] = useState("");
    const [user, SetUser] = useState();

    let create = async () => {
        let res = await createUserWithEmailAndPassword(auth, email, pass)
        console.log(res.user.email);
    }

    useEffect(()=>{
        let unsub=onAuthStateChanged(auth,(user)=>{
            SetUser(user)
            return()=>{
                unsub();//cleanup
            }
        })
    },[])
    let logout=async ()=>{
        await signOut(auth);
    }
    let Signin= async()=>{
        await signInWithEmailAndPassword(auth,email,pass);
    }
        return (
            <>{
                user==null?
                <div>
                    <label htmlFor='email' >Email</label>
                    <input type='text' value={email} onChange={(e) => SetEmail(e.target.value)} />
                    <br></br>
                    <label htmlFor='pass' >Password</label>
                    <input type='password' value={pass} onChange={(e) => SetPass(e.target.value)} />
                    <br></br>
                    <button onClick={create}>Sign Up</button>
                    <br></br>
                    <button onClick={Signin}>Sign In</button>

                </div>
                :
                <>
                <div>
                    {user.email}
                </div>
                <button onClick={logout}>LogOut</button>
                </>
            }
            </>
        )
    }

export default FireAuth
