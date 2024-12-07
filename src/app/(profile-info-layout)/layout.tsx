import { Hr } from "@/core/components"
import { ProfileInfo } from "@/profile/components"
import { PropsWithChildren } from "react"

function ProfileInfoLayout({
  children
}: PropsWithChildren) {
  return (
    <>
      <ProfileInfo className="mt-7"/>
      <Hr className="mt-10 mb-6" />
      {children}
    </>
  )
}

export default ProfileInfoLayout
