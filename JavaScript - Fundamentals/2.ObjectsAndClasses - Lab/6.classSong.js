function classSong(arr) {
  let songsCount = arr.shift();
  let typeListAll = arr.pop();

  class Song {
    constructor(typeList, name, time) {
      this.typeList = typeList;
      this.name = name;
      this.time = time;
    }
  }

  for (let song of arr) {
    let [typeList, name, time] = song.split("_");
    let curSong = new Song(typeList, name, time);

    if (typeListAll === "all") {
      console.log(curSong.name);
    } else if (typeListAll === curSong.typeList) {
      console.log(curSong.name);
    }
  }
}

classSong([
  "4",
  "favourite_DownTown_3:14",
  "listenLater_Andalouse_3:24",
  "favourite_In To The Night_3:58",
  "favourite_Live It Up_3:48",
  "listenLater",
]);
