import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Formulaire from './Formulaire';

const Api2 = ()=>{

    const [users, setUsers] = useState([]);

    useEffect(()=>{
        (async ()=>{
         const user = await axios.get('http://localhost:4000/api/users')
         //console.log(user.data);
         
         setUsers(user.data)

        })();
     },[])
    

    return(
        <div>
        <Formulaire/>
            <table className="ui celled table">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nom</th>
                        <th>Prenom</th>
                        <th>E-mail</th>
                        <th>Poste</th>
                        <th>Tel</th>
                        <th>Etat civil</th>
                        <th>Pays</th>
                        <th>Modifier</th>
                        <th>Supprimer</th>
                    </tr>
                </thead>
                <tbody>
                {users.map(user =>
                    <tr>
                        <td>{user.id}</td>
                        <td>{user.prenom}</td>
                        <td>{user.nom}</td>
                        <td>{user.email}</td>
                        <td>{user.id_postes}</td>
                        <td>{user.tel}</td>
                        <td>{user.id_statut}</td>
                        <td>{user.pays}</td>
                        <td><button class="ui button">modif</button></td>
                        <td><button class="ui button">suppr</button></td>
                    </tr>
                )}
                </tbody>
            </table>
        </div>
    )
}

export default Api2;
