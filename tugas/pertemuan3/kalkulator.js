const hapusSemua = () =>{
    forms.answer.value = '';
}
const hapus = () => {
    forms.answer.value = forms.answer.value.substr(0 , forms.answer.value.length -1);
}
const hasil = () => {
    forms.answer.value = eval(forms.answer.value)
}
const operand = ($x) => {
    forms.answer.value += $x;
}
const operator = ($y) => {
    forms.answer.value += $y;
}