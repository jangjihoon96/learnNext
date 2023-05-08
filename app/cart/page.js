"use client";

// 자바스크립트 함수를 넣으려면 가장 상단에 'use client' 라고 작성해줘야함
// 보통은 server client 이기 때문에 자바스크립트 문법에 통하지 않음 ex) useEffect, onClick 등등..
// 그럼에도 server client를 사용하는 이유는 로딩속도가 빠르고 검색엔진 노출에 유리
// client component는 로딩속도가 느림 (자바스크립트 많이 필요, hydration 필요)
// hydration : html 유저에게 보낸 후에 자바스크립트로 html 다시 읽고 분석하는 일

// 따라서 큰 페이지는 server component를 추천하고
// 그 안에 자바스크립트 기능이 필요한 곳만 client component 사용

import { age } from "./data";

export default function Cart() {
  let 장바구니 = ["Tomatoes", "Pasta"];
  return (
    <div>
      <h4 className="title">Cart</h4>
      <CartItem item={장바구니} />
      <Banner content="롯데카드" />
    </div>
  );
}

function CartItem(props) {
  return (
    <div className="cart-item">
      <p>{props.item}</p>
      <p>$40</p>
      <p>$1개</p>
    </div>
  );
}

function Banner(props) {
  return <h5>{props.content} 결제 행사중</h5>;
}
