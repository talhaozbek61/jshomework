let taskDOM = document.querySelector("#task")
let listDOM = document.querySelector("#list")
let allLiDOM = document.querySelectorAll("li")

// eleman silme fonksiyonu 
function removeElement(erase) {
    // liste elemanini sil
    erase.remove()
    // liste elemaninin icerigini localStorage'den siler
    eraseStorage(erase)
}

// listedeki elemanlari isaretleme fonksiyonu
function markElement() {
    this.classList.toggle("checked")
}

// silme butonunu ekledik
const closeButton = `<button onclick="removeElement(parentNode)" style="padding: 13px;" type="button" class="close" data-dismiss="toast" aria-label="Close">
<span aria-hidden="true">&times;</span>
</button>`

// Her bir liste elemanı için hem kapama tuşu(liste elemanı silme eventi ile) hem de liste elemanı işaretleme eventi ile tanımlıyoruz.

allLiDOM.forEach (e => {e.addEventListener("click", markElement); e.innerHTML += `${closeButton}` } )

// listeye eleman ekleme fonksiyonu
function newElement() {
    if (taskDOM.value  && taskDOM.value.trim()) {
        // listeye li elemani ekleme
        let liDOM = document.createElement("li")
       
        // olusturdugumuz li elemanini listeye(ul) nin icine ekliyoruz
        listDOM.append(liDOM)
       
        // toast bildirimi
        $(".success").toast('show')
       
        // li'nin icine input'dan gelen degerleri ekledik
        liDOM.innerHTML = `${taskDOM.value}${closeButton}`

        // li elemani click oldugu zaman isaretlenicek dedik
        liDOM.addEventListener("click", markElement)

        setStorage()
    }
    else {
        // toast bildirimi
        $(".error").toast('show')

        // input'un ici bos olsun
        taskDOM.value = "" 
    }
      // li elemani eklendikten sonra input'un ici bos olsun
      taskDOM.value = "" 
}


// localStorage islemleri

// eger olusturulmus localStrorage yoksa:
function localSelf() {
    // toDoList ls'sini array'a çevirip olarak çağırdık
    let toDoList = JSON.parse(localStorage.getItem("toDoList"))   

    // toDoList array'i yoksa biz oluşturduk
    if (!toDoList) {toDoList = []}

    // toDoList'i tekrar string'e çevirip ls'ye yolladık
    localStorage.setItem("toDoList", JSON.stringify(toDoList))
}

// listeye ekledigimiz gorevleri localStorage a tanimlama
function setStorage() {
    // toDoList ls'sini array'a çevirip olarak çağırdık
    let toDoList = JSON.parse(localStorage.getItem("toDoList"))     

    // input'a girdiğimiz yazıyı toDoList array'ine ekledik
    toDoList.push(`${taskDOM.value}`)

    // toDoList'i tekrar string'e çevirip ls'ye yolladık
    localStorage.setItem("toDoList", JSON.stringify(toDoList))
}

//  listedeki elemanlari localStorage'den silmek
function eraseStorage(erase) {
    // toDoList ls'sini array'a çevirip olarak çağırdık
    let toDoList = JSON.parse(localStorage.getItem("toDoList"))

    // toDoList array'i listeye yazdığımız metini içeriyorsa
    if ( toDoList.includes( erase.firstChild.textContent ) === true ) {
        let indexbul = toDoList.findIndex ( e =>
            e == erase.firstChild.textContent )
        
        // index nosundan kendisini bulup array'den siliyoruz
        toDoList.splice(indexbul, 1) 
        
        // toDoList'i tekrar string'e çevirip ls'ye yolladık.
        localStorage.setItem("toDoList", JSON.stringify(toDoList))
    }
}

// sayfayı her actigimizda localStorage'de bulunan her elemani listeye ekleyen fonksiyon
function localDOM() {
    // toDoList ls'sini array'a çevirip olarak çağırdık
    let toDoList = JSON.parse(localStorage.getItem("toDoList"))

    // toDoList'de kayıtlı her eleman ve index numarasını bul 
    toDoList.forEach( (e, index) => {
        let liDOM = document.createElement("li")
        listDOM.append(liDOM)
        liDOM.innerHTML = toDoList[index]
        liDOM.innerHTML += closeButton
        listDOM.addEventListener("click", markElement)
        
        // li elemani click oldugu zaman isaretlenicek dedik
        liDOM.addEventListener("click", markElement)
    } )
}


localSelf()

localDOM()