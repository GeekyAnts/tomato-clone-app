import React from "react";
import { Box, HStack, Pressable, Text, Link, Image, Circle } from "native-base";

import Header from "../../components/Header";
import DiningOut from "../../components/DiningOut";
import Footer from "../../components/Footer";
import { useRouter } from "next/router";
import Tags from "./Tags";

const tabData = [
  {
    name: "Delivery",
    imageUrl:
      "https://b.zmtcdn.com/data/o2_assets/246bbd71fbba420d5996452be3024d351616150055.png?output-format=webp",
  },
  {
    name: "Dining Out",
    imageUrl:
      "https://b.zmtcdn.com/data/o2_assets/30fa0a844f3ba82073e5f78c65c18b371616149662.png?output-format=webp",
  },
  {
    name: "Nightlife",
    imageUrl:
      "https://b.zmtcdn.com/data/o2_assets/01040767e4943c398e38e3592bb1ba8a1616150142.png?output-format=webphttps://b.zmtcdn.com/data/o2_assets/30fa0a844f3ba82073e5f78c65c18b371616149662.png?output-format=webp",
  },
];

export default function GoForMeal(props: any) {
  const [tabName, setTabName] = React.useState("Dining Out");
  const router = useRouter();

  return (
    <Box alignItems="center" borderColor="coolGray.200" h="100%">
      <Header />
      <Box maxW="1164" w="100%" px="8">
        <HStack mt="2" mb="4" w="100%">
          <Link
            isUnderlined={false}
            _text={{
              color: "grayZomato.100",
              fontSize: "xs",
              fontWeight: "light",
            }}
            _hover={{
              _text: {
                color: "red.500",
              },
            }}
            onPress={() => router.push("/")}
          >
            Home
          </Link>
          <Text color="grayZomato.100" fontSize={"xs"}>
            {"  "}/{"  "}
          </Text>
          <Text color="trueGray.400" fontSize={"xs"}>
            Collections
          </Text>
        </HStack>
        <HStack
          w={{ base: "100%", md: "100%", lg: "100%" }}
          pl="0"
          alignItems={{ lg: "center" }}
          flexWrap="wrap"
        >
          <HStack
            justifyContent="flex-start"
            flexWrap="wrap"
            w={{ base: "95%", md: "95%", lg: "100%" }}
          >
            {tabData.map((item, index) => (
              <Pressable
                key={index}
                p="4"
                onPress={() => {
                  return setTabName(item.name);
                }}
                borderBottomWidth="2"
                borderBottomColor={
                  tabName == item.name ? "red.400" : "coolGray.50"
                }
              >
                <HStack alignItems="center" space="3">
                  <Circle
                    bg={
                      tabName == item.name ? "cyanZomato.300" : "coolGray.100"
                    }
                    p="4"
                  >
                    <Image
                      source={{
                        uri: item.imageUrl,
                      }}
                      alt={item.name}
                      w={{ base: 4, lg: 8 }}
                      h={{ base: 4, lg: 8 }}
                      resizeMode="contain"
                    />
                  </Circle>
                  <Text
                    fontWeight="medium"
                    fontSize={{ base: "sm", md: "lg", lg: "xl" }}
                    color={tabName == item.name ? "red.500" : "coolGray.600"}
                  >
                    {item.name}
                  </Text>
                </HStack>
              </Pressable>
            ))}
          </HStack>
        </HStack>
      </Box>

      <Box bg="grayZomato.500" w="100%" alignItems="center">
        <Box w="100%" maxW="1164" px="8">
          {tabName == "Delivery" ? <DiningOut /> : null}
          {tabName == "Dining Out" ? <DiningOut /> : null}
          {tabName == "Nightlife" ? <DiningOut /> : null}
        </Box>
      </Box>
      <Tags />
      <Footer />
    </Box>
  );
}
