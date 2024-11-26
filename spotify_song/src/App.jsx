import React from "react"
import { FaSpotify } from "react-icons/fa"
import axios from "axios"
import { useState } from "react"


function App(){
  const [URL, setURL] = useState("")

  const handleURL = (e) => {
    e.preventDefault()
    setURL(e.target.value)
  }

  const downloadSong = async () => {
    setURL("")
    const options = {
      method: 'GET',
      url: 'https://spotify-downloader9.p.rapidapi.com/downloadSong',
      params: {
        songId: '${URL}'
      },
      headers: {
        'x-rapidapi-key': import.meta.env.VITE_API_KEY,
        'x-rapidapi-host': 'spotify-downloader9.p.rapidapi.com'
      }
    };
    try {
      const rspn = await axios.request(options)
      window.location.href = console.log(rspn.data.data.downloadLink)
    } catch (error) {
      console.log(error)
    }
  }
downloadSong()
  return(
    <div className="h-screen w-screen flex flex-col gap-y-5 items-center justify-center bg-emerald-400">
      <div className="flex items-center flix gap-x-2 text-xl">
        <FaSpotify size={50}/>
        <h2>Song Downloader</h2> 
      </div>
      <div className="flex gap-x-2">
        <input type="url" className="h-10 w-[400px] gap-y-2 border-none outline-none px-4 rounded-lg bg-emerald-800 text-white" 
          onChange={handleURL} value={URL}
        />
        <button className="bg-emerald-800	text-white p-2 rounded-lg font-bold hover:bg-white hover:text-emerald-800" onClick={downloadSong}>Download</button>
      </div>
    </div>
  )
}

export default App