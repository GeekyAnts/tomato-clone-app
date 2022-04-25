import React, { useState } from "react";
import { Box, HStack, Radio, Text, Pressable, VStack } from "native-base";

function RateYourExperience(props: any) {
  const [rate, setRate] = useState(1);
  return (
    <VStack space="2" mt="8">
      <Text color="coolGray.800" fontSize="xl">
        Rate your experience for
      </Text>
      <Radio.Group defaultValue="1" name="MyRadioGroup" flexDirection="row">
        <Radio
          _checked={{
            _icon: { color: "red.400" },
            borderColor: "red.400",
          }}
          value="one"
        >
          Dining
        </Radio>

        <Radio
          ml={40}
          _checked={{
            _icon: { color: "red.400" },
            borderColor: "red.400",
          }}
          value="two"
        >
          Delivery
        </Radio>
      </Radio.Group>
      <HStack>
        <HStack mt="1" space="1">
          {[1, 2, 3, 4, 5].map((val, idx) => {
            return (
              <Pressable
                rounded="md"
                borderWidth={1}
                borderColor="grayZomato.400"
                _hover={{ bg: "trueGray.100" }}
                flexDir="row"
                px="1"
                alignItems="center"
                key={idx}
                onPress={() => setRate(val)}
              >
                <Text
                  color="grayZomato.400"
                  fontSize="md"
                  fontWeight="semibold"
                  mr="1"
                >
                  {val}
                </Text>
                <StarIcon />
              </Pressable>
            );
          })}
        </HStack>
      </HStack>
    </VStack>
  );
}

const StarIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="#B5B5B5"
      width="10"
      height="10"
      viewBox="0 0 20 20"
      aria-labelledby="icon-svg-title- icon-svg-desc-"
      role="img"
    >
      <title>star-fill</title>
      <path d="M6.76 6.8l-6.38 0.96c-0.22 0.040-0.38 0.22-0.38 0.44 0 0.12 0.040 0.24 0.12 0.32v0l4.64 4.76-1.1 6.66c0 0.020 0 0.040 0 0.080 0 0.24 0.2 0.44 0.44 0.44 0.1 0 0.16-0.020 0.24-0.060v0l5.7-3.12 5.68 3.12c0.060 0.040 0.14 0.060 0.22 0.060 0.24 0 0.44-0.2 0.44-0.44 0-0.040 0-0.060 0-0.080v0l-1.1-6.66 4.64-4.76c0.080-0.080 0.12-0.2 0.12-0.32 0-0.22-0.16-0.4-0.36-0.44h-0.020l-6.38-0.96-2.96-6.18c-0.060-0.12-0.18-0.2-0.32-0.2s-0.26 0.080-0.32 0.2v0z"></path>
    </svg>
  );
};

export default RateYourExperience;
