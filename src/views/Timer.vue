<template>
  <div id="timerPage">
    <MenuBar @modalSignal="toggleModal" />
    <ModalWindow
      v-if="showModal"
      :option="modalOption"
      @modalCloseSignal="toggleModal"
      @setting="applySettings"
    />
    <div id="timer">
      <input
        type="text"
        v-model="intent"
        name="intentInput"
        placeholder="Your Intention Here"
      />

      <p ref="clock" id="clock">{{ millisToMinutesAndSeconds(time) }}</p>

      <div class="timerButtons">
        <button
          ref="playButton"
          @click="continueTimer"
          class="timerButton playButton"
        >
          Play
        </button>
        <button
          @click="pauseTimer"
          ref="pauseButton"
          class="timerButton pauseButton"
        >
          Pause
        </button>
        <button
          ref="resetButton"
          @click="resetTimer(this.currentSetting)"
          class="timerButton resetButton"
        >
          Reset
        </button>
      </div>
      <div class="optionsButtons">
        <button
          ref="pomoButton"
          @click="startPom"
          class="optionButton pomoButton"
        >
          Pomodoro
        </button>
        <button
          ref="shortButton"
          @click="startShort"
          class="optionButton sBreakButton"
        >
          Short Break
        </button>
        <button
          ref="longButton"
          @click="startLong"
          class="optionButton lBreakButton"
        >
          Long Break
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import MenuBar from "../components/MenuBar.vue";
import ModalWindow from "../components/ModalWindow.vue";

export default {
  created() {
    //notification permissions
    if (Notification.permission === "granted") {
    } else if (Notification.permission !== "denied") {
      Notification.requestPermission().then((permission) => {
        console.log(permission);
      });
    }

    console.log($cookies.get("cPomoLength"));

    /* if($cookies.get('cPomoLength')){
      var cookieExists = true
    }

    console.log(cookieExists) */

    //applying settings from previous visits
    this.applySettings(
      $cookies.get("cPomoLength"),
      $cookies.get("cShortLength"),
      $cookies.get("cLongLength"),
      $cookies.get("cAutostart")
    );
  },
  components: {
    MenuBar,
    ModalWindow,
  },
  data() {
    return {
      showModal: false,
      modalOption: "",
      autostart: false,

      pomoCounter: 0,

      sound: '../assets/bell1.flac',

      pomLength: 1500000,
      shortLength: 300000,
      longLength: 1200000,
      currentSetting: 0,
      time: 1500000,
      pomoInterval: null,
      timerOn: false,
      intent: "",
    };
  },
  methods: {
    showNotification(setting) {
      if (setting == 0) {
        const notification = new Notification("Pomodoro completed", {
          body: "Pomodoro timer hit 0, time for a break!",
        });
      } else if (setting == 1 || setting == 2) {
        const notification = new Notification("Break completed", {
          body: "Break timer hit 0, time to get back to work!",
        });
      }
    },

    applySettings(pomoLength, shortLength, longLength, autostart) {
      if (pomoLength) {
        this.pomLength = pomoLength * 600;
        $cookies.set("cPomoLength", pomoLength);
      }
      if (shortLength) {
        this.shortLength = shortLength * 600;
        $cookies.set("cShortLength", shortLength);
      }
      if (longLength) {
        this.longLength = longLength * 600;
        $cookies.set("cLongLength", longLength);
      }
      this.autostart = autostart;
      $cookies.set("cAutostart", autostart);
      this.updateTitle();
      this.time = this.lengthRetriever(this.currentSetting);
    },

    toggleModal(setting) {
      this.modalOption = setting;
      this.showModal = !this.showModal;
    },

    updateTitle() {
      this.$emit(
        "titleDynamic",
        this.millisToMinutesAndSeconds(this.time),
        this.settingNameDeterminer(this.currentSetting)
      );
    },

    //timer button methods
    continueTimer() {
      if (this.currentSetting == 0) {
        this.$refs.pomoButton.classList.add("buttonActive");
      }

      this.$refs.playButton.classList.add("buttonActive");
      this.$refs.pauseButton.classList.remove("buttonActive");
      this.$refs.resetButton.classList.remove("buttonActive");

      clearInterval(this.pomoInterval);
      this.timerOn = true;
      this.timerHandler(this.currentSetting);
    },
    pauseTimer() {
      if (this.timerOn) {
        this.$refs.playButton.classList.remove("buttonActive");
        this.$refs.pauseButton.classList.add("buttonActive");
        this.$refs.resetButton.classList.remove("buttonActive");
      }

      this.timerOn = false;
      clearInterval(this.pomoInterval);
    },

    lengthRetriever(setting) {
      if (setting == 0) {
        return this.pomLength;
      } else if (setting == 1) {
        return this.shortLength;
      } else if (setting == 2) {
        return this.longLength;
      }
    },

    settingNameDeterminer(setting) {
      if (setting == 0) {
        return "Pomo";
      } else if (setting == 1) {
        return "Break";
      } else if (setting == 2) {
        return "Long Break";
      }
    },

    timerHandler(setting) {
      this.pomoInterval = setInterval(() => {
        this.time -= 1000;
        this.updateTitle();
        if (this.time < 0) {
          this.showNotification(setting);
          var sound = new Audio(require('../assets/bell1.flac'));
          sound.play();
          /* this.logSession() */
          if (this.autostart) {
            if (setting == 0) {
              if (this.pomoCounter >= 3) {
                this.startLong();
                this.pomoCounter = 0;
              } else {
                this.startShort();
              }
            } else {
              this.startPom();
              this.pomoCounter++;
            }
          } else {
            this.resetTimer(setting);
          }
        }
      }, 1000);
    },

    resetTimer(setting) {
      this.$refs.playButton.classList.remove("buttonActive");
      this.$refs.pauseButton.classList.remove("buttonActive");
      this.$refs.resetButton.classList.add("buttonActive");

      clearInterval(this.pomoInterval);
      this.timerOn = false;
      this.time = this.lengthRetriever(setting);
      this.updateTitle();
    },

    startTimer(setting) {
      this.updateTitle();
      if (this.timerOn == false) {
        this.$refs.playButton.classList.add("buttonActive");
        this.$refs.pauseButton.classList.remove("buttonActive");
        this.$refs.resetButton.classList.remove("buttonActive");

        this.time = this.lengthRetriever(setting);
        this.timerOn = true;
        this.timerHandler(this.currentSetting);
      } else {
        this.resetTimer(this.currentSetting);
      }
    },

    //options
    startPom() {
      this.$refs.pomoButton.classList.add("buttonActive");
      this.$refs.shortButton.classList.remove("buttonActive");
      this.$refs.longButton.classList.remove("buttonActive");

      this.currentSetting = 0;
      if (this.timerOn) {
        this.resetTimer(this.currentSetting);
      }
      this.startTimer(this.currentSetting);
    },
    startShort() {
      this.$refs.pomoButton.classList.remove("buttonActive");
      this.$refs.shortButton.classList.add("buttonActive");
      this.$refs.longButton.classList.remove("buttonActive");

      this.currentSetting = 1;
      if (this.timerOn) {
        this.resetTimer(this.currentSetting);
      }
      this.startTimer(this.currentSetting);
    },
    startLong() {
      this.$refs.pomoButton.classList.remove("buttonActive");
      this.$refs.shortButton.classList.remove("buttonActive");
      this.$refs.longButton.classList.add("buttonActive");

      this.currentSetting = 2;
      if (this.timerOn) {
        this.resetTimer(this.currentSetting);
      }
      this.startTimer(this.currentSetting);
    },
    millisToMinutesAndSeconds(millis) {
      var minutes = Math.floor(millis / 60000);
      var seconds = ((millis % 60000) / 1000).toFixed(0);
      return minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
    },
  },
};
</script>

<style>
</style>