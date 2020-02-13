
export const getPhoneById = (state, id) => state.phones[id]

export const getPhones = (state, { match }) => {
  const activeCategory = match.params.id || undefined
  const applyCategory = item => item.categoryId === activeCategory

  const applySearch = phone => phone.name
    .toLowerCase()
    .indexOf(state.phonesPage.search.toLowerCase()) > -1

  const phones = state.phonesPage.ids
    .map(id => getPhoneById(state, id))
    .filter(applySearch)

  if (activeCategory === undefined) {
    return phones
  }

  return phones.filter(applyCategory)
}

export const getRenderPhonesLength = state => state.phonesPage.ids.length

export const getTotalBasketCount = state => state.basket.length

export const getTotalBasketPrice = state => {
  const applyTotalSum = (total, current) => total + current

  return state.basket
    .map(id => getPhoneById(state, id))
    .map(phone => phone.price)
    .reduce(applyTotalSum, 0)
}

export const getCategories = state =>
  Object.keys(state.categories).map(key => state.categories[key])

export const getBasketPhonesWithCount = state => {
  const uniqueId = [...new Set(state.basket)]
  const phonesCount = id => {
    return state.basket
      .filter(basketId => basketId === id)
      .length
  }

  const phones = uniqueId
    .map(id => getPhoneById(state, id))
    .map(phone => ({ ...phone, count: phonesCount(phone.id) }))

  return phones
}

export const isValid = ({ valid, touched }) => valid || !touched

const validateEmail = email => {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

  return re.test(email.toString().toLowerCase())
}

export const validateControl = (value, validation) => {
  if (!validation) {
    return true
  }

  let isValid = true

  if (validation.required) {
    isValid = value.trim() !== '' && isValid
  }

  if (validation.email) {
    isValid = validateEmail(value) && isValid
  }

  if (validation.minLength) {
    isValid = value.length >= validation.minLength && isValid
  }

  return isValid
}

export const validateForm = value => {
  let isValid = true

  Object.keys(value).map(name => (
    isValid = value[name].valid && isValid
  ))

  return isValid
}