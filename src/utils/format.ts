/**
 * 数字格式化
 * @param count 需要格式化的数字
 * @returns 格式化结果
 */
export function formatCount(count: number) {
  if (count >= 100000) {
    return Math.floor(count / 10000) + '万'
  } else {
    return count
  }
}

export function getImageSize(
  imageUrl: string,
  width: number,
  height: number = width
) {
  return imageUrl + `?param=${width}x${height}`
}
