import NavLinks from "./NavLinks";

function DropMenu(props) {
  return (
    <>
      {props.open && (
        <div className="drop-menu">
          <NavLinks />
        </div>
      )}
    </>
  );
}

export default DropMenu;
