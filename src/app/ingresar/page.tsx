import { LoginForm, ProtectedRoute } from "@/auth/components"

function LoginPage() {
  return (
    <ProtectedRoute>
      <section className="flex items-center justify-center h-full">
        <LoginForm />
      </section>
    </ProtectedRoute>
  )
}

export default LoginPage
