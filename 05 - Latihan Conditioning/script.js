var player = '';
var computer;
var kesempatan = 3;
var hasil;
var triggerKalah = true;
var replay = true;

while (replay)
{
    // Output Awal
    alert("Tebak Angka dari 1 - 10\n" + "Kamu punya 3 Kesempatan!")

    // Mencari nilai Random
    computer = Math.random();

    // Mengubah nilai desimal menjadi string
    { 
        if (computer < 0.1)
        {
            computer = '1';
        } 
        else if (computer < 0.2)
        {
            computer = '2';
        }
        else if (computer < 0.3)
        {
            computer = '3';
        }
        else if (computer < 0.3)
        {
            computer = '3';
        }
        else if (computer < 0.4)
        {
            computer = '4';
        }
        else if (computer < 0.5)
        {
            computer = '5';
        }
        else if (computer < 0.6)
        {
            computer = '6';
        }
        else if (computer < 0.7)
        {
            computer = '7';
        }
        else if (computer < 0.8)
        {
            computer = '8';
        }
        else if (computer < 0.9)
        {
            computer = '9';
        }
        else
        {
            computer = '10';
        }
    }
    
    // Looping Kesempatan dan Nyawa User
    var nyawa = kesempatan;
    for (var i = 1; i <= kesempatan; i++)
    {   
        //nyawa berkurang
        nyawa--;

        // Input User
        player = prompt("Masukan Angka: ");

        // Sistem perkiraan dan If hasil benar
        if (player === computer)
        {
            hasil = ("BENAR!!!\n" + "Anda Hebat!\nAngka yang dipilih komputer: " + computer);
            triggerKalah = false;
            i += kesempatan;
        }
        else if ((computer - player) <= 5 || (computer - player) <= -5)
        {
            hasil = ("SALAH!!!\n" + "Tebakan anda beda SEDIKIT!\n" + "Kesempatan sisa: " + nyawa);
        }
        else if ((computer - player) > 5 || (computer - player) > -5)
        {
            hasil = ("SALAH!!!\n" + "Tebakan anda beda JAUH!\n" + "Kesempatan sisa: " + nyawa);
        }
        else 
        {
            hasil = ("TOLONG MASUKAN ANGKA YANG TEPAT (1 - 10)\n" + "Kesempatan sisa: " + nyawa);
        }
        

        // Output Hasil
        alert(hasil);
    }
    
    // Output terakhir
    if (triggerKalah)
    {
        alert("Terima Kasih telah bermain!\nAngka yang dipilih komputer: " + computer);
    }
    else
    {
        alert("Terima Kasih telah bermain!\n");
    }


    // Replay option
    replay = confirm("Tebak lagi?")
}

