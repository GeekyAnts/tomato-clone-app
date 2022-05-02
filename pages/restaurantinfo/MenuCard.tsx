import React from "react";
import { VStack, Pressable, Image, Text } from "native-base";

function MenuCard() {
  return (
    <>
      <VStack>
        <Pressable>
          <Image
            borderRadius="lg"
            source={{
              uri: "https://b.zmtcdn.com/data/menus/048/18765048/3d7f5730c6035ff135714771e06bc33c.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
            }}
            alt="Alternate Text"
            w={200}
            h={218}
          />
        </Pressable>
        <Text color="coolGray.800" fontWeight="medium" fontSize="md" mt="3">
          Food Menu
        </Text>

        <Text color="coolGray.500" fontSize="xs">
          5 pages
        </Text>
      </VStack>
      <VStack>
        <Pressable>
          <Image
            borderRadius="lg"
            source={{
              uri: "https://b.zmtcdn.com/data/menus/048/18765048/ed952f0e5d64d8e34bbdd20e9c75dfb4.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
            }}
            alt="Alternate Text"
            w={200}
            h={218}
          />
        </Pressable>
        <Text color="coolGray.800" fontWeight="medium" fontSize="md" mt="3">
          Bar Menu
        </Text>
        <Text color="coolGray.500" fontWeight="medium" fontSize="xs">
          12 pages
        </Text>
      </VStack>
    </>
  );
}

export default MenuCard;
