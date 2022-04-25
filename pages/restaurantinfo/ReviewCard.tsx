import React from "react";
import {
  VStack,
  Image,
  HStack,
  Icon,
  Text,
  Box,
  Divider,
  Link,
  ScrollView,
  Stack,
} from "native-base";
import {
  Entypo,
  FontAwesome,
  Ionicons,
  MaterialCommunityIcons,
} from "@native-base/icons";

const tags = ["courteous staff", "great food", "ambience", "amazing drinks"];
function ReviewCard(props: any) {
  return (
    <VStack w="100%" mt={2}>
      {/* <HStack justifyContent={"space-between"} w="100%"> */}
      <Stack direction={{ base: "column", md: "row" }} my="2">
        <Image
          mr="3"
          alt="Image"
          width={12}
          height={12}
          borderRadius="full"
          source={{
            uri: "https://b.zmtcdn.com/data/user_profile_pictures/70f/fa9eca8e5c5aba0e9648be31e4f5770f.jpg?fit=around%7C400%3A400&crop=400%3A400%3B%2A%2C%2A",
          }}
        />
        <VStack>
          <Text
            fontSize="md"
            fontWeight="medium"
            fontFamily="Okra,Helvetica,sans-serif"
            color="coolGray.800"
          >
            Sunny Chauhan
          </Text>
          <HStack alignItems="center">
            <Text
              fontSize="sm"
              fontWeight="light"
              fontFamily="Okra,Helvetica,sans-serif"
              color="coolGray.400"
            >
              81 reviews
            </Text>
            <Icon
              as={<Entypo name="dot-single" />}
              size="6"
              color="coolGray.400"
            />
            <Text
              fontSize="sm"
              fontWeight="light"
              fontFamily="Okra,Helvetica,sans-serif"
              color="coolGray.400"
            >
              249 Followers
            </Text>
          </HStack>
        </VStack>

        <HStack my="2" ml={{ base: "0", md: "auto" }}>
          <Link
            _hover={{ bg: "coolGray.100" }}
            alignItems="center"
            borderWidth="1"
            borderRadius="md"
            borderColor="red.400"
            py="1"
            px="4"
            // flex="1"
          >
            <Text
              color="red.500"
              fontSize="sm"
              fontWeight="light"
              fontFamily="Okra,Helvetica,sans-serif"
            >
              Follow
            </Text>
          </Link>
        </HStack>
      </Stack>

      <HStack alignItems="center" space="2" mb="3">
        <HStack
          alignItems="center"
          bg="success.700"
          borderRadius="md"
          space="1"
          px="1"
        >
          <Text
            color="white"
            fontSize="sm"
            fontWeight="semibold"
            fontFamily="Okra,Helvetica,sans-serif"
          >
            5
          </Text>
          <Icon as={<FontAwesome name="star" />} size="2" color="white" />
        </HStack>
        <Text
          color="coolGray.700"
          fontSize="xs"
          fontFamily="Okra,Helvetica,sans-serif"
          mr="1"
        >
          DINING
        </Text>
        <Text
          color="coolGray.500"
          fontSize="sm"
          fontFamily="Okra,Helvetica,sans-serif"
          mb="0.5"
        >
          2 months ago
        </Text>
      </HStack>
      <HStack alignItems="center" space="1" mb="2">
        <Icon
          as={<FontAwesome name="thumbs-up" />}
          size="4"
          color="green.500"
        />
        <Text
          color="green.500"
          fontSize="sm"
          fontWeight="medium"
          fontFamily="Okra,Helvetica,sans-serif"
        >
          POSITIVE
        </Text>
      </HStack>
      <HStack alignItems="center" space="2" mb="4" flexWrap="wrap">
        {tags.map((tag, index) => (
          <Box bg="grayZomato.75" px="2" py="2" borderRadius="2xl" key={index}>
            <Text
              color="grayZomato.100"
              fontSize="xs"
              fontWeight="light"
              fontFamily="Okra,Helvetica,sans-serif"
            >
              {tag}
            </Text>
          </Box>
        ))}
      </HStack>

      <Text
        color="grayZomato.200"
        fontSize="md"
        fontWeight="light"
        fontFamily="Okra,Helvetica,sans-serif"
        mb="3"
      >
        The best bar in the country for a reason ! WHAT A PLACE !!! Their
        Infusions are out of this world. Highly Recommend the Yang’s Old
        Fashion, The Zing Thing and the Plum highball ! Also the Darjeeling
        Mail. Manish from the bar made sure each drink was exceptional. In terms
        of food the pork sliders were nice and juicy and when it came to the
        fried chicken - super crispy on the outside yet moist and tender on the
        inside. The Ambiance of the place was totally my kind - rustic - relaxed
        yet great energy !! DEFINITELY RECOMMENDED !!
      </Text>
      <ScrollView
        mb="5"
        mt="3"
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      >
        <Image
          height={40}
          width={64}
          source={{
            uri: "https://b.zmtcdn.com/data/reviews_photos/fc3/34c6f4408ce45fba3150dcd1bdd3cfc3_1634536759.jpg?output-format=webp",
          }}
          alt="Image"
          mr="2"
          borderRadius={"md"}
        />
        <Image
          height={40}
          width={64}
          source={{
            uri: "https://b.zmtcdn.com/data/reviews_photos/45d/b3591d3baa2d5e223a4fe142d522a45d_1634536758.jpg?output-format=webp",
          }}
          alt="Image"
          mr="2"
          borderRadius={"md"}
        />
        <Image
          height={40}
          width={64}
          source={{
            uri: "https://b.zmtcdn.com/data/reviews_photos/079/f65fbb66745f40c6a2d2a671c59ea079_1634536751.jpg?output-format=webp",
          }}
          alt="Image"
          borderRadius={"md"}
        />
      </ScrollView>
      <Text
        color="coolGray.400"
        fontSize="sm"
        fontWeight="light"
        fontFamily="Okra,Helvetica,sans-serif"
      >
        0 Votes for helpful, 0 Comments
      </Text>
      <HStack space="6" alignItems="center">
        <Link
          _hover={{ bg: "coolGray.50" }}
          alignItems="center"
          borderRadius="md"
          py="2"
          px="1"
          my="2"
        >
          <Icon
            as={<FontAwesome name="thumbs-o-up" />}
            size="5"
            color="coolGray.500"
          />
          <Text
            color="coolGray.400"
            fontSize="sm"
            fontWeight="light"
            fontFamily="Okra,Helvetica,sans-serif"
            ml="1"
          >
            Helpful
          </Text>
        </Link>
        <Link
          _hover={{ bg: "coolGray.50" }}
          alignItems="center"
          borderRadius="md"
          py="2"
          px="1"
          my="2"
        >
          <Icon
            as={<MaterialCommunityIcons name="comment-text-multiple-outline" />}
            size="5"
            color="coolGray.500"
          />
          <Text
            color="coolGray.400"
            fontSize="sm"
            fontWeight="light"
            fontFamily="Okra,Helvetica,sans-serif"
            ml="1"
          >
            Comment
          </Text>
        </Link>
        <Link
          _hover={{ bg: "coolGray.50" }}
          alignItems="center"
          borderRadius="md"
          py="2"
          px="1"
          my="2"
        >
          <Icon
            as={<Ionicons name="ios-arrow-redo-outline" />}
            size="5"
            color="coolGray.500"
          />
          <Text
            color="coolGray.400"
            fontSize="sm"
            fontWeight="light"
            fontFamily="Okra,Helvetica,sans-serif"
            ml="1"
          >
            Share
          </Text>
        </Link>
      </HStack>
      <Divider mt={2} />
    </VStack>
  );
}

export default ReviewCard;
