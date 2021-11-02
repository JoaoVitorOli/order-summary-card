import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    primary: {
      "paleBlue": "hsl(225, 100%, 94%)",
      "paleBlueOpaco": "hsla(224.51612903225808, 100%, 93.92156862745098%, 0.37)",
      "brightBlue": "hsl(245, 75%, 52%)",
    },
    neutral: {
      "veryPaleBlue": "hsl(225, 100%, 98%)",
      "desaturatedBlue": "hsl(224, 23%, 55%)",
      "darkBlue": "hsl(223, 47%, 23%)"
    }
  },
  fonts: {
    heading: "Red Hat Display",
    body: "Red Hat Display"
  },
  styles: {
    global: {
      body: {
        bg: "primary.paleBlue",
      }
    }
  }
});
