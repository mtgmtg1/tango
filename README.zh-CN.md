<p align="center">
  <img width="200" src="https://p6.music.126.net/obj/wonDlsKUwrLClGjCm8Kx/30218210645/b186/3974/338b/2ddfa3cd042cf988ca452686552f8462.png" />
</p>

<h1 align="center">Tango 로우코드 디자이너</h1>
<div align="center">

소스 코드 기반의 로우코드 디자이너 프레임워크

[![license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/NetEase/tango/blob/main/LICENSE)
[![NPM version](https://img.shields.io/npm/v/@music163/tango-designer.svg?style=flat-square)](http://npmjs.org/package/@music163/tango-designer)

<img src="https://p6.music.126.net/obj/wonDlsKUwrLClGjCm8Kx/30108735057/7ba9/dced/9ac3/420f6e04b371dd47de06e7d71142560d.gif" alt="preview" />

</div>

한국어 | [English](/README.md)

## 📄 문서

자세한 사용 가이드는 아래 링크에서 확인할 수 있습니다:

- 공식 문서 사이트: <https://netease.github.io/tango-site/>
- 데모 애플리케이션: <https://tango-demo.musicfe.com/designer/>

## ✨ 특징

- 넷이즈 클라우드 뮤직의 실제 프로덕션 환경에서 검증되었으며, 로우코드 플랫폼과 ���컬 개발 도구 등에 유연하게 통합 가능
- 소스 코드 AST 기반의 로우코드 엔진 제공, 사설 DSL과 프로토콜 없음
- 실시간 코드 생성 기능 제공, 소스 코드 입력과 출력을 지원하여 다양한 소스 코드 개발 시나리오에 적용 가능
- 바로 사용 가능한 프론트엔드 로우코드 디자이너 제공, 유연하고 사용하기 쉬운 디자이너 React 컴포넌트 제공
- TypeScript로 개발되어 완벽한 타입 정의 파일과 문서 지원 제공

## 💡 예시

Tango를 사용하여 다양한 유형의 소스 코드 기반 로우코드 빌드 도구를 빠르게 구축할 수 있습니다. 예를 들어:

| 미리보기 | 설명 |
| ---------------------------------------------------------------------------------------------- | -------------------- |
| ![image](https://github.com/NetEase/tango/assets/6984035/56a71741-4536-4336-803a-d81d51128a76) | 백오피스 시스템 빌더 |
| ![dashboard app](public/dashboard-builder.png) | 대시보드 앱 빌더 |
| ![image](https://github.com/NetEase/tango/assets/6984035/790d88e1-d716-4f99-868a-31dda25e9fb1) | H5 활동 페이지 빌더 |
| ![rn app](public/rn-builder.png) | ReactNative 앱 빌더 |
| ![mail app](public/mail-builder.png) | 마케팅 이메일 빌더 |

## 🌐 호환성

- 모던 브라우저 (Chrome >= 80, Edge >= 80, 최신 2개 버전의 Safari, 최신 2개 버전의 Firefox)

## 💻 개발

### 권장 개발 환경

- Node `>= 18`
- Yarn `>= 1.22 && < 2`

### 로컬 개발 디버깅 방법

```bash
# 다운로드 저장소
git clone https://github.com/NetEase/tango.git

# 프로젝트 루트 디렉토리로 이동
cd tango

# 의존성 설치
yarn

# 디자이너 예시 시작
yarn start
```

### 로컬 https 인증서

로컬 개발 환경에서 https를 사용하려면 다음 명령어로 인증서를 생성할 수 있습니다:

```bash
brew install mkcert

# mkcert를 로컬 루트 CA에 추가하여 로컬에서만 유효
mkcert -install

# playground 애플리케이션 디렉토리로 이동
cd apps/playground

# 웹사이트에 대한 mkcert로 서명된 인증서 생성
mkcert local.netease.com
```

## 💬 커뮤니티 토론

NetEase Tango의 커뮤니티에 참여하여 아이디어, 제안 또는 질문을 공유하고 다른 사용자와 기여자와의 연결을 구축하세요.

- Discord: <https://discord.gg/B6hkGTe4Rz>
- [사용 추세](https://npm-compare.com/@music163/tango-helpers,@music163/tango-context,@music163/tango-core,@music163/tango-setting-form,@music163/tango-sandbox,@music163/tango-ui,@music163/tango-designer)

## 🤝 기여 참여

먼저 [기여 ���이드](https://docs.github.com/en/get-started/quickstart/contributing-to-projects)를 읽어보세요.

- 저장소 클론
- 브랜치 생성
- 코드 제출
- 수정 코드 git rebase master
- Pull Request 시작

## 💗 감사

넷이즈 클라우드 뮤직 공통 기술 팀, 대화면 팀, 방송 기술 팀, 그리고 모든 Tango 프로젝트에 참여한 개발자들에게 감사드립니다.

CodeSandbox의 [Sandpack](https://sandpack.codesandbox.io/) 프로젝트에 감사드립니다. Tango를 위해 강력한 브라우저 기반 코드 빌드 및 실행 기능을 제공합니다.

## 📣 제품 홍보

![](https://p5.music.126.net/obj/wonDlsKUwrLClGjCm8Kx/31629770956/da9e/3a74/4e00/7c69cf46a713f1b008bd1243b5b1ab1c.png)

UI를 다시 만들지 마세요. 넷이즈 클라우드 뮤직의 "헤바 D2C" 개발 도구를 사용해보세요! 디자인 스케치를 코드로 쉽게 변환하고, React, RN, Vue, 마이크로 프로그램 등 다양한 플랫폼에서 사용할 수 있습니다. 디자인을 보고 바로 코드를 얻을 수 있습니다!

"헤바 D2C" 즉시 体하기:

- 나는 Figma 사용자입니다: <https://www.figma.com/community/plugin/1174548852019950797/seal-figma-to-code-d2c/>
- 나는 MasterGo 사용자입니다: <https://mastergo.com/community/plugin/98956774428196/>

## 📄 오픈 소스 라이선스

이 프로젝트는 [MIT 오픈 소스 라이선스](./LICENSE)를 따릅니다.
