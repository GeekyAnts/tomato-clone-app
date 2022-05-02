import React from "react";
import { Entypo, MaterialCommunityIcons } from "@native-base/icons";
import {
  Center,
  VStack,
  Image,
  HStack,
  Icon,
  Text,
  Pressable,
} from "native-base";
import { useRouter } from "next/router";
import { listType } from "../../types/restaurants";

type PropType = {
  item: listType;
};

function RestaurantCard(props: PropType) {
  const router = useRouter();
  return (
    <Pressable
      onPress={() => {
        router.push("/restaurantinfo");
      }}
      flex="1"
      maxW={{ base: "100%", sm: "49%", lg: "32%" }}
    >
      <VStack my={1} space={1}>
        <VStack h={185}>
          <Image
            borderRadius="lg"
            position="absolute"
            zIndex="-2"
            w="100%"
            h={185}
            source={{
              uri: props.item?.imageUri,
            }}
            alt="Alternate Text"
          />
          {props.item?.featured ? (
            <HStack pl={2} pt={2} space="1" alignItems="center">
              <Center w={6} h={6} bg="red.500" borderRadius="full">
                <Icon
                  color="white"
                  fontWeight="medium"
                  as={MaterialCommunityIcons}
                  size="xs"
                  name="crown-outline"
                />
              </Center>
              <Text color="white" fontWeight="medium" fontSize="xs">
                Featured
              </Text>
            </HStack>
          ) : null}

          <VStack flex={1} pl={2} pb={2} justifyContent="flex-end">
            <Center
              maxW={150}
              bg="pinkZomato.100"
              _text={{
                color: "white",
                fontWeight: "medium",
                fontSize: "sm",
              }}
              borderRadius="xs"
            >
              Pro - Get 20% off
            </Center>
          </VStack>
        </VStack>
        <Text
          color="darkZomato.600"
          fontWeight="medium"
          fontSize="lg"
          w="100%"
          mb={1}
        >
          {props.item?.name}
        </Text>
        <HStack space={3} alignItems="center">
          <HStack
            space={1}
            px={1}
            alignItems="center"
            borderRadius="md"
            bg="success.700"
          >
            <Text color="white" fontSize="xs">
              {props.item?.dininingReviw}
            </Text>
            <Icon color="white" as={Entypo} size="xxs" name="star" />
          </HStack>
          <Text color="coolGray.700" fontWeight="normal" fontSize="xs">
            DINING |
          </Text>
          <HStack
            space={1}
            px={1}
            alignItems="center"
            borderRadius="sm"
            bg="success.700"
          >
            <Text color="white" fontWeight="medium" fontSize="xs">
              {props.item?.deliverhyReview}
            </Text>
            <Icon
              color="white"
              fontWeight="medium"
              as={Entypo}
              size="xxs"
              name="star"
            />
          </HStack>
          <Text color="coolGray.800" fontWeight="normal" fontSize="xs">
            DELIVERY
          </Text>
        </HStack>
        <Text color="grayZomato.200" fontSize="sm">
          {props.item?.address}
        </Text>
      </VStack>
    </Pressable>
  );
}

export default RestaurantCard;
