'use client'

import { z } from 'zod'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from '@heroui/button'
import { Link } from '@heroui/link'
import {
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Progress
} from '@heroui/react'
import toast from 'react-hot-toast'
import { kunFetchPost } from '~/utils/kunFetch'
import { patchResourceCreateSchema } from '~/validations/patch'
import { ResourceLinksInput } from './ResourceLinksInput'
import { ResourceDetailsForm } from './ResourceDetailsForm'
import { ResourceTypeSelect } from './ResourceTypeSelect'
import { ResourceSectionSelect } from './ResourceSectionSelect'
import { Upload } from 'lucide-react'
import { FileUploadContainer } from '../upload/FileUploadContainer'
import { kunErrorHandler } from '~/utils/kunErrorHandler'
import { useUserStore } from '~/store/userStore'
import type { PatchResource } from '~/types/api/patch'

export type ResourceFormData = z.infer<typeof patchResourceCreateSchema>

interface CreateResourceProps {
  patchId: number
  onClose: () => void
  onSuccess?: (res: PatchResource) => void
}

const userRoleStorageMap: Record<number, string> = {
  3: 'link',
  4: 'link'
}

export const PublishResource = ({
  patchId,
  onClose,
  onSuccess
}: CreateResourceProps) => {
  const [creating, setCreating] = useState(false)
  const [uploadingResource, setUploadingResource] = useState(false)
  const user = useUserStore((state) => state.user)

  const {
    control,
    reset,
    setValue,
    formState: { errors },
    watch
  } = useForm<ResourceFormData>({
    resolver: zodResolver(patchResourceCreateSchema),
    defaultValues: {
      patchId,
      storage: userRoleStorageMap[user.role],
      name: '',
      section: user.role > 2 ? 'galgame' : 'patch',
      hash: '',
      content: '',
      code: '',
      type: [],
      language: [],
      platform: [],
      size: '',
      password: '',
      note: ''
    }
  })

  const handleRewriteResource = async () => {
    setCreating(true)
    const res = await kunFetchPost<KunResponse<PatchResource>>(
      '/patch/resource',
      watch()
    )
    setCreating(false)
    kunErrorHandler(res, (value) => {
      reset()
      onSuccess?.(value)
      toast.success('资源发布成功')
    })
  }

  const handleUploadSuccess = (
    storage: string,
    hash: string,
    content: string,
    size: string
  ) => {
    setValue('storage', storage)
    setValue('hash', hash)
    setValue('content', content)
    setValue('size', size)
  }

  const progress = Math.min((user.dailyUploadLimit / 5120) * 100, 100)

  return (
    <ModalContent>
      <ModalHeader className="flex-col space-y-2">
        <h3 className="text-lg">创建资源</h3>
      </ModalHeader>

      <ModalBody>
        <form className="space-y-6">
          <ResourceSectionSelect
            errors={errors}
            section={watch().section}
            userRole={user.role}
            setSection={(content) => {
              setValue('section', content)
              setValue('storage', userRoleStorageMap[user.role])
            }}
          />

          <ResourceTypeSelect
            section={watch().section}
            control={control}
            errors={errors}
          />

          {watch().storage === 's3' && (
            <FileUploadContainer
              onSuccess={handleUploadSuccess}
              handleRemoveFile={() => reset()}
              setUploadingResource={setUploadingResource}
            />
          )}

          {(watch().storage !== 's3' || watch().content) && (
            <ResourceLinksInput
              errors={errors}
              storage={watch().storage}
              content={watch().content}
              size={watch().size}
              setContent={(content) => setValue('content', content)}
              setSize={(size) => setValue('size', size)}
            />
          )}

          <ResourceDetailsForm control={control} errors={errors} />
        </form>
      </ModalBody>

      <ModalFooter className="flex-col items-end">
        <div className="space-x-2">
          <Button color="danger" variant="light" onPress={onClose}>
            取消
          </Button>
          <Button
            color="primary"
            disabled={creating}
            isLoading={creating}
            endContent={<Upload className="size-4" />}
            onPress={handleRewriteResource}
          >
            发布资源
          </Button>
        </div>

        {creating && (
          <>
            <p>
              正在创建资源页面，请稍后...
            </p>
          </>
        )}
      </ModalFooter>
    </ModalContent>
  )
}
