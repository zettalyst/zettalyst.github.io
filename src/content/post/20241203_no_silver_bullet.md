---
title: 'No silver bullet'
description: 'AI가 개발자를 대체할 수 있을까요?'
pubDate: 'Dec 3 2024'
---

> “AI가 개발자를 대체할 수 있을까요?”

이 질문은 매년 수많은 개발자 지망생이 경험 많은 선배들에게 묻곤 합니다.  
AI가 인간을 대신할 수 있다는 전망이 쏟아지는 시대,  
이 질문은 단순한 호기심을 넘어 기술의 본질을 고민하게 만듭니다.

그러나 답은 의외로 단순합니다.  
프레드 브룩스(Fred Brooks)의 1986년 논문  
[No Silver Bullet - Essence and Accident in Software Engineering](https://ieeexplore.ieee.org/document/1663532)  
을 보면 이 질문에 대한 명확한 힌트를 얻을 수 있습니다.

**"AI가 등장하더라도 여전히 은탄환은 존재하지 않을 확률이 높다."**

## 은탄환이란 무엇인가?

은탄환이라는 개념은 서구 전설에서 유래한 은유적 표현입니다.  
전설 속에서 늑대인간을 처치할 수 있는 유일한 해결책이 은탄환이었듯이,  
기술 분야에서 은탄환은 **모든 문제를 해결할 수 있는 만능 해결책**을 의미합니다.

브룩스는 `No Silver Bullet` 논문에서 단호히 주장합니다.

**"소프트웨어 공학에서 은탄환은 없다"**

이는 기술이 아무리 발전해도,  
특히 향후 10년 내 **본질적 어려움**은 해결되지 않을 것이라는 뜻입니다.  
그는 소프트웨어 공학의 어려움을 두 가지 범주로 나누어 설명합니다.

## **본질적 어려움 vs 부수적 어려움**

브룩스는 소프트웨어 공학의 어려움을 두 가지로 구분합니다.

1. **본질적 어려움(Essential Difficulties)**
2. **부수적 어려움(Accidental Difficulties)**

일단 [1. 본질적인 어려움]을 구성하는 요소는 다음과 같습니다.

- **복잡성(Complexity)**: 소프트웨어는 인간이 만드는 대부분의 사물보다 복잡하며 매우 많은 상태를 가지고 있다.
- **호환성(Conformity)**: 소프트웨어는 외부 시스템이나 환경에 맞춰야 한다.

* **변경 가능성(Changeability)**: 소프트웨어는 끊임없이 수정되고 진화한다.
* **비가시성(Invisibility)**: 소프트웨어는 물리적으로 보이지 않기 때문에 전체를 직관적으로 파악하기 어렵다.

[2. 부수적인 어려움]을 구성하는 요소는 다음과 같습니다.  
이는 소프트웨어 개발 과정에서 사용되는 도구나 환경의 한계에서 비롯된 문제입니다.

- 프로그래밍 언어의 제약
- 하드웨어 성능의 한계
- 협업 도구의 부족

## AI가 발전한다고 하더라도...

지난 수십 년간 소프트웨어 개발 환경은 눈부시게 발전했습니다.  
Python과 같은 고급 프로그래밍 언어, Linux와 Git 같은 개발 도구,  
그리고 Apple M4 칩처럼 빌드 시간을 줄이는 첨단 하드웨어가 등장했습니다.  
최근에는 AI를 활용한 코드 자동 생성 LLM 도구와 반자동 프로그래밍 Cusror IDE도 사용됩니다.

하지만 이 모든 발전은 [2. 부수적 어려움(Accidental Difficulties)]을 해결하는 데 초점이 맞춰져 있을 뿐, [1. 본질적 어려움(Essential Difficulties)]을 해소하지 못합니다.

AI가 도래한다고 하더라도, 본질적인 어려움 중 복잡성 (Complexity)는 해결하지 못할 가능성이 높습니다.  
오히려, 부적절한 AI 사용은 복잡성을 해결하기는커녕 더 해칠 가능성도 있습니다.  
예를 들어, AI가 생성한 코드는 겉보기에는 정확해 보일지 몰라도,  
코드의 맥락을 이해하지 못한 채 설계에 불필요한 것을 추가는 악영향을 미칠 수 있습니다.

결국, AI는 엔지니어링의 **보조 도구일 뿐**,  
소프트웨어의 본질적 문제를 해결할 수 없습니다.

## **본질적 어려움을 해결하는 전략**

브룩스는 본질적 어려움을 극복하기 위한 전략으로 다음 네 가지를 제안했습니다.

1. 대중 시장 활용(Buy versus Build)  
   처음부터 모든 것을 새로 만들지 말고, 이미 검증된 소프트웨어를 재사용하거나 구매하라.
2. 빠른 프로토타이핑(Rapid Prototyping)  
   요구사항을 반복적으로 설계하고 테스트하며 점진적으로 개선하라.
3. 점진적 개발(Incremental Development)  
   한 번에 완벽한 소프트웨어를 개발하려 하지 말고, 단계적으로 성장시키는 방식을 채택하라.
4. 훌륭한 설계자 육성(Great Designer)  
   뛰어난 설계자를 발굴하고 양성하여 프로젝트의 핵심 역할을 맡게 하라.

특히 마지막 전략은 현대의 소프트웨어 공학에서도 가장 중요한 요소로 평가받습니다.  
기술이 아무리 발전해도, 본질적인 문제를 해결하는 열쇠는 **결국 사람에게 달려 있기 때문입니다.**

## 결론: 엔지니어링은 사람으로 시작해 사람으로 귀결된다

소프트웨어 공학의 본질적 어려움은 결국 기계나 도구적인 문제 보다는  
**방법론과 사람**의 문제에서 비롯됩니다.

개인적인 경험에서 봤을 때 **4번 훌륭한 설계자 육성**하는 해결 방법이 가장 눈에 띕니다.

- 훌륭한 설계자는 복잡성을 통제하고,
- 변화와 비가시성 속에서도 팀을 이끌며
- 본질적 문제를 해결하는 중심적 역할을 합니다.

**따라서 우리가 해야 할 일은 다음과 같습니다.**

1. 도메인 지식이 풍부한 설계자를 키우거나 찾아내기
2. 훌륭한 멘토와 스승을 붙여 양성하기
3. 소통과 협업의 문화를 통해 지식을 공유하고 확산시키기

AI의 발전은 분명 중요한 도약이지만, 은탄환은 아닙니다.  
소프트웨어 공학은 여전히 사람 중심으로 돌아가며,  
사람으로부터 해답을 찾아야 합니다.

**결국, 엔지니어링의 시작과 끝은 모두 사람입니다.**
