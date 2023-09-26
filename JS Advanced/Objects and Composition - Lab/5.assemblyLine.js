function createAssemblyLine() {
  return {
    hasClima: function hasClima(obj) {
      const template = {
        temp: 21,
        tempSettings: 21,
        adjustTemp: function adjustTemp() {
          if (obj.temp < obj.tempSettings) obj.temp++;
          else if (obj.temp > obj.tempSettings) obj.temp--;
        },
      };

      return Object.assign(obj, template);
    },
    hasAudio: function hasAudio(obj) {
      const template = {
        currentTrack: { name: null, artist: null },
        nowPlaying: function nowPlaying() {
          if (obj.currentTrack !== null) {
            console.log(
              `Now playing '${obj.currentTrack.name}' by ${obj.currentTrack.artist}`
            );
          }
        },
      };

      return Object.assign(obj, template);
    },
    hasParktronic: function hasParktronic(obj) {
      const template = {
        checkDistance: function checkDistance(distance) {
          if (distance < 0.1) {
            console.log("Beep! Beep! Beep!");
          } else if (distance >= 0.1 && distance < 0.25) {
            console.log("Beep! Beep!");
          } else if (distance >= 0.25 && distance < 0.5) {
            console.log("Beep!");
          } else {
            console.log("");
          }
        },
      };

      return Object.assign(obj, template);
    },
  };
}

const assemblyLine = createAssemblyLine();

const myCar = {
  make: "Toyota",
  model: "Avensis",
};

console.log(myCar);
