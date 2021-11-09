var char = prompt("Masukan char: \n(cth: a,b,e,f,1,2,4");

switch (char) 
{
    case 'a':
    case 'b':
    case 'c':
    case 'd':
    case 'e':
    case 'f':
        alert("Huruf");
        break;
    case '1':
    case '2':
    case '3':
    case '4':
    case '5':
    case '6':
        alert("Angka");
        break;
    default:
        alert("Data Belum Ada")
        break;
}