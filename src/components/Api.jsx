import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Button, Checkbox, Form } from 'semantic-ui-react'

function Api() {
    const [users, setUsers] = useState([]);
    const [userName, setUsername] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [erreurNom, setErreurNom] = useState('');
    const [erreurNumber, setErreurNumber] = useState('');
    const [erreurEmail, setErreurEmail] = useState('');
    const soumission = ()=>{
        let verificateur = true
        if (userName == '') {
            setErreurNom('ce champ est obligatoire')
            verificateur = false
        }else if (userName.length < 3){
            setErreurNom('le nom doit avoir plus de trois caractere')
            verificateur = false
        }

        if(phoneNumber==""){
            setErreurNumber("Ce champ ne peut pas etre vide")
            verificateur=false
        }else if(phoneNumber.substr(0, 4) != "+243"){
            setErreurNumber("le numero doit commencer par +243")
            verificateur=false
        }else if(phoneNumber.length>13 || phoneNumber.length<13){
            setErreurNumber("Ce numero n'est pas valide")
            verificateur=false
        }

        if(email==""){
            setErreurEmail("Ce champ ne peut pas etre vide")
            verificateur=false
        }else if(!(email.includes("@"))){
            setErreurEmail("Format email incorect")
            verificateur=false
        }

        if (verificateur) {
            const info = {
                userName: userName,
                phoneNumber: phoneNumber,
                email: email
            }
            console.log(info);
            axios.post('https://us-central1-deux-e42ba.cloudfunctions.net/http/contacts/', info)
            .then(res => {
                console.log(res.data);
                window.location.reload()
            }) 
        }

        
    }
    useEffect(()=>{
       (async ()=>{
        const user = await axios.get('https://us-central1-deux-e42ba.cloudfunctions.net/http/contacts/')
        setUsers(user.data)
       })();
    },[])
    return (
        <div>
            <ul>
                {users.map( user => <li>{user.userName} {user.phoneNumber} {user.email}</li>)}
            </ul>

            <Form>
                <Form.Field>
                    <label>userName</label>
                    <input placeholder='Username' onChange={e => setUsername(e.target.value)} onInput={()=>{setErreurNom('')}}/>
                    <span style={{color:'red'}}>{erreurNom}</span>
                </Form.Field>
                <Form.Field>
                    <label>phoneNumber</label>
                    <input placeholder='Phone' onChange={e => setPhoneNumber(e.target.value)} onInput={()=>{setErreurNumber('')}}/>
                    <span style={{color:'red'}}>{erreurNumber}</span>
                </Form.Field>
                <Form.Field>
                    <label>email</label>
                    <input placeholder='E-mail' onChange={e => setEmail(e.target.value)} onInput={()=>{setErreurEmail('')}}/>
                    <span style={{color:'red'}}>{erreurEmail}</span>
                </Form.Field>
                    <Form.Field>
                    <Checkbox label='J accepte' />
                </Form.Field>
                <Button type='submit' onClick={soumission}>Submit</Button>
            </Form>
        </div>
    )
}

export default Api;

