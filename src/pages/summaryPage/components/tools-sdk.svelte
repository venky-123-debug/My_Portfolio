<script>
  import PuTTy from "../svg/PuTTY.svelte"
  import Filezilla from "../svg/filezilla.svelte"
  import Postmark from "../svg/Postmark.svelte"
  import Pm2 from "../svg/PM2.svelte"
  import Mongodb from "../svg/mongodb.svelte"
  import Jwt from "../svg/jwt.svelte"
  import Redis from "../svg/redis.svelte"
  import Carousel from "../../../shared/carousel.svelte"
  import SocketIo from "../svg/socket-io.svelte"

  const tools = [
    {
      name: "PuTTY",
      description: "A free and open-source terminal emulator for secure SSH connections.",
      url: "https://www.putty.org/",
      icon: PuTTy,
      bgColor: "bg-black/80",
      textColor: "text-gray-200",
    },
    {
      name: "FileZilla",
      description: "A popular FTP client to transfer files to and from remote servers.",
      url: "https://filezilla-project.org/",
      icon: Filezilla,
      bgColor: "bg-black/80",
      textColor: "text-red-600",
    },
    {
      name: "Postmark",
      description: "A service for transactional email delivery and analytics.",
      url: "https://postmarkapp.com/",
      icon: Postmark,
      bgColor: "bg-black/80",
      textColor: "text-yellow-400",
    },
    {
      name: "PM2",
      description: "A process manager for Node.js applications with monitoring capabilities.",
      url: "https://pm2.keymetrics.io/",
      icon: Pm2,
      bgColor: "bg-black/80",
      textColor: "text-white",
    },
    {
      name: "MongoDB Shell",
      description: "A command-line interface for interacting with MongoDB.",
      url: "https://www.mongodb.com/docs/mongodb-shell/",
      icon: Mongodb,
      bgColor: "bg-black/80",
      textColor: "text-green-600",
    },
    {
      name: "JWT",
      description: "A compact, URL-safe means of representing claims between two parties.",
      url: "https://jwt.io/",
      icon: Jwt,
      bgColor: "bg-black/80",
      textColor: "text-gray-200",
    },
    {
      name: "Redis",
      description: "An open-source in-memory data structure store used as a database, cache, and message broker.",
      url: "https://redis.io/",
      icon: Redis,
      bgColor: "bg-black/80",
      textColor: "text-red-300",
    },
    {
      name: "Socket IO",
      description: "An open-source library that allows real-time, two-way communication between a server and a web client",
      url: "https://socket.io/",
      icon: SocketIo,
      bgColor: "bg-black/80",
      textColor: "text-blue",
    },
  ]
  let toolsDuplicated = [...tools, ...tools]
</script>

<div class="text-3xl font-bold pt-6 pb-3 text-gray-200">Tools&nbsp;/&nbsp;SDK:</div>

<Carousel>
  {#each toolsDuplicated as { name, url, icon, bgColor, textColor }}
    <a href={url} target="_blank" class={`relative rounded-lg flex items-center justify-center min-w-[262px] min-h-[64px] shadow-lg transform transition-transform duration-200 hover:scale-105 ${bgColor}`}>
      <div class="flex items-center gap-3">
        <svelte:component this={icon} />
        <p class={`text-lg font-semibold ${textColor}`}>{name}</p>
      </div>
    </a>
  {/each}
</Carousel>
