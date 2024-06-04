"use client"

import Link from "next/link"
import { FC } from "react"
import Image from "next/image"
import { useTheme } from "next-themes"

interface BrandProps {
  theme?: "dark" | "light"
}

export const Brand: FC<BrandProps> = () => {
  "use client"

  const { theme } = useTheme()

  return (
    <Link
      className="flex cursor-pointer flex-col items-center hover:opacity-50"
      href="https://www.aisolutions.tec.br"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="mb-2">
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

      <div className="text-4xl font-bold tracking-wide">Chat AIS</div>
    </Link>
  )
}
