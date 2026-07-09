const parseDate = (dateString) => {
  const [year, month, day] = dateString.split('-').map(Number)
  return new Date(year, month - 1, day || 1)
}

const getMonthDiff = (startDate, endDate) => {
  let months =
    (endDate.getFullYear() - startDate.getFullYear()) * 12 +
    (endDate.getMonth() - startDate.getMonth())

  if (endDate.getDate() < startDate.getDate()) {
    months -= 1
  }

  return Math.max(months, 0)
}

export const formatDuration = (startDate, endDate, locale = 'vi') => {
  const start = parseDate(startDate)
  const end = endDate ? parseDate(endDate) : new Date()
  const totalMonths = getMonthDiff(start, end)
  const displayMonths = totalMonths === 0 ? 1 : totalMonths
  const years = Math.floor(displayMonths / 12)
  const months = displayMonths % 12

  if (locale === 'en') {
    if (years > 0 && months > 0) {
      return `${years} yr${years > 1 ? 's' : ''} ${months} mo${months > 1 ? 's' : ''}`
    }
    if (years > 0) {
      return `${years} yr${years > 1 ? 's' : ''}`
    }
    return `${displayMonths} mo${displayMonths > 1 ? 's' : ''}`
  }

  if (years > 0 && months > 0) {
    return `${years} năm ${months} tháng`
  }
  if (years > 0) {
    return `${years} năm`
  }
  return `${displayMonths} tháng`
}
