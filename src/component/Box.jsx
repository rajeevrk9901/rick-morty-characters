import React from 'react'

function Box(props) {
    return (
        <>

            <div class="box1 flex h-[300px] bg-red-300 rounded-2xl gap-2">
                <div class=""><img class="rounded-l-2xl" src={props.image} alt="" srcset="" /></div>
                <div class=" flex flex-col justify-around">
                    <div>
                        <h1 className='text-3xl font-bold'>{props.name}</h1>
                        <p><div className='inline-block mr-2 h-2 w-2 bg-green-500 rounded-full'></div>{props.status}</p>
                    </div>
                    <div>
                        <h3>Last Known Location</h3>
                        <p className='text-xl'>location</p>
                    </div>
                    <div>
                        <h3>First seen in:</h3>
                        <p className='text-md'>{props.episode}</p>
                    </div>
                </div>
            </div>





        </>
    )
}

export default Box