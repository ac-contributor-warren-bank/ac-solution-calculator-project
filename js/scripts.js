document.addEventListener('DOMContentLoaded', () => {
  const dom = {
    screen: {
      calculation: document.querySelector('#screen-calculation'),
      value:       document.querySelector('#screen-value')
    },
    buttons:       document.querySelector('#calc-buttons')
  }

  const state = {
    screen: {
      calculation: '',
      value: ''
    }
  }

  const update_screen = () => {
    dom.screen.calculation.textContent = state.screen.calculation
    dom.screen.value.textContent       = state.screen.value || (state.screen.calculation ? '' : '0')
  }

  dom.buttons.addEventListener('click', (event) => {
    const button = event.target

    if (!button || !button.classList.contains('calc-button'))
      return

    cancel_event(event)

    const button_value = button.textContent

    if (button.classList.contains('calc-button-value'))
      update_screen_value(button_value)

    if (button.classList.contains('calc-button-operator'))
      update_screen_operator(button_value)
  })

  const cancel_event = (event) => {
    event.stopPropagation();event.stopImmediatePropagation();event.preventDefault();event.returnValue=false;
  }

  const update_screen_value = (button_value) => {
    switch(button_value) {
      case 'CE':
        state.screen.calculation = ''
        state.screen.value = ''
        break
      case 'C':
        state.screen.value = ''
        break
      case '←':
        state.screen.value = state.screen.value.substring(0, state.screen.value.length - 1)
        break
      default:
        state.screen.value += button_value
    }

    update_screen()
  }

  const update_screen_operator = (button_value) => {
    switch(button_value) {
      case '×':
        button_value = '*'
        break
      case '÷':
        button_value = '/'
        break
    }

    switch(button_value) {
      case '=':
        if (state.screen.value) {
          state.screen.calculation += `${state.screen.value} `
          state.screen.value = ''
        }
        try {
          if (state.screen.calculation) {
            state.screen.value = String( eval(state.screen.calculation) )
            state.screen.calculation = ''
          }
        }
        catch(error) {
          window.alert(error.message)
          console.log(JSON.stringify(state.screen, null, 2))
        }
        break
      default:
        if (state.screen.value) {
          state.screen.calculation += `${state.screen.value} ${button_value} `
          state.screen.value = ''
        }
    }

    update_screen()
  }

  update_screen()
})
