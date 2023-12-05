const imgContainerEl=document.querySelector('.img-container')
const btnEl=document.querySelector('.btn')

btnEl.addEventListener('click', ()=>{
    // console.log('click');
    addNewImg()
})

function addNewImg(){
    let imageNum=10
    for (let index = 0; index < imageNum; index++) {
        const newImg=document.createElement('img')
        newImg.src=`https://picsum.photos/300?random=${Math.floor(Math.random()*2000)}`
        imgContainerEl.appendChild(newImg)
    }
}