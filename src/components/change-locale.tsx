"use client"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { useChangeLocale, useCurrentLocale } from "../../locales/client"

export function ChangeLocale() {

  const changeLocal = useChangeLocale({ preserveSearchParams: true })
  const locale = useCurrentLocale()

  return (
    <Select value={locale} onValueChange={changeLocal}>
      <SelectTrigger className="w-fit uppercase">
        <SelectValue placeholder={locale === "fr" ? "🇫🇷 fr" : "🇬🇧 en"} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem
            className="uppercase" 
            value="fr"
          >
            🇫🇷 fr
          </SelectItem>
          <SelectItem 
            className="uppercase" 
            value="en"
          >
            🇬🇧 en
          </SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}