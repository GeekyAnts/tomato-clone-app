import React from "react";
import { Box, HStack, Text, VStack, Pressable } from "native-base";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Navigator from "./Navigator";
import InfoBanner from "./InfoBanner";
import Details from "./Details";
import InfoWithTabs, { BookTableTab, OverviewTab } from "./InfoWithTabs";
import { tabListType } from "../../types/restaurants";
import ReviewCard from "./ReviewCard";
import MenuCard from "./MenuCard";

const TabList = [
  {
    name: "Overview",
  },
  {
    name: "Order Online",
  },
  {
    name: "Reviews",
  },
  {
    name: "Photos",
  },
  {
    name: "Menu",
  },
  {
    name: "Book a Table",
  },
] as tabListType[];

export default function RestaurantInfo() {
  const [tabName, setTabName] = React.useState("Overview");
  return (
    <VStack alignItems="center" bg="coolGray.50">
      <Header />
      <Box maxW="1164" w="100%" px="8">
        <Navigator />
        <InfoBanner />
        <Box
          bg="coolGray.50"
          position={{ base: "initial", md: "sticky" }}
          top="0"
          zIndex="40"
        >
          <Details />
          <HStack mt="6" w="100%" flexWrap="wrap">
            {TabList.map((item: tabListType, index: any) => {
              return (
                <Pressable
                  key={index}
                  px={{ base: 2, lg: 6 }}
                  pb="4"
                  onPress={() => {
                    setTabName(item.name);
                  }}
                  borderBottomWidth="2"
                  borderBottomColor={
                    tabName == item.name ? "red.400" : "coolGray.300"
                  }
                >
                  <Text
                    fontWeight="normal"
                    fontSize="lg"
                    color={tabName == item.name ? "red.500" : "grayZomato.200"}
                  >
                    {item.name}
                  </Text>
                </Pressable>
              );
            })}
          </HStack>
        </Box>
        {tabName == "Overview" ? <OverviewTab /> : null}
        {tabName == "Reviews" ? <ReviewCard /> : null}
        {tabName == "Book a Table" ? <BookTableTab /> : null}
        {tabName == "Menu" ? <MenuCard /> : <></>}

        {/* <InfoWithTabs /> */}
        {/* </VStack> */}
      </Box>
      <Footer />
    </VStack>
  );
}
