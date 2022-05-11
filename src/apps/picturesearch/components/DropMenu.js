const DropMenu = (props) => {
  return (
    <div id="ps-drop-menu" style={props.dropMenuStyle}>
      <form>
        <select
          name="itemSelect"
          value={props.selectedItem}
          onChange={(e) => props.handleSelectItem(e)}
        >
          <option value="">--Please Select--</option>
          <option value="crab">Crab</option>
          <option value="hamster">Hamster</option>
          <option value="mouse">Mouse</option>
          <option value="needle">Needle</option>
          <option value="pear">Pear</option>
        </select>
      </form>
    </div>
  );
};

export default DropMenu;
