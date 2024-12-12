import { Hr, ProtectedRoute } from "@/core/components"
import { ProfileInfo } from "@/profile/components"
import { PropsWithChildren } from "react"

function ProfileInfoLayout({
  children
}: PropsWithChildren) {
  return (
    <ProtectedRoute>
      {/* @ts-ignore */}
      <ProfileInfo className="mt-7" />
      <Hr className="mt-10 mb-6" />
      {children}
    </ProtectedRoute>
  )
}

export default ProfileInfoLayout
