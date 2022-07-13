<template>
  <div id="backdrop" @click.self="closeModalWindow">
    <div class="modalWindow">
        <Settings v-if="option == 'settings'" />
        <Log v-if="option == 'log'" />
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
        'option'
    ],
    components: {
        Settings, Log, Faq
    }
}
</script>

<style>

</style>