function currency(val) {
  if (!val) return '$0'
  const re = '\\d(?=(\\d{' + 3 + '})+' + '$' + ')'
  return '$' + Number(val).toFixed(Math.max(0)).replace(new RegExp(re, 'g'), '$&,')
}

export {
  currency
}
