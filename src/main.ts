import './style.css'
import * as rust from '../pkg'

const select = document.getElementById('select-func') as HTMLSelectElement
const input1 = document.getElementById('arg1') as HTMLInputElement
const input2 = document.getElementById('arg2') as HTMLInputElement
const output = document.getElementById('output') as HTMLInputElement

function calculate() {
  const fName = select.value as 'add_i8' | 'add_i16' | 'add_i32' | 'add_f32' | 'add_f64'
  output.value = `${rust[fName](+input1.value, +input2.value)}`
}

select.onchange = calculate
input1.oninput = calculate
input2.oninput = calculate

calculate()
