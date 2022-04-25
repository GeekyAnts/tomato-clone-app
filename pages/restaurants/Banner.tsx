import React from "react";
import { Entypo } from "@native-base/icons";
import {
  VStack,
  Image,
  HStack,
  Icon,
  Heading,
  Text,
  Pressable,
  Button,
} from "native-base";

function Banner() {
  return (
    <VStack w="100%" h={320} mt={4}>
      <Image
        borderRadius="lg"
        position="absolute"
        zIndex="-2"
        w="100%"
        h={320}
        source={{
          uri: "https://b.zmtcdn.com/data/pictures/9/8019/d25efe481c28b69a550a8c904653e8b1_featured_v2.jpg?output-format=webp&fit=around|771.75:416.25&crop=771.75:416.25;*,*",
        }}
        alt="Alternate Text"
      />

      <HStack
        w="100%"
        space="3"
        alignItems="center"
        justifyContent="flex-end"
        mt={4}
        pr={4}
      >
        <Button
          variant="unstyled"
          bg="black"
          opacity={0.7}
          px={4}
          py={2}
          _text={{
            color: "white",
            fontWeight: "medium",
            fontSize: "md",
          }}
          rounded="full"
        >
          + Save Collection
        </Button>
        <Pressable
          w={9}
          h={9}
          bg="black"
          opacity={0.7}
          rounded="full"
          alignItems="center"
          justifyContent="center"
        >
          <Icon color="white" as={Entypo} size="xs" name="attachment" />
        </Pressable>
      </HStack>
      <VStack flex={1} pl={5} pb={5} justifyContent="flex-end">
        <VStack>
          <Heading
            color="white"
            fontSize="4xl"
            fontWeight="normal"
            lineHeight="xs"
            mt={10}
          >
            Trending This Week
          </Heading>
          <Text color="white" fontWeight="medium" fontSize="md">
            Most popular restaurants in town this week
          </Text>
          <Text mt={2} color="white" fontWeight="medium" fontSize="md">
            30 Places
          </Text>
        </VStack>
      </VStack>
    </VStack>
  );
}

export default Banner;
