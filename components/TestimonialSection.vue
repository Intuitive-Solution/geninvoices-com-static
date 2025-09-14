<template>
  <section class="section-padding bg-gray-50">
    <div class="container-custom">
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Trusted by thousands of businesses
        </h2>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto">
          See what our customers have to say about their experience with Geninvoices.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <!-- Testimonial 1 -->
        <div class="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
          <div class="flex items-center mb-6">
            <img 
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=64&h=64&fit=crop&crop=face" 
              alt="John Smith" 
              class="w-12 h-12 rounded-full object-cover"
            />
            <div class="ml-4">
              <h4 class="font-semibold text-gray-900">John Smith</h4>
              <p class="text-sm text-gray-500">CEO, TechStart Inc.</p>
            </div>
          </div>
          <blockquote class="text-gray-600 italic mb-4">
            "Geninvoices has completely transformed our billing process. What used to take hours now takes minutes. 
            The automated reminders have significantly improved our payment collection rate."
          </blockquote>
          <div class="flex text-yellow-400">
            <svg v-for="i in 5" :key="i" class="w-4 h-4 fill-current" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          </div>
        </div>

        <!-- Testimonial 2 -->
        <div class="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
          <div class="flex items-center mb-6">
            <img 
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop&crop=face" 
              alt="Sarah Johnson" 
              class="w-12 h-12 rounded-full object-cover"
            />
            <div class="ml-4">
              <h4 class="font-semibold text-gray-900">Sarah Johnson</h4>
              <p class="text-sm text-gray-500">Freelance Designer</p>
            </div>
          </div>
          <blockquote class="text-gray-600 italic mb-4">
            "As a freelancer, I needed something simple and professional. Geninvoices gives me everything I need 
            to manage my clients and get paid faster. The templates are beautiful and easy to customize."
          </blockquote>
          <div class="flex text-yellow-400">
            <svg v-for="i in 5" :key="i" class="w-4 h-4 fill-current" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          </div>
        </div>

        <!-- Testimonial 3 -->
        <div class="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
          <div class="flex items-center mb-6">
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&h=64&fit=crop&crop=face" 
              alt="Mike Chen" 
              class="w-12 h-12 rounded-full object-cover"
            />
            <div class="ml-4">
              <h4 class="font-semibold text-gray-900">Mike Chen</h4>
              <p class="text-sm text-gray-500">Founder, Digital Agency</p>
            </div>
          </div>
          <blockquote class="text-gray-600 italic mb-4">
            "The analytics and reporting features have given us incredible insights into our cash flow. 
            We can now predict revenue trends and make better business decisions."
          </blockquote>
          <div class="flex text-yellow-400">
            <svg v-for="i in 5" :key="i" class="w-4 h-4 fill-current" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          </div>
        </div>
      </div>

      <!-- Stats Section -->
      <div class="mt-16 grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
        <div>
          <div class="text-3xl md:text-4xl font-bold text-violet-700 mb-2">10,000+</div>
          <div class="text-gray-600">Active Users</div>
        </div>
        <div>
          <div class="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">$50M+</div>
          <div class="text-gray-600">Invoices Generated</div>
        </div>
        <div>
          <div class="text-3xl md:text-4xl font-bold text-violet-700 mb-2">99.9%</div>
          <div class="text-gray-600">Uptime</div>
        </div>
        <div>
          <div class="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">4.9/5</div>
          <div class="text-gray-600">Customer Rating</div>
        </div>
      </div>
    </div>
  </section>
</template>
