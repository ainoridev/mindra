import { ref, shallowRef, type Ref, type ShallowRef } from 'vue'

export interface UseAsyncStateReturn<T> {
  state: ShallowRef<T>
  isLoading: Ref<boolean>
  error: Ref<Error | null>
  execute: () => Promise<void>
}

/**
 * Encapsula una acción async con loading y error para vistas o stores ligeros.
 */
export function useAsyncState<T>(fn: () => Promise<T>, initial: T): UseAsyncStateReturn<T> {
  const state = shallowRef(initial) as ShallowRef<T>
  const isLoading = ref(false)
  const error = ref<Error | null>(null)

  async function execute() {
    isLoading.value = true
    error.value = null
    try {
      state.value = await fn()
    } catch (e) {
      error.value = e instanceof Error ? e : new Error(String(e))
    } finally {
      isLoading.value = false
    }
  }

  return { state, isLoading, error, execute }
}
