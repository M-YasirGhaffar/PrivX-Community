import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Flex,
  Icon,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Switch,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import { signOut, User } from "firebase/auth";
import React from "react";
import { CgProfile } from "react-icons/cg";
// import { FaRedditSquare } from "react-icons/fa";
import { IoShareSocialSharp } from "react-icons/io5";


import { MdOutlineLogin } from "react-icons/md";
import { VscAccount } from "react-icons/vsc";

import { useRouter } from "next/router";
import { IoSparkles } from "react-icons/io5";
import { useSetRecoilState } from "recoil";
import { authModelState } from "../../atoms/authModalAtom";
import { auth } from "../../firebase/clientApp";

type UserMenuProps = {
  user?: User | null;
};

const UserMenu: React.FC<UserMenuProps> = ({ user }) => {
  const router = useRouter();
  const setAuthModalState = useSetRecoilState(authModelState);
  const { colorMode, toggleColorMode } = useColorMode();

  const handelNavigatePage = () => {
    if (user) {
      router.push({
        pathname: `/profile/${user?.uid}`,
        query: {
          uid: user?.uid.toString(),
        },
      });
    }
  };

  const logout = async () => {
    await signOut(auth);
  };

  return (
    <Menu>
      <MenuButton
        cursor="pointer"
        padding="0px 6px"
        borderRadius={4}
        _hover={{ outline: "1px solid", outlineColor: "blue.500" }}
      >
        <Flex align="center">
          <Flex align="center">
            {user ? (
              <>
                <Icon
                  fontSize={28}
                  mr={1}
                  color="black"
                  as={ IoShareSocialSharp }
                  border="2px solid"
                  borderColor="#fed716"
                  borderRadius="5px"
                />
                <Flex
                  display={{ base: "none", lg: "flex" }}
                  flexDirection="column"
                  fontSize="8pt"
                  alignItems="flex-start"
                  mr={8}
                >
                  <Text fontWeight={700}>
                    {user?.displayName || user?.email?.split("@")[0]}
                  </Text>
                  <Flex alignItems="center">
                    {/* <Icon as={IoSparkles} color="brand.100" mr={1} /> */}
                    <Text color="#fed716">@{user?.email}</Text>
                  </Flex>
                </Flex>
              </>
            ) : (
              <Icon fontSize={24} color="#fed716" as={VscAccount} />
            )}
          </Flex>
          <ChevronDownIcon />
        </Flex>
      </MenuButton>
      <MenuList mt={2}>
        <MenuItem fontSize="10pt" fontWeight="700" closeOnSelect={false}>
          <Flex gap={2} align="center">
            <Switch
              isChecked={colorMode === "dark" ? true : false}
              onChange={toggleColorMode}
            />
            <Text>Dark Mode</Text>
          </Flex>
        </MenuItem>
        {user ? (
          <>
            <MenuDivider />
            <MenuItem
              fontSize="10px"
              fontWeight={700}
              _hover={{ bg: "blue.500", color: "white" }}
            >
              <Flex align="center" onClick={handelNavigatePage}>
                <Icon fontSize={20} mr={2} as={CgProfile} />
                Profile
              </Flex>
            </MenuItem>
            <MenuDivider />
            <MenuItem
              fontSize="10px"
              fontWeight={700}
              _hover={{ bg: "blue.500", color: "white" }}
              onClick={logout}
            >
              <Flex align="center">
                <Icon fontSize={20} mr={2} as={MdOutlineLogin} />
                Log Out
              </Flex>
            </MenuItem>
          </>
        ) : (
          <>
            <MenuItem
              fontSize="10px"
              fontWeight={700}
              _hover={{ bg: "blue.500", color: "white" }}
              onClick={() => setAuthModalState({ open: true, view: "login" })}
            >
              <Flex align="center">
                <Icon fontSize={20} mr={2} as={MdOutlineLogin} />
                Log In / Sign Up
              </Flex>
            </MenuItem>
          </>
        )}
      </MenuList>
    </Menu>
  );
};
export default UserMenu;
