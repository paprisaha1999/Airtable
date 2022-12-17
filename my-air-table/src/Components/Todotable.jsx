import {
  HStack,
  Box,
  Flex,
  Text,
  Button,
  Input,
  Select,
} from "@chakra-ui/react";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";
import {
  RepeatClockIcon,
  QuestionOutlineIcon,
  CopyIcon,
  BellIcon,
  ChevronDownIcon,
  SmallAddIcon,
} from "@chakra-ui/icons";
import TodoSidebar from "./TodoSidebar";
import { useState } from "react";

export default function Todotable() {
  const [todo, setTodo] = useState([]);
  const [name, setName] = useState("");
  const [notes, setNotes] = useState("");
  const [assignee, setAssignee] = useState("");
  const [select, setSelect] = useState("");

  const showText = (event) => {
    setName(event.target.value);
  };
  const showNotes = (event) => {
    setNotes(event.target.value);
  };
  const showAssignee = (event) => {
    setAssignee(event.target.value);
  };
  const showSelect = (event) => {
    setSelect(event.target.value);
  };

  const handleAdd = () => {
    const newTodo = {
      name: name,
      notes: notes,
      assignee: assignee,
      select: select,
      status: false,
      id: Math.random() + Date.now().toLocaleString() + name,
    };
    setTodo([...todo, newTodo]);
    setName("");
    setAssignee("");
    setNotes("");
    setSelect("");
  };
  console.log(todo);

  return (
    <>
      <Flex
        bgColor={"blue.400"}
        justifyContent={"space-between"}
        padding="15px"
      >
        <HStack gap={"20px"}>
          <Box ml={"30px"}>
            <Text color={"white"} fontSize={"20px"}>
              Untitled Base
            </Text>
          </Box>
          <HStack>
            <Button
              _hover={{ bgColor: "#2C5282" }}
              bgColor={"#2B6CB0"}
              color={"white"}
            >
              Data
            </Button>
            <Button
              _hover={{ bgColor: "#2C5282" }}
              bgColor={"#2B6CB0"}
              color={"white"}
            >
              Animation
            </Button>
            <Button
              _hover={{ bgColor: "#2C5282" }}
              bgColor={"#2B6CB0"}
              color={"white"}
            >
              Interface
            </Button>
          </HStack>
        </HStack>
        <HStack width={"25%"} gap="10px">
          <Button _hover={{ bgColor: "#2C5282" }} bgColor={"#2B6CB0"}>
            <RepeatClockIcon color={"white"} />
          </Button>
          <Button
            _hover={{ bgColor: "#2C5282" }}
            bgColor={"#2B6CB0"}
            color={"white"}
          >
            {" "}
            <QuestionOutlineIcon color={"white"} />
            {"  "}Help
          </Button>
          <Button bgColor={"#white"} color="#2B6CB0">
            <CopyIcon />
            Share
          </Button>
          <Button bgColor={"#white"} color="#2B6CB0">
            <BellIcon boxSize={"20px"} />
          </Button>
          <Button
            bgColor={"#C53030"}
            color="white"
            fontSize={"23px"}
            rounded={"50%"}
          >
            P
          </Button>
        </HStack>
      </Flex>

      <HStack height={"30px"} bgColor={"#2B6CB0"}>
        <Box
          textAlign={"center"}
          borderRadius={"5px 5px 0px 0px"}
          h={"100%"}
          ml={"20px"}
          width={"7%"}
          bgColor={"white"}
        >
          Table
        </Box>
        <ChevronDownIcon boxSize={"20px"} color={"white"} />
      </HStack>

      <HStack h="40px" gap={"30px"}>
        <Box ml={"40px"}>Views</Box>
        <Box>Grid view</Box>
        <Box>Hide fields</Box>
        <Box>Filter</Box>
        <Box>Group</Box>
        <Box>Sort</Box>
        <Box>Color</Box>
        <Box>Share View</Box>
      </HStack>

      <TableContainer style={{ padding: 20, margin: 0, ml: "20px" }}>
        <Table style={{ borderCollapse: "collapse", width: "60%", ml: "20px" }}>
          <Thead>
            <Tr style={{ padding: 0, margin: 0 }}>
              <Th
                style={{
                  padding: 0,
                  margin: 0,
                  width: "50px",
                }}
              >
                No.
              </Th>
              <Th style={{ padding: 0, margin: 0 }}>🅰️ Name</Th>
              <Th style={{ padding: 0, margin: 0 }}>📝 Notes</Th>
              <Th style={{ padding: 0, margin: 0 }}>🙋🏻 Assignee</Th>
              <Th style={{ padding: 0, margin: 0 }}>❓ Status</Th>
            </Tr>
          </Thead>

          <Tbody>
            <Tr style={{ columnGap: "none", padding: 0, margin: 0 }}>
              <Td style={{ padding: 0, margin: 0 }}>1</Td>

              <Td style={{ padding: 0, margin: 0 }}>
                <Input
                  style={{
                    borderRadius: 0,
                    width: "100%",
                    padding: 0,
                    margin: 0,
                  }}
                  type="text"
                  placeholder="add name"
                  value={name}
                  onChange={showText}
                ></Input>
              </Td>
              <Td style={{ padding: 0, margin: 0 }}>
                <Input
                  style={{ borderRadius: 0, padding: 0, margin: 0 }}
                  type="text"
                  placeholder="add notes"
                  value={notes}
                  onChange={showNotes}
                ></Input>
              </Td>
              <Td style={{ padding: 0, margin: 0 }}>
                <Input
                  style={{ borderRadius: 0, padding: 0, margin: 0 }}
                  type="text"
                  placeholder="add assignee"
                  value={assignee}
                  onChange={showAssignee}
                ></Input>
              </Td>

              <Td style={{ padding: 0, margin: 0 }}>
                <select
                  style={{ width: "100%", height: "100%", border: "none" }}
                  value={select}
                  onChange={showSelect}
                >
                  <option value="Not started">Not started</option>
                  <option value="In progress">In progress</option>
                </select>
              </Td>
            </Tr>

            <Tr style={{ columnGap: "none", padding: 0, margin: 0 }}>
              <Td style={{ padding: 0, margin: 0, w: "10px" }}>2</Td>

              <Td style={{ padding: 0, margin: 0 }}>
                <Input
                  style={{
                    borderRadius: 0,
                    width: "100%",
                    padding: 0,
                    margin: 0,
                  }}
                  placeholder="add name"
                ></Input>
              </Td>

              <Td style={{ padding: 0, margin: 0 }}>
                <Input
                  style={{ borderRadius: 0, padding: 0, margin: 0 }}
                  placeholder="add notes"
                ></Input>
              </Td>

              <Td style={{ padding: 0, margin: 0 }}>
                <Input
                  style={{ borderRadius: 0, padding: 0, margin: 0 }}
                  placeholder="add assignee"
                ></Input>
              </Td>

              <Td style={{ padding: 0, margin: 0 }}>
                <select
                  style={{ width: "100%", height: "100%", border: "none" }}
                >
                  <option value="Not started">Not started</option>
                  <option value="In progress">In progress</option>
                </select>
              </Td>
            </Tr>

            <Tr style={{ columnGap: "none", padding: 0, margin: 0 }}>
              <Td style={{ padding: 0, margin: 0, w: "10px" }}>3</Td>

              <Td style={{ padding: 0, margin: 0 }}>
                <Input
                  style={{
                    borderRadius: 0,
                    width: "100%",
                    padding: 0,
                    margin: 0,
                  }}
                  placeholder="add name"
                ></Input>
              </Td>

              <Td style={{ padding: 0, margin: 0 }}>
                <Input
                  style={{ borderRadius: 0, padding: 0, margin: 0 }}
                  placeholder="add notes"
                ></Input>
              </Td>

              <Td style={{ padding: 0, margin: 0 }}>
                <Input
                  style={{ borderRadius: 0, padding: 0, margin: 0 }}
                  placeholder="add assignee"
                ></Input>
              </Td>

              <Td style={{ padding: 0, margin: 0 }}>
                <select
                  style={{ width: "100%", height: "100%", border: "none" }}
                >
                  <option value="Not started">Not started</option>
                  <option value="In progress">In progress</option>
                </select>
              </Td>
            </Tr>

            <Tr style={{ columnGap: "none", padding: 0, margin: 0 }}>
              <Td style={{ padding: 0, margin: 0, w: "10px" }}>4</Td>

              <Td style={{ padding: 0, margin: 0 }}>
                <Input
                  style={{
                    borderRadius: 0,
                    width: "100%",
                    padding: 0,
                    margin: 0,
                  }}
                  placeholder="add name"
                ></Input>
              </Td>

              <Td style={{ padding: 0, margin: 0 }}>
                <Input
                  style={{ borderRadius: 0, padding: 0, margin: 0 }}
                  placeholder="add notes"
                ></Input>
              </Td>

              <Td style={{ padding: 0, margin: 0 }}>
                <Input
                  style={{ borderRadius: 0, padding: 0, margin: 0 }}
                  placeholder="add assignee"
                ></Input>
              </Td>

              <Td style={{ padding: 0, margin: 0 }}>
                <select
                  style={{ width: "100%", height: "100%", border: "none" }}
                >
                  <option value="Not started">Not started</option>
                  <option value="In progress">In progress</option>
                </select>
              </Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>

      <Button
        left={"40px"}
        p={"10px 30px"}
        borderRadius={"30px"}
        position={"fixed"}
        top="550px"
        onClick={handleAdd}
      >
        <SmallAddIcon />
        Add..
      </Button>

      {/* <TodoSidebar /> */}
    </>
  );
}
