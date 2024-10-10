<script setup>
import { ref, triggerRef } from 'vue'

const { userName } = defineProps({
  userName: {
    type: String,
    required: true,
    default: 'Anonymous'
  }
})
</script>

<template>
  <div class="user-badge">
    <span class="user-badge__icon">
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM15 9C15 10.6569 13.6569 12 12 12C10.3431 12 9 10.6569 9 9C9 7.34315 10.3431 6 12 6C13.6569 6 15 7.34315 15 9ZM12 20.5C13.784 20.5 15.4397 19.9504 16.8069 19.0112C17.4108 18.5964 17.6688 17.8062 17.3178 17.1632C16.59 15.8303 15.0902 15 11.9999 15C8.90969 15 7.40997 15.8302 6.68214 17.1632C6.33105 17.8062 6.5891 18.5963 7.19296 19.0111C8.56018 19.9503 10.2159 20.5 12 20.5Z"
          fill="currentColor"
        />
      </svg>
    </span>
    {{ userName }}
    <span class="user-badge__triangle">
      <svg
        viewBox="0 0 512 512"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
      >
        <title>triangle-filled</title>
        <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
          <g id="drop" fill="currentColor" transform="translate(32.000000, 42.666667)">
            <path
              d="M246.312928,5.62892705 C252.927596,9.40873724 258.409564,14.8907053 262.189374,21.5053731 L444.667042,340.84129 C456.358134,361.300701 449.250007,387.363834 428.790595,399.054926 C422.34376,402.738832 415.04715,404.676552 407.622001,404.676552 L42.6666667,404.676552 C19.1025173,404.676552 7.10542736e-15,385.574034 7.10542736e-15,362.009885 C7.10542736e-15,354.584736 1.93772021,347.288125 5.62162594,340.84129 L188.099293,21.5053731 C199.790385,1.04596203 225.853517,-6.06216498 246.312928,5.62892705 Z"
              id="Combined-Shape"
            ></path>
          </g>
        </g>
      </svg>
    </span>
  </div>
</template>

<style scoped>
.user-badge {
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  transition: transform 0.3s ease-in-out;
}

.user-badge__icon {
  height: 40px;
  width: 40px;
}

.user-badge__triangle {
  margin-top: 10px;
  height: 10px;
  width: 10px;
  transform: rotate(180deg);
}

@media (hover: hover) and (pointer: fine) {
  .user-badge:hover {
    transform: scale(1.1);
  }
}
</style>
