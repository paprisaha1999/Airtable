import { Button } from "@chakra-ui/button";
import { Container, Flex, Heading, Text } from "@chakra-ui/layout";
import {
  SimpleGrid,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
} from "@chakra-ui/react";
import { Select } from "@chakra-ui/select";
import React from "react";
import { Link as RouterLink } from "react-router-dom";

const MainDashCompo = () => {
  return (
    <div style={{ width: "130%" }}>
      <Container
        rounded={"lg"}
        bg={"gray.100"}
        maxW="-moz-fit-content"
        height={"50px"}
      >
        <Text align="" fontSize={"12px"} color="blue" p={"15px"}>
          ⭐ Invite your friends and coworkers to earn account credit!
        </Text>
      </Container>

      <Flex mt={"40px"}>
        <Heading fontSize="3xl" fontFamily="GT Eesti Display">
          My First Workspace
        </Heading>
        <Select ml={"20px"} width={"45px"}>
          <option value="settings">Workspace settings</option>
          <option value="share">Share workspace</option>
          <option value="rename">Rename workspace</option>
          <option value="delete">Delete workspace</option>
        </Select>
        <Button color={"gray.600"} mt={"10px"} ml={"15px"} size={"xs"}>
          ✨ Pro trial
        </Button>
        <Text mt={"12px"} ml={"15px"} fontSize={"12px"}>
          <b>11 days left</b>
        </Text>
      </Flex>

      <SimpleGrid
        mt={"50px"}
        spacing={4}
        templateColumns="repeat(auto-fill, minmax(230px, 1fr))"
      >
        <RouterLink>
          <Card border={"1px solid RGBA(0, 0, 0, 0.24)"}>
            <CardHeader>
              <Heading size="md">
                <Image
                  w={"40%"}
                  m={"auto"}
                  mt={"20px"}
                  src="https://cdn4.iconfinder.com/data/icons/social-messaging-ui-color-squares-01/3/03-512.png"
                />
              </Heading>
            </CardHeader>
            <CardBody>
              <Text fontSize={"20px"} textAlign={"center"}>
                <b>Start from scratch</b>
              </Text>
              <Text textAlign={"center"} mt={"20px"} mb={"-25px"}>
                Create a new blank base with custom tables, fields, and views.
              </Text>
            </CardBody>
            <CardFooter></CardFooter>
          </Card>
        </RouterLink>

        <RouterLink>
          <Card border={"1px solid RGBA(0, 0, 0, 0.24)"}>
            <CardHeader>
              <Heading size="md">
                <Image
                  w={"40%"}
                  m={"auto"}
                  mt={"20px"}
                  src="https://cdn2.iconfinder.com/data/icons/interface-elements/32/previous-square-512.png"
                />
              </Heading>
            </CardHeader>
            <CardBody>
              <Text fontSize={"20px"} textAlign={"center"}>
                <b>Quickly upload</b>
              </Text>
              <Text textAlign={"center"} mt={"20px"} mb={"-25px"}>
                Easily migrate your existing projects in just a few minutes.
              </Text>
            </CardBody>
            <CardFooter></CardFooter>
          </Card>
        </RouterLink>

        <RouterLink>
          <Card border={"1px solid RGBA(0, 0, 0, 0.24)"}>
            <CardHeader>
              <Heading size="md">
                <Image
                  w={"40%"}
                  m={"auto"}
                  mt={"20px"}
                  src="https://www.bluleadz.com/hs-fs/hubfs/Square%20Logos/MicrosoftLogo3.png?width=225&name=MicrosoftLogo3.png"
                />
              </Heading>
            </CardHeader>
            <CardBody>
              <Text fontSize={"20px"} textAlign={"center"}>
                <b>Start with templates</b>
              </Text>
              <Text textAlign={"center"} mt={"20px"} mb={"-25px"}>
                Select a template to get started and customize as you go.
              </Text>
            </CardBody>
            <CardFooter></CardFooter>
          </Card>
        </RouterLink>
      </SimpleGrid>
    </div>
  );
};

export default MainDashCompo;
