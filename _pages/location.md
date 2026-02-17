---
layout: default
title: Location
permalink: /location/

# Current Location Data
current_location:
  name: "Mediterranean Sea"
  city: "Amalfi Coast, Italy"
  coordinates: "40.6333° N, 14.6028° E"
  last_updated: "February 15, 2026"
  weather: "Sunny, 18°C, Light winds"
  next_destination: "Sicily, Italy"
  status: "Anchored in a beautiful cove near Positano. Planning to explore the town today and continue south tomorrow. The weather has been perfect for sailing!"

# Recent Ports
recent_ports:
  - name: "Naples, Italy"
    time_ago: "5 days ago"
    description: "Explored the historic city and enjoyed amazing pizza"
  - name: "Capri, Italy"
    time_ago: "1 week ago"
    description: "Visited the famous Blue Grotto and stunning cliffs"
  - name: "Sardinia, Italy"
    time_ago: "2 weeks ago"
    description: "Beautiful beaches and crystal-clear waters"
---

<div class="max-w-6xl mx-auto px-6 py-20">

    <!-- Page Header -->
    <header class="mb-16 text-center">
        <h1 class="text-4xl md:text-5xl font-semibold tracking-tight text-ink mb-4">
            Our Current Location
        </h1>
        <p class="text-lg text-gray-600">
            Follow our journey around the world
        </p>
    </header>

    <!-- Current Location Card -->
    <div class="max-w-4xl mx-auto mb-16">
        <div class="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">

            <!-- Gradient Header -->
            <div class="bg-gradient-to-r from-brand-700 to-brand-500 text-white p-8 md:p-10">
                <div class="flex items-center gap-5">

                    <div class="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                        <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z">
                            </path>
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z">
                            </path>
                        </svg>
                    </div>

                    <div>
                        <h2 class="text-2xl md:text-3xl font-semibold">
                            {{ page.current_location.name }}
                        </h2>
                        <p class="text-white/80 mt-1">
                            {{ page.current_location.city }}
                        </p>
                    </div>

                </div>
            </div>

            <!-- Location Details -->
            <div class="p-8 md:p-10">

                <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">

                    <div>
                        <h3 class="text-sm uppercase tracking-wider text-gray-400 mb-2">
                            Coordinates
                        </h3>
                        <p class="text-ink font-medium">
                            {{ page.current_location.coordinates }}
                        </p>
                    </div>

                    <div>
                        <h3 class="text-sm uppercase tracking-wider text-gray-400 mb-2">
                            Last Updated
                        </h3>
                        <p class="text-ink font-medium">
                            {{ page.current_location.last_updated }}
                        </p>
                    </div>

                    <div>
                        <h3 class="text-sm uppercase tracking-wider text-gray-400 mb-2">
                            Weather
                        </h3>
                        <p class="text-ink font-medium">
                            {{ page.current_location.weather }}
                        </p>
                    </div>

                    <div>
                        <h3 class="text-sm uppercase tracking-wider text-gray-400 mb-2">
                            Next Destination
                        </h3>
                        <p class="text-ink font-medium">
                            {{ page.current_location.next_destination }}
                        </p>
                    </div>

                </div>

                <div class="border-t border-gray-100 pt-8">
                    <h3 class="text-sm uppercase tracking-wider text-gray-400 mb-3">
                        Current Status
                    </h3>
                    <p class="text-gray-600 leading-relaxed">
                        {{ page.current_location.status }}
                    </p>
                </div>

            </div>
        </div>
    </div>

    <!-- Map Section -->
    <div class="max-w-4xl mx-auto mb-16">
        <div class="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">

            <div class="h-[400px] flex items-center justify-center bg-sand text-gray-500">
                <div class="text-center">
                    <svg class="w-16 h-16 mx-auto mb-4 opacity-60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                              d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7">
                        </path>
                    </svg>
                    <p class="text-lg font-semibold text-ink">Interactive Map</p>
                    <p class="text-sm mt-2 text-gray-500">
                        Integrate Google Maps, Leaflet, or Mapbox here
                    </p>
                </div>
            </div>

        </div>
    </div>

    <!-- Recent Ports -->
    <div class="max-w-4xl mx-auto">
        <h2 class="text-3xl font-semibold tracking-tight text-ink mb-8">
            Recent Ports of Call
        </h2>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            {% for port in page.recent_ports %}
            <div class="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">

                <h3 class="font-semibold text-ink mb-1">
                    {{ port.name }}
                </h3>

                <p class="text-sm text-gray-400 mb-3">
                    {{ port.time_ago }}
                </p>

                <p class="text-sm text-gray-600 leading-relaxed">
                    {{ port.description }}
                </p>

            </div>
            {% endfor %}
        </div>
    </div>

</div>