import { defineStore } from 'pinia'


export const useFeedbackStore = defineStore({
    id: 'feedback-store',
    state: () => {
      return {
        siteRating: 0,
      }
    },
    actions: {
      addSiteRating(rating) {
          this.siteRating = rating
      }
    },

  })