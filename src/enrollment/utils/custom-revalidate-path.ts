"use server"

import { revalidatePath } from "next/cache"

export const customRevalidatePath = (tag: string) => {
  revalidatePath(tag)
}