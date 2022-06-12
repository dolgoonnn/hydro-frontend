<template>
  <div class="relative h-10 px-4 py-3 text-white bg-cindigo pr-14">
    <select
      v-model="$i18n.locale"
      @change="changeLanguage"
      class="bg-none absolute p-1 transition -translate-y-1/2 rounded-lg top-1/2 right-4 text-sm text-gray-800"
    >
      <option value="mn">MN</option>
      <option value="en">EN</option>
    </select>
  </div>
  <header class="bg-cwhite py-2">
    <div class="max-w-screen-xl px-4 sm:container mx-auto sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <div class="flex-1 md:flex md:items-center md:gap-12">
          <a class="block text-teal-600" href="/">
            <span class="sr-only">Home</span>
            <img
              src="../assets/horizontallogo.png"
              alt="Logo"
              class="w-40 h-auto"
            />
          </a>
        </div>

        <div class="md:flex md:items-center md:gap-5">
          <nav
            class="hidden lg:block flex-1"
            aria-labelledby="header-navigation"
          >
            <h2 class="sr-only" id="header-navigation">Header navigation</h2>

            <ul class="flex items-center justify-between gap-5 text-sm">
              <li>
                <a class="text-gray-500 transition hover:text-ccblue" href="/">
                  Нүүр
                </a>
              </li>

              <Menu as="div" class="relative">
                <div>
                  <MenuButton class="inline-flex items-center">
                    <a
                      href="#"
                      class="text-gray-500 hover:text-ccblue py-2 rounded-md"
                    >
                      Холбооны тухай
                    </a>
                  </MenuButton>
                </div>
                <transition
                  enter-active-class="transition duration-100 ease-out"
                  enter-from-class="transform scale-95 opacity-0"
                  enter-to-class="transform scale-100 opacity-100"
                  leave-active-class="transition duration-75 ease-in"
                  leave-from-class="transform scale-100 opacity-100"
                  leave-to-class="transform scale-95 opacity-0"
                >
                  <MenuItems
                    class="z-10 absolute right-0 w-56 mt-4 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                  >
                    <div class="px-1 py-1 w-full">
                      <MenuItem>
                        <router-link to="/">
                          <a
                            class="text-gray-500 hover:text-ccblue block px-4 py-2 text-sm"
                          >
                            Танилцуулга
                          </a>
                        </router-link>
                      </MenuItem>
                      <MenuItem>
                        <router-link to="/">
                          <a
                            class="text-gray-500 hover:text-ccblue block px-4 py-2 text-sm"
                          >
                            Холбооны дүрэм
                          </a>
                        </router-link>
                      </MenuItem>
                      <MenuItem>
                        <router-link to="/">
                          <a
                            class="text-gray-500 hover:text-ccblue block px-4 py-2 text-sm"
                          >
                            Товч түүх
                          </a>
                        </router-link>
                      </MenuItem>
                      <MenuItem>
                        <router-link to="/">
                          <a
                            class="text-gray-500 hover:text-ccblue block px-4 py-2 text-sm"
                          >
                            Удирдах зөвлөл
                          </a>
                        </router-link>
                      </MenuItem>
                    </div>
                  </MenuItems>
                </transition>
              </Menu>

              <Menu as="div" class="relative">
                <div>
                  <MenuButton class="inline-flex items-center">
                    <a
                      href="#"
                      class="text-gray-500 hover:text-ccblue py-2 rounded-md"
                      >Үйл ажиллагаа</a
                    >
                  </MenuButton>
                </div>
                <transition
                  enter-active-class="transition duration-100 ease-out"
                  enter-from-class="transform scale-95 opacity-0"
                  enter-to-class="transform scale-100 opacity-100"
                  leave-active-class="transition duration-75 ease-in"
                  leave-from-class="transform scale-100 opacity-100"
                  leave-to-class="transform scale-95 opacity-0"
                >
                  <MenuItems
                    class="z-10 absolute right-0 w-56 mt-4 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                  >
                    <div class="px-1 py-1 w-full">
                      <MenuItem>
                        <router-link to="/">
                          <a
                            class="text-gray-500 hover:text-ccblue block px-4 py-2 text-sm"
                          >
                            Мэргэшсэн болон зөвлөх гидрогеологчдын жагсаалт
                          </a>
                        </router-link>
                      </MenuItem>
                      <MenuItem>
                        <router-link to="/Membership">
                          <a
                            class="text-gray-500 hover:text-ccblue block px-4 py-2 text-sm"
                          >
                            Гишүүнчлэл
                          </a>
                        </router-link>
                      </MenuItem>
                      <MenuItem>
                        <router-link to="/">
                          <a
                            class="text-gray-500 hover:text-ccblue block px-4 py-2 text-sm"
                          >
                            Арга хэмжээ
                          </a>
                        </router-link>
                      </MenuItem>
                    </div>
                  </MenuItems>
                </transition>
              </Menu>

              <Menu as="div" class="relative">
                <div>
                  <MenuButton class="inline-flex items-center">
                    <a
                      href="#"
                      class="text-gray-500 hover:text-ccblue py-2 rounded-md"
                    >
                      Хууль, эрх зүй
                    </a>
                  </MenuButton>
                </div>
                <transition
                  enter-active-class="transition duration-100 ease-out"
                  enter-from-class="transform scale-95 opacity-0"
                  enter-to-class="transform scale-100 opacity-100"
                  leave-active-class="transition duration-75 ease-in"
                  leave-from-class="transform scale-100 opacity-100"
                  leave-to-class="transform scale-95 opacity-0"
                >
                  <MenuItems
                    class="z-10 absolute right-0 w-56 mt-4 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                  >
                    <div class="px-1 py-1 w-full">
                      <MenuItem>
                        <router-link to="/law">
                          <a
                            class="text-gray-500 hover:text-ccblue block px-4 py-2 text-sm"
                          >
                            Хууль
                          </a>
                        </router-link>
                      </MenuItem>
                      <MenuItem>
                        <router-link to="/">
                          <a
                            class="text-gray-500 hover:text-ccblue block px-4 py-2 text-sm"
                          >
                            Журам
                          </a>
                        </router-link>
                      </MenuItem>
                      <MenuItem>
                        <router-link to="/">
                          <a
                            class="text-gray-500 hover:text-ccblue block px-4 py-2 text-sm"
                          >
                            Аргачилсан зөвлөмж
                          </a>
                        </router-link>
                      </MenuItem>
                    </div>
                  </MenuItems>
                </transition>
              </Menu>

              <li>
                <a class="text-gray-500 transition hover:text-ccblue" href="/">
                  {{ $t("media") }}
                </a>
              </li>
            </ul>
          </nav>
          <div class="flex items-center gap-5">
            <div class="sm:gap-4 sm:flex">
              <router-link to="/contact_us">
                <a
                  class="block px-5 py-2.5 text-sm font-medium text-white bg-ccblue hover:bg-chblue transition delay-75 rounded-md"
                  href="/"
                >
                  Холбоо барих
                </a>
              </router-link>
              <router-link to="/membership">
                <a
                  class="hidden sm:block px-5 py-2.5 text-sm font-medium text-ccblue bg-gray-100 rounded-md hover:text-chblue delay-75 transition"
                  href="/"
                >
                  Гишүүн болох
                </a>
              </router-link>
            </div>

            <Menu as="div">
              <div class="h-10">
                <MenuButton class="items-center align-baseline">
                  <a
                    href="#"
                    class="text-gray-600 hover:text-ccblue block p-2.5 transition bg-gray-100 rounded lg:hidden hover:text-gray-600/75"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="w-5 h-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  </a>
                </MenuButton>
              </div>
              <transition
                enter-active-class="transition duration-100 ease-out"
                enter-from-class="transform scale-95 opacity-0"
                enter-to-class="transform scale-100 opacity-100"
                leave-active-class="transition duration-75 ease-in"
                leave-from-class="transform scale-100 opacity-100"
                leave-to-class="transform scale-95 opacity-0"
              >
                <MenuItems
                  class="z-10 absolute right-0 w-56 mt-4 mr-4 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                >
                  <div class="px-1 py-1 w-full">
                    <MenuItem>
                      <router-link to="/">
                        <a
                          class="text-gray-500 hover:text-ccblue block px-4 py-2 text-sm"
                        >
                          Нүүр
                        </a>
                      </router-link>
                    </MenuItem>
                    <MenuItem>
                      <router-link to="/">
                        <a
                          class="text-gray-500 hover:text-ccblue block px-4 py-2 text-sm"
                        >
                          Танилцуулга
                        </a>
                      </router-link>
                    </MenuItem>
                    <MenuItem>
                      <router-link to="/">
                        <a
                          class="text-gray-500 hover:text-ccblue block px-4 py-2 text-sm"
                        >
                          Холбооны дүрэм
                        </a>
                      </router-link>
                    </MenuItem>
                    <MenuItem>
                      <router-link to="/">
                        <a
                          class="text-gray-500 hover:text-ccblue block px-4 py-2 text-sm"
                        >
                          Товч дүрэм
                        </a>
                      </router-link>
                    </MenuItem>
                    <MenuItem>
                      <router-link to="/">
                        <a
                          class="text-gray-500 hover:text-ccblue block px-4 py-2 text-sm"
                        >
                          Удирдах зөвлөл
                        </a>
                      </router-link>
                    </MenuItem>
                    <MenuItem>
                      <router-link to="/">
                        <a
                          class="text-gray-500 hover:text-ccblue block px-4 py-2 text-sm"
                        >
                          Мэргэшсэн гидрогеологичдын жагсаалт
                        </a>
                      </router-link>
                    </MenuItem>
                    <MenuItem>
                      <router-link to="/Membership">
                        <a
                          class="text-gray-500 hover:text-ccblue block px-4 py-2 text-sm"
                        >
                          Гишүүншчлэл
                        </a>
                      </router-link>
                    </MenuItem>
                    <MenuItem>
                      <router-link to="/">
                        <a
                          class="text-gray-500 hover:text-ccblue block px-4 py-2 text-sm"
                        >
                          Хууль
                        </a>
                      </router-link>
                    </MenuItem>
                    <MenuItem>
                      <router-link to="/law ">
                        <a
                          class="text-gray-500 hover:text-ccblue block px-4 py-2 text-sm"
                        >
                          Журам
                        </a>
                      </router-link>
                    </MenuItem>
                    <MenuItem>
                      <router-link to="/">
                        <a
                          class="text-gray-500 hover:text-ccblue block px-4 py-2 text-sm"
                        >
                          Холбооны дүрэм
                        </a>
                      </router-link>
                    </MenuItem>
                  </div>
                </MenuItems>
              </transition>
            </Menu>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/vue";

export default {
  name: "Navbar",
  components: {
    Menu,
    MenuButton,
    MenuItems,
    MenuItem,
  },
  methods: {
    changeLanguage(obj) {
      localStorage.setItem("language", obj.target.value);
    },
  },
};
</script>
<style></style>
