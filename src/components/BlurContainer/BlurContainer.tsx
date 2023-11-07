import { Box } from "@chakra-ui/react"
import React, { FC } from "react"

interface IBlurContainer {
  children: React.ReactNode
  style?: object
}

const BlurContainer: FC<IBlurContainer> = ({ children, style }) => {
  return (
    <Box
      flex="1"
      display="flex"
      flexDir="column"
      justifyContent="center"
      gap="20px"
      px={["20px"]}
      py={["20px", "20px", "20px"]}
      overflow="auto"
      position="relative"
      background="linear-gradient(151deg, rgba(0,98,255,0) 0%, rgba(57,85,242,0.22030237580993517) 21%, #541041 100%)"
      borderRadius="10px"
      zIndex="99"
      backdropFilter="blur(10px)"
      _after={{
        content: '""',
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        borderRadius: "10px",
        // border: "1px solid transparent",
        background: "linear-gradient(90deg,grey,black,black,black) border-box",
        WebkitMask:
          "linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)",
        WebkitMaskComposite: "destination-out",
        maskComposite: "exclude",
        filter: "blur(10px)",
        zIndex: "-1",
      }}
      {...style}
    >
      {children}
    </Box>
  )
}

export default BlurContainer
