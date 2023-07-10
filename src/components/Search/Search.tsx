type SearchProps = {
  storeUser: (userName: string) => Promise<void>;
}

import { SearchContainer } from './styles';
import Img from '../../../public/github.png'
import { useState, KeyboardEvent } from 'react';
import { BsSearch } from 'react-icons/bs';
import { Link } from "react-router-dom"

const Search = ({storeUser}: SearchProps) => {

  const [userName, setUserName] = useState("");

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Enter") {
      storeUser(userName);
    }
  }

  return (
     <SearchContainer>
        <img src={Img}/>
        <h2>
          Search User
        </h2>
        <div>
          <input type="text" placeholder="username" onChange={(e) => setUserName(e.target.value)} onKeyDown={handleKeyDown}/>
          <Link to="profile">
          <button onClick={() => storeUser(userName)}>
            <BsSearch />
          </button>
          </Link>
        </div>
    </SearchContainer>
  )
}

export default Search
