import { Button, Container, Flex, VStack } from "@chakra-ui/react";
import React from "react";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
} from "@chakra-ui/react";

const DashboardTable = (data, handleDelete) => {
  // console.log(name)
  console.log(data);

  return (
    <VStack>
      <Popover>
        <PopoverTrigger>
          <Button
            mt="20px"
            width="auto"
            height="50px"
            bg={"red"}
            color="white"
            mr="10px"
            justifyContent="center"
            alignItems="center"
            p="10px"
            _hover={{ bgColor: "green" }}
          >
            <b>{data.name}</b>
          </Button>
        </PopoverTrigger>
        <PopoverContent>
          <PopoverArrow />
          <PopoverCloseButton />
          <PopoverHeader fontSize={"18px"} bg={"blue.700"} color="white">
            <b>Details</b>
          </PopoverHeader>
          <PopoverBody fontFamily={"cursive"} bg={"pink.100"}>
            <p>
              🅰️ Name :- <b>{data.name}</b>
            </p>
            <p>
              {" "}
              📝 Notes :- <b>{data.notes}</b>
            </p>
            <p>
              🙋🏻 Assignee :- <b>{data.assignee}</b>
            </p>
            <p>
              ❓ Status :- <b>{data.select}</b>
            </p>
          </PopoverBody>
        </PopoverContent>
      </Popover>
      {/* <Button onClick={() => handleDelete(data.id)}>DELETE</Button> */}
    </VStack>
  );
};

export default DashboardTable;
