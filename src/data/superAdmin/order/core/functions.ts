export function switchType(type: string) {
  switch (type) {
    case 'biding':
      return 'primary';
    case 'bided':
      return 'success';
    case 'finished':
      return 'success';
    case 'producing':
      return 'info';
    case 'unpublished':
      return 'warning';
    case 'published':
      return 'primary';
    case 'shipped':
      return 'default';
    case 'produced':
      return 'primary';
    default:
      return 'error';
  }
}

export function createDate(seed: number) {
  const date = new Date().getTime() + seed * 24 * 60 * 60 * 1000;
  return date;
}
