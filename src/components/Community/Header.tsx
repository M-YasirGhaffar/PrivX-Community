import {
  Box,
  Button,
  Flex,
  Icon,
  Image,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import { Community } from "../../atoms/CommunitiesAtom";
import { TbSocial } from "react-icons/tb";
import { MdOutlineSocialDistance } from "react-icons/md";


import useCommunityData from "../../hooks/useCommunityData";

type HeaderProps = {
  communityData: Community;
};

const Header: React.FC<HeaderProps> = ({ communityData }) => {
  const bg = useColorModeValue("white", "#fed716");
  const { communityStateValue, onJoinOrCommunity, loading } =
    useCommunityData();
  const isJoined = !!communityStateValue.mySnippets.find(
    (item) => item.communityId === communityData.id
  );

  return (
    <Flex direction="column" width="100%" height="146px">
      <Box height="50%" bg="#fed716" />
      <Flex justifyContent="center" bg={bg} height="50%">
        <Flex width="95%" maxWidth="860px">
          {communityStateValue.currentCommunity?.imageURL ? (
            <Image
              borderRadius="full"
              boxSize="66px"
              src={communityStateValue.currentCommunity.imageURL}
              alt="profile Image"
              position="relative"
              top={-3}
              color="#fed716"
              border="4px solid white"
            />
          ) : (
            <Icon
              as={MdOutlineSocialDistance}
              fontSize={64}
              position="relative"
              top={-3}
              color="#fed716"
              border="4px solid black"
              bg="black"
              zIndex="10"
              padding={1}
              borderRadius="50%"
            />
          )}
          <Flex padding="10px 16px">
            <Flex direction="column" mr={6}>
              <Text fontWeight={800} fontSize="16px">
                {communityData.id}
              </Text>
              <Text fontWeight={600} fontSize="10px" color="gray.500">
                x/{communityData.id}
              </Text>
            </Flex>
            <Button
              variant={isJoined ? "outline" : "solid"}
              border="2px solid white"
              color="white"
              height="30px"
              pr={6}
              pl={6}
              bg="#fed716"
              isLoading={loading}
              onClick={() => {
                onJoinOrCommunity(communityData, isJoined);
              }}
            >
              {isJoined ? "Joined" : "Join"}
            </Button>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};
export default Header;
