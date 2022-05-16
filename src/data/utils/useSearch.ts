import { type Ref, ref, computed } from 'vue';

export function useSearch(data: Ref<any[]>, prop: string) {
  const search = ref('');
  const filterFn = (item: any) => item[prop].toLowerCase().includes(search.value.toLowerCase());
  const display = computed(() => data.value.filter(filterFn));

  return { search, display };
}
