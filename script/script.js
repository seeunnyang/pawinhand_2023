//1. 모바일 메뉴 숨기기
    //객체 = 모바일 메뉴 .m_nav_open
    //객체.속성 (숨기기)style.display = 'none'
//2. 햄버거 메뉴 클릭 시 모바일 메뉴 보이기
    //객체 = 햄버거메뉴 .m_nav, 모바일 메뉴 .m_nav_open
    //속성 (보이기)style.display = 'block'
    //이벤트 (클릭) addEventListener('click')
    //메서드  (클릭함수) function
//3. x 버튼 클릭 시 모바일 메뉴 숨기기
    //객체 = x 버튼 #close, 모바일 메뉴 .m_nav_open
    //속성 (숨기기) style.display = 'none'
    //이벤트 (클릭) addEventListener('click')
    //메서드 (클릭 함수) function
//변수생성
const m_nav_open = document.querySelector('.m_nav_open'); //모바일 메뉴
const m_nav = document.querySelector('.m_nav'); //햄버거메뉴
const close = document.querySelector('#close'); //x 버튼
//정상출력확인 에러메세지 또는 null, undefined 주의
console.log(m_nav_open, m_nav, close);

//1. 모바일 메뉴 숨기기
m_nav_open.style.display = 'none'; //자바스크립트의 스타일이 우선순위가 제일 높음
//2. 햄버거 메뉴 클릭 시 모바일 메뉴 보이기
//2-1. 객체.이벤트 햄버거 메뉴 클릭 시(객체.메서드(이벤트,함수))
m_nav.addEventListener('click',function(){
    //2-2. 모바일 메뉴 보이기
    m_nav_open.style.display = 'block';
});
//3. x 버튼 클릭 시 모바일 메뉴 숨기기
//3-1. 객체.이벤트 x 버튼 클릭 시 (객체.메서드(이벤트,함수))
close.addEventListener('click',function(){
    //3-2. 모바일 메뉴 숨기기
    m_nav_open.style.display = 'none';
});

// main-swiper-slide
// 문법=> const 변수명 작성 = new Swiper('적용대상');
// 문법=> const 변수명 작성 = new Swiper('적용대상',{속성:값, 속성:값});
const pawin_slide = new Swiper('#pawin_slide',{
    autoplay:{
        delay:10000, //슬라이드 간격(밀리초) 기본3000(3초)
        disableOnInteraction:false, //버튼 클릭 후 자동재생유지
    }, //자동재생
    loop:true, //반복설정 마지막슬라이드→첫번째슬라이드 자연스러운 변경
    direction:'horizontal',
    //effect:'fade', //제자리 자연스러운 변경 슬라이드 효과
    // direction:'vertical' //수직으로 넘어가기
    navigation: { //슬라이드 이전, 다음 버튼 (페이지 복붙) 
        //body 안에 있는 모든 swiper-next,prev를 인식하기 때문에
        //개별인식가능한 부모이름을 반드시 앞에 먼저 작성한다.
        nextEl: '#pawin_slide .swiper-button-next',
        prevEl: '#pawin_slide .swiper-button-prev',
    },
});




//------------------------------------------------------------------------------------
//1160*300 slide*3 swiper 생성
// 문법=> const 변수명 작성 = new Swiper('적용대상',{속성:값, 속성:값});
const slide_2 = new Swiper('#slide_2',{
    autoplay:{
        delay:10000, //슬라이드 간격(밀리초) 기본3000(3초)
        disableOnInteraction:false, //버튼 클릭 후 자동재생유지
    }, //자동재생
    loop:true,
    effect:'cube',
    navigation: { /* 슬라이드 이전, 다음 버튼 (페이지 복붙, 부모 이름 붙여주기) */ 
        nextEl: '#slide_2 .swiper-button-next',
        prevEl: '#slide_2 .swiper-button-prev',
    },
})

//pawin-slide2
const pawin_slide2 = new Swiper('#pawin_slide2',{
    autoplay:{delay:1000},
    loop:true,
    effect:'fade',
});

//입양정보 slide
const dog_info_slide = new Swiper('#dog_info_slide',{
    slidesPerView:'auto', //breakpoints옵션 추가시 'auto',한번에 보이는 슬라이드 개수
    spaceBetween:20, //슬라이드 사이 여백
    autoplay:{delay:1000},
    loop:true,
    //swiper-slide 반응형웹 옵션
    breakpoints:{
        //해상도:{옵션:값}
        400:{slidesPerView:2}, //400~899일때
        // 700:{slidesPerView:2},
        900:{slidesPerView:3}, //900~1159일때
        1160:{slidesPerView:4}, //1160이상일 경우 슬라이드 4개 표시
    },
})