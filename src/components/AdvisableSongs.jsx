const AdvisableSongs = ( { cover, title, author, src } ) => {

  return (
    <div className="">
      <div className="w-[200px]">
        <img src={cover} className="rounded-3xl" alt="AdvisableSongs" />
      </div>
      <div className="font-quicksand font-normal text-lg">
          <p className="text-light-white">{title}</p>
          <p className="text-gray-500">{author}</p>
        </div>
    </div>
  )
}

export default AdvisableSongs;