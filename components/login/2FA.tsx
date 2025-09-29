'use client'

import { useEffect, useState, useTransition } from 'react'
import { useRouter } from '@bprogress/next'
import { Button, Input, Link } from '@heroui/react'
import toast from 'react-hot-toast'
import { useUserStore } from '~/store/userStore'
import { kunFetchGet, kunFetchPost } from '~/utils/kunFetch'
import { UserState } from '~/store/userStore'
import { KunTextDivider } from '~/components/kun/TextDivider'
import type { KunGalgameStatelessPayload } from '~/app/api/utils/jwt'

export const TwoFactor = () => {
  const [token, setToken] = useState('')
  const [isUsingBackupCode, setIsUsingBackupCode] = useState(false)
  const router = useRouter()
  const { setUser } = useUserStore()
  const [isPending, startTransition] = useTransition()

  useEffect(() => {
    const checkTempToken = async () => {
      const res = await kunFetchGet<KunResponse<KunGalgameStatelessPayload>>(
        '/auth/check-temp-token'
      )
      if (typeof res === 'string') {
        router.push('/login')
      }
    }

    checkTempToken()
  }, [router])

  const handleSubmit = async () => {
    if (!token) {
      toast.error('请输入验证码')
      return
    }

    startTransition(async () => {
      const response = await kunFetchPost<UserState>('/auth/verify-2fa', {
        token,
        isBackupCode: isUsingBackupCode
      })

      if (typeof response === 'string') {
        toast.error(response)
      } else {
        setUser(response)
        toast.success('验证成功，欢迎回来！')
        router.push('/')
      }
    })
  }

  return (
    <div className="space-y-4 w-72">
      <p className="text-default-500">
        {isUsingBackupCode
          ? '请输入您的备用验证码'
          : '请输入身份验证器应用中显示的验证码'}
      </p>

      <Input
        isRequired
        label={isUsingBackupCode ? '备用验证码' : '6 位验证码'}
        value={token}
        onValueChange={setToken}
        variant="bordered"
        maxLength={6}
      />

      <Button
        type="submit"
        color="primary"
        className="w-full"
        isLoading={isPending}
        isDisabled={isPending}
        onPress={handleSubmit}
      >
        {isPending ? '验证中...' : '验证'}
      </Button>

      <KunTextDivider dividerClass="my-4" text="或" />

      <Button
        color="primary"
        variant="bordered"
        className="w-full"
        onPress={() => setIsUsingBackupCode(!isUsingBackupCode)}
      >
        {isUsingBackupCode ? '使用身份验证器应用' : '使用备用验证码'}
      </Button>
    </div>
  )
}
