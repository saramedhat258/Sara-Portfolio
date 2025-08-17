import React from 'react'
import { InfiniteMovingCards } from './ui/MovingCard'
import { skills } from '../_data'

function Skills() {
    return (
        <>
            <div className='sm:my-16 sm:!mb-30 mb-14' id='skills'>
                <h1 className='sm:text-5xl text-2xl font-medium sm:mb-10 mb-5 text-center '>Skills and Technologies</h1>
                <InfiniteMovingCards
                    tech={skills}
                    direction="right"
                    speed="slow" />
            </div>
        </>
    )
}

export default Skills