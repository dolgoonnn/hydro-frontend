<template>
  <div class="sm:hidden flex-shrink-0 flex xs:mr-4 sm:mr-0">
    <Menu as="div" class="relative inline-block text-left">
      <div>
        <MenuButton
          class="inline-flex items-center justify-center w-full px-4 py-2 text-sm font-medium text-white rounded-md bg-opacity-20 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
        >
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
          class="absolute right-0 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
        >
          <div class="px-1 py-1 w-full lg:hidden">
            <MenuItem>
              <router-link to="/sign_in">
                <a
                  href="#"
                  class="text-gray-700 block px-4 py-2 text-sm"
                  aria-current="page"
                  >{{ $t("signin") }}</a
                >
              </router-link>
            </MenuItem>
          </div>

          <div class="px-1 py-1 w-full sm:hidden">
            <MenuItem>
              <router-link to="/fundraisings">
                <a class="text-gray-700 block px-4 py-2 text-sm">{{
                  $t("fundraising")
                }}</a>
              </router-link>
            </MenuItem>
          </div>

          <div class="px-1 py-1 w-full sm:hidden">
            <MenuItem>
              <router-link to="/events">
                <a class="text-gray-700 block px-4 py-2 text-sm">{{
                  $t("events")
                }}</a>
              </router-link>
            </MenuItem>
          </div>

          <div class="px-1 py-1 w-full sm:hidden">
            <MenuButton class="inline-flex items-center">
              <router-link to="/media_list">
                <a class="text-gray-700 block px-4 py-2 text-sm">{{
                  $t("news")
                }}</a>
              </router-link>
            </MenuButton>
          </div>

          <div class="px-1 py-1 w-full sm:hidden">
            <MenuItem>
              <router-link to="/partners">
                <a class="text-gray-700 block px-4 py-2 text-sm">{{
                  $t("partners")
                }}</a>
              </router-link>
            </MenuItem>
          </div>
          <div class="px-1 py-1 w-full sm:hidden">
            <MenuItem>
              <router-link to="/receiver">
                <a class="text-gray-700 block px-4 py-2 text-sm">{{
                  $t("recievers")
                }}</a>
              </router-link>
            </MenuItem>
          </div>
          <div class="px-1 py-1 w-full sm:hidden">
            <MenuItem>
              <router-link to="/volunteers">
                <a class="text-gray-700 block px-4 py-2 text-sm">{{
                  $t("volunteers")
                }}</a>
              </router-link>
            </MenuItem>
          </div>
          <div class="px-1 py-1 w-full sm:hidden">
            <MenuItem>
              <router-link to="/certifications">
                <a class="text-gray-700 block px-4 py-2 text-sm">{{
                  $t("certificate")
                }}</a>
              </router-link>
            </MenuItem>
          </div>
          <div class="px-1 py-1 w-full sm:hidden">
            <MenuItem>
              <router-link to="/about_us">
                <a class="text-gray-700 block px-4 py-2 text-sm">{{
                  $t("aboutus")
                }}</a>
              </router-link>
            </MenuItem>
          </div>
        </MenuItems>
      </transition>
    </Menu>
  </div>
</template>

<script>
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/vue";

export default {
  name: "UserMenu",
  components: {
    Menu,
    MenuButton,
    MenuItems,
    MenuItem,
  },
};
</script>

<style></style>
