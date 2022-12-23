import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Box from './Box';
import Header from './Header';

function CharacterList() {
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const response = await fetch('https://rickandmortyapi.com/api/character/');
            const data = await response.json();
            setCharacters(data.results);
            // console.log(data.results);
        }
        fetchData();
    }, []);

    return (

        <>
            <Header />
            <ul className='bg-gray-800'>
                {/* <h1>Characters</h1> */}
                <div class="grid md:grid-cols-2 grid-cols-1 gap-8 bg-[#272B33] py-16 md:px-28 px-8">
                    {characters.map((character) => (
                        // <li key={character.id}>
                        //     <Link to={`/characters/${character.id}`}>{character.name}</Link>
                        // </li>

                        <li key={character.id}>
                            <Link className='cursor-pointer' to={`/characters/${character.id}`}>
                                <Box key={character.id} name={character.name} image={character.image} status={character.status} species={character.species} episode={character.episode.name} > </Box>
                            </Link>
                        </li>


                    ))}
                </div>
            </ul>
            {/* <Box name={name} /> */}
        </>

    );
}


export default CharacterList;