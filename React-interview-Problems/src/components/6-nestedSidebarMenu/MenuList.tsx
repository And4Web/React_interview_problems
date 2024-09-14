import MenuItem from "./MenuItem";

type TreeViewMenuObject = {
  label: string;
  to: string;
  children?: TreeViewMenuObject;
};
type Props = {
  menus: TreeViewMenuObject[];
};

function MenuList({menus}:Props) {
 
  return (
    <ul className="nsd-menu-list">
      {menus && menus.length > 0 && menus.map((menu, index)=>(
        
        <MenuItem key={index} menu={menu}/>
              
      ))}
    </ul>
  );
}

export default MenuList;
