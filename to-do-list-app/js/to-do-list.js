let taskDOM = document.querySelector("#task")
let listDOM = document.querySelector("#list")
let allLiDOM = document.querySelectorAll("li")

// eleman silme fonksiyonu 
function removeElement(erase) {
    erase.remove()
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
        liDOM.addEventListener("click", markElement);

        // li elemani eklendikten sonra input'un ici bos olsun
        taskDOM.value = "" 

    }
    else {
        // toast bildirimi
        $(".error").toast('show')

        // input'un ici bos olsun
        taskDOM.value = "" 
    }
}
