<template>
  <div>
    <header class="shadow-sm bg-white">
<nav class="container mx-auto p-4 flex justify-between">
  <NuxtLink to="/" class="font-bold text-3xl">My Web Page</NuxtLink>
<ul class="flex gap-4">
<li><NuxtLink to="/" class="btn">Home</NuxtLink></li>
<li><NuxtLink to="/about" class="btn">About</NuxtLink></li>
<li><NuxtLink to="/products" class="btn">Products</NuxtLink></li>
</ul>
</nav>
</header>
  
<!-- Output Page Content -->
    <div class="container mx-auto p-4">
      <slot/>
    </div>
  </div>
</template>