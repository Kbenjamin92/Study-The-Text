import { Box, Text, Button, VStack, Heading } from '@chakra-ui/react';

interface Props {
  title: string;
  summary: string;
  fileUrl: string;
};

export const StudyCard = ({ title, summary, fileUrl }: Props) => {
  return (
    <>
        <Heading size={'lg'} paddingBottom='1rem'>Bible Study Details</Heading>
        <Box borderWidth="1px" borderRadius="lg" p={4} boxShadow="md">
        <VStack align="start" >
            <Text fontWeight="bold" fontSize="xl">{title}</Text>
            <Heading size={'md'}>Summary</Heading>
            <Text>{summary}</Text>
            {/* preview document */}
            <Box>
              <a href={fileUrl} download>
                <Button colorScheme="brown">
                  Download
                </Button>
              </a>
            </Box>
        </VStack>
        </Box>
    </>
  );
}
