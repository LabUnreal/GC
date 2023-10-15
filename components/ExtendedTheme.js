import { extendTheme, Box } from "@chakra-ui/react";

const ExtendedTheme = extendTheme({
  styles: {
    global: {
      // Applying a consistent margin
      "html, body": {
        marginLeft: ["1rem", "2rem", "3rem"],
        marginRight: ["1rem", "2rem", "3rem"],
      },
    },
  },
  config: {
    // Enables color mode feature
    initialColorMode: "light",
    useSystemColorMode: false,
  },
  breakpoints: {
    sm: "480px",  // Small
    md: "768px",  // Medium
    lg: "1245px", // Large
    xlg: "1246px", // Extra Large
  },
});

export default ExtendedTheme;

function CenteredPage({ children }) {
  return (
    <Box marginLeft="0" marginRight="0" width="100%" display="flex" justifyContent="center" alignItems="center" height="100vh">
      {children}
    </Box>
  );
}

export { CenteredPage };
