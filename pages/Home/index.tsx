import React, { useState } from "react";
import {
  Box,
  Center,
  CloseIcon,
  Divider,
  HamburgerIcon,
  Heading,
  HStack,
  Icon,
  Image,
  Input,
  Menu,
  Pressable,
  Stack,
  Text,
  useBreakpointValue,
  VStack,
  Hidden,
  Link,
} from "native-base";
import ZomatoCategories from "./ZomatoCategories";
import Footer from "../../components/Footer";
import { AntDesign, Entypo, FontAwesome } from "@native-base/icons";

export default function Home() {
  const isTablet = useBreakpointValue({
    base: false,
    md: true,
  });
  const [isSlideOpen, setSlideOpen] = useState(false);
  return (
    <>
      <Box w="100%" display={isSlideOpen ? "none" : "flex"}>
        <VStack
          alignItems="center"
          w="100%"
          bg="coolGray.50"
          pb="10"
          display={!isSlideOpen ? "flex" : "none"}
        >
          {/* Header */}
          <VStack w="100%" h={500}>
            <Image
              position="absolute"
              zIndex="-1"
              source={{
                uri: "https://b.zmtcdn.com/web_assets/81f3ff974d82520780078ba1cfbd453a1583259680.png",
              }}
              alt="Alternate Text"
              w="100%"
              h={500}
            />

            <Box w="100%" alignItems="center" mb="4" px="8" py="4">
              <HStack w="100%" maxW="1100" justifyContent="space-between">
                <Hidden till="md">
                  {/* <HStack w="100%" justifyContent="space-between"> */}
                  <>
                    <Link alignItems="center">
                      <HStack alignItems="center">
                        <Icon
                          as={FontAwesome}
                          name="mobile"
                          size="sm"
                          color="white"
                          mr="1"
                        />
                        <Text color="white" fontWeight="medium" fontSize="sm">
                          Get the App
                        </Text>
                      </HStack>
                    </Link>
                    <HStack space="10" alignItems="center">
                      <Link
                        href="#"
                        _text={{
                          color: "white",
                          fontSize: "lg",
                        }}
                        isUnderlined={false}
                      >
                        Add restaurant
                      </Link>
                      <Pressable>
                        <Text color="white" fontSize="lg">
                          Log in
                        </Text>
                      </Pressable>
                      <Pressable>
                        <Text color="white" fontSize="lg">
                          Sign up
                        </Text>
                      </Pressable>
                    </HStack>
                  </>
                  {/* </HStack> */}
                </Hidden>
                <Hidden from="md">
                  <Pressable m="3" onPress={() => setSlideOpen(true)}>
                    <HamburgerIcon color="white" size="5" />
                  </Pressable>
                </Hidden>
              </HStack>
            </Box>

            <Center mt={20} w="100%">
              <Image
                width={80}
                height={16}
                src={"/images/tomatoWhite.png"}
                alt="Alternate Text"
              />

              <Heading
                textAlign="center"
                w={{ base: "90%", md: "60%", lg: "48%" }}
                color="white"
                fontSize={{ base: "3xl", md: "3xl", lg: "3xl", xl: "4xl" }}
                fontWeight="normal"
                lineHeight="xs"
                mt={10}
                mx={{ base: 10 }}
              >
                Discover the best food &amp; drinks in Delhi NCR
              </Heading>

              <Stack
                direction={{ md: "row" }}
                bg="white"
                space="3"
                alignItems={{ base: "stretch", md: "center" }}
                w={{ base: "60%", lg: "48%" }}
                p={2}
                mt={12}
                borderRadius="lg"
              >
                <Menu
                  w="56"
                  placement="bottom"
                  trigger={(triggerProps) => {
                    return (
                      <Pressable
                        flexDir="row"
                        alignItems="center"
                        {...triggerProps}
                      >
                        <Icon
                          as={Entypo}
                          name="location-pin"
                          size="6"
                          color="red.400"
                        />
                        <Text color="coolGray.500" fontSize="md" mx="1">
                          Bangla Sahib Gurdwara
                        </Text>
                        <Icon
                          as={AntDesign}
                          name="caretdown"
                          size="3"
                          color="coolGray.600"
                          ml={{ base: "auto", md: "" }}
                        />
                        <Divider
                          display={{ base: "none", md: "inline" }}
                          h={5}
                          w={0.5}
                          ml={2}
                          orientation="vertical"
                        />
                      </Pressable>
                    );
                  }}
                >
                  <Menu.Item>
                    <Text color="cyanZomato.200">Detect current location</Text>
                  </Menu.Item>
                </Menu>
                <Input
                  leftElement={
                    <Icon
                      ml="1"
                      as={AntDesign}
                      name="search1"
                      size="5"
                      color="coolGray.500"
                    />
                  }
                  color="coolGray.500"
                  fontSize="md"
                  variant="unstyled"
                  placeholder="Search for a restaurant, cuisine or dish"
                  flex="1"
                />
              </Stack>
            </Center>
          </VStack>
          <ZomatoCategories />
        </VStack>

        <Footer />
      </Box>
      <Box
        w="100%"
        position="fixed"
        top="0"
        bottom="0"
        bg="white"
        display={isSlideOpen ? "flex" : "none"}
      >
        <HStack
          justifyContent="space-between"
          my="6"
          px="7"
          alignItems="center"
        >
          <Pressable onPress={() => setSlideOpen(false)}>
            <CloseIcon size="xs" color="black" />
          </Pressable>
          <Heading fontWeight="black" color="black" size="xl" italic>
            Tomato
          </Heading>
        </HStack>
        <VStack py="2" px="7" space="8" mt="8">
          <Pressable>
            <Text color="trueGray.500" fontSize="xl">
              Add restaurant
            </Text>
          </Pressable>
          <Pressable>
            <Text color="trueGray.500" fontSize="xl">
              Log in
            </Text>
          </Pressable>
          <Pressable>
            <Text color="trueGray.500" fontSize="xl">
              Sign up
            </Text>
          </Pressable>
        </VStack>
      </Box>
    </>
  );
}
