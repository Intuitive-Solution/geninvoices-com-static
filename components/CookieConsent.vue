<template>
  <div 
    v-if="showBanner" 
    class="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-lg"
  >
    <div class="container-custom py-4">
      <div class="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div class="flex-1">
          <p class="text-sm text-gray-700">
            We use cookies to enhance your experience and analyze our traffic. By clicking "Accept All", you consent to our use of cookies. 
            <NuxtLink to="/privacy" class="text-violet-700 hover:text-violet-800 underline">
              Learn more in our Privacy Policy
            </NuxtLink>
          </p>
        </div>
        <div class="flex flex-col sm:flex-row gap-3">
          <button 
            @click="acceptNecessary"
            class="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors duration-200"
          >
            Necessary Only
          </button>
          <button 
            @click="acceptAll"
            class="px-4 py-2 text-sm font-medium text-white bg-violet-700 hover:bg-violet-800 rounded-lg transition-colors duration-200"
          >
            Accept All
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const showBanner = ref(false)

// Check if user has already made a choice
onMounted(() => {
  const consent = localStorage.getItem('cookie-consent')
  if (!consent) {
    showBanner.value = true
  }
})

const acceptAll = () => {
  localStorage.setItem('cookie-consent', 'all')
  localStorage.setItem('analytics-consent', 'true')
  localStorage.setItem('marketing-consent', 'true')
  showBanner.value = false
  
  // Here you would initialize analytics and marketing cookies
  initializeAnalytics()
  initializeMarketing()
}

const acceptNecessary = () => {
  localStorage.setItem('cookie-consent', 'necessary')
  localStorage.setItem('analytics-consent', 'false')
  localStorage.setItem('marketing-consent', 'false')
  showBanner.value = false
}

const initializeAnalytics = () => {
  // Initialize Google Analytics or other analytics tools
  console.log('Analytics initialized')
}

const initializeMarketing = () => {
  // Initialize marketing tools like Facebook Pixel, etc.
  console.log('Marketing tools initialized')
}
</script>
