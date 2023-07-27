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