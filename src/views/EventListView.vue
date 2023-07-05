<script setup lang="ts">
import EventCard from '../components/EventCard.vue'
import type { EventItem } from '@/type'
import { ref, watchEffect, type Ref, computed } from 'vue'
import EventService from '@/services/EventService'
import type { AxiosResponse } from 'axios';
const events: Ref<Array<EventItem>> = ref([])

const totalEvent = ref<number>(0)

const hasNextPage = computed(() => {
  const totalPages = Math.ceil(totalEvent.value / 2)
  return props.page.valueOf() < totalPages
})
const props = defineProps({
  page: {
    type: Number,
    required: true
  }
})
watchEffect(() => {
  EventService.getEvent(2, props.page).then((response: AxiosResponse<EventItem[]>) => {
    events.value = response.data
    totalEvent.value = response.headers['x-total-count']

  })
})

</script>

<template>
  <h1>Events For Good</h1>
  <main class="events">
    <EventCard v-for="event in events" :key="event.id" :event="event"></EventCard>
    <RouterLink :to="{ name: 'event-list', query: { page: page - 1 } }" rel="prev" v-if="page != 1"> Prev Page
    </RouterLink>
    <RouterLink :to="{ name: 'event-list', query: { page: page + 1 } }" rel="next" v-if="hasNextPage"> Next Page
    </RouterLink>
  </main>
</template>

<style scoped>
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
