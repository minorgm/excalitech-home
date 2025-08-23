interface IForm {
  name: string
  email: string
  company: string
  message: string
}

export const postFormInformation = async (form: IForm) => {
  try {
    const response = await fetch('/api/submit-form', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(form),
    })

    return response.ok
  } catch (error) {
    console.error('Error: ', error)
    return false
  }
}