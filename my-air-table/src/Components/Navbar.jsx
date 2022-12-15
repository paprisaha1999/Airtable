import {
  Box,
  Flex,
  Link,
  Button,
  useDisclosure,
  useColorModeValue,
  useColorMode,
  Heading,
} from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { Link as RouterLink } from "react-router-dom";
import Sidebar from "./Sidebar";
import { Popover, PopoverTrigger, PopoverContent } from "@chakra-ui/react";

const NavLink = ({ children }) => (
  <Link
    px={2}
    py={1}
    rounded={"md"}
    _hover={{
      textDecoration: "none",
      bg: useColorModeValue("gray.200", "gray.700"),
    }}
    href={"#"}
  >
    {children}
  </Link>
);

export default function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Box
        width={"100%"}
        height={"50px"}
        bg={"#f0f6ff"}
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <p>
          See how new Airtable features can improve your work in our latest
          webinar
          <Button
            rightIcon={<ArrowForwardIcon />}
            colorScheme="blue"
            variant="ghost"
            fontSize={"14px"}
          >
            View webinar
          </Button>
        </p>
      </Box>
      <Box
        bg={useColorModeValue("white", "gray.900")}
        px={4}
        height={"80px"}
        width={"100%"}
      >
        <Flex
          alignItems="center"
          h={20}
          justifyContent={"space-between"}
          width={"(90%"}
          mt={"10px"}
          border={"1px solid red"}
        >
          <Flex>
            <Box mr={"5px"} ml="30px">
              <img
                src="http://s3.amazonaws.com/pix.iemoji.com/images/emoji/apple/ios-12/256/airplane.png"
                alt="xyz"
                width="50px"
              />
            </Box>
            <Heading ml={"10px"} mt={"9px"} fontSize={"20px"}>
              My Airtable App
            </Heading>
            <Box ml={"25px"} mt={"10px"}>
              <Popover>
                <PopoverTrigger>
                  <Link
                    p={2}
                    fontSize={"16px"}
                    fontWeight="bold"
                    mr={"5"}
                    onClick={onOpen}
                  >
                    Products {">"}
                  </Link>
                </PopoverTrigger>
                <PopoverTrigger>
                  <Link
                    p={2}
                    fontSize={"16px"}
                    fontWeight="bold"
                    mr={"5"}
                    onClick={onOpen}
                  >
                    Solutions {"> "}
                  </Link>
                </PopoverTrigger>

                <Link p={2} fontSize={"16px"} fontWeight="bold" mr={"5"}>
                  Pricing
                </Link>

                <PopoverTrigger>
                  <Link
                    p={2}
                    fontSize={"16px"}
                    fontWeight="bold"
                    mr={"5"}
                    onClick={onOpen}
                  >
                    Enterprise {"> "}
                  </Link>
                </PopoverTrigger>
                <PopoverTrigger>
                  <Link
                    p={2}
                    fontSize={"16px"}
                    fontWeight="bold"
                    mr={"5"}
                    onClick={onOpen}
                  >
                    Resourses {"> "}
                  </Link>
                </PopoverTrigger>

                <PopoverContent>
                  <Sidebar isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
                </PopoverContent>
              </Popover>
            </Box>
          </Flex>

          <Flex width={"450px"} justifyContent={"space-around"}>
            <RouterLink>
              <Button colorScheme="blue" color="black" variant="outline">
                Contact sales
              </Button>
            </RouterLink>

            <RouterLink>
              <Button colorScheme="blue" variant="solid">
                Sign up for free
              </Button>
            </RouterLink>

            <RouterLink>
              <Button colorScheme="blue" color="black" variant="ghost">
                Sign in
              </Button>
            </RouterLink>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
