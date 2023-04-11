function calculareCredit(numCredit,  durataCreditului, dobandaAnuala) {
    let valoareaDobanzi =Number( numCredit* durataCreditului *(dobandaAnuala/100)) ;
    let costCredit =Number( numCredit) + Number( valoareaDobanzi);
    return costCredit;
}
document.querySelector('.calculeaza').addEventListener('click', function () {
    let myValueCredit = document.querySelector('.valoareCredit').value;
    let period = document.querySelector('.perioada').value;
    let annualRate = document.querySelector('.dobandaAnuala').value;
    let costCredit= calculareCredit(myValueCredit, period, annualRate)
    document.querySelector('.result').textContent = `Valoarea creditului  pe o perioada de ${period} ani este de: ${costCredit} lei`
})

