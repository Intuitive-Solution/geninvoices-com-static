<template>
  <div>
    <!-- Hero Section -->
    <section class="section-padding bg-gradient-to-br from-white to-gray-50">
      <div class="container-custom">
        <div class="text-center max-w-4xl mx-auto">
          <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Simple, Transparent
            <span class="text-gradient">Pricing</span>
          </h1>
          <p class="text-xl text-gray-600 mb-8">
            Choose the plan that fits your business needs. All plans include our core features with no hidden fees.
          </p>
        </div>
      </div>
    </section>

    <!-- Pricing Section -->
    <PricingSection />

    <!-- FAQ Section -->
    <section class="section-padding bg-gray-50">
      <div class="container-custom">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to know about our pricing and plans.
          </p>
        </div>

        <div class="max-w-3xl mx-auto">
          <div class="space-y-8">
            <div class="bg-white rounded-xl p-8 shadow-sm">
              <h3 class="text-xl font-semibold text-gray-900 mb-4">Can I change my plan anytime?</h3>
              <p class="text-gray-600">
                Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, 
                and we'll prorate any billing differences.
              </p>
            </div>

            <div class="bg-white rounded-xl p-8 shadow-sm">
              <h3 class="text-xl font-semibold text-gray-900 mb-4">Is there a free trial?</h3>
              <p class="text-gray-600">
                Yes, all plans include a 14-day free trial. No credit card required to get started. 
                You can explore all features during your trial period.
              </p>
            </div>

            <div class="bg-white rounded-xl p-8 shadow-sm">
              <h3 class="text-xl font-semibold text-gray-900 mb-4">What payment methods do you accept?</h3>
              <p class="text-gray-600">
                We accept all major credit cards (Visa, MasterCard, American Express) and PayPal. 
                Enterprise customers can also pay via bank transfer.
              </p>
            </div>

            <div class="bg-white rounded-xl p-8 shadow-sm">
              <h3 class="text-xl font-semibold text-gray-900 mb-4">Do you offer discounts for annual billing?</h3>
              <p class="text-gray-600">
                Yes, we offer a 20% discount when you pay annually. This applies to all plans and 
                can save you significantly on your subscription costs.
              </p>
            </div>

            <div class="bg-white rounded-xl p-8 shadow-sm">
              <h3 class="text-xl font-semibold text-gray-900 mb-4">What happens if I exceed my plan limits?</h3>
              <p class="text-gray-600">
                If you exceed your plan limits, we'll notify you and give you the option to upgrade 
                or purchase additional capacity. We never cut off your service without notice.
              </p>
            </div>

            <div class="bg-white rounded-xl p-8 shadow-sm">
              <h3 class="text-xl font-semibold text-gray-900 mb-4">Can I cancel anytime?</h3>
              <p class="text-gray-600">
                Yes, you can cancel your subscription at any time. There are no cancellation fees, 
                and you'll continue to have access until the end of your billing period.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="section-padding bg-white">
      <div class="container-custom text-center">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Ready to get started?
        </h2>
        <p class="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Join thousands of businesses that trust Geninvoices to manage their billing process.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <button class="btn-primary">
            Start Free Trial
          </button>
          <NuxtLink to="/contact" class="btn-outline">
            Contact Sales
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
useHead({
  title: 'Pricing - Geninvoices',
  meta: [
    { name: 'description', content: 'Simple, transparent pricing for Geninvoices. Choose the plan that fits your business needs. Start with a free trial.' }
  ]
})
</script>
