var jumlahAngkot = 10;
var angkotBeroperasi = 6;
var noAngkot;

for (noAngkot = 1; noAngkot <= jumlahAngkot; noAngkot++)
{
    if (noAngkot === 8 || noAngkot === 10 || noAngkot === 5)
    {
        console.log("Angkot No. " + noAngkot + " sedang lembur.");
    } 
    else if (noAngkot <= angkotBeroperasi) 
    {
        console.log("Angkot No. " + noAngkot + " beroperasi dengan baik.");
    } 
    else
    {
        console.log("Angkot No. " + noAngkot + " sedang tidak beroperasi.");
    }
    
}
