# Styled-Components

## ✅ 등장 배경

- 본래 CSS는 **단순한 형식의 웹 문서**를 디자인하는 용도로 탄생했기 떄문에, 애플리케이션스러운 UI와 **컴포넌트 방식의 개발과는 맞지 않는** 설계가 되었다. 
- 모든 문서에 일괄적으로 적용하기 위해 만들어졌던 기능은 다른 컴포넌트 영역의 스타일을 수정할 수도 있는 골칫덩이가 되어 버렸다. (`global Scope` 문제)
- HTML을 만들고 CSS를 만들어두면 이미 만들어진 CSS가 새로운 컴포넌트를 만들기 위한 제약사항이 되어버리는 문제, 떄로는 반대로 기존에 만들어진 CSS를 덮어씌워야하는 상황이 발생함.(`Specificity`문제)

### 1️⃣ CSS in JS

![image](https://velog.velcdn.com/images%2Fteo%2Fpost%2F4937789b-dcfb-41ae-b102-31060351bd22%2Fimage.png)

- #### 기존 CSS가 가진 문제들은 다음과 같다.
  1. 글로벌 네임스페이스 : 모든 스타일이 global에 선언되어 중복되지 않는 class 이름을 적용해야하는 문제 
  2. 의존성 : 하나의 element에 여러 CSS 룰이 적용되기 때문에, 모든 스타일을 개발자가 기억해야하는 문제
  3. 불필요한 코드제거 : 기능 추가, 변경 및 삭제 과정에서 불필요한 CSS를 제거하기 어려운 문제(유지보수의 어려움)
  4. 코드 간소화 : 중복 제거를 위해 긴 클래스 이름을 사용해 문서 사이즈가 커질 우려
  5. 상태값 공유의 어려움 : JS와 CSS가 분리돼있어 상태 값을 공유할 수 없는 문제
  6. CSS 로드 순서 고려 : CSS 로드 순서에 따라 우선순위가 달라지기 떄문에 로드 순서를 기억해야하는 문제
  7. 고립 : 부모로부터 스타일을 상속하므로 하위 컴포넌트가 영향을 받는 문제

CSS의 `Global Scope`와 `Specificity`문제는 CSS의 구조상 해결할 수 없는 문제로, CSS를 JS를 통해 만듦면 이런 문제를 해결한 새로운 CSS를 만들 수 있지 않을까하는 고민에서 **CSS in JS** 가 탄생함.

### 2️⃣ Styled-Components

```js
// Create a Title component that'll render an <h1> tag with some styles
const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

// Create a Wrapper component that'll render a <section> tag with some styles
const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;

// Use Title and Wrapper like any other React component – except they're styled!
render(
  <Wrapper>
    <Title>
      Hello World!
    </Title>
  </Wrapper>
);

```


- 이러한 방식을 통해서 `Specificitiy`문제의 원흉인 Selector는 사라지게 되고, 프로퍼티와 Value를 컴포넌트 구조에 맞게 작성을 하면 되게 되었다.

- #### CSS in JS는 기존 CSS가 가진 문제들을 다음과 같이 해결한다. 
  1. 글로벌 네임스페이스 : class명이 빌드 타임에 유니크하게 변경되기 때문에 별도의 명명 규칙이 필요하지 않다.
  2. 의존성 : CSS 컴포넌트 단위로 추상화되기 때문에 CSS 모듈 간 의존성 고려가 필요하지 않다.
  3. 불필요한 코드제거 :컴포넌트와 CSS가 동일한 파일 내에 존재하기 떄문에 수정 및 삭제가 용이
  4. 코드 간소화 : 빌드 타임에 짦은 길이의 유니크한 클래스를 자동으로 생성하여 문서의 볼륨을 낮춰준다. 
  5. 상태값 공유의 어려움 : CSS코드가 JS에 작성되므로 컴포넌트 상태 공유가 가능
  6. CSS 로드 순서 고려 : CSS가 컴포넌트 스코프로 적용되므로 우선순위에 따른 문제가 없다.
  7. 고립 : CSS가 컴포넌트에 격리되어 있어 상속 문제가 없음.

- 이런 **CSS in JS** 방식을 차용한 대표적 라이브러리가 바로 `Styled-Components` 이다. 공식 문서에서 설명하는 스타일드 컴포넌트의 장점들은 다음과 같다.

![image](https://user-images.githubusercontent.com/69416561/197572618-f85edc81-e630-41db-830a-08fb54e6da30.png)


- 즉 유지보수가 편하고, 컴포넌트 별로 스타일을 따로 설정할 수 있어 충돌의 염려가 없으며, css파일을 따로 만들어 적을 필요 없이 JS파일 안에 스타일을 지정함으로 불필요한 코드 페이지 로딩을 줄여줄 수 있다는 장점이 있다. **즉 컴포넌트 단위로 개발하는 최신 개발 트랜드에 최적화된 라이브러리**라고 할 수 있다.

## ✅ 해당하는 라이브러리의 장/단점은 무엇인가?

### 👍 장점
- CSS의 컴포넌트화로 스타일 시트의 파일을 유지보수 할 필요가 없다.(모듈화)
- 자바스크립트의 환경을 최대한 활용하는 특성을 살려 스크립트 내의 상수와 함수를 쉽게 공유할 수 있다. (`props`를 활용한 조건부 스타일링 등)
- 현재 사용중인 스타일만 DOM에 포함시킨다.
- 짧은 길이의 유니크한 클래스를 자동으로 생성하여 코드 경량화의 장점이 있다. 


### 👎 단점
- 컴포넌트 단위가 아닌, 마크업 개발자가 존재하여 페이지 단위로 개발하는 전통적인 방식에선 적합하지 않다.
- 자바스크립트에 CSS 코드가 입력되기 떄문에 페이지 로딩 시 구문 분석 과정이 필요하다. 따라서 규모가 크고 인터렉션한 페이지일 경우 성능이 상대적으로 좋지 않을 가능성이 있다.
- JS에서 CSS를 다루므로 러닝커브가 심화될 우려가 있다. 

## ✅ 대체할 수 있는 라이브러리가 있는가? (emotion, stitches, …)

### 1️⃣ Emotion

- 스타일드 컴포넌트와 같은 CSS-in-JS 라이브러리이다.
- 전반적인 스타일링 기능은 똑같고, 모두 Sass문법을 사용하기에 스타일 문법도 큰 차이가 없다.
- 유의미한 정도는 아니지만 전반적으로 emotion의 성능이 더 좋다는 평가가 많다. 
- 스타일드 컴포넌트와는 달리 SSR에서 별도의 설정 없이 동작할 수 있다는 장점이 있다.

```js
/** @jsx jsx */
import { css, jsx } from '@emotion/react'

const Style = css`
  background-color: hotpink;
  font-size: 24px;
  border-radius: 4px;
  padding: 32px;
  text-align: center;
  &:hover {
    color: white;
  }
`

export default function App() {
  return <div css={Style}>Hover to change color.</div>
}
```
- 스타일드 컴포넌트와 달리 인라인으로 스타일링을 지원하므로 jsx안에서 html태그를 바로 확인할 수 있다.

```js
import styled from '@emotion/styled'

const Button = styled.button`
  color: turquoise;
`

render(<Button>This my button component.</Button>)
```
- 따로 라이브러리를 설치하여 스타일드 컴포넌트처럼 사용하는 것도 가능하다.
```js
<div css={[style, themes[theme], sizes[size]]} />
  
const themes = {
  primary: css`
    color: red;
  `,  
  secondary: css`
    color: blue;
  `
}
const sizes = {
  small: css`
    fontSize: 0.75rem;
  `,
  medium: css`
    fontSize: 1rem;
  `
}
```
- 위처럼 css 변수를 조립하여 컴포넌트 스타일링을 진행할 수 있다.

### 2️⃣ tailwind CSS




## ✅ 난 어떤 스타일링 라이브러리가 가장 마음에 드는가?


## 📌 참조 레퍼런스

[CSS역사로 알아보는 CSS가 어려워진 이유](https://velog.io/@teo/css-history-1) 

[카카오웹툰은 CSS를 어떻게 작성하고 있을까?](https://fe-developers.kakaoent.com/2022/220210-css-in-kakaowebtoon/) 

[styled-components와 emotion, 도대체 차이가 뭔데?](https://velog.io/@bepyan/styled-components-%EA%B3%BC-emotion-%EB%8F%84%EB%8C%80%EC%B2%B4-%EC%B0%A8%EC%9D%B4%EA%B0%80-%EB%AD%94%EA%B0%80)
