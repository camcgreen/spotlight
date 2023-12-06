import { getServerSession } from 'next-auth'
import { authOptions } from '@/app/utils/auth'
import SignInWithGitHub from '@/app/components/auth/SignInWithGitHub'
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from '@/components/ui/card'
import { redirect } from 'next/navigation'

export default async function AuthRoute() {
  const session = await getServerSession(authOptions)

  if (session) {
    return redirect('/')
  }

  return (
    <div className='w-screen h-screen flex items-center justify-center'>
      <Card>
        <CardHeader>
          <p>Logo</p>
          <CardTitle>Welcome to Spotlight</CardTitle>
          <CardDescription>
            Continue with GitHub to get started.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className='flex flex-col'>
            <SignInWithGitHub />
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
