window.onload=function(){
    const capacity_btn_els=document.querySelectorAll('.capacity .size')
    const color_btn_els = document.querySelectorAll('button.color')
    const iphone_bcgr=document.querySelector('.imagery');
    const iphone_color=document.querySelector('.imagery .image')
    console.log(iphone_bcgr)

    for(let i=0; i<capacity_btn_els.length; i++){
        let btn=capacity_btn_els[i]
    
    btn.addEventListener('click', function(){
        document.querySelector('.capacity .size.selected').classList.remove('selected');
        this.classList.add('selected')
    })
    }

    for(let i=0; i<color_btn_els.length;i++){
        let btn=color_btn_els[i]
        btn.addEventListener("click", function () {
            document.querySelector('.color.selected').classList.remove('selected')
            this.classList.add('selected')
            iphone_color.src = "images/xr-" + this.dataset.name + '.png'
            iphone_bcgr.style.backgroundColor=this.dataset.colour
        })
       
       
    }
}