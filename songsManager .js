
    
let SongsManager = function(){
    let o={}
      let addSong  = (name,url) =>{ 
  
       o.name =name
       o.url=(url.split("?")[1]).split("=")[1]
      }
  
      let getSong  = name => {
          console.log(o)
          for(let i in o)
              if(name!==o.name)
              console.log("there is no such song in songsManager")
               else
               return "https://www.youtube.com/watch?v="+o.url
           }
     
      return{
          addSong: addSong   ,
          getSong: getSong   ,
       
      }
  }
  
  let songsManager = SongsManager()
  // songsManager.addSong("sax", "https://www.youtube.com/watch?v=3JZ4pnNtyxQ")
  songsManager.addSong("how long", "https://www.youtube.com/watch?v=CwfoyVa980U")
  // songsManager.addSong("ain't me", "https://www.youtube.com/watch?v=D5drYkLiLI8")
  
  songsManager.getSong("how long")
  
  