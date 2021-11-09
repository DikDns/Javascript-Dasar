


// arguments merupakan variabel local unik dari Js yang bertipe Array.
function tambah()
{
    var hasil = 0;
    for (var i = 0; i < arguments.length; i++)
    {
        hasil += arguments[i];
    }
    return hasil;
}

var test = tambah(2,31,2,3,2,3,6,4,2);

alert(test);