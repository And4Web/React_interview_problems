import { ChangeEvent, useEffect, useState } from 'react';
import './style.css';
import DropdownBox from './DropdownBox';

// from 3:36:12 to 3:53:40
function SearchAutoComplete() {

  const [loading, setLoading] = useState<boolean>(false);
  const [errMsg, setErrMsg] = useState<string>('');
  const [users, setUsers] = useState<string[]>([]);

  const [searchValue, setSearchValue] = useState<string>('');
  const [filteredData, setFilteredData] = useState<string[]>([]);
  const [showDropdownBox, setShowDropDownBox] = useState<boolean>(false);

  const handleChange = (e:ChangeEvent):undefined => {
    const query = e.target.value!.toLowerCase();
    setSearchValue(query);
    if(query.length > 1){
      const filteredData = users && users.length ? users.filter((user)=>user.toLowerCase().indexOf(query) !== -1) : [];

      setFilteredData(filteredData);
      setShowDropDownBox(true)
    }
    if(query.length < 1){
      setFilteredData([])
      setShowDropDownBox(false)
    }
    
  }

  const handleClick = (e) => {
    setShowDropDownBox(false);
    setSearchValue(e.target.innerText);
    
  }

  async function fetchUsersData(){
    try {
      setLoading(true);
      const response = await fetch('https://dummyjson.com/users');
      const data = await response.json();
      if(data && data.users.length > 0){
        setUsers(data.users.map(user=>`${user.firstName} ${user.lastName}`));
        setLoading(false)
      }      
    } catch (error) {
      console.log(error?.message);
      setErrMsg(error?.message as string);
      setLoading(false)
    }
  }

  useEffect(()=>{
    fetchUsersData();
  }, [])


  return (
    <div className='sac-container'>
      <h3 className="sac-title">Project 13. Search Auto Complete</h3>
      <input value={searchValue} type="text" name='user-search' placeholder='Search user' className='sac-input' onChange={handleChange}/>
      {
        showDropdownBox && <DropdownBox data={filteredData} onClick={handleClick}/>
      }
      {
        loading && <h1 style={{textAlign: "center"}}>Loading Users...</h1>        
      }
      {
        errMsg && <h1 style={{textAlign: "center"}}>Error: {errMsg}</h1>
      }
    </div>
  )
}

export default SearchAutoComplete;