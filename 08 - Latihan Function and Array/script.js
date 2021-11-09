var penumpang = [];
var tambahPenumpang = function(namaPenumpang, penumpang)
{
    // Jika angkot kosong
    if (penumpang.length == 0)
    {
        // tambah penumpang di awal array
        penumpang.push(namaPenumpang);
        // kembalikan isi array dan keluar dari function
        return penumpang;
    }
    else
    {
        // Telusuri seluruh kursi dari awal
        for (var i = 0; i < penumpang.length; i++)
        {
            // Jika ada kursi kosong
            if (penumpang[i] == undefined)
            {
                // Tambah penumpang di kursi tersebut
                penumpang[i] = namaPenumpang ;
                // kembalikan isi array dan keluar dari function
                return penumpang;
            }
            // Jika sudah ada nama yang sama
            else if (penumpang[i] == namaPenumpang)
            {
                // tampilkan pesan kesalahan
                console.log(namaPenumpang + ' sudah ada di dalam.');
                // Kembalikan isi array dan keluar function
                return penumpang;
            }
            // Jika seluruh kursi terisi
            else if (i == penumpang.length - 1)
            {
                // Tambah penumpang di akhir array
                penumpang.push(namaPenumpang);
                // kembalikan isi array dan keluar dari function
                return penumpang;
            }                              
        }
    }
}

var hapusPenumpang = function(namaPenumpang, penumpang)
{
    if (penumpang.length == 0)
    {
        console.log('Angkot masih kosong!');
    }
    else
    {
        for (var i = 0; i < penumpang.length; i++)
        {
            if(penumpang[i] == namaPenumpang)
            {
                penumpang[i] = undefined;
            }
            else if (i == penumpang.length - 1)
            {
                console.log(namaPenumpang + ' tidak ada di dalam!')
            }
        }
    }

    return penumpang;
}