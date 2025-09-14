<template>
  <section class="section-padding bg-gradient-to-br from-white to-gray-50">
    <div class="container-custom">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <!-- Content -->
        <div class="text-center lg:text-left">
          <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Generate Professional
            <span class="text-gradient">Invoices</span>
            in Minutes
          </h1>
          <p class="text-xl text-gray-600 mb-8 leading-relaxed">
            Streamline your billing process with our smart invoice generation platform. 
            Create, customize, and send professional invoices effortlessly.
          </p>
          
          <!-- CTA Form -->
          <div class="flex flex-col sm:flex-row gap-4 mb-8">
            <div class="flex-1">
              <input 
                type="email" 
                v-model="email"
                placeholder="Enter your email address"
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent"
                @keyup.enter="handleGetStarted"
              />
            </div>
            <button 
              @click="handleGetStarted"
              class="btn-primary whitespace-nowrap"
              :disabled="!email"
            >
              Get Started Free
            </button>
          </div>
          
          <!-- Trust Indicators -->
          <div class="flex flex-col sm:flex-row items-center gap-6 text-sm text-gray-500">
            <div class="flex items-center gap-2">
              <svg class="h-5 w-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
              </svg>
              Free 14-day trial
            </div>
            <div class="flex items-center gap-2">
              <svg class="h-5 w-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
              </svg>
              No credit card required
            </div>
            <div class="flex items-center gap-2">
              <svg class="h-5 w-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
              </svg>
              Cancel anytime
            </div>
          </div>
        </div>

        <!-- Visual Element -->
        <div class="relative">
          <div class="relative z-10 bg-white rounded-2xl shadow-2xl p-8 border border-gray-200">
            <!-- Invoice Preview -->
            <div class="space-y-4">
              <div class="flex items-center justify-between border-b border-gray-200 pb-4">
                <div class="flex items-center space-x-3">
                  <div class="w-10 h-10 bg-violet-700 rounded-lg flex items-center justify-center">
                    <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 class="font-semibold text-gray-900">Invoice #INV-001</h3>
                    <p class="text-sm text-gray-500">Due: Jan 15, 2024</p>
                  </div>
                </div>
                <div class="text-right">
                  <p class="text-2xl font-bold text-violet-700">$2,500.00</p>
                </div>
              </div>
              
              <div class="space-y-3">
                <div class="flex justify-between">
                  <span class="text-gray-600">Web Development Services</span>
                  <span class="font-medium">$2,500.00</span>
                </div>
                <div class="flex justify-between text-sm text-gray-500">
                  <span>Subtotal</span>
                  <span>$2,500.00</span>
                </div>
                <div class="flex justify-between text-sm text-gray-500">
                  <span>Tax (8%)</span>
                  <span>$200.00</span>
                </div>
                <div class="flex justify-between font-semibold border-t border-gray-200 pt-2">
                  <span>Total</span>
                  <span>$2,700.00</span>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Decorative Elements -->
          <div class="absolute -top-4 -right-4 w-24 h-24 bg-cyan-400 rounded-full opacity-20"></div>
          <div class="absolute -bottom-4 -left-4 w-16 h-16 bg-violet-700 rounded-full opacity-20"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const email = ref('')

const handleGetStarted = () => {
  if (email.value) {
    // Navigate to pricing or signup
    navigateTo('/pricing')
  }
}
</script>
