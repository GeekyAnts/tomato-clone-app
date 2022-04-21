import React from "react";

import { useRouter } from "next/router";
import {
  Box,
  Center,
  FlatList,
  HStack,
  Image,
  Pressable,
  Stack,
  useBreakpointValue,
  VStack,
} from "native-base";
import { View } from "react-native";

const list = [
  {
    imageUri:
      "https://b.zmtcdn.com/webFrontend/64dffaa58ffa55a377cdf42b6a690e721585809275.png?fit=around|402:360&crop=402:360;*,*",
    text: "Order Food Online",
  },
  {
    imageUri:
      "https://b.zmtcdn.com/webFrontend/95f005332f5b9e71b9406828b63335331585809309.png?fit=around|402:360&crop=402:360;*,*",
    text: "Go out for a meal",
  },
  {
    imageUri:
      "https://b.zmtcdn.com/webFrontend/b256d0dd8a29f9e0623ecaaea910534d1585809352.png?fit=around|402:360&crop=402:360;*,*",
    text: "Zomato Pro",
  },
  {
    imageUri:
      "https://b.zmtcdn.com/webFrontend/8ff4212b71b948ed5b6d2ce0d2bc99981594031410.png?fit=around|402:360&crop=402:360;*,*",
    text: "Nightlife & Clubs",
  },
];

function ZomatoCategories() {
  const router = useRouter();
  const noColumn = useBreakpointValue({
    base: 2,
    md: 4,
  });

  return (
    <HStack
      direction={{ base: "column", md: "row" }}
      mt="16"
      flexWrap="wrap"
      width={{ base: "80%", sm: "50%", md: "100%" }}
      justifyContent={{ base: "", sm: "center" }}
      space={{ base: 4, lg: 2 }}
    >
      {list.map((item, index) => (
        <Pressable
          key={index}
          onPress={() => {
            router.push("/goformeal");
          }}
        >
          <Card item={item} />
        </Pressable>
      ))}
    </HStack>
  );
  return (
    <FlatList
      w="90%"
      mx="4"
      mt="8"
      numColumns={noColumn}
      key={noColumn}
      data={list}
      keyExtractor={(item, index) => "key" + index}
      ItemSeparatorComponent={() => (
        <View style={{ width: "10", height: "10" }} />
      )}
      columnWrapperStyle={{
        justifyContent: "space-between",
      }}
      renderItem={({ item, index }) => (
        <Pressable
          key={index}
          onPress={() => {
            router.push("/goformeal");
          }}
          ml={index !== 0 ? 2 : 0}
          width={{ base: "49%", md: "22%" }}
        >
          <Card item={item} />
        </Pressable>
      )}
    />
  );
}

function Card(props: any) {
  return (
    <VStack
      // w={{ base: "100%", sm: "auto" }}
      alignItems="center"
      borderWidth={1}
      borderColor="coolGray.200"
      borderRadius="lg"
      overflow="hidden"
      mx={{ base: 4, sm: 0 }}
    >
      <Image
        borderTopLeftRadius="lg"
        borderTopRightRadius="lg"
        // w="100%"
        w={{ base: "100%", md: "267" }}
        h={192}
        source={{
          uri: props.item.imageUri,
        }}
        alt="Alternate Text"
      />
      <Center
        // h={20}
        py={3}
        _text={{ fontSize: "lg", textAlign: "center" }}
        color="coolGray.800"
        fontWeight="extrabold"
      >
        {props.item.text}
      </Center>
    </VStack>
  );
}

export default ZomatoCategories;
