import { extendTheme } from "@chakra-ui/react"

export const MainTheme = extendTheme({
  styles: {
    global: {
      "html, body": {
        color: "white",
        backgroundColor: "black",
        scrollBehavior: "smooth",
      },
      p: {
        lineHeight: 1.8,
      },
      svg: {
        display: "inline-block",
      },
      "ul, ol, li": {
        listStyle: "none",
      },
    },
  },
  colors: {
    main: {
      50: "white",
      100: "white",
      500: "white",
      600: "white",
    },
    secondary: {
      50: "#FEFCED",
      100: "#FAF2B5",
      200: "#F0D200",
      400: "#E2B2FF",
      600: "#A767FF",
    },
  },
  fonts: {
    heading: "Poppins, sans-serif",
    body: "Roboto, sans-serif;",
  },
})
