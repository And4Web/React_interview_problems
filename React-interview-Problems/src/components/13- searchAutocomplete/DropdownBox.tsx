type Props = {
  data: string[] | [];
  onClick: (e) => undefined;
}

function DropdownBox({data, onClick}: Props) {
  return (
    <div className="sac-dropdown">
      <ul>
        {
          data && data?.map((item, index)=>{
            return (
              <li key={index} onClick={onClick}>{item}</li>
            )
          })
        }
      </ul>
    </div>
  )
}

export default DropdownBox