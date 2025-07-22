
import { useState } from 'react'
import { StudyCard } from './StudyCard'
import { CategoryDropdown } from './CategoryDropdown'
import { Container, Stack } from '@chakra-ui/react'

export const HomePage = () => {
    const [selectedCategory, setSelectedCategory] = useState('')
    const categories = ['Faith', 'Hope', 'Love', 'Grace', 'Salvation']

    const styling = {
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'flex-start',
    padding: '2rem',
  }
  return (
    <>
        <Container padding='2rem'>
            <h1>Welcome to Study The Text</h1>
            <p>Explore various Bible study topics and resources.</p>
        </Container>

        <Stack style={styling} direction={{ base: "column", md: "row" }}>
            <Container>
                <CategoryDropdown  
                    categories={categories} 
                    selected={selectedCategory} 
                    onChange={setSelectedCategory}/>
            </Container>
            <Container>
                <StudyCard 
                    title={'Faith'} 
                    summary={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`}
                    fileUrl='Test...' />
            </Container>
        </Stack>
    </>
  )
}
 
 
 