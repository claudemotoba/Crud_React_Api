import React, { useState } from 'react'
import axios from 'axios'
import { Button, Modal, Form, Select } from 'semantic-ui-react'
import { countryOptions, statutOptions, postesOptions } from './SelectBox'


const Formulaire = () => {
  
    const [nom, setNom] = useState('');
    const [prenom, setPrenom] = useState('');
    const [email, setEmail] = useState('');
    const [id_postes, setPoste] = useState('');
    const [tel, setNumeroTelephone] = useState('');
    const [id_statut, setEstMarie] = useState('');
    const [pays, setPays] = useState('');


    const onChangePost = (e, data) => {
      //console.log(data.value);
      //this.setState({ selected: data.value });
      setPoste(data.value)
    }

    const soumission = async () => {
        const objet = {
            prenom: prenom,
            nom: nom,
            email: email,
            pays: pays,
            tel: tel,
            poste: id_postes,
            statut: id_statut
        }
        console.log(objet);
        
        // await axios.post('http://localhost:4000/api/users', objet)
        // .then(res => {
        //     console.log(res.data);
            
        // })
    }

  return(
    <Modal
    style={{padding:'20px 50px 20px 50px', width:'400px'}}
    trigger={<Button>Ajouter</Button>}
    header='Ajouter'
    content={ 
      <Form>
        <br></br>
        <Form.Field>
          <label>Prenom</label>
          <input placeholder='Prenom' onChange={e => setPrenom(e.target.value)}/>
        </Form.Field>
        <Form.Field>
          <label>Nom</label>
          <input placeholder='Nom'  onChange={e => setNom(e.target.value)}/>
        </Form.Field>
        <Form.Field>
            <label>E-mail</label>
            <input placeholder='E-mail' onChange={e => setEmail(e.target.value)}/>
        </Form.Field>
        <Form.Field>
            <label>Poste</label>
            <Select placeholder='Selectionne ton poste' options={postesOptions}  onChange={onChangePost}/>
        </Form.Field>
        <Form.Field>
            <label>Tel</label>
            <input placeholder='Tel'  onChange={e => setNumeroTelephone(e.target.value)}/>
        </Form.Field>
        <Form.Field>
            <label>Etat civil</label>
            <Select placeholder='Selectionne ton Etat civil' options={statutOptions}  onChange={e => setEstMarie(e.target.value)}/>
        </Form.Field>
        <Form.Field>
            <label>Pays</label>
            <Select placeholder='Selectionne ton pays' options={countryOptions} onChange={e => setPays(e.target.value)}/>
        </Form.Field>
        <Button type='submit' onClick={soumission}>Ajouter</Button>
      </Form>
    }
    // actions={['Snooze', { key: 'done', content: 'Done', positive: true }]}
  />
  
  )
  
}

export default Formulaire;