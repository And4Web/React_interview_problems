import MenuList from './MenuList';
import './style.css'

// from 1:39:20 to 2:01:20

// same project is for dynamic navigation menu or recursive menu UI or nested data structure or tree-view menu bar

type TreeViewMenuObject = {
  label: string;
  to: string;
  children?: TreeViewMenuObject
}
type Props = {
  menus: TreeViewMenuObject[] | undefined;
}

function TreeViewSideMenus({menus}:Props) {

  return (
    <div className='nsd-container'>
      <h3 className="nsd-title">Project 6. Nested menubar or Dynamic navigation bar</h3>
      <MenuList menus={menus}/>
    </div>
  )
}

export default TreeViewSideMenus