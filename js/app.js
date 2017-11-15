
var selectpromo=document.getElementById('select-promo');
var imagesContainer=document.getElementById('images-container');
var arr4Chile = ['anais-araya', 'andrea-miranda', 'berenisse-rios', 'caterina-da-silva', 'daniela-sanchez', 'francisca-ojeda', 'katerine-sandoval'];
var arr5Lima = ['andrea-cabrera', 'ariadna-izaguirre', 'carito-juarez', 'cristy-castro', 'karol-orrillo', 'paola-ortiz', 'teresa-lara'];
var arr6Lima = ['arantza-burga', 'daguiana-revoredo', 'elizabeth-condori', 'grecia-rayme', 'janine-vega', 'michelle-more', 'mishel-velasquez', 'rosario-felix'];
var subimagesContainer=null;
selectpromo.addEventListener('change',showPromo);
imagesContainer.addEventListener('click',showModal);

/*<img src="assets/images/4-chile/anais-araya.jpg" alt="anais">*/

var chile4='4-chile';
var lima5='5-lima';
var lima6='6-lima';

function showCoders(arr,promo){
for(var i=0;i<arr.length;i++){
    createImage(promo,arr[i])
}
}

function createImage(promo,nombre){
    var img=document.createElement('img');
    img.setAttribute('src','assets/images/'+promo+'/'+ nombre+'.jpg');
    imagesContainer.appendChild(img);

}

//showCoders(arr4Chile,chile4);
//createImage('4-chile','anais-araya')

function showPromo(event){
    switch(true){
        case event.target.value==='4chile':
        imagesContainer.textContent='';
        showCoders(arr4Chile,chile4);
        break;
        case event.target.value==='5lima':
        imagesContainer.textContent='';
        showCoders(arr5Lima,lima5);
        break;
        case event.target.value==='6lima':
        imagesContainer.textContent='';
        showCoders(arr6Lima,lima6);
        break;
        default:
        imagesContainer.textContent='';
        showCoders(arr4Chile,chile4);
        showCoders(arr5Lima,lima5);
        showCoders(arr6Lima,lima6);


    }

}

function showModal(event){
    var modal=document.createElement("div");
    modal.style.position='fixed';
    modal.style.background='rgba(0,0,0,0.7)';
    modal.style.top='0';
    modal.style.left='0';
    modal.style.width='100%';
    modal.style.height='100%';
    modal.appendChild(event.target);
    event.target.style.margin=window.innerHeight/4+'px auto';
    event.target.style.display='block';
    document.body.appendChild(modal);

    modal.addEventListener ("click", function (event){
        event.target.parentElement.removeChild(event.target);
    });

}