export function dateFilter(dateString: string): string {
  let date = new Date(dateString)
  return date.toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
  })
}
