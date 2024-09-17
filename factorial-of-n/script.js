function factorial (n) {
    
    if (n === 0) {
        return 1;
    }

    return n * factorial(n - 1);
}


console.log(factorial(7));


// let bookitem1 = {
//     title: "Foundation 3-Book Boxed Set",
//     author: "Issac Asimov",
//     price: "$22.99",
//     link: "https://www.amazon.com/Foundation-3-Book-Boxed-Set-Empire/dp/0593499573/ref=sr_1_1?crid=1JTOQ4NOLYSHU&dib=eyJ2IjoiMSJ9.K7igcg3UUgfXJGktKD1_6Ef43vMWx_uI_PN0VjfpmpCuavPj7mTbTpzUkwg5huE577P7YSif74eIy_ztSpKow_SalkufrxEF3gBY_AQb6kE4sFwZcyK3k1cx7qQEZCd4c1qurYoqKWizSN28lRoIj-5ciSbrYM_KeY3dPdeH1aGHqjs2F_0I4XP0v6O6nz4yBZVtF9fa7BQrRd6EF9pLT3bPvpwuhp6GGxt8e4azSRw.vxHE8DX_I-Pqx1BR9D3psYpw8CnKXfebVU9Sssk7tek&dib_tag=se&keywords=foundation+asimov&qid=1726586832&sprefix=foundation+asmo%2Caps%2C1252&sr=8-1"
// }

// let bookitem2 = {
//     title: "Hyperion",
//     author: "Dan Simmons",
//     price: "$13.91",
//     link: "https://www.amazon.com/dp/0399178619/?coliid=IIP029151TSKO&colid=206AVEOUT2TLH&psc=1&ref_=list_c_wl_lv_ov_lig_dp_it"
// }

// let bookitem3 = {
//     title: "The Fifth Science",
//     author: "Exurb1a",
//     price: "$15.00",
//     link: "https://www.amazon.com/dp/1796356301/?coliid=I3806KE35VM9UD&colid=206AVEOUT2TLH&psc=1&ref_=list_c_wl_lv_ov_lig_dp_it"
// }

// let myWishList = [bookitem1, bookitem2, bookitem3]

// console.log(myWishList);

// for(let i = 0; i < myWishList.length; i++) {
//     console.log(myWishList[i].title);
// }