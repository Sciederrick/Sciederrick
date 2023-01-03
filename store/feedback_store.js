import { defineStore } from 'pinia'

export const useFeedbackStore = defineStore('FeedbackStore', () => {
    let siteRating = ref(0)

    function addSiteRating(rating) {
        siteRating = rating
    }
})

if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useFeedbackStore, import.meta.hot));
}