import search from '../image/search-icon.svg'

const SearchBar = () => (
  <div className="search-bar flex flex-row w-[1122px] h-[73px]">
    <div className='flex items-center w-[100%] h-[50%] my-8 px-8'>
      <img src={search} width="18px" alt="search-icon"/>
      <p className="font-quicksand ml-5 text-gray-500 text-md">Search</p>
    </div>
  </div>
)

export default SearchBar