const buildMessage = daysOfWeek => {
  if (!daysOfWeek.length) {
    return 'You don\'t need an umbrella'
  }

  if (daysOfWeek.length === 1) {
    return `You need an umbrella just on: ${daysOfWeek}`
  }

  const lastDay = daysOfWeek.pop()
  const joinedDays = daysOfWeek.join(', ')
  return `You should take an umbrella in these days: ${joinedDays} and ${lastDay}`
}

module.exports = {
  message: {
    buildMessage
  }
}
