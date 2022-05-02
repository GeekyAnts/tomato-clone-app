import React from "react";
import {
  Divider,
  HStack,
  Icon,
  Input,
  Text,
  Hidden,
  Center,
  Box,
  Pressable,
  Select,
  Menu,
} from "native-base";
import { AntDesign, Entypo, Ionicons } from "@native-base/icons";
import { useRouter } from "next/router";
import Image from "next/image";

export default function Header(props: any) {
  const router = useRouter();
  return (
    <Box w="100%" alignItems="center" mb="4" px="8">
      {/* <Hidden from="base" till="lg"> */}
      <HStack mt="2" space="3" alignItems="center" w="100%" maxW="1100">
        <Pressable
          onPress={() => {
            router.push("/");
          }}
          mr="6"
        >
          <Image
            width={128}
            height={28}
            src={"/images/tomato.png"}
            alt="Alternate Text"
          />
        </Pressable>

        <HStack
          borderWidth="1"
          borderColor="coolGray.200"
          bg="white"
          space="3"
          alignItems="center"
          borderRadius="lg"
          w="65%"
          py="2"
          display={{ base: "none", lg: "flex" }}
        >
          <Menu
            w="190"
            // placement="bottom"
            trigger={(triggerProps) => {
              return (
                <Pressable
                  accessibilityLabel="More options menu"
                  {...triggerProps}
                  flexDir="row"
                  alignItems="center"
                >
                  <Icon
                    ml="2"
                    mr="3"
                    as={Entypo}
                    name="location-pin"
                    size="6"
                    color="cyanZomato.200"
                  />
                  <Text color="coolGray.500" fontSize="md" mr="2">
                    Bangla Sahib Gurdwara
                  </Text>
                  <Icon
                    as={AntDesign}
                    name="caretdown"
                    size="3"
                    color="coolGray.600"
                  />
                </Pressable>
              );
            }}
          >
            <Menu.Item>
              <Text color="cyanZomato.200">Detect current location</Text>
            </Menu.Item>
          </Menu>
          <Divider h="5" w="0.5" ml="2" orientation="vertical" />
          <Icon
            ml="3"
            as={AntDesign}
            name="search1"
            size="5"
            color="coolGray.500"
          />
          <Input
            _focus={{ placeholderTextColor: "text.400" }}
            variant="unstyled"
            color="coolGray.500"
            fontSize="md"
            flex={1}
            borderWidth="0"
            placeholder="Search for restaurant, cuisine or a dish"
            fontWeight="light"
          />
        </HStack>
        <HStack space="3" ml="auto" display={{ base: "none", lg: "flex" }}>
          <Pressable>
            <Text mr="4" color="coolGray.600" fontSize="lg" fontWeight="light">
              Log in
            </Text>
          </Pressable>
          <Pressable>
            <Text color="coolGray.600" fontSize="lg" fontWeight="light">
              Sign up
            </Text>
          </Pressable>
        </HStack>
        <Menu
          w="160"
          // shouldOverlapWithTrigger={shouldOverlapWithTrigger} // @ts-ignore
          // placement={position == "auto" ? undefined : position}
          placement="left bottom"
          trigger={(triggerProps) => {
            return (
              <Pressable
                w="9"
                h="9"
                mr="8"
                ml="auto"
                borderWidth="1"
                borderColor="coolGray.300"
                borderRadius="full"
                display={{ base: "flex", lg: "none" }}
                alignItems="center"
                justifyContent="center"
                {...triggerProps}
              >
                <Icon
                  color="cyanZomato.500"
                  fontWeight="medium"
                  as={Ionicons}
                  size="xs"
                  name="person"
                />
              </Pressable>
            );
          }}
        >
          <Menu.Item>Your Orders</Menu.Item>
          <Menu.Item>Your Ratings</Menu.Item>
          <Menu.Item>Favorite Orders</Menu.Item>
          <Menu.Item>Address Book</Menu.Item>
          <Menu.Item>Become a member</Menu.Item>
          <Menu.Item>Your Transaction</Menu.Item>
        </Menu>
        {/* <Center
          w="9"
          h="9"
          mr="8"
          ml="auto"
          borderWidth="1"
          borderColor="coolGray.300"
          borderRadius="full"
          display={{ base: "flex", lg: "none" }}
        >
          <Icon
            color="cyanZomato.500"
            fontWeight="medium"
            as={Ionicons}
            size="xs"
            name="person"
          />
        </Center> */}
      </HStack>
      {/* <Divider mt="2" mb="2" /> */}
    </Box>
  );
}
