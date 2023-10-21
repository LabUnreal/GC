import { Box, Button, Input, Text, Textarea, useToast } from "@chakra-ui/react";
import { useState } from 'react';

export default function ContactPage() {
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    
    const toast = useToast();

    const handleSubmit = async (e) => {
        e.preventDefault();

    // Call an API or use a package like nodemailer to send an email.
    // This is a simplified example, you might need to setup a backend endpoint to handle the email sending.
    const response = await fetch('/api/sendEmail', {
      method: 'POST',
      body: JSON.stringify({ subject, message }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      toast({
        title: "Message sent",
        description: "Your words were sent and can no longer be taken back. If you wrote anything interesting, you may expect a response within 48 hours. Sometimes it may take us longer.",
        status: "success",
        duration: 10000,
        isClosable: true,
      });
      setSubject('');
      setMessage('');
    } else {
      toast({
        title: "Error",
        description: "There was an error sending your message. Please try again.",
        status: "error",
        duration: 10000,
        isClosable: true,
      });
    }
  }

  return (
    <Box maxW="600px" mx="auto" p={8}>
      <Text fontSize="2xl" mb={4}>Contact Us</Text>
      <Text mb={6}>
        No need for names, just send us a message. If you are looking to publish, you may want to contact any of the publishers provided in the publishers&apos; page. Guerrilla Concepts is not a publisher.
      </Text>
      <Box as="form" onSubmit={handleSubmit}>
    <Input
        mb={4}
        type="email"
        placeholder="Your Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
    />
    <Input
        mb={4}
        placeholder="Subject"
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
    />
    <Textarea
        mb={4}
        placeholder="Your Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
    />
    <Button type="submit" colorScheme="teal">Shoot</Button>
</Box>
    </Box>
  );
}