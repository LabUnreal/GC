import React from 'react';
import { Box, Text } from "@chakra-ui/react";
import logEntries from '../../../components/logEntries';

const parseDescription = (desc) => {
  // Simple replace for bold and italic; consider using a markdown library for more complexity
  return desc.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>').replace(/\_(.+?)\_/g, '<i>$1</i>');
}

export default function DatumSentiensPage() {
  return (
    <Box w={{base: "100%", md: "80%", lg: "50%"}}>
      {logEntries.map((entry, index) => (
        <Box key={index} mb={4} pb={4}>
          <Text fontWeight="bold">{entry.date}</Text>
          <Text dangerouslySetInnerHTML={{ __html: parseDescription(entry.description) }} />
        </Box>
      ))}
    </Box>
  );
}