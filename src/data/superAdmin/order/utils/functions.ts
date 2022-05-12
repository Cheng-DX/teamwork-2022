export function switchType(type: string) {
  switch (type) {
    case 'biding':
      return 'warning';
    case 'bided':
      return 'default';
    case 'finished':
      return 'success';
    case 'producing':
      return 'info';
    default:
      return 'error';
  }
}

export function createDate(seed: number) {
  const date = new Date().getTime() + seed * 24 * 60 * 60 * 1000;
  return date;
}
