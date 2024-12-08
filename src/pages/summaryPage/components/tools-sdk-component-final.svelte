<script>
  import PuTTy from "../svg/PuTTY.svelte"
  import Filezilla from "../svg/filezilla.svelte"
  import Postmark from "../svg/Postmark.svelte"
  import Pm2 from "../svg/PM2.svelte"
  import Mongodb from "../svg/mongodb.svelte"
  import Jwt from "../svg/jwt.svelte"
  import Redis from "../svg/redis.svelte"
</script>

<div class="text-3xl font-bold pt-6 text-gray-200">Tools&nbsp;/&nbsp;SDK:</div>

<div class="grid-cols-1 items-center justify-around pt-3 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full">
  <!-- Putty Card -->

  <a href="https://www.putty.org/" target="_blank" class="flex items-center justify-center h-16 hover:scale-105 transition duration-150 card w-full bg-[#000000cc] p-3 rounded-md">
    <div class="text-[#f7f7f7] w-auto flex items-center justify-center h-full text-lg font-semibold">Putty</div>
    <div class="w-16 h-full pl-2 flex items-center justify-center">
      <PuTTy />
    </div>
  </a>

  <!-- FileZilla Card -->
  <a href="https://filezilla-project.org/" target="_blank" class="flex items-center justify-center h-16 hover:scale-105 transition duration-150 card w-full bg-[#000000cc] p-3 rounded-md">
    <div class="text-[#bb0000] w-auto flex items-center justify-center h-full text-lg font-semibold">FileZilla</div>
    <div class="w-16 h-full pl-2 flex items-center justify-center">
      <Filezilla />
    </div>
  </a>

  <!-- Postmark Card -->
  <a href="https://postmarkapp.com/" target="_blank" class="flex items-center justify-center h-16 hover:scale-105 transition duration-150 card w-full bg-[#000000cc] p-3 rounded-md">
    <div class="text-[#ffde00] w-auto flex items-center justify-center h-full text-lg font-semibold">Postmark</div>
    <div class="w-16 h-full pl-2 flex items-center justify-center">
      <Postmark />
    </div>
  </a>

  <!-- PM2 Card -->
  <a href="https://pm2.keymetrics.io/" target="_blank" class="flex items-center justify-center h-16 hover:scale-105 transition duration-150 card w-full bg-[#000000cc] p-3 rounded-md">
    <div class="text-[#ffffff] w-auto flex items-center justify-center h-full text-lg font-semibold">PM2</div>
    <div class="w-16 h-full pl-2 flex items-center justify-center">
      <Pm2 />
    </div>
  </a>

  <!-- MongoDB Shell Card -->
  <a href="https://www.mongodb.com/docs/mongodb-shell/" target="_blank" class="flex items-center justify-center h-16 hover:scale-105 transition duration-150 card bg-[#000000cc] w-full p-3 rounded-md">
    <div class="text-[#599636] w-auto flex items-center justify-center h-full text-lg font-semibold">MongoDB Shell</div>
    <div class="w-16 h-full pl-2 flex items-center justify-center">
      <Mongodb />
    </div>
  </a>

  <!-- JWT Card -->
  <a href="https://jwt.io/" target="_blank" class="flex items-center justify-center h-16 hover:scale-105 transition duration-150 card w-full bg-[#000000cc] p-3 rounded-md">
    <div class="text-[#f7f7f7] w-auto flex items-center justify-center h-full text-lg font-semibold">JWT</div>
    <div class="w-16 h-full pl-2 flex items-center justify-center">
      <Jwt />
    </div>
  </a>

  <!-- Redis Card -->
  <a href="https://redis.io/" target="_blank" class="flex items-center justify-center h-16 hover:scale-105 transition duration-150 card w-full bg-[#000000cc] p-3 rounded-md">
    <div class="text-[#ff766d] w-auto flex items-center justify-center h-full text-lg font-semibold">Redis</div>
    <div class="w-16 h-full pl-2 flex items-center justify-center">
      <Redis />
    </div>
  </a>

  <!-- SHA-256 Card -->
  <a href="https://github.com/brix/crypto-js" target="_blank" class="flex items-center justify-center h-16 hover:scale-105 transition duration-150 card w-full bg-[#000000cc] p-3 rounded-md">
    <div class="text-[#f7f7f7] w-auto flex items-center justify-center h-full text-lg font-semibold">crypto-js</div>
    <div class="w-16 pl-2 flex items-center justify-center">
      <img class="w-10 bg-yellow-500 aspect-auto p-1.5 rounded-md" src="assets/cryptojs.png" alt="cryptojs" />
    </div>
  </a>

  <!-- jsPDF Card -->
  <a href="https://rawgit.com/MrRio/jsPDF/master/docs/index.html" target="_blank" class="flex items-center justify-center h-16 hover:scale-105 transition duration-150 card w-full bg-[#000000cc] p-3 rounded-md">
    <div class="text-[#f7f7f7] w-auto flex items-center justify-center h-full text-lg font-semibold">jsPDF</div>
    <div class="w-16 h-full pl-2 flex items-center justify-center">
      <img class="w-10 aspect-auto p-1.5" src="assets/jspdf.png" alt="cryptojs" />
    </div>
  </a>
</div>
