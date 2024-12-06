import { ProfileInfo } from "@/profile/components"
import { PropsWithChildren } from "react"

function ProfileInfoLayout({
  children
}: PropsWithChildren) {
  return (
    <>
      <ProfileInfo />
      {children}
    </>
  )
}

export default ProfileInfoLayout
