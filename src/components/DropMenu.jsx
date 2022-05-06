import NavLinks from "./NavLinks";

function DropMenu(props) {
  return (
    <>
      {props.open && (
        <div className="drop-menu">
          <NavLinks handleToggle={props.handleToggle} />
        </div>
      )}
    </>
  );
}

export default DropMenu;
