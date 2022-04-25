import React from "react";
import { VStack, HStack, Icon, Text, Pressable, Stack } from "native-base";
import { Entypo, MaterialCommunityIcons } from "@native-base/icons";

const options = [
  {
    name: "Direction",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="#EF4F5F"
        width="16"
        height="16"
        viewBox="0 0 20 20"
        aria-labelledby="icon-svg-title- icon-svg-desc-"
        role="img"
      >
        <title>direction-line</title>
        <path d="M19.2 8.44l-7.22-7.22c-0.52-0.48-1.2-0.8-1.98-0.8s-1.46 0.32-1.98 0.8v0l-7.2 7.22c-0.52 0.5-0.82 1.2-0.82 1.98s0.3 1.46 0.82 1.98l7.2 7.2c0.5 0.52 1.2 0.82 1.98 0.82s1.48-0.3 1.98-0.82l7.22-7.2c0.5-0.52 0.8-1.22 0.8-1.98s-0.3-1.48-0.8-1.98v0zM18.16 11.38l-7.2 7.2c-0.24 0.24-0.58 0.38-0.94 0.38s-0.72-0.14-0.96-0.38v0l-7.22-7.2c-0.24-0.24-0.4-0.58-0.4-0.96s0.16-0.7 0.4-0.94v0l7.2-7.22c0.24-0.24 0.58-0.4 0.96-0.4s0.7 0.16 0.94 0.4l7.2 7.2c0.24 0.24 0.4 0.58 0.4 0.94s-0.16 0.72-0.4 0.96v0zM12.2 6.96c-0.040-0.040-0.080-0.060-0.12-0.060-0.1 0-0.18 0.080-0.18 0.18 0 0 0 0 0 0v0 1.66h-3.56c-1.18 0-2.14 0.96-2.14 2.16v0 2.38c0 0.26 0.2 0.46 0.46 0.46v0h0.48c0.26 0 0.48-0.2 0.48-0.46v0-2.38c0-0.4 0.32-0.72 0.72-0.72h3.56v1.66c0 0 0 0 0 0 0 0.1 0.080 0.18 0.18 0.18 0.040 0 0.080-0.020 0.12-0.060v0l2.34-2.32c0.040-0.040 0.080-0.1 0.080-0.18s-0.040-0.12-0.080-0.16v0z"></path>
      </svg>
    ),
  },
  {
    name: "Bookmark",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="#FF7E8B"
        width="16"
        height="16"
        viewBox="0 0 20 20"
        aria-labelledby="icon-svg-title- icon-svg-desc-"
        role="img"
      >
        <title>bookmark-add</title>
        <path d="M12.38 7.8h-1.66v-1.68c0-0.26-0.22-0.46-0.48-0.46v0h-0.48c-0.26 0-0.48 0.2-0.48 0.46v0 1.68h-1.66c-0.26 0-0.48 0.2-0.48 0.48v0 0.46c0 0.28 0.22 0.48 0.48 0.48v0h1.66v1.68c0 0.26 0.22 0.46 0.48 0.46v0h0.48c0.26 0 0.48-0.2 0.48-0.46v0-1.68h1.66c0.26 0 0.48-0.2 0.48-0.48v0-0.46c0-0.28-0.22-0.48-0.48-0.48v0zM15.020 0.9h-10.020c-1.060 0-1.92 0.84-1.92 1.9v0 16.42c0 0.28 0.16 0.5 0.36 0.62v0c0.12 0.060 0.24 0.1 0.38 0.1s0.24-0.040 0.36-0.1v0l5.82-3.52 5.82 3.52c0.1 0.060 0.24 0.1 0.38 0.1v0c0 0 0 0 0 0 0.12 0 0.24-0.040 0.34-0.1v0c0.22-0.12 0.36-0.34 0.36-0.62v-16.46c-0.020-1.040-0.86-1.86-1.88-1.86v0zM15.48 17.96l-5.1-3.080c-0.12-0.060-0.24-0.1-0.38-0.1s-0.26 0.040-0.38 0.1v0l-5.1 3.080v-15.24c0.040-0.22 0.22-0.4 0.46-0.4 0 0 0 0 0.020 0v0h10.020c0 0 0 0 0 0 0.24 0 0.44 0.2 0.46 0.44v0z"></path>
      </svg>
    ),
  },
  {
    name: "Share",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="#FF7E8B"
        width="16"
        height="16"
        viewBox="0 0 20 20"
        aria-labelledby="icon-svg-title- icon-svg-desc-"
        role="img"
      >
        <title>share</title>
        <path d="M0.72 19.94c-0.020 0-0.060 0-0.080 0s-0.060 0-0.080 0v0c-0.32-0.080-0.56-0.36-0.56-0.7 0 0 0 0 0-0.020v0c0-10.1 6.32-12.92 9.52-13.28v-4.34c0 0 0 0 0 0 0-0.38 0.32-0.7 0.72-0.7 0.18 0 0.36 0.060 0.48 0.18v0l9.060 8.32c0.14 0.14 0.22 0.34 0.22 0.54v0c0 0.2-0.1 0.4-0.24 0.52v0l-9.040 8.12c-0.12 0.1-0.3 0.18-0.46 0.18-0.12 0-0.22-0.040-0.32-0.080h0.020c-0.26-0.1-0.44-0.36-0.44-0.64v-4.3c-3.66 0.22-6.74 2.48-8.12 5.66l-0.020 0.060c-0.1 0.28-0.36 0.48-0.66 0.48v0zM10.24 12.32c0.4 0 0.72 0.32 0.72 0.72v0 3.4l7.26-6.5-7.26-6.66v3.32c0 0.4-0.32 0.72-0.72 0.72v0c-2.18 0-7.48 1.7-8.58 9 2.060-2.46 5.14-4 8.56-4 0.020 0 0.020 0 0.020 0v0z"></path>
      </svg>
    ),
  },
];
function Details(props: any) {
  return (
    <VStack w="100%" mt="1">
      <Stack
        direction={{ base: "column", md: "row" }}
        justifyContent="space-between"
        alignItems={{ base: "flex-start", md: "center" }}
        w="100%"
        space="3"
      >
        <Text
          color="coolGray.800"
          fontWeight="medium"
          fontSize={{ base: "3xl", md: "3xl", lg: "4xl" }}
        >
          Sidecar
        </Text>
        <HStack space={{ base: "4", md: "10" }} alignItems="center">
          <HStack space="2" alignItems="center">
            <HStack
              px={1}
              mt={2}
              alignItems="center"
              borderRadius="lg"
              bg="success.700"
            >
              <Text color="white" fontWeight="medium" fontSize="md">
                4.5
              </Text>
              <Icon
                color="white"
                fontWeight="medium"
                as={Entypo}
                size="xs"
                name="star"
              />
            </HStack>
            <VStack
              borderBottomWidth={1}
              borderBottomColor="coolGray.400"
              borderBottomStyle="dashed"
            >
              <Text color="coolGray.800" fontWeight="medium" fontSize="sm">
                335
              </Text>
              <Text color="coolGray.500" fontSize="xs">
                Dining Reviews
              </Text>
            </VStack>
          </HStack>
          <HStack space="2" alignItems="center">
            <HStack
              mt={2}
              px={1}
              alignItems="center"
              borderRadius="lg"
              bg="success.700"
            >
              <Text color="white" fontWeight="medium" fontSize="md">
                4.8
              </Text>
              <Icon
                color="white"
                fontWeight="medium"
                as={Entypo}
                size="xs"
                name="star"
              />
            </HStack>
            <VStack
              borderBottomWidth={1}
              borderBottomColor="coolGray.400"
              borderBottomStyle="dashed"
            >
              <Text color="coolGray.800" fontWeight="medium" fontSize="sm">
                423
              </Text>
              <Text color="coolGray.500" fontSize="xs">
                Delivery Reviews
              </Text>
            </VStack>
          </HStack>
        </HStack>
      </Stack>
      <Text
        color="grayZomato.200"
        fontWeight="300"
        fontSize="md"
        mt={{ base: "2", md: 0 }}
      >
        Continental, Asian, Beverages
      </Text>
      <Text color="grayZomato.300" fontWeight="300" fontSize="md" mt="1">
        M Block Market, Greater Kailash 2 (GK2), New Delhi
      </Text>
      <HStack space="3" alignItems="center" mt="2">
        <Text color="orangeTomato.300" fontWeight="300" fontSize="sm">
          Closed
        </Text>
        <Text color="grayZomato.100" fontWeight="normal" fontSize="sm">
          - Opens at 1pm
        </Text>
      </HStack>
      <HStack mt={4} space="3" alignItems="center" flexWrap="wrap">
        <Pressable bg="red.500" _hover={{ bg: "red.600" }} borderRadius="lg">
          <HStack space="1" px={3} py={2} alignItems="center">
            <Icon color="white" as={Entypo} size="xs" name="star-outlined" />
            <Text color="coolGray.50" fontWeight="normal" fontSize="sm">
              Add Review
            </Text>
          </HStack>
        </Pressable>
        {options.map((item, index) => (
          <Pressable
            _hover={{ bg: "coolGray.100" }}
            borderWidth={1}
            borderColor="coolGray.400"
            borderRadius="lg"
            key={index}
          >
            <HStack space="1" px={3} py={2} alignItems="center">
              {item.icon}
              <Text color="coolGray.600" fontWeight="normal" fontSize="sm">
                {item.name}
              </Text>
            </HStack>
          </Pressable>
        ))}
      </HStack>
    </VStack>
  );
}

export default Details;
