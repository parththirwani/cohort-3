function App() {

  return (
    <div className="h-screen bg-[#00264f]">
    <div className=" flex flex-col items-center space-y-20">
      <div className="text-blue-500 text-4xl mt-[40px]">
      Webinar
      <span className="text-4xl text-white">.gg</span>
      </div>
      <div className="text-3xl text-white ">
        Verify Your Age
      </div>
      <div className="text-gray-400 ">
        Please confirm your birth year. This data will not be stored
      </div>
      <input input="text" placeholder="Your Birth year" className="rounded-lg box-border h-12 w-80 p-4 bg-[#18395f] text-white border-none">
      </input>
      <button className="bg-gray-200 rounded-lg box-border h-12 w-80 hover:bg-gray-500">Continue</button>
    </div>
    </div>
  )
}

export default App
