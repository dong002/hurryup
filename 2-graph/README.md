# 그래프 그리기

### 프로젝트 목표

설문 데이터를 가공하여 적절한 그래프를 그립니다.

### 요구사항

1. surveryData.js 파일이 주어집니다. import 하여 사용하시면 됩니다.
   (설문조사문항 데이터는 surveyData, 사용자응답 데이터는 surveyActionData로 선언되어 있습니다.)
   (아래 첨부 파일에 surveyData.js가 있습니다.)

```
import {surveyData, surveyActionData} from './surveyData.js';
```

2. 초기 화면 구성은 다음과 같습니다.
   ![초기 화면 구성](https://grepp-programmers.s3.amazonaws.com/production/lecture/learn/attachment/file/1761/1.png)

3. 상단의 성별, 연령, 문항 항목을 각각 하나씩 선택 시, 막대 그래프가 그려집니다.

4. 각 옵션(성별, 연령, 문항)은 한 가지만 선택할 수 있습니다.

5. 선택된 항목은 진한 회색으로 표시됩니다.

6. 그래프가 나타날 때는 늘어나는 애니메이션 효과가 발생합니다.
   ![애니메이션](https://grepp-programmers.s3.amazonaws.com/production/lecture/learn/attachment/file/1760/3.gif)

7. 그래프의 눈금은 100단위이며, 표시된 항목 중 가장 긴 막대의 값을 10의 자리에서 반올림한 값이 최대값이 됩니다.
   (가장 긴 막대의 값이 782이면, 눈금은 800까지 표시됩니다.)

8. 그래프의 범례는 선택된 연령을 보여줍니다.

### 심화 기능

> 가능하면 심화기능까지 구현해주세요. 실력향상을 위해!

1. 연령을 중복 선택할 수 있도록 수정하고, 중복 선택 시, 그래프가 아래 그림처럼 서로 다른 색으로 쌓여서 나타납니다.
   ![중복 선택 화면](https://grepp-programmers.s3.amazonaws.com/production/lecture/learn/attachment/file/1759/2.png)

### 디자인

- 기본적으로 위의 이미지를 참고하되 원하는 방식으로 수정하셔도 좋습니다.

### 참고

*기본적인 구조나 css를 참고할 수 있도록 예시 html 파일을 첨부합니다. (example.html)
*처음부터 전부 다 구현하려고 하지 마시고, 나눠서 가능한만큼만 조금씩 구현한다고 생각하세요.(PR도 나눠서)

### 너무 어려우시면,

- 모든 조건을 구현하기에 너무 어렵다고 생각되시면, 연령 선택을 중복선택이 아닌, 다른 버튼 처럼 하나만 선택하는 방식으로 구현해보세요.

.
.
