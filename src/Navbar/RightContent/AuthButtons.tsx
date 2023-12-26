import { Button } from "@chakra-ui/react";
import React from "react";
import { useSetRecoilState } from "recoil";
import { authModelState } from "../../atoms/authModalAtom";

const AuthButtons: React.FC = () => {
  const setAuthModelState = useSetRecoilState(authModelState);

  return (
    <>
      <Button
        variant="outline"
        height="28px"
        display={{ base: "none", sm: "flex" }}
        width={{ base: "70px", md: "110px" }}
        mr={2}
        onClick={() => setAuthModelState({ open: true, view: "login" })}
        color="#fed716"
        borderColor = "#fed716"
      >
        Log In
      </Button>
      <Button
        variant="solid"
        height="28px"
        display={{ base: "none", sm: "flex" }}
        width={{ base: "70px", md: "110px" }}
        mr={2}
        onClick={() => setAuthModelState({ open: true, view: "signup" })}
        // color="#fed716"
        bg = "#fed716"
        borderColor = "#fed716"
      >
        Sign Up
      </Button>
    </>
  );
};
export default AuthButtons;
