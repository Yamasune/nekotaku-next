'use client'

import { useEffect, useState } from 'react'
import { kunFetchGet } from '~/utils/kunFetch'
import { CommentCard } from './CommentCard'
import { FilterBar } from './FilterBar'
import { useMounted } from '~/hooks/useMounted'
import { KunLoading } from '~/components/kun/Loading'
import { KunHeader } from '../kun/Header'
import { useSearchParams } from 'next/navigation'
import { KunPagination } from '~/components/kun/Pagination'
import { KunNull } from '~/components/kun/Null'
import type { SortDirection, SortOption } from './_sort'
import type { PatchComment } from '~/types/api/comment'

interface Props {
  initialComments: PatchComment[]
  initialTotal: number
  uid?: number
}

export const CardContainer = ({
  initialComments,
  initialTotal,
  uid
}: Props) => {
  const [comments, setComments] = useState<PatchComment[]>(initialComments)
  const [total, setTotal] = useState(initialTotal)
  const [loading, setLoading] = useState(false)
  const [sortField, setSortField] = useState<SortOption>('created')
  const [sortOrder, setSortOrder] = useState<SortDirection>('desc')
  const isMounted = useMounted()
  const searchParams = useSearchParams()
  const [page, setPage] = useState(Number(searchParams.get('page')) || 1)

  const fetchData = async () => {
    setLoading(true)

    const { comments } = await kunFetchGet<{
      comments: PatchComment[]
      total: number
    }>('/comment', {
      sortField,
      sortOrder,
      page,
      limit: 50
    })

    setComments(comments)
    setTotal(total)
    setLoading(false)
  }

  useEffect(() => {
    if (!isMounted) {
      return
    }
    fetchData()
  }, [sortField, sortOrder, page])

  return (
    <div className="container mx-auto my-4 space-y-6">
      <KunHeader
        name="Galgame 评论"
        description="这里展示了所有的 Galgame 评论"
      />

      {uid ? (
        <>
          <FilterBar
            sortField={sortField}
            setSortField={setSortField}
            sortOrder={sortOrder}
            setSortOrder={setSortOrder}
          />

          {loading ? (
            <KunLoading hint="正在获取评论数据..." />
          ) : (
            <div className="space-y-4">
              {comments.map((comment) => (
                <CommentCard key={comment.id} comment={comment} />
              ))}
            </div>
          )}

          {total > 50 && (
            <div className="flex justify-center">
              <KunPagination
                total={Math.ceil(total / 50)}
                page={page}
                onPageChange={setPage}
                isLoading={loading}
              />
            </div>
          )}
        </>
      ) : (
        <KunNull message="请登录后查看所有游戏评论" />
      )}
    </div>
  )
}
