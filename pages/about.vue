<template>
  <div>
    <!-- Hero Section -->
    <section class="section-padding bg-gradient-to-br from-white to-gray-50">
      <div class="container-custom">
        <div class="text-center max-w-4xl mx-auto">
          <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About
            <span class="text-gradient">Geninvoices</span>
          </h1>
          <p class="text-xl text-gray-600 mb-8">
            We're on a mission to simplify invoice management for businesses worldwide, 
            making professional billing accessible to everyone.
          </p>
        </div>
      </div>
    </section>

    <!-- Mission Section -->
    <section class="section-padding bg-white">
      <div class="container-custom">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Mission
            </h2>
            <p class="text-lg text-gray-600 mb-6">
              At Geninvoices, we believe that managing invoices shouldn't be complicated. 
              Our platform is designed to help businesses of all sizes create, send, and 
              track professional invoices with ease.
            </p>
            <p class="text-lg text-gray-600 mb-8">
              We're committed to providing a seamless experience that saves you time, 
              reduces errors, and helps you get paid faster. Our goal is to make 
              professional invoicing accessible to everyone, from freelancers to 
              large enterprises.
            </p>
            <div class="flex flex-col sm:flex-row gap-4">
              <NuxtLink to="/pricing" class="btn-primary">
                Get Started
              </NuxtLink>
              <NuxtLink to="/contact" class="btn-outline">
                Contact Us
              </NuxtLink>
            </div>
          </div>
          <div class="bg-gray-100 rounded-xl p-8">
            <div class="space-y-6">
              <div class="flex items-center gap-4">
                <div class="w-12 h-12 bg-violet-700 rounded-lg flex items-center justify-center">
                  <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h3 class="font-semibold text-gray-900">Fast & Efficient</h3>
                  <p class="text-sm text-gray-600">Create invoices in minutes, not hours</p>
                </div>
              </div>
              <div class="flex items-center gap-4">
                <div class="w-12 h-12 bg-cyan-400 rounded-lg flex items-center justify-center">
                  <svg class="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 class="font-semibold text-gray-900">Reliable & Secure</h3>
                  <p class="text-sm text-gray-600">Your data is safe with enterprise-grade security</p>
                </div>
              </div>
              <div class="flex items-center gap-4">
                <div class="w-12 h-12 bg-violet-700 rounded-lg flex items-center justify-center">
                  <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <div>
                  <h3 class="font-semibold text-gray-900">User-Friendly</h3>
                  <p class="text-sm text-gray-600">Intuitive design that anyone can use</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Team Section -->
    <section class="section-padding bg-gray-50">
      <div class="container-custom">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Meet Our Team
          </h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            We're a passionate team of developers, designers, and business experts 
            dedicated to making invoicing simple and efficient.
          </p>
        </div>
      </div>
    </section>

    <!-- Values Section -->
    <section class="section-padding bg-white">
      <div class="container-custom">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Values
          </h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            These core values guide everything we do at Geninvoices.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div class="text-center">
            <div class="w-16 h-16 bg-violet-700 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 class="text-lg font-semibold text-gray-900 mb-2">Innovation</h3>
            <p class="text-gray-600 text-sm">
              We constantly innovate to provide the best possible experience for our users.
            </p>
          </div>

          <div class="text-center">
            <div class="w-16 h-16 bg-cyan-400 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 class="text-lg font-semibold text-gray-900 mb-2">Reliability</h3>
            <p class="text-gray-600 text-sm">
              You can count on us to be there when you need us, with 99.9% uptime.
            </p>
          </div>

          <div class="text-center">
            <div class="w-16 h-16 bg-violet-700 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <h3 class="text-lg font-semibold text-gray-900 mb-2">Simplicity</h3>
            <p class="text-gray-600 text-sm">
              We believe in making complex tasks simple and accessible to everyone.
            </p>
          </div>

          <div class="text-center">
            <div class="w-16 h-16 bg-cyan-400 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 class="text-lg font-semibold text-gray-900 mb-2">Community</h3>
            <p class="text-gray-600 text-sm">
              We're building a community of users who help each other succeed.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="section-padding bg-violet-700">
      <div class="container-custom text-center">
        <h2 class="text-3xl md:text-4xl font-bold text-white mb-4">
          Ready to join our community?
        </h2>
        <p class="text-xl text-violet-200 mb-8 max-w-2xl mx-auto">
          Start your free trial today and experience the difference that Geninvoices can make for your business.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <NuxtLink to="/pricing" class="bg-cyan-400 text-gray-900 hover:bg-cyan-300 px-8 py-3 rounded-lg font-medium transition-all duration-200">
            Start Free Trial
          </NuxtLink>
          <NuxtLink to="/contact" class="border-2 border-white text-white hover:bg-white hover:text-violet-700 px-8 py-3 rounded-lg font-medium transition-all duration-200">
            Contact Us
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
useHead({
  title: 'About Us - Geninvoices',
  meta: [
    { name: 'description', content: 'Learn about Geninvoices and our mission to simplify invoice management for businesses worldwide.' }
  ]
})
</script>
