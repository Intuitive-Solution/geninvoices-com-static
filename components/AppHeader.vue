<template>
  <header class="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
    <nav class="container-custom">
      <div class="flex items-center justify-between h-16">
        <!-- Logo -->
        <div class="flex items-center">
          <NuxtLink to="/" class="flex items-center space-x-2">
            <img src="/logo.svg" alt="Geninvoices" class="h-8 w-auto" />
            <span class="text-xl font-bold text-gray-900">Geninvoices</span>
          </NuxtLink>
        </div>

        <!-- Desktop Navigation -->
        <div class="hidden md:flex items-center space-x-8">
          <NuxtLink 
            to="/" 
            class="text-gray-700 hover:text-violet-700 transition-colors duration-200"
            :class="{ 'text-violet-700 font-medium': $route.path === '/' }"
          >
            Home
          </NuxtLink>
          <NuxtLink 
            to="/features" 
            class="text-gray-700 hover:text-violet-700 transition-colors duration-200"
            :class="{ 'text-violet-700 font-medium': $route.path === '/features' }"
          >
            Features
          </NuxtLink>
          <NuxtLink 
            to="/pricing" 
            class="text-gray-700 hover:text-violet-700 transition-colors duration-200"
            :class="{ 'text-violet-700 font-medium': $route.path === '/pricing' }"
          >
            Pricing
          </NuxtLink>
          <NuxtLink 
            to="/about" 
            class="text-gray-700 hover:text-violet-700 transition-colors duration-200"
            :class="{ 'text-violet-700 font-medium': $route.path === '/about' }"
          >
            About Us
          </NuxtLink>
          <NuxtLink 
            to="/contact" 
            class="text-gray-700 hover:text-violet-700 transition-colors duration-200"
            :class="{ 'text-violet-700 font-medium': $route.path === '/contact' }"
          >
            Contact Us
          </NuxtLink>
        </div>

        <!-- CTA Buttons -->
        <div class="hidden md:flex items-center space-x-4">
          <a href="https://apps.geninvoices.com" target="_blank" rel="noopener noreferrer" class="btn-outline">
            Login
          </a>
          <NuxtLink to="/pricing" class="btn-primary">
            Get Started
          </NuxtLink>
        </div>

        <!-- Mobile menu button -->
        <div class="md:hidden">
          <button 
            @click="mobileMenuOpen = !mobileMenuOpen"
            class="text-gray-700 hover:text-violet-700 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2 rounded-md p-2"
            aria-label="Toggle mobile menu"
          >
            <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path v-if="!mobileMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>

      <!-- Mobile Navigation -->
      <div v-if="mobileMenuOpen" class="md:hidden border-t border-gray-200 py-4">
        <div class="flex flex-col space-y-4">
          <NuxtLink 
            to="/" 
            @click="mobileMenuOpen = false"
            class="text-gray-700 hover:text-violet-700 transition-colors duration-200 px-4 py-2"
            :class="{ 'text-violet-700 font-medium bg-violet-50': $route.path === '/' }"
          >
            Home
          </NuxtLink>
          <NuxtLink 
            to="/features" 
            @click="mobileMenuOpen = false"
            class="text-gray-700 hover:text-violet-700 transition-colors duration-200 px-4 py-2"
            :class="{ 'text-violet-700 font-medium bg-violet-50': $route.path === '/features' }"
          >
            Features
          </NuxtLink>
          <NuxtLink 
            to="/pricing" 
            @click="mobileMenuOpen = false"
            class="text-gray-700 hover:text-violet-700 transition-colors duration-200 px-4 py-2"
            :class="{ 'text-violet-700 font-medium bg-violet-50': $route.path === '/pricing' }"
          >
            Pricing
          </NuxtLink>
          <NuxtLink 
            to="/about" 
            @click="mobileMenuOpen = false"
            class="text-gray-700 hover:text-violet-700 transition-colors duration-200 px-4 py-2"
            :class="{ 'text-violet-700 font-medium bg-violet-50': $route.path === '/about' }"
          >
            About Us
          </NuxtLink>
          <NuxtLink 
            to="/contact" 
            @click="mobileMenuOpen = false"
            class="text-gray-700 hover:text-violet-700 transition-colors duration-200 px-4 py-2"
            :class="{ 'text-violet-700 font-medium bg-violet-50': $route.path === '/contact' }"
          >
            Contact Us
          </NuxtLink>
          <div class="flex flex-col space-y-2 px-4 pt-4 border-t border-gray-200">
            <a href="https://apps.geninvocies.com" target="_blank" rel="noopener noreferrer" @click="mobileMenuOpen = false" class="btn-outline text-center">
              Login
            </a>
            <NuxtLink to="/pricing" @click="mobileMenuOpen = false" class="btn-primary text-center">
              Get Started
            </NuxtLink>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup>
const mobileMenuOpen = ref(false)

// Close mobile menu when route changes
watch(() => useRoute().path, () => {
  mobileMenuOpen.value = false
})
</script>
