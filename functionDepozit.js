function calculareDepozit(numDepozit,  durataDepozitului, dobandaAnuala) {
    let valoareaDobanzi =Number( numDepozit* durataDepozitului *(dobandaAnuala/100)) ;
    let costDepozit =Number( numDepozit) + Number( valoareaDobanzi);
    return costDepozit;
}
document.querySelector('.calculeazaDepozit').addEventListener('click', function () {
    let myValueDepozit = document.querySelector('.valoareDepozit').value;
    let period = document.querySelector('.perioadaDepozit').value;
    let annualRate = document.querySelector('.dobandaAnuala').value;
    let costDepozit= calculareDepozit(myValueDepozit, period, annualRate)
    document.querySelector('.resultDepozit').textContent = `Valoarea depozitului pe o perioada de ${period} ani este de: ${costDepozit} lei` 
})
// console.log(calculareDepozit(1000, 2, 1));