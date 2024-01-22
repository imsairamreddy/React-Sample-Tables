import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../assets/CatFactsTable.css';

const CatFactsTable = () => {
    const [catFacts, setCatFacts] = useState([]);

    useEffect(() => {
        axios.get('https://cat-fact.herokuapp.com/facts/')
            .then(response => {
                console.log(response.data); // Log the response to inspect its structure
                setCatFacts(response.data); // Adjust this line based on the actual structure
                console.log('catFacts', catFacts);
            })
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    if (catFacts === null) {
        return <div className='loading'>Loading...</div>; // or any other loading state representation
    }

    return (
        <table>
            <thead>
                <tr>
                    <th>Status</th>
                    <th>User</th>
                    <th>Text</th>
                </tr>
            </thead>
            <tbody>
                {catFacts.map((fact, index) => (
                    <tr key={index}>
                        <td>{fact.status.verified.toString()}</td>
                        <td>{fact.user}</td>
                        <td>{fact.text}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default CatFactsTable;
