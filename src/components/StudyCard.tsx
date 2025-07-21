import { Box, Text, Button, VStack, Heading } from '@chakra-ui/react';

interface Props {
  title: string;
  summary: string;
  testimony: string;
  fileUrl: string;
};

export const StudyCard = ({ title, summary, testimony, fileUrl }: Props) => {
  return (
    <>
        <Heading size={'lg'} paddingBottom='1rem'>Bible Study Details</Heading>
        <Box borderWidth="1px" borderRadius="lg" p={4} boxShadow="md">
        <VStack align="start" spacing={2}>
            <Text fontWeight="bold" fontSize="xl">{title}</Text>
            <Heading size={'md'}>Summary</Heading>
            <Text>{summary}</Text>
            <Heading size={'md'}>Testimony</Heading>
            <Text fontStyle="italic">{testimony}</Text>
            <Button colorScheme="brown" as="a" href={fileUrl} download>
            Download
            </Button>
        </VStack>
        </Box>
    </>
  );
}
