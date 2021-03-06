# Mr. Blog 만들기

### 프로젝트 목표

매일 새로운 질문에 답변하는 서비스를 구현합니다.

### 제한 사항

1. Vanilla JS로만 구현합니다.
2. index.html에서 javascript 파일들을 불러올 때는, index.js를 통해 모듈 방식으로 로드합니다.

### 요구사항

1. db/data.json을 통해 질문 데이터를 불러오고 화면에 띄워줍니다. (질문 데이터는 직접 분석해보세요.)
2. '저장' 버튼을 클릭 시, 입력된 내용을 Local Storage에 날짜 별로 저장합니다.
3. 페이지를 처음 열었을 때, 해당 날짜에 이미 저장된 답변이 있다면 입력 폼에 추가합니다.
4. 상단의 좌우에 화살표를 추가하고, 왼쪽 화살표를 클릭하면 전 날, 오른쪽 화살표를 클릭하면 다음 날로 이동되도록 합니다. (날짜가 바뀌면 질문도 해당 날짜의 질문으로 새로 불러옵니다.)

### 심화 기능

> 가능하면 심화기능까지 구현해주세요. 실력향상을 위해!

1. 날짜에 대한 이동 후에는 브라우저의 뒤로가기 버튼을 클릭 시, 이전 날짜로 돌아가도록 합니다.
2. webpack을 이용하여 javascript 파일들을 하나의 js 파일로 번들링 합니다.

### 디자인

![간단 디자인](https://grepp-programmers.s3.amazonaws.com/production/lecture/learn/attachment/file/1688/%E1%84%87%E1%85%B3%E1%86%AF%E1%84%85%E1%85%A9%E1%84%80%E1%85%B3%E1%84%8A%E1%85%B5_%E1%84%80%E1%85%A1%E1%86%AB%E1%84%83%E1%85%A1%E1%86%AB_%E1%84%83%E1%85%B5%E1%84%8C%E1%85%A1%E1%84%8B%E1%85%B5%E1%86%AB.png)

- 위의 이미지는 예시 이미지 입니다.

### 실행

```
npx serve ./
```
