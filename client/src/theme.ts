import { createSystem, defineConfig, defaultConfig } from "@chakra-ui/react";

const myConfig = defineConfig({
  theme: {
    tokens: {
      colors: {
        brand: {
          brown: { value: "#562b00" },
          black: { value: "#191919" },
          white: { value: "#ffffff" },
        },
      },
    },
  },
});

export const system = createSystem(defaultConfig, myConfig);


