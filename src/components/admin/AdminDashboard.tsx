import {
  Box,
  Button,
  FileUpload,
  Field,
  Input,
  Textarea,
  VStack,
  Heading,
} from "@chakra-ui/react";
import { toaster } from "../ui/toaster"
import { useState } from "react";
import { HiUpload } from "react-icons/hi";

export const AdminDashboard = () => {
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [file, setFile] = useState<File | null>(null);

  const handleSubmit = () => {
    if (!title || !summary || !file) {
      toaster.create({
        title: "Missing Fields",
        description: "Please complete all fields and upload a file.",
        duration: 3000
      });
      return;
    }

    // Simulate upload — you can replace this with real upload logic later
    console.log({ title, summary, file });

    toaster.create({
      title: "Content submitted",
      description: "Your Bible study entry has been added.",
      duration: 3000,
    })

    // Reset form
    setTitle("");
    setSummary("");
    setFile(null);
  };

  return (
    <Box maxW="lg" mx="auto" mt={10} p={6} boxShadow="lg" borderRadius="md">
      <Heading as="h1" size="xl" mb={6}>
       Bible Study Details
      </Heading>
      <VStack align="stretch">
        <Field.Root>
          <Field.Label>Title</Field.Label>
          <Input value={title} onChange={(e) => setTitle(e.target.value)} />
        </Field.Root>

        <Field.Root>
          <Field.Label>Summary</Field.Label>
          <Textarea value={summary} onChange={(e) => setSummary(e.target.value)} />
        </Field.Root>

        <Field.Root>
          <Field.Label>Upload File (Word or PDF)</Field.Label>
            <FileUpload.Root>
              <FileUpload.HiddenInput />
              <FileUpload.Trigger asChild>
                <Button variant="outline" size="sm">
                  <HiUpload /> Upload file
                </Button>
              </FileUpload.Trigger>
              <FileUpload.List />
            </FileUpload.Root>
        </Field.Root>

        <Button colorScheme="brown" onClick={handleSubmit}>
          Submit Bible Study
        </Button>
      </VStack>
    </Box>
  );
}
