import { ProfileInfo } from "@/profile/components"
import { PropsWithChildren } from "react"

function ProfileInfoLayout({
  children
}: PropsWithChildren) {
  return (
    <>
      <ProfileInfo className="mt-7"/>
      <hr className="border-t border-bg-300 mt-8 mb-4" />
      {children}
    </>
  )
}

export default ProfileInfoLayout
