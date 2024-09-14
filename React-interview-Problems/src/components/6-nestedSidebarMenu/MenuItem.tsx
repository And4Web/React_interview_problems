import {  useState } from "react";
import MenuList from "./MenuList";

type TreeViewMenuObject = {
  label: string;
  to: string;
  children?: TreeViewMenuObject[];
};
type Props = {
  menu: TreeViewMenuObject;
};

function MenuItem({ menu }: Props) {
  const [selectedMenu, setSelectedMenu] = useState<TreeViewMenuObject>();
  const [selected, setSelected] = useState<boolean>(false);

  const handleSelect = (menu: TreeViewMenuObject) => {
    setSelectedMenu(menu);
    setSelected(!selected);
  };
  // console.log("menu, selectedMenu >>> ", menu, selectedMenu);

  return (
    <li className="nsd-menu-item">
      <div className="nsd-menu-label">
        <p>{menu.label}</p>
        {menu?.children && (
          <span
            onClick={() => handleSelect(menu)}
            className="nsd-icon-container"
          >
            {selected && menu.label === selectedMenu?.label ? "-" : "+"}
          </span>
        )}
      </div>

      {
        selected && <MenuList menus={selectedMenu?.children}/>
      }
    </li>
  );
}

export default MenuItem;

{
  /* <li>{menu.label} <span onClick={()=>handleSelect(menu)} style={{cursor: "pointer"}}>{menu.label === selectedMenu?.label?"-" : "+"}</span> */
}
{
  /* {menu.children && (menu.label === selectedMenu?.label) ? <MenuItem key={index} selectedMenu={menu}/> : null} */
}
{
  /* </li> */
}
