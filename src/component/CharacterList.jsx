import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ListBox from './ListBox';
import Header from './Header';
import Pagination from './Pagination';
import Footer from './Footer';
import Search from './Search';



function CharacterList() {
    const [characters, setCharacters] = useState([]);
    const [pageNumber, setPageNumber] = useState(1);
    const [info, setInfo] = useState([]);
    console.log(info);
    const [search, setSearch] = useState('');

    // console.log(results);
    // let api = `https://rickandmortyapi.com/api/character/?page=4`
    let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}`


    useEffect(() => {
        (async function () {
            const response = await fetch(api);
            const data = await response.json();
            // let data = await fetch(api).then((res) => res.json());
            setCharacters(data.results);
            setInfo(data.info);
            // console.log(data.results);
        })();

    }, [api]);

    return (

        <>
            <Header />
            <Search setSearch={setSearch} setPageNumber={setPageNumber} />

            {console.log(characters)}
            {(characters) ?
                <ul className='bg-gray-800'>
                    {/* <h1>Characters</h1> */}
                    <div class="grid md:grid-cols-2 grid-cols-1 gap-8 bg-[#272B33] py-16 md:px-24 px-8">
                        {characters.map((character) => {
                            return (
                                <Link to={`/characters/${character.id}`}>
                                    <ListBox key={character.id} name={character.name} image={character.image} status={character.status} species={character.species} episode={character.episode.name} mylocation={character.location?.name} origin={character.origin.name} />
                                </Link>
                            )
                        })}
                    </div>
                </ul> : <h1 className='text-white text-2xl'>No results found</h1>}
            <Pagination info={info} pageNumber={pageNumber} setPageNumber={setPageNumber} />
            <Footer />
            {/* <Box name={name} /> */}
        </>

    );
}


export default CharacterList;