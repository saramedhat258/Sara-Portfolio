import React from 'react'
import { InfiniteMovingCards } from './ui/MovingCard'
import { skills } from '../_data'

function Skills() {
    return (
        <>
            <div className='sm:my-10 mb-5'>
                <h1 className='sm:text-4xl text-2xl font-medium sm:mb-10 mb-5 text-center '>Skills and Technologies</h1>
                <InfiniteMovingCards
                    tech={skills}
                    direction="right"
                    speed="slow" />
            </div>
        </>
    )
}

export default Skills