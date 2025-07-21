import {
  Box,
  Button,
  FileUpload,
  Field,
  Input,
  Textarea,
  VStack,
  useToast,
} from "@chakra-ui/react";
import { useState } from "react";

export const AdminDashboard = () => {
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [testimony, setTestimony] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const toast = useToast();

  const handleSubmit = () => {
    if (!title || !summary || !testimony || !file) {
      toast({
        title: "Missing Fields",
        description: "Please complete all fields and upload a file.",
        status: "warning",
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    // Simulate upload — you can replace this with real upload logic later
    console.log({ title, summary, testimony, file });

    toast({
      title: "Content submitted",
      description: "Your Bible study entry has been added.",
      status: "success",
      duration: 3000,
      isClosable: true,
    });

    // Reset form
    setTitle("");
    setSummary("");
    setTestimony("");
    setFile(null);
  };

  return (
    <Box maxW="lg" mx="auto" mt={10} p={6} boxShadow="lg" borderRadius="md">
      <VStack spacing={4} align="stretch">
        <Field.Root>
          <Field.Label>Title</Field.Label>
          <Input value={title} onChange={(e) => setTitle(e.target.value)} />
        </Field.Root>

        <Field.Root>
          <Field.Label>Summary</Field.Label>
          <Textarea value={summary} onChange={(e) => setSummary(e.target.value)} />
        </Field.Root>

        <Field.Root>
          <Field.Label>Testimony</Field.Label>
          <Textarea value={testimony} onChange={(e) => setTestimony(e.target.value)} />
        </Field.Root>

        <Field.Root>
          <Field.Label>Upload File (Word or PDF)</Field.Label>
          {/* <Input
            type="file"
            accept=".doc,.docx,.pdf"
            onChange={(e) => {
              const uploadedFile = e.target.files?.[0];
              if (uploadedFile) setFile(uploadedFile);
            }} />*/}
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
