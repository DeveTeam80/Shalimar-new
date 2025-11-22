import { useEffect } from "react";
import { stickyNav } from "../../utils";
import Default from "./Default";
import Header1 from "./Header1";
import Header3 from "./Header3";
const Header = ({ header }) => {
  useEffect(() => {
    stickyNav();
  }, []);

  return(
    <Default/>
  )
};
export default Header;
