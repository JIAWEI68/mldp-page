import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import {
  Box,
  Flex,
  Stack,
  Heading,
  Text,
  Container,
  Input,
  Button,
  SimpleGrid,
  Icon,
  useBreakpointValue,
  Center,
} from "@chakra-ui/react";

function App() {
  const [cardio, setCardio] = useState(null);
  const [predict, setPredict] = useState("");
  const [age, setAge] = useState(0);
  const [ap_hi, setAp_hi] = useState(0);
  const [ap_lo, setAp_lo] = useState(0);
  const [cholesterol, setCholesterol] = useState(0);
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);
  const [gender, setGender] = useState(0);

  const prediction = async (e) => {
    const body = {
      age: age,
      ap_hi: ap_hi,
      ap_lo: ap_lo,
      cholesterol: cholesterol,
      height: height,
      weight: weight,
      gender: gender,
    };
    e.preventDefault();
    const response = await fetch("http://localhost:5000/predict", {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-type": "application/json",
        "Cross-Origin-Resource-Policy": "cross-origin",
      },
    });
    const data = await response.json();
    setCardio(data);
  };

  useEffect(() => {
    console.log(cardio);
    if(cardio == null){
      setCardio("")
    }
    else if (cardio[0] == "1") {
      setPredict("You have a cardiovascular disease");
    } else if (cardio[0] == "0") {
      setPredict("You don't have a cardiovascular disease");
    }
  }, [cardio]);

  return (
    <div>
      <Box w="100%" bgGradient="linear(to-r, green.200, pink.500)" h="500">
        <Center>
          <Text my="200" fontFamily={"Raleway"} fontSize="30" color={"white"}>
            <i>
              This is a machine learning project which predicts whether there is
              a cardiovascular disease of a person.
            </i>
          </Text>
        </Center>
      </Box>
      <Center>
        <Box>
          <Container
            as={SimpleGrid}
            maxW={"7xl"}
            columns={{ base: 1, md: 2 }}
            spacing={{ base: 10, lg: 32 }}
            py={{ base: 10, sm: 20, lg: 32 }}
          >
            <Stack spacing={{ base: 10, md: 20 }}>
              <Heading
                lineHeight={1.1}
                fontSize={{ base: "3xl", sm: "4xl", md: "5xl", lg: "6xl" }}
              >
                <Text
                  as={"span"}
                  bgGradient="linear(to-r, red.400,pink.400)"
                  bgClip="text"
                  fontFamily={"Montserrat"}
                >
                  Values needed for predicting the disease
                </Text>
              </Heading>
              <Text mt="-10" fontSize={"20"} fontFamily="Montserrat">
                <ul>
                  <li>Age: Your age</li>
                  <li>Ap_hi: The top value of your blood pressure count</li>
                  <li>Ap_lo: The bottom value of your blood pressure count</li>
                  <li>
                    Cholestrol: Total cholesterol level read as mg/dl on a scale
                    0 - 5+ units. Each unit denoting increase/decrease by 20
                    mg/dL respectively.{" "}
                  </li>
                  <li>Height: Your height</li>
                  <li>Weight: Your weight</li>
                  <li>
                    Gender: Your gender in terms of 1 or 2, where 1 denotes male
                    and 2 denotes female
                  </li>
                </ul>
              </Text>
            </Stack>
            <Stack
              bg={"gray.50"}
              rounded={"xl"}
              p={{ base: 4, sm: 6, md: 8 }}
              spacing={{ base: 8 }}
              maxW={{ lg: "lg" }}
              boxShadow="dark-lg"
            >
              <Stack spacing={4}>
                <Heading
                  color={"gray.800"}
                  lineHeight={1.1}
                  fontSize={{ base: "2xl", sm: "3xl", md: "4xl" }}
                  fontFamily="Montserrat"
                >
                  Start Predicting
                  <Text
                    as={"span"}
                    bgGradient="linear(to-r, red.400,pink.400)"
                    bgClip="text"
                  >
                    !
                  </Text>
                </Heading>
                <Text
                  color={"black"}
                  fontSize={{ base: "sm", sm: "md" }}
                  fontFamily="Montserrat"
                >
                  Fill in the details below to start predicting based of the
                  list on the side
                </Text>
              </Stack>
              <form onSubmit={prediction} as={"form"} mt={10}>
                <Stack spacing={4}>
                  <Input
                    placeholder="Age"
                    onChange={(e) => setAge(e.target.value)}
                    bg={"gray.100"}
                    border={0}
                    color={"black"}
                    _placeholder={{
                      color: "black",
                    }}
                    fontFamily="Raleway"
                    type="number"
                  />
                  <Input
                    placeholder="Ap_hi"
                    onChange={(e) => setAp_hi(e.target.value)}
                    bg={"gray.100"}
                    border={0}
                    color={"black"}
                    _placeholder={{
                      color: "black",
                    }}
                    type="number"
                    fontFamily="Raleway"
                  />
                  <Input
                    placeholder="Ap_lo"
                    onChange={(e) => setAp_lo(e.target.value)}
                    bg={"gray.100"}
                    border={0}
                    color={"black"}
                    type="number"
                    _placeholder={{
                      color: "black",
                    }}
                    fontFamily="Raleway"
                  />
                  <Input
                    placeholder="Cholesterol"
                    onChange={(e) => setCholesterol(e.target.value)}
                    bg={"gray.100"}
                    border={0}
                    color={"black"}
                    type="number"
                    _placeholder={{
                      color: "black",
                    }}
                    fontFamily="Raleway"
                  />
                  <Input
                    placeholder="Height"
                    onChange={(e) => setHeight(e.target.value)}
                    bg={"gray.100"}
                    border={0}
                    type="number"
                    color={"black"}
                    _placeholder={{
                      color: "black",
                    }}
                    fontFamily="Raleway"
                  />
                  <Input
                    placeholder="Weight"
                    onChange={(e) => setWeight(e.target.value)}
                    bg={"gray.100"}
                    type="number"
                    border={0}
                    color={"black"}
                    _placeholder={{
                      color: "black",
                    }}
                    fontFamily="Raleway"
                  />
                  <Input
                    placeholder="Gender"
                    onChange={(e) => setGender(e.target.value)}
                    bg={"gray.100"}
                    border={0}
                    type="number"
                    color={"black"}
                    _placeholder={{
                      color: "black",
                    }}
                    fontFamily="Raleway"
                  />
                </Stack>
                <Button
                  fontFamily={"heading"}
                  type="submit"
                  mt={8}
                  w={"full"}
                  bgGradient="linear(to-r, red.400,pink.400)"
                  color={"white"}
                  _hover={{
                    bgGradient: "linear(to-r, red.400,pink.400)",
                    boxShadow: "xl",
                  }}
                >
                  Submit
                </Button>
                <Text
                  className="Cardio_preditcion"
                  fontSize={"25"}
                  fontFamily="Raleway"
                >
                  Prediction: {predict}{" "}
                </Text>
              </form>
              form
            </Stack>
          </Container>
        </Box>
      </Center>
    </div>
  );
}

export default App;
