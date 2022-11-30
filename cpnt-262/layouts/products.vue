<template>
  <div>
    <header class="shadow-sm bg-white">
<nav class="container mx-auto p-4">
  <NuxtLink to="/products" class="font-bold flex justify-center text-2xl">Products</NuxtLink>
</nav>
</header>
  
<!-- Output Page Content -->
    <div>
      <slot/>
    </div>
    <footer class="container mx-auto p-4 flex border-t-2 justify-center font-bold">
      <ul class="flex gap-4">
<li><NuxtLink to="/">Home</NuxtLink></li>
<li><NuxtLink to="/about">About</NuxtLink></li>
<li><NuxtLink to="/products">Products</NuxtLink></li>
</ul>
    </footer>
  </div>
</template>