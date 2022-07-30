<script setup lang="ts">
  const menus = [{text: "Home", route:"/"}, {text: "Apps", route:"/apps"}, {text: "Contact Us", route: "/contact-us"}]
  let activeMenu = useState('activeMenu', () => 'Home')
  let currentYear = new Date().getFullYear()
  
  function changeActive(menu: string)
  {
    activeMenu.value = menu
  }

</script>


<template>
  <div class="w-full bg-gray-100 min-h-screen">
    <Head>
      <Title>MaskerApps</Title>      
      <Link rel="preconnect" href="https://fonts.googleapis.com"></Link>
      <Link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous"></Link>
      <Link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700&display=swap" rel="stylesheet"></Link>
    </Head>
    <div class="">
      <div class="w-full">
        <nav class="flex items-center justify-between max-w-screen-lg mx-auto py-3">
          <div>
            <router-link to="/"  class="text-lg font-bold tracking-widest font-poppins" v-on:click="changeActive('Home')">MaskerApps</router-link>
          </div>
          <ul class="flex items-center space-x-8">
            <li v-for="menu in menus"
              class="font-medium text-md"
            >
              <router-link :to="menu.route" class="hover:text-red py-3 inline-block" v-on:click="changeActive(menu.text)"
              :class="(activeMenu === menu.text) ? 'border-b-2 border-red' : ''"
              >
                {{menu.text}}
              </router-link>
            </li>
          </ul>
        </nav>
      </div>
      <NuxtPage/>
      <div class="flex align-bottom justify-center max-w-screen-lg items-center  mx-auto py-5 my-5">
        Copyright © {{currentYear}} MaskerApps
      </div>
    </div>
  </div>
</template>