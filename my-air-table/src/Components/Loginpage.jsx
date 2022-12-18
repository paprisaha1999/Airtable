// import { useState } from "react";
// import {
//   Flex,
//   Box,
//   FormControl,
//   FormLabel,
//   Input,
//   Checkbox,
//   Stack,
//   Link,
//   Button,
//   Heading,
//   Text,
//   Image,
//   useColorModeValue,
// } from "@chakra-ui/react";
// import { useNavigate } from "react-router-dom";

// export default function Loginpage() {
//   const [email, setemail] = useState("");
//   const [Password, setPassword] = useState("");
//   const [load, setload] = useState(false);
//   const navigate = useNavigate();

//   const login = async () => {
//     setload(true);

//     try {
//       let res = await fetch(`https://mockserver-fhbg.onrender.com/users`);
//       let data = await res.json();
//       console.log(data);
//       let Auth = false;
//       for (let i in data) {
//         if (data[i].email === email && data[i].Password === Password) {
//           Auth = true;
//           break;
//         }
//       }
//       setload(false);
//       if (Auth == false) {
//         alert("Please enter right email or password!");
//       } else {
//         alert("Login Successfull!");
//         navigate("/dashboard");
//       }
//       console.log(Auth);
//     } catch (error) {
//       setload(false);

//       console.log(error);
//     }
//     setemail("");
//     setPassword("");
//   };

//   return (
//     <Flex
//       bg={"rgb(247,250,252)"}
//       justifyContent={"center"}
//       alignItems={"center"}
//     >
//       <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
//         <Flex m={"auto"}>
//           <Box mr={"5px"} ml="30px">
//             <img
//               src="http://s3.amazonaws.com/pix.iemoji.com/images/emoji/apple/ios-12/256/airplane.png"
//               alt="xyz"
//               width="40px"
//             />
//           </Box>
//           <Heading ml={"10px"} mt={"9px"} fontSize={"20px"}>
//             My Airtable App
//           </Heading>
//         </Flex>

//         <Stack align={"center"}>
//           <Heading
//             fontSize={"3xl"}
//             fontWeight={"400"}
//             mt={"-20px"}
//             textAlign={"center"}
//           >
//             Sign in to your account
//           </Heading>
//         </Stack>

//         <Box
//           rounded={"lg"}
//           bg={useColorModeValue("white", "gray.700")}
//           boxShadow={"lg"}
//           p={8}
//           width={"500px"}
//           height={"auto"}
//         >
//           <Stack spacing={4}>
//             <FormControl id="email">
//               <FormLabel>Email address</FormLabel>
//               <Input
//                 value={email}
//                 onChange={(e) => setemail(e.target.value)}
//                 type="email"
//               />
//             </FormControl>
//             <FormControl id="password">
//               <FormLabel>Password</FormLabel>
//               <Input
//                 value={Password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 type="password"
//               />
//             </FormControl>
//             <Stack spacing={10}>
//               <Stack
//                 direction={{ base: "column", sm: "row" }}
//                 align={"start"}
//                 justify={"space-between"}
//               >
//                 <Checkbox>Remember me</Checkbox>
//                 <Link color={"blue.400"}>Forgot password?</Link>
//               </Stack>
//               {load ? (
//                 <Button isLoading colorScheme="teal" variant="solid">
//                   Email
//                 </Button>
//               ) : (
//                 <Button
//                   onClick={login}
//                   bg={"blue.400"}
//                   color={"white"}
//                   _hover={{
//                     bg: "blue.500",
//                   }}
//                 >
//                   Sign in
//                 </Button>
//               )}
//             </Stack>
//           </Stack>
//         </Box>
//       </Stack>
//     </Flex>
//   );
// }

import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  Image,
  useColorModeValue,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import { AuthContext } from "./AuthContext";

export default function Loginpage() {
  const [email, setemail] = useState("");
  const [Password, setPassword] = useState("");
  const [load, setload] = useState(false);
  const navigate = useNavigate();
  const { loginUser, logoutUser } = useContext(AuthContext);

  const login = async () => {
    setload(true);

    try {
      let res = await fetch(`https://mockserver-fhbg.onrender.com/users`);
      let data = await res.json();
      console.log(data);
      let Auth = false;
      for (let i in data) {
        if (data[i].email === email && data[i].Password === Password) {
          Auth = true;
          loginUser(data[i].name);
          console.log(data[i].name);
          break;
        }
      }
      setload(false);
      if (Auth == false) {
        alert("Please enter right email or password!");
      } else {
        alert("Login Successfull!");
        navigate("/dashboard");
      }
      console.log(Auth);
    } catch (error) {
      setload(false);
      console.log(error);
    }
    setemail("");
    setPassword("");
  };

  return (
    <Flex
      bg={"rgb(247,250,252)"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Flex m={"auto"}>
          <Box mr={"5px"} ml="30px">
            <img
              src="http://s3.amazonaws.com/pix.iemoji.com/images/emoji/apple/ios-12/256/airplane.png"
              alt="xyz"
              width="40px"
            />
          </Box>
          <Heading ml={"10px"} mt={"9px"} fontSize={"20px"}>
            My Airtable App
          </Heading>
        </Flex>

        <Stack align={"center"}>
          <Heading
            fontSize={"3xl"}
            fontWeight={"400"}
            mt={"-20px"}
            textAlign={"center"}
          >
            Sign in to your account
          </Heading>
        </Stack>

        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
          width={"500px"}
          height={"auto"}
        >
          <Stack spacing={4}>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input
                value={email}
                onChange={(e) => setemail(e.target.value)}
                type="email"
              />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input
                value={Password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
              />
            </FormControl>
            <Stack spacing={10}>
              <Stack
                direction={{ base: "column", sm: "row" }}
                align={"start"}
                justify={"space-between"}
              >
                <Checkbox>Remember me</Checkbox>
                <Link color={"blue.400"}>Forgot password?</Link>
              </Stack>
              {load ? (
                <Button isLoading colorScheme="teal" variant="solid">
                  Email
                </Button>
              ) : (
                <Button
                  onClick={login}
                  bg={"blue.400"}
                  color={"white"}
                  _hover={{
                    bg: "blue.500",
                  }}
                >
                  Sign in
                </Button>
              )}
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
