import { HStack, Link, Text } from "native-base";
import React from "react";

function ReviewHighlights(props: any) {
  const reviewItemList = [
    "Corn Curd",
    "Avocado Toast",
    "Lamb Curry",
    "Cocktail",
    "Packed on Weekends",
    "Comfortable Seating",
    "Drink",
    "Dessert",
    "Bartending Awesome",
    "Cozy",
    "Relaxed Atmosphere",
    "Live Music",
    "Packed on Weekends",
    "Comfortable Seating",
  ];
  return (
    <>
      <Text mt={8} color="coolGray.800" fontSize="xl">
        Review Highlights
      </Text>
      <HStack alignItems="center" space={2} w="100%" flexWrap="wrap" my="4">
        {reviewItemList.map((item, index) => {
          return <ReviewHighlightItem item={item} key={index} />;
        })}
      </HStack>
    </>
  );
}

function ReviewHighlightItem(props: any) {
  return (
    <Link
      _hover={{ bg: "coolGray.50" }}
      alignItems="center"
      borderWidth="1"
      borderRadius="full"
      borderColor="coolGray.200"
      py="1"
      px="4"
    >
      <Text
        color="coolGray.600"
        fontSize="md"
        fontWeight="light"
        fontFamily="Okra,Helvetica,sans-serif"
      >
        {props.item}
      </Text>
    </Link>
  );
}

export default ReviewHighlights;
