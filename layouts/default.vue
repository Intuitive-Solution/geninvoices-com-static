<template>
  <div class="min-h-screen flex flex-col">
    <AppHeader />
    <main class="flex-1">
      <slot />
    </main>
    <AppFooter />
    <CookieConsent />
  </div>
</template>

<script setup>
// Layout logic can go here if needed
</script>
