import { Container, Heading } from '@chakra-ui/react'
import React from 'react'
import { StudyCard } from './StudyCard'

export const BibleStudyContent = () => {
  return (
    <div>
        <Heading>BibleStudyContent</Heading>
         <Container>
            <StudyCard 
                title={'Faith'} 
                summary={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`}
                fileUrl='Test...' />
        </Container>
    </div>
  )
}
