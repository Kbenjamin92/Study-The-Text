import {
  Box,
  Button,
  FileUpload,
  Field,
  Input,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import { toaster } from "../components/ui/toaster"
import { useState } from "react";
import { HiUpload } from "react-icons/hi";

export const AdminDashboard = () => {
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [testimony, setTestimony] = useState("");
  const [file, setFile] = useState<File | null>(null);

  const handleSubmit = () => {
    if (!title || !summary || !testimony || !file) {
      toaster.create({
        title: "Missing Fields",
        description: "Please complete all fields and upload a file.",
        duration: 3000
      });
      return;
    }

    // Simulate upload — you can replace this with real upload logic later
    console.log({ title, summary, testimony, file });

    toaster.create({
      title: "Content submitted",
      description: "Your Bible study entry has been added.",
      duration: 3000,
    })

    // Reset form
    setTitle("");
    setSummary("");
    setTestimony("");
    setFile(null);
  };

  return (
    <Box maxW="lg" mx="auto" mt={10} p={6} boxShadow="lg" borderRadius="md">
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
