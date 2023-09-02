## 개인적으로 사용할 eslint, prettier 설정

## 삽질
- changeset의 경우 버전 업데이트를 하기위해선 터미널에서 사용자 인터렉션이 필요해서 완벽한 자동화가 안됌(별로인듯..)
- npm에 배포시에 package.json의 name으로 @company/package-name의 형식으로 배포하고 싶으면 npm 계정에company에 해당하는 organization을 생성해줘야된다
- eslint 설정을 배포해서 다른 프로젝트에서 사용하려면 패키지 이름 뒤에 eslint-config가 붙어야된다.
- prettier도 마찬가지로 prettier-config를 붙어야된다.(아닌 방법도 있는데 그냥 붙이는게 편할 듯)

## 참고
- [eslint](https://eslint.org/docs/latest/extend/shareable-configs)
- [prettier](https://prettier.io/docs/en/configuration.html)


