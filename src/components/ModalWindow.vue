<template>
  <div id="backdrop" @click.self="closeModalWindow">
    <div class="modalWindow">
        <p @click="closeModalWindow" id="exitButton"><b>X</b></p>
        <Settings v-if="option == 'settings'" @modalCloseSignal="closeModalWindow" @settings="applySettings" />
        <Log v-if="option == 'log'" :logs="log" />
        <Faq v-if="option == 'faq'" />
    </div>
  </div>
</template>

<script>
import Settings from './modalComponents/Settings.vue'
import Log from './modalComponents/Log.vue'
import Faq from './modalComponents/Fa.vue'

export default {
    props: [
        'option',
        'log'
    ],
    components: {
        Settings, Log, Faq
    },
    methods: {
      applySettings(pomoLength, shortLength, longLength, autostart, sound, soundVolume){
        this.$emit('setting', pomoLength, shortLength, longLength, autostart, sound, soundVolume)
      },
      closeModalWindow(){
        this.$emit('modalCloseSignal')
      }
    }
}
</script>

<style>

</style>