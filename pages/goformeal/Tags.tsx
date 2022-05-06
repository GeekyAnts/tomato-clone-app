import React from "react";
import { HStack, Text, Link, Icon } from "native-base";
import { Ionicons, MaterialIcons } from "@native-base/icons";

const data = [
  {
    name: "Filters",
    leftIcon: (
      <Icon
        as={<Ionicons name="ios-git-compare-outline" />}
        size="4"
        color="coolGray.400"
      />
    ),
  },
  {
    name: "Distance",
    leftIcon: (
      <Icon
        as={<Ionicons name="swap-vertical-outline" />}
        size="5"
        color="coolGray.400"
      />
    ),
  },
  { name: "Rating: 4.0+" },
  { name: "Online bookings" },
  {
    name: "Cuisines",
    rightIcon: (
      <Icon
        as={<MaterialIcons name="keyboard-arrow-down" />}
        size="5"
        color="coolGray.400"
      />
    ),
  },
  {
    name: "Pro Offers",
    rightIcon: (
      <Icon
        as={<MaterialIcons name="keyboard-arrow-down" />}
        size="5"
        color="coolGray.400"
      />
    ),
  },
  { name: "Outdoor Seating" },
  { name: "Serves Alcohol" },
  { name: "Pure Veg" },
  { name: "Open Now" },
  {
    name: "More filters",
    rightIcon: (
      <Icon
        as={<MaterialIcons name="keyboard-arrow-down" />}
        size="5"
        color="coolGray.400"
      />
    ),
  },
  { name: "Cafés" },
];

function Tags() {
  return (
    <HStack maxW="1100" mx="8" pt="8" pb="4" flexWrap="wrap">
      {data.map((tag, index) => (
        <Link
          key={index}
          mr="4"
          alignItems="center"
          borderWidth="1"
          borderRadius="md"
          _hover={{ bg: "coolGray.100" }}
          borderColor="coolGray.400"
          py="2"
          px="3"
          my="2"
        >
          {tag.leftIcon}
          <Text
            color="coolGray.400"
            fontSize="sm"
            fontWeight="light"
            fontFamily="Okra,Helvetica,sans-serif"
            ml="2"
          >
            {tag.name}
          </Text>
          {tag.rightIcon}
        </Link>
      ))}
    </HStack>
  );
}

export default Tags;
