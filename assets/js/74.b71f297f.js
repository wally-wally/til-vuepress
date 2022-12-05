(window.webpackJsonp=window.webpackJsonp||[]).push([[74],{472:function(t,s,a){"use strict";a.r(s);var n=a(56),r=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"_03-24-주석"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_03-24-주석"}},[t._v("#")]),t._v(" 03-24. 주석")]),t._v(" "),a("br"),t._v(" "),a("h2",{attrs:{id:"intro"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#intro"}},[t._v("#")]),t._v(" ✋ Intro")]),t._v(" "),a("blockquote",[a("p",[t._v("주석을 남겨야겠다는 생각이 들면, 가장 먼저 주석이 필요 없는 코드로 리팩토링해보자!")])]),t._v(" "),a("ul",[a("li",[t._v("주석은 악취가 아닌 향기를 입히는데 문제는 주석을 탈취제처럼 사용하는 데 있다.\n"),a("ul",[a("li",[t._v("주석이 장황하게 달린 원인이 코드를 잘못 작성했기 때문인 경우가 의외로 많다.")])])]),t._v(" "),a("li",[t._v("특정 코드 블록이 하는 일에 주석을 남기고 싶으면 '"),a("strong",[t._v("함수 추출하기")]),t._v("'를 적용해보자.")]),t._v(" "),a("li",[t._v("이미 추출되어 있는 함수임에도 여전히 설명이 필요하다면 '"),a("strong",[t._v("함수 선언 바꾸기")]),t._v("'를 적용해보자.")]),t._v(" "),a("li",[t._v("시스템이 동작하기 위한 선행조건을 명시하고 싶다면 '"),a("strong",[t._v("어서션 추가하기")]),t._v("'가 대기하고 있다.")]),t._v(" "),a("li",[t._v("주석을 달면 좋은 경우\n"),a("ul",[a("li",[t._v("무엇을 해야할지 명확히 모를 때")]),t._v(" "),a("li",[t._v("현재 진행 상황뿐만 아니라 확실하지 않은 부분")]),t._v(" "),a("li",[t._v("코드를 지금처럼 작성한 특별한 이유를 설명할 때 => 타인이 코드를 이어서 작업하게 될 때 도움이 됨")])])])]),t._v(" "),a("br"),t._v(" "),a("h2",{attrs:{id:"_1-어서션-추가하기"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-어서션-추가하기"}},[t._v("#")]),t._v(" (1) 어서션 추가하기")]),t._v(" "),a("ul",[a("li",[t._v("어서션(assertion)은 항상 참이라고 가정하는 조건부 문장으로, 어서션이 실패했다는 건 프로그래머가 잘 못했다는 뜻이다.\n"),a("ul",[a("li",[t._v("어서션 실패는 시스템의 다른 부분에서는 절대 검사하지 않아야 하며, "),a("strong",[t._v("어서션이 있고 없고가 프로그램 기능의 정상 동작에 아무런 영향을 주지 않도록 작성돼야 한다.")])])])]),t._v(" "),a("li",[t._v("어서션의 쓰임\n"),a("ul",[a("li",[t._v("오류 찾기에 활용할 수 있다.")]),t._v(" "),a("li",[t._v("프로그램이 어떤 상태임을 가정한 채 실행되는지를 다른 개발자에게 알려주는 훌륭한 소통 도구가 된다.")]),t._v(" "),a("li",[t._v("디버깅하기도 편하다.")])])]),t._v(" "),a("li",[t._v("테스트 코드가 있다면 어서션의 디버깅 용도로서의 효용은 줄어든다.\n"),a("ul",[a("li",[t._v("단위 테스트를 꾸준히 추가하여 시각을 좁히면 어서션보다 나을 때가 많다.")])])]),t._v(" "),a("li",[t._v("javascript의 "),a("code",[t._v("console.assert()")]),t._v(" 메서드에 대한 자세한 내용은 "),a("a",{attrs:{href:"https://developer.mozilla.org/ko/docs/Web/API/Console/assert",target:"_blank",rel:"noopener noreferrer"}},[t._v("MDN 공식 문서"),a("OutboundLink")],1),t._v("를 참고해보자.")])]),t._v(" "),a("hr"),t._v(" "),a("ul",[a("li",[t._v("예시) 고객은 상품 구입 시 할인율을 적용받음")])]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Customer")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("applyDiscount")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("aNumber")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("discountRate"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" aNumber "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("discountRate "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" aNumber"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" aNumber"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 어서션 문장을 넣기 위해 if-then 문장으로 재구성")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Customer")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("applyDiscount")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("aNumber")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("discountRate"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" aNumber"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" aNumber "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("discountRate "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" aNumber"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 어서션 문장 넣은 버전")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Customer")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("applyDiscount")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("aNumber")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("discountRate"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" aNumber"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("assert")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("discountRate "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" aNumber "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("discountRate "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" aNumber"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 해당 예제에서는 어서션은 setter 메서드에 추가하는 게 나아 보인다.")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 어서션이 applyDiscount()에서 실패하면 이 문제가 언제 처음 발생했는지를 찾는 문제를 다시 풀어야 하기 때문이다.")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Customer")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("set")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("discountRate")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("aNumber")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("assert")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" aNumber "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" aNumber "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("_discountRate "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" aNumber"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("hr"),t._v(" "),a("ul",[a("li",[t._v("어서션을 남발하는 것 역시 위험하다.\n"),a("ul",[a("li",[t._v("참이라고 생각하는 가정 모두에 어서션을 달지 않고 "),a("strong",[t._v("'반드시 참이어야 하는' 것만 검사")]),t._v("한다.")])])]),t._v(" "),a("li",[t._v("프로그래머가 일으킬만한 오류에만 어서션을 적용하는게 좋다.\n"),a("ul",[a("li",[t._v("데이터를 외부에서 읽어 온다면 그 값을 검사하는 작업은 (어서션의 대상인) 가정이 아니라 (예외 처리로 대응해야 하는) 프로그램 로직의 일부로 다뤄야 한다.")]),t._v(" "),a("li",[t._v("외부 데이터 출처를 전적으로 신뢰할 수 있는 상황이 아니라면 말이다.")]),t._v(" "),a("li",[t._v("어서션은 그 "),a("u",[t._v("추적을 돕는 최후의 수단")]),t._v("이다.")])])]),t._v(" "),a("li",[t._v("해당 섹션을 정리하면서 개인적으로는 어서션 보다 차라리 테스트 코드를 작성해서 검사하는 것이 더 좋다고 생각이 들었다.\n"),a("ul",[a("li",[t._v("다양한 테스트 케이스를 작성해서 다양한 상황들을 검사해볼 수 있어 어서션과 같이 참인지만 검사하는 것에 그치지 않아서 테스트 코드를 작성하는게 오히려 더 좋다고 생각한다.")])])])])])}),[],!1,null,null,null);s.default=r.exports}}]);