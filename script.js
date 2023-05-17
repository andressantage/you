const id1='8D2PaDSfdkE'
/* const canal='UC4EHNmruWnhyVGoGLJHCxgA' */
let url1 = 'https://youtube138.p.rapidapi.com/video/comments/?id='+id1+'&hl=en&gl=US';//comentarios
let url2 = 'https://youtube138.p.rapidapi.com/video/details/?id='+id1+'&hl=en&gl=US';//del video
let url3 = 'https://youtube138.p.rapidapi.com/video/details/?id='+id1+'&hl=en&gl=US';//descripcion del video
let url4 = 'https://youtube138.p.rapidapi.com/channel/videos/?id'+id1+'hl=en&gl=US';//videos del canal
let url5 = 'https://youtube138.p.rapidapi.com/video/related-contents/?id='+id1+'&hl=en&gl=US';//videos relacionados

/* const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '4b646bcb21msh0c0025e00925973p14199bjsne233f681bf88',
		'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
	}
}; */
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '54ed242748msh227251d08ce7c31p1e81ebjsn799505b54741',
		'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
	}
};

//las demas funci
    
async function fetchData1() {
    try {
    const response = await fetch(url1, options);
    const result = await response.json();
    let vida=''
    for(let i=0;i<result.comments.length;i++){
      vida+=`
      <div class="s5">
        <img id="a2" src="${result.comments[i].author.avatar[1].url}" alt="">
        <div class="s6">
            <h4>${result.comments[i].author.title}</h4>
            <h2>${result.comments[i].content}</h2>
        </div>                  
      </div>
        
        `
    }
    let agregar=document.getElementById("coment")
    agregar.innerHTML=vida //comentarios agregados
  } catch (error) {
    console.error(error);
  }
}
fetchData1()
//
async function fetchData2() {
    try {
    const response = await fetch(url2, options);
    const result = await response.json();
    const tituloVideo=document.getElementById("a1")
    const iconoCanal=document.getElementById("a2")
    const nombreCanal=document.getElementById("a3")
    tituloVideo.innerHTML=result.title //titulo del video
    iconoCanal.src=result.author.avatar[2].url //icono del canal
    nombreCanal.innerHTML=result.author.title //nombre del canal
  } catch (error) {
    console.error(error);
  }
}
fetchData2()
////
async function fetchData3() {
    try {
    const response = await fetch(url3, options);
    const result = await response.json();
    const descripcionVideo=document.getElementById("d1")
    /* const compo1=document.getElementById("a1")
    const compo2=document.getElementById("a2")
    const compo3=document.getElementById("a3") */
   /*  const compo4=document.getElementById("a4") */
   descripcionVideo.innerHTML=result.description //descripcion del video
   /*  console.log(result.description) */
   /*  compo2.src=result.contents[0].video.title //imagen del autor
    compo3.innerHTML=result.comments[0].author.title //nombre del autor del comentario */
  } catch (error) {
    console.error(error);
  }
}
fetchData3() 
////
async function fetchData5(p) {
    try {
    const response = await fetch(url5, options);
    const result = await response.json();
    const i1=document.getElementById("i1")
    const i2=document.getElementById("i2")
    const i3=document.getElementById("i3")

    /* i1.innerHTML=result.contents[5].video.title //titulo video */
    i1.src='https://www.youtube.com/embed/'+result.contents[p].video.videoId
    i2.src='https://www.youtube.com/embed/'+result.contents[p+1].video.videoId
    i3.src='https://www.youtube.com/embed/'+result.contents[p+2].video.videoId //muestra videos relacionados
   /*  compo2.src=result.contents[0].video.title //imagen del autor
    compo3.innerHTML=result.comments[0].author.title //nombre del autor del comentario */
  } catch (error) {
    console.error(error);
  }
}
fetchData5(10)

let k=10
const b1=document.getElementById("b1")
const b2=document.getElementById("b2")
b1.addEventListener("click", function (){
    k=k-1
    fetchData5(k)
});
b2.addEventListener("click", function (){
    k=k+1
    fetchData5(k)
});

//aqui terminan las funciones

////BUSCADOR
const buscar=document.getElementById("buscador")
const boton=document.getElementById("button-addon2")
let url6
boton.addEventListener("click",f)
function f(){
    url6 ='https://youtube138.p.rapidapi.com/search/?q='+buscar.value+'&hl=en&gl=US';//url video del buscador
    fetchData6()
}

let id
async function fetchData6() {
    try {
    const response = await fetch(url6, options);
    const result = await response.json();

    id=result.contents[0].video.videoId //id video

    /* let canal=result.contents[0].video.author.channelId //nombre del canal */

    url1 = 'https://youtube138.p.rapidapi.com/video/comments/?id='+id+'&hl=en&gl=US';//comentarios
    url2 = 'https://youtube138.p.rapidapi.com/video/details/?id='+id+'&hl=en&gl=US';//del video
    url3 = 'https://youtube138.p.rapidapi.com/video/details/?id='+id+'&hl=en&gl=US';//descripcion del video
    /* let url4 = 'https://youtube138.p.rapidapi.com/channel/videos/?id'+id+'hl=en&gl=US';//videos del canal */
    url5 = 'https://youtube138.p.rapidapi.com/video/related-contents/?id='+id+'&hl=en&gl=US';//videos relacionados

    const videoA=document.getElementById("i4")
    videoA.src='https://www.youtube.com/embed/'+id

    fetchData1()
    fetchData2()
    fetchData3()
    /* fetchData4() */
    fetchData5(10)


  } catch (error) {
    console.error(error);
  }
}

/* let id='NWDEWLu1aEo'
let canal='UC4EHNmruWnhyVGoGLJHCxgA' */





