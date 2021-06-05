import { useState } from "react";

export default function useShowMenu() {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  function handleClick() {
    setIsMenuVisible(!isMenuVisible);
    console.log(isMenuVisible);
  }

  return [isMenuVisible, handleClick];
};
