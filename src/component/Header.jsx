import React from 'react'

function Header() {
    return (
        <>
            <header className='bg-red-200'>
                <nav className='flex h-16 justify-between items-center px-12 py-4'>

                    <img className='h-12' src="https://www.freepnglogos.com/uploads/rick-and-morty-png/rick-and-morty-wazzaldorp-deviantart-34.png" alt="Rick and Morty Logo" />

                    <ul className='flex gap-6 items-center'>
                        <li>Docs</li>
                        <li>About</li>
                        <li className='uppercase py-2 px-3 border-2 border-orange-300 rounded-xl'>Support Us</li>
                    </ul>
                </nav>
                <h1 className='text-center font-extrabold text-6xl py-28'>The Rick and Morty API</h1>
            </header>
        </>
    )
}

export default Header