"use client"

import { IconArrowRight } from "@tabler/icons-react"
import { useTheme } from "next-themes"
import Link from "next/link"
import Image from "next/image"

export default function HomePage() {
  const { theme } = useTheme()

  return (
    <div className="flex size-full flex-col items-center justify-center">
      <div>
        <Image
          alt="Chat AIS logo"
          src={
            theme === "dark" ? "/DARK_BRAND_LOGO.png" : "/LIGHT_BRAND_LOGO.png"
          }
          width={100}
          height={100}
          className="rounded"
        />
      </div>

      <div className="mt-2 text-4xl font-bold">Chat AIS</div>

      <Link
        className="mt-4 flex w-[200px] items-center justify-center rounded-md bg-blue-500 p-2 font-semibold"
        href="/login"
      >
        Entrar
        <IconArrowRight className="ml-1" size={20} />
      </Link>
    </div>
  )
}
