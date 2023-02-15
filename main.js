const TOKEN = '6199072332:AAH0FNRe-xweyv3SfXdoMbojgCfBFAIkClQ'
const CHAT_ID = '-1001569099157'
const URI_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`
const URI_API_DOC = `https://api.telegram.org/bot${TOKEN}/sendDocument`
const success = document.getElementById('success')

document
  .querySelector('.telegram-form')
  .addEventListener('submit', function (e) {
    e.preventDefault()

    const formData = new FormData()
    formData.append('chat_id', CHAT_ID)
    formData.append('document', this.file.files[0])

    axios
      .post(URI_API_DOC, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then((res) => {})

      .catch((err) => {})

      .finally(() => {})

    // Text messages

    let message = `<b>Заявка с сайта!</b>\n`
    message += `<b>Отправитель:</b>${this.name.value}\n`
    message += `<b>Почта:</b>${this.email.value}\n`
    message += `<b>Телефон:</b>${this.phone.value}\n`
    message += `<b>text:</b>${this.text.value}\n`

    axios
      .post(URI_API, {
        chat_id: CHAT_ID,
        parse_mode: 'html',
        text: message,
      })
      .then((res) => {
        this.name.value = ''
        this.email.value = ''
        this.phone.value = ''
        this.text.value = ''
        success.innerHTML = 'Сообщение отправлено!'
        success.style.display = 'block'
      })

      .catch((err) => {})

      .finally(() => {})
  })
