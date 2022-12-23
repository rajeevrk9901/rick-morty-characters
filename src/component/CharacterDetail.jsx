import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

function CharacterDetail() {
    const { id } = useParams();
    const [character, setCharacter] = useState({});

    useEffect(() => {
        async function fetchData() {
            const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
            const data = await response.json();
            setCharacter(data);
            // console.log(data);
        }
        fetchData();
    }, [id]);

    let { image, origin, species, gender, status, name } = character;

    return (
        <div>
            <h1>Character Details</h1>
            <Link to="/characters">Back</Link>
            <h1>{name}</h1>
            <img src={image} alt="" srcset="" />
            <p>{status}</p>
            <p>{species}</p>
            <p>{gender}</p>
            <p>{origin?.name}</p>

        </div>
    );
}

export default CharacterDetail;