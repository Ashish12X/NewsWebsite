const body=document.querySelector("body");
const mode=document.querySelector("#modes");
const modeBtn=document.querySelector(".mode p")
const input=document.querySelector(".search_bar input");
const search=document.querySelector(".search_bar i");
const dark=document.querySelector(".dark");
const light=document.querySelector(".light");
const searchCnt=document.querySelector(".search_container");
const news=document.querySelector(".news_container");
const newsBox=document.querySelectorAll(".news_box");
const img=document.querySelectorAll(".news_box img");
const title=document.querySelectorAll(".news_title");
const description=document.querySelectorAll(".news_description");
const footer=document.querySelector("#footer");

let isdark=false;

mode.addEventListener("click",()=>{
    if(!(isdark)){
        dark.classList.add("hide");
        light.classList.remove("hide");
        isdark=true;
        mode.style.backgroundColor='#ffffff';
        mode.style.color='#1a1a2e';
        modeBtn.innerText="Light";
        searchCnt.style.backgroundColor="#232342";
        search.style.color="#ffffff";
        input.style.backgroundColor="#35357a";
        input.style.color="#ffffff";
        body.style.backgroundColor="#35357a";
        news.style.backgroundColor="#35357a";
        newsBox.forEach((newsBox)=>{
            newsBox.style.backgroundColor="#232342";
            newsBox.style.boxShadow="1vh 1vh 2vh #ffffff";
            newsBox.style.color="#ffffff";
        })
        footer.style.color="#ffffff";
    }
    else{
        dark.classList.remove("hide");
        light.classList.add("hide");
        isdark=false;
        mode.style.backgroundColor='#1a1a2e';
        mode.style.color='#ffffff';
        modeBtn.innerText="Dark";
        searchCnt.style.backgroundColor="#ffffff";
        search.style.color="#000000";
        input.style.backgroundColor="#ffffff";
        input.style.color="#000000";
        body.style.backgroundColor="#ffffff";
        news.style.backgroundColor="#ffffff";
        newsBox.forEach((newsBox)=>{
            newsBox.style.backgroundColor="#ffffff";
            newsBox.style.boxShadow="1vh 1vh 2vh #888888";
            newsBox.style.color="#000000";
        })
        footer.style.color="#1a1a2e";
    }
})

search.addEventListener("click",()=>{
    main(input.value);
    news.classList.remove("hide");
    footer.style.position='relative';
})

async function main(value) {
    let url=`https://newsdata.io/api/1/latest?language=en&apikey=pub_68431b65011ef030111aab879723ff9717c07&q=${value}`;
    let response=await fetch(url);
    let data =await response.json();
    console.log(url);
    genrate(data);
}

genrate=(data)=>{
    img.forEach((img,idx)=>{
        if(data.results[idx].image_url==='null'){
            img.alt="Image not Available";
        }
        else{
            img.src=data.results[idx].image_url;
        }
    });
    title.forEach((title,idx)=>{
        title.innerText=data.results[idx].title;
    });
    description.forEach((description,idx)=>{
        description.innerText=data.results[idx].description;
    });
}