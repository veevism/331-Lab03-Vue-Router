<script setup lang="ts">
import type { Ref } from 'vue'
import type { EventItem } from '@/type';
import { ref, type PropType } from 'vue';
import EventService from '@/services/EventService';

const event = ref<EventItem | null>(null)

const props = defineProps({
    id: String
})


EventService.getEventById(Number(props.id)).then((response) => {
    event.value = response.data
}).catch(error => {
    console.log(error)
})

</script>

<template>
    <div>
        <div v-if="event">
            <h1>{{ event.title }}</h1>
            <span>@{{ event.time }} on {{ event.date }} @ {{ event.location }}</span>
            <p>{{ event.description }}</p>
        </div>
    </div>
</template>


