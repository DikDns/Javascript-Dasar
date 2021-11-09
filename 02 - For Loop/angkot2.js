var jumlahAngkot = 10;
var angkotBeroperasi = 6;
var noAngkot;

for (noAngkot = 1; noAngkot <= jumlahAngkot; noAngkot++)
{
    while (noAngkot <= angkotBeroperasi)
    {
        console.log("Angkot No. " + noAngkot + " beroperasi dengan baik.");
        noAngkot++;
    }
    console.log("Angkot No. " + noAngkot + " sedang tidak beroperasi.");
}
