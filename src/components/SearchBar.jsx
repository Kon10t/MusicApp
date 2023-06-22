import search from '../image/search-icon.svg'

const SearchBar = () => (
  <div className="search-bar flex flex-row w-[1122px] h-[73px]">
    <div className='flex items-center w-[100%]'>
      <img src={search} width="22px" alt="search-icon"/>
      <p className="font-quicksand ml-2 text-gray-500 2xl:text-2xl">Search</p>
    </div>
  </div>
)

export default SearchBar