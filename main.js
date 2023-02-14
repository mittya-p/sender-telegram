const TOKEN = '6199072332:AAH0FNRe-xweyv3SfXdoMbojgCfBFAIkClQ'
const CHAT_ID = '-1001569099157'
const URI_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`

document
  .querySelector('.telegram-form')
  .addEventListener('submit', function (e) {
    e.preventDefault()

    let message = `<b>Заявка с сайта!</b>\n`
    message += `<b>Отправитель:</b>${this.name.value}\n`
    message += `<b>Почта:</b>${this.email.value}\n`
    message += `<b>Телефон:</b>${this.phone.value}\n`
    message += `<b>text:</b>${this.text.value}\n`

    axios.post(URI_API, {
      chat_id: CHAT_ID,
      parse_mode: 'html',
      text: message,
    })
  })
