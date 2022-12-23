import React from 'react'

function ListBox(props) {
    return (
        <>
            <div class="box1 md:flex-row flex flex-col w-full bg-[#3C3E44] rounded-2xl md:gap-4 gap-0 text-white">
                <div class="">
                    <img class="md:rounded-l-2xl md:rounded-r-none  rounded-t-2xl  md:w-[229px] md:h-[220px] w-full aspect-[67/50] " src={props.image} alt="" srcset="" />
                </div>
                <div class="flex flex-col md:justify-between justify-between md:gap-0 gap-4 md:items-start py-4 md:px-0 px-4">
                    <div>
                        <h1 className='text-3xl font-bold'>{props.name}</h1>
                        <p className='flex items-center'><div className={`inline-block mr-2 h-2 w-2  ${props.status === "Alive" ? 'bg-green-500' : 'bg-red-500'} rounded-full`}></div>{props.status} - {props.species}</p>
                    </div>
                    <div>
                        <h3>Last Known Location</h3>
                        <p className='text-xl'>{props.mylocation}</p>
                    </div>
                    <div>
                        <h3>Origin:</h3>
                        <p className='text-md'>{props.origin}</p>
                        {/* <h3>First seen in:</h3>
                        <p className='text-md'>episode</p> */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default ListBox