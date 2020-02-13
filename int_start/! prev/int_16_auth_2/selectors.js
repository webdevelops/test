
export const getPhoneById = (state, id) => state.phones[id]

export const getPhones = (state, ownProps) => {
  const activeCategoryId = ownProps.match.params.id
  const applySearch = phone => phone.name
    .toLowerCase()
    .indexOf(state.phonesPage.search.toLowerCase()) > -1

  const phones = state.phonesPage.ids
    .map(id => getPhoneById(state, id))
    .filter(phone => applySearch(phone))

  if (activeCategoryId === undefined) {
    return phones
  }

  return phones.filter(phone => phone.id === activeCategoryId)
}

export const getRenderedPhonesLength = state => state.phonesPage.ids.length

export const getTotalBasketCount = state => state.basket.length

export const getTotalBasketPrice = state => {
  const applyTotalSum = (total, current) => total + current

  return state.basket
    .map(id => getPhoneById(state, id))
    .map(phone => phone.price)
    .reduce(applyTotalSum, 0)
}

export const getCategories = state => (
  Object.keys(state.categories).map(category => state.categories[category])
)

export const getBasketPhonesWithCount = state => {
  const uniqueIds = [...new Set(state.basket)]
  const phoneCount = id => state.basket
    .filter(basketId => basketId === id)
    .length

  const phones = uniqueIds
    .map(id => getPhoneById(state, id))
    .map(phone => ({ ...phone, count: phoneCount(phone.id) }))

  return phones
}

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

export const isValid = ({ touched, valid }) => !touched || valid