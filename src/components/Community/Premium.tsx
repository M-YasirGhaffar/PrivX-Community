import {
  Button,
  Flex,
  Icon,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
// import { GiCheckedShield } from "react-icons/gi";
// import { IoShieldHalfSharp } from "react-icons/io5";
import { TbPremiumRights } from "react-icons/tb";




const Premium: React.FC = () => {
  const bg = useColorModeValue("white", "#1A202C");
  const borderColor = useColorModeValue("gray.300", "#2D3748");

  return (
    <Flex
      direction="column"
      bg={bg}
      borderRadius={4}
      cursor="pointer"
      p="12px"
      border="1px solid"
      borderColor={borderColor}
    >
      <Flex mb={2}>
        <Icon as={TbPremiumRights} fontSize={26} color="#fed716" mt={2} />
        <Stack spacing={1} fontSize="9pt" pl={2}>
          <Text fontWeight={600}>PrivX Premium</Text>
          <Text>The best PrivX experience, with monthly coins</Text>
        </Stack>
      </Flex>
      <Button height="30px" bg="#fed716">
        Try Now
      </Button>
    </Flex>
  );
};
export default Premium;
