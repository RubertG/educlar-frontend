/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Hr, ProtectedRoute } from "@/core/components"
import { ProfileInfo } from "@/profile/components"
import { PropsWithChildren } from "react"

function ProfileInfoLayout({
  children
}: PropsWithChildren) {
  return (
    <ProtectedRoute>
      {/* @ts-expect-error */}
      <ProfileInfo className="mt-7" />
      <Hr className="mt-10 mb-6" />
      {children}
    </ProtectedRoute>
  )
}

export default ProfileInfoLayout
