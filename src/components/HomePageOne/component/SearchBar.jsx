import '../../../css/SearchBar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope,faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

export default function SearchBar() {
  return (
   <div style={{width:'500px',height:'50px',display:'flex'}}>
         <input type="text" className="search form-control col-12"/>
         <button className='btn btn-dark' style={{
          borderRadius:'0 20px 20px 0'
         }}>
          <FontAwesomeIcon icon={faMagnifyingGlass}/></button>
   </div>
  );
}