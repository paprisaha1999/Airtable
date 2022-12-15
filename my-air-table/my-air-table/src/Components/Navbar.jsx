import { ReactNode } from "react";
import {
  Box,
  Flex,
  Avatar,
  Link,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
  Text,
  Heading,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon, ArrowForwardIcon } from "@chakra-ui/icons";
import { BsCart4 } from "react-icons/bs";
import { Link as RouterLink } from "react-router-dom";
import Sidebar from "./Sidebar";

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
            <Box mr={"5px"}>
              <img
                src="http://s3.amazonaws.com/pix.iemoji.com/images/emoji/apple/ios-12/256/airplane.png"
                alt="xyz"
                width="50px"
              />
            </Box>
            <Heading ml={"10px"} mt={"9px"} fontSize={"20px"}>
              My Airtable App
            </Heading>
            <Box ml={"25px"} mt={"5px"}>
              <Breadcrumb spacing="8px" separator=">">
                <BreadcrumbItem>
                  <BreadcrumbLink href="">
                    <b>Product</b>
                  </BreadcrumbLink>
                </BreadcrumbItem>

                <BreadcrumbItem>
                  <BreadcrumbLink href="#">
                    <b>Solutions</b>
                  </BreadcrumbLink>
                </BreadcrumbItem>

                <Button colorScheme="blue" color="black" variant="ghost">
                  <b>Pricing</b>
                </Button>

                <BreadcrumbItem isCurrentPage>
                  <BreadcrumbLink href="#">
                    <b>Enterprise</b>
                  </BreadcrumbLink>
                </BreadcrumbItem>

                <BreadcrumbItem isCurrentPage>
                  <BreadcrumbLink href="#">
                    <b>Resources</b>
                  </BreadcrumbLink>
                </BreadcrumbItem>
              </Breadcrumb>
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
