import {
  Box,
  Flex,
  Link,
  Button,
  useDisclosure,
  useColorModeValue,
  useColorMode,
  Heading,
  Container,
} from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { Link as RouterLink } from "react-router-dom";
import Sidebar from "./Sidebar";
import { Popover, PopoverTrigger, PopoverContent } from "@chakra-ui/react";
import { AuthContext } from "./AuthContext";
import { useContext } from "react";

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
  const { name, isAuth, logoutUser } = useContext(AuthContext);

  return (
    <Box position="sticky" top="0" zIndex="100">
      <div
        style={{
          width: "100%",
          margin: "auto",
          position: "sticky",
          top: 0,
          zIndex: "10",
        }}
      >
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
          boxShadow="md"
          bg={useColorModeValue("white", "gray.900")}
          height={"auto"}
          width={"100%"}
          margin={"auto"}
        >
          <Flex
            alignItems="center"
            h={20}
            justifyContent={"space-between"}
            width="87%"
            m={"auto"}
          >
            <Flex>
              <Box mr={"5px"} ml="30px">
                <img
                  src="http://s3.amazonaws.com/pix.iemoji.com/images/emoji/apple/ios-12/256/airplane.png"
                  alt="xyz"
                  width="40px"
                />
              </Box>
              <RouterLink to="/">
                <Heading ml={"10px"} mt={"9px"} fontSize={"20px"}>
                  My Airtable App
                </Heading>
              </RouterLink>
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

                  <RouterLink
                    to="/price"
                    p={2}
                    fontSize={"16px"}
                    fontWeight="bold"
                    mr={"10"}
                  >
                    <b>Pricing</b>{" "}
                  </RouterLink>

                  <PopoverTrigger>
                    <Link
                      p={2}
                      fontSize={"16px"}
                      fontWeight="bold"
                      mr={"5"}
                      onClick={onOpen}
                    >
                      {" "}
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
                    <Sidebar
                      isOpen={isOpen}
                      onOpen={onOpen}
                      onClose={onClose}
                    />
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
              {isAuth ? (
                <Flex>
                  <Button
                    bg="#086F83"
                    color="white"
                    ml="-80px"
                    fontSize={"16px"}
                    fontWeight="bold"
                    rounded="none"
                    _hover={{ bgColor: "#086F83" }}
                  >
                    {name}
                  </Button>{" "}
                  <RouterLink to="/">
                    <Button
                      colorScheme="#2B6CB0"
                      variant="ghost"
                      _hover={{ bgColor: "#EDFDFD" }}
                      ml="20px"
                      onClick={logoutUser}
                    >
                      <b>Logout</b>
                    </Button>
                  </RouterLink>
                </Flex>
              ) : (
                <div>
                  <RouterLink to="/signup">
                    <Button colorScheme="blue" variant="solid">
                      Sign up for free
                    </Button>
                  </RouterLink>

                  <RouterLink to="/login">
                    <Button colorScheme="blue" color="black" variant="ghost">
                      Log in
                    </Button>
                  </RouterLink>
                </div>
              )}
            </Flex>
          </Flex>
        </Box>
      </div>
    </Box>
  );
}
