import { describe, expect, it } from 'vitest'
import { useAsyncState } from '../useAsyncState'

describe('useAsyncState', () => {
  it('runs fn and sets state', async () => {
    const { state, isLoading, error, execute } = useAsyncState(async () => 42, 0)
    await execute()
    expect(state.value).toBe(42)
    expect(isLoading.value).toBe(false)
    expect(error.value).toBeNull()
  })

  it('captures errors', async () => {
    const { error, execute } = useAsyncState(async () => {
      throw new Error('fail')
    }, null)
    await execute()
    expect(error.value?.message).toBe('fail')
  })
})
