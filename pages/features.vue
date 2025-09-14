<template>
  <div>
    <!-- Hero Section -->
    <section class="section-padding bg-gradient-to-br from-white to-gray-50">
      <div class="container-custom">
        <div class="text-center max-w-4xl mx-auto">
          <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Powerful Features for
            <span class="text-gradient">Modern Businesses</span>
          </h1>
          <p class="text-xl text-gray-600 mb-8">
            Everything you need to create, manage, and track your invoices efficiently. 
            Built for businesses of all sizes.
          </p>
        </div>
      </div>
    </section>

    <!-- Features Grid -->
    <FeatureSection />

    <!-- Additional Features -->
    <section class="section-padding bg-white">
      <div class="container-custom">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Advanced Capabilities
          </h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Take your invoice management to the next level with our advanced features.
          </p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <!-- Feature 1 -->
          <div class="order-2 lg:order-1">
            <h3 class="text-2xl font-bold text-gray-900 mb-4">Automated Workflows</h3>
            <p class="text-gray-600 mb-6">
              Set up automated workflows to streamline your entire billing process. 
              From invoice creation to payment reminders, let our system handle the repetitive tasks.
            </p>
            <ul class="space-y-3">
              <li class="flex items-center gap-3">
                <svg class="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
                <span class="text-gray-600">Recurring invoice automation</span>
              </li>
              <li class="flex items-center gap-3">
                <svg class="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
                <span class="text-gray-600">Smart payment reminders</span>
              </li>
              <li class="flex items-center gap-3">
                <svg class="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
                <span class="text-gray-600">Custom approval workflows</span>
              </li>
            </ul>
          </div>
          <div class="order-1 lg:order-2">
            <div class="bg-gray-100 rounded-xl p-8">
              <div class="space-y-4">
                <div class="flex items-center gap-3 p-3 bg-white rounded-lg">
                  <div class="w-8 h-8 bg-violet-700 rounded-full flex items-center justify-center">
                    <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4" />
                    </svg>
                  </div>
                  <span class="text-sm font-medium">Invoice Created</span>
                </div>
                <div class="flex items-center gap-3 p-3 bg-white rounded-lg">
                  <div class="w-8 h-8 bg-cyan-400 rounded-full flex items-center justify-center">
                    <svg class="w-4 h-4 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <span class="text-sm font-medium">Email Sent</span>
                </div>
                <div class="flex items-center gap-3 p-3 bg-white rounded-lg">
                  <div class="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
                    <svg class="w-4 h-4 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <span class="text-sm font-medium">Reminder Scheduled</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="section-padding bg-violet-700">
      <div class="container-custom text-center">
        <h2 class="text-3xl md:text-4xl font-bold text-white mb-4">
          Ready to streamline your invoicing?
        </h2>
        <p class="text-xl text-violet-200 mb-8 max-w-2xl mx-auto">
          Join thousands of businesses that trust Geninvoices to manage their billing process.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <NuxtLink to="/pricing" class="bg-cyan-400 text-gray-900 hover:bg-cyan-300 px-8 py-3 rounded-lg font-medium transition-all duration-200">
            Start Free Trial
          </NuxtLink>
          <NuxtLink to="/contact" class="border-2 border-white text-white hover:bg-white hover:text-violet-700 px-8 py-3 rounded-lg font-medium transition-all duration-200">
            Contact Sales
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
useHead({
  title: 'Features - Geninvoices',
  meta: [
    { name: 'description', content: 'Discover all the powerful features of Geninvoices. Smart invoice creation, automated delivery, analytics, and more.' }
  ]
})
</script>
