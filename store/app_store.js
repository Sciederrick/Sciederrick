import { defineStore } from 'pinia'


export const useAppStore = defineStore({
    id: 'app-store',
    state: () => {
      return {
        siteRating: 0,
        heroLoading: true,
        footerLoading: true,
        feedbackLoading: true
      }
    },
    actions: {
      addSiteRating(rating) {
          this.siteRating = rating
      }
    },

  })