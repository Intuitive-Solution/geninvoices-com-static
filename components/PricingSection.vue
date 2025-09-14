<template>
  <section class="section-padding bg-white">
    <div class="container-custom">
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Simple, transparent pricing
        </h2>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto">
          Choose the plan that fits your business needs. All plans include our core features with no hidden fees.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <!-- Starter Plan -->
        <div class="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300">
          <div class="text-center mb-8">
            <h3 class="text-xl font-semibold text-gray-900 mb-2">Starter</h3>
            <p class="text-gray-600 mb-4">Perfect for freelancers and small businesses</p>
            <div class="mb-4">
              <span class="text-4xl font-bold text-gray-900">$9</span>
              <span class="text-gray-600">/month</span>
            </div>
            <NuxtLink to="/pricing" class="btn-outline w-full">
              Get Started
            </NuxtLink>
          </div>
          
          <ul class="space-y-4">
            <li class="flex items-center gap-3">
              <svg class="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
              </svg>
              <span class="text-gray-600">Up to 50 invoices/month</span>
            </li>
            <li class="flex items-center gap-3">
              <svg class="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
              </svg>
              <span class="text-gray-600">Basic templates</span>
            </li>
            <li class="flex items-center gap-3">
              <svg class="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
              </svg>
              <span class="text-gray-600">Email delivery</span>
            </li>
            <li class="flex items-center gap-3">
              <svg class="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
              </svg>
              <span class="text-gray-600">Basic analytics</span>
            </li>
            <li class="flex items-center gap-3">
              <svg class="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
              </svg>
              <span class="text-gray-600">Email support</span>
            </li>
          </ul>
        </div>

        <!-- Professional Plan -->
        <div class="bg-violet-700 text-white rounded-xl p-8 relative transform scale-105 shadow-xl">
          <div class="absolute -top-4 left-1/2 transform -translate-x-1/2">
            <span class="bg-cyan-400 text-gray-900 px-4 py-1 rounded-full text-sm font-medium">
              Most Popular
            </span>
          </div>
          
          <div class="text-center mb-8">
            <h3 class="text-xl font-semibold mb-2">Professional</h3>
            <p class="text-violet-200 mb-4">Ideal for growing businesses</p>
            <div class="mb-4">
              <span class="text-4xl font-bold">$29</span>
              <span class="text-violet-200">/month</span>
            </div>
            <NuxtLink to="/pricing" class="bg-cyan-400 text-gray-900 hover:bg-cyan-300 w-full px-6 py-3 rounded-lg font-medium transition-all duration-200 text-center block">
              Get Started
            </NuxtLink>
          </div>
          
          <ul class="space-y-4">
            <li class="flex items-center gap-3">
              <svg class="w-5 h-5 text-cyan-400" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
              </svg>
              <span class="text-violet-100">Unlimited invoices</span>
            </li>
            <li class="flex items-center gap-3">
              <svg class="w-5 h-5 text-cyan-400" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
              </svg>
              <span class="text-violet-100">Premium templates</span>
            </li>
            <li class="flex items-center gap-3">
              <svg class="w-5 h-5 text-cyan-400" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
              </svg>
              <span class="text-violet-100">Payment integration</span>
            </li>
            <li class="flex items-center gap-3">
              <svg class="w-5 h-5 text-cyan-400" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
              </svg>
              <span class="text-violet-100">Advanced analytics</span>
            </li>
            <li class="flex items-center gap-3">
              <svg class="w-5 h-5 text-cyan-400" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
              </svg>
              <span class="text-violet-100">Priority support</span>
            </li>
            <li class="flex items-center gap-3">
              <svg class="w-5 h-5 text-cyan-400" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
              </svg>
              <span class="text-violet-100">API access</span>
            </li>
          </ul>
        </div>

        <!-- Enterprise Plan -->
        <div class="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300">
          <div class="text-center mb-8">
            <h3 class="text-xl font-semibold text-gray-900 mb-2">Enterprise</h3>
            <p class="text-gray-600 mb-4">For large organizations</p>
            <div class="mb-4">
              <span class="text-4xl font-bold text-gray-900">$99</span>
              <span class="text-gray-600">/month</span>
            </div>
            <NuxtLink to="/contact" class="btn-outline w-full">
              Contact Sales
            </NuxtLink>
          </div>
          
          <ul class="space-y-4">
            <li class="flex items-center gap-3">
              <svg class="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
              </svg>
              <span class="text-gray-600">Everything in Professional</span>
            </li>
            <li class="flex items-center gap-3">
              <svg class="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
              </svg>
              <span class="text-gray-600">Custom branding</span>
            </li>
            <li class="flex items-center gap-3">
              <svg class="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
              </svg>
              <span class="text-gray-600">Team collaboration</span>
            </li>
            <li class="flex items-center gap-3">
              <svg class="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
              </svg>
              <span class="text-gray-600">Advanced integrations</span>
            </li>
            <li class="flex items-center gap-3">
              <svg class="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
              </svg>
              <span class="text-gray-600">Dedicated support</span>
            </li>
            <li class="flex items-center gap-3">
              <svg class="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
              </svg>
              <span class="text-gray-600">SLA guarantee</span>
            </li>
          </ul>
        </div>
      </div>

      <!-- Additional Info -->
      <div class="text-center mt-12">
        <p class="text-gray-600 mb-4">
          All plans include a 14-day free trial. No credit card required.
        </p>
        <div class="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-gray-500">
          <div class="flex items-center gap-2">
            <svg class="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
            </svg>
            Cancel anytime
          </div>
          <div class="flex items-center gap-2">
            <svg class="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
            </svg>
            Secure & compliant
          </div>
          <div class="flex items-center gap-2">
            <svg class="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
            </svg>
            24/7 support
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
