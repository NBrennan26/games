import { useState } from "react";
import DropMenu from "./DropMenu";
import { CgMenu } from "react-icons/cg";
import { AiOutlineClose } from "react-icons/ai";

function MenuToggle() {
  const [open, setOpen] = useState(false);

  const handleToggle = () => {
    setOpen(!open)
  }

  return (
    <>
      <div className="menu-toggle-cont">
        <button onClick={handleToggle}>
          {open ? <AiOutlineClose size={30} /> : <CgMenu size={30} />}
        </button>
      </div>
      <DropMenu open={open} handleToggle={handleToggle} />
    </>
  );
}

export default MenuToggle;
