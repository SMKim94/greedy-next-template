/**
 * 각 설정 속성에 대한 자세한 설명은 다음 링크를 참조하세요:
 * https://jestjs.io/docs/configuration
 */

import type { Config } from 'jest';
import nextJest from 'next/jest.js';

const createJestConfig = nextJest({
  // Next.js 앱의 경로를 제공하여 테스트 환경에서 next.config.js와 .env 파일을 로드합니다
  dir: './src',
});

const config: Config = {
  // 테스트에서 가져온 모든 모듈을 자동으로 모의(mock)해야 하는지 여부
  // https://jestjs.io/docs/configuration#automock-boolean
  // automock: false,

  // `n`번의 실패 후 테스트 실행을 중지
  // https://jestjs.io/docs/configuration#bail-number--boolean
  // bail: 0,

  // Jest가 캐시된 종속성 정보를 저장할 디렉토리
  // https://jestjs.io/docs/configuration#cachedirectory-string
  // cacheDirectory: "C:\\Users\\ksm\\AppData\\Local\\Temp\\jest",

  // 모든 테스트 전에 모의(mock) 호출, 인스턴스, 컨텍스트 및 결과를 자동으로 지우기
  // https://jestjs.io/docs/configuration#clearmocks-boolean
  clearMocks: true,

  // 테스트 실행 중 커버리지 정보를 수집할지 여부
  // https://jestjs.io/docs/configuration#collectcoverage-boolean
  collectCoverage: true,

  // 커버리지 정보를 수집할 파일 집합을 나타내는 glob 패턴 배열
  // https://jestjs.io/docs/configuration#collectcoveragefrom-array
  // collectCoverageFrom: undefined,

  // Jest가 커버리지 파일을 출력할 디렉토리
  // https://jestjs.io/docs/configuration#coveragedirectory-string
  coverageDirectory: 'coverage',

  // 커버리지 수집을 건너뛸 정규식 패턴 문자열 배열
  // https://jestjs.io/docs/configuration#coveragepathignorepatterns-arraystring
  // coveragePathIgnorePatterns: [
  //   "\\\\node_modules\\\\"
  // ],

  // 코드 커버리지를 측정하는 데 사용할 공급자 지정
  // https://jestjs.io/docs/configuration#coverageprovider-string
  coverageProvider: 'v8',

  // Jest가 커버리지 리포트를 작성할 때 사용하는 리포터 이름 목록
  // https://jestjs.io/docs/configuration#coveragereporters-arraystring--string-options
  // coverageReporters: [
  //   "json",
  //   "text",
  //   "lcov",
  //   "clover"
  // ],

  // 커버리지 결과에 대한 최소 임계값 적용 설정
  // https://jestjs.io/docs/configuration#coveragethreshold-object
  // coverageThreshold: undefined,

  // 사용자 정의 종속성 추출기 경로
  // https://jestjs.io/docs/configuration#dependencyextractor-string
  // dependencyExtractor: undefined,

  // 더 이상 사용되지 않는 API 호출 시 도움이 되는 오류 메시지 표시
  // https://jestjs.io/docs/configuration#errorondeprecated-boolean
  // errorOnDeprecated: false,

  // 가짜 타이머의 기본 구성
  // https://jestjs.io/docs/configuration#faketimers-object
  // fakeTimers: {
  //   "enableGlobally": false
  // },

  // glob 패턴 배열을 사용하여 무시된 파일에서 강제로 커버리지 수집
  // https://jestjs.io/docs/configuration#forcecoveragematch-arraystring
  // forceCoverageMatch: [],

  // 모든 테스트 스위트 전에 트리거되는 비동기 함수를 내보내는 모듈 경로
  // https://jestjs.io/docs/configuration#globalsetup-string
  // globalSetup: undefined,

  // 모든 테스트 스위트 후에 트리거되는 비동기 함수를 내보내는 모듈 경로
  // https://jestjs.io/docs/configuration#globalteardown-string
  // globalTeardown: undefined,

  // 모든 테스트 환경에서 사용 가능해야 하는 전역 변수 집합
  // https://jestjs.io/docs/configuration#globals-object
  // globals: {},

  // 테스트 실행에 사용되는 최대 작업자 수
  // https://jestjs.io/docs/configuration#maxworkers-number--string
  // maxWorkers: "50%",

  // 모듈을 검색할 디렉토리 이름 배열
  // https://jestjs.io/docs/configuration#moduledirectories-arraystring
  // moduleDirectories: [
  //   "node_modules"
  // ],

  // 모듈이 사용하는 파일 확장자 배열
  // https://jestjs.io/docs/configuration#modulefileextensions-arraystring
  // moduleFileExtensions: [
  //   "js",
  //   "mjs",
  //   "cjs",
  //   "jsx",
  //   "ts",
  //   "tsx",
  //   "json",
  //   "node"
  // ],

  // 모듈 이름을 다른 모듈로 매핑하는 정규식 맵
  // https://jestjs.io/docs/configuration#modulenamemapper-objectstring-string--arraystring
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
  },

  // 모듈 로더에 표시되기 전에 모든 모듈 경로와 대조되는 정규식 패턴 문자열 배열
  // https://jestjs.io/docs/configuration#modulepathignorepatterns-arraystring
  // modulePathIgnorePatterns: [],

  // 테스트 결과에 대한 알림 활성화
  // https://jestjs.io/docs/configuration#notify-boolean
  // notify: false,

  // 알림 모드 지정 (notify: true 필요)
  // https://jestjs.io/docs/configuration#notifymode-string
  // notifyMode: "failure-change",

  // Jest 구성의 기본으로 사용되는 프리셋
  // https://jestjs.io/docs/configuration#preset-string
  // preset: undefined,

  // 하나 이상의 프로젝트에서 테스트 실행
  // https://jestjs.io/docs/configuration#projects-arraystring--projectconfig
  // projects: undefined,

  // Jest에 사용자 정의 리포터 추가
  // https://jestjs.io/docs/configuration#reporters-arraymodulename--modulename-options
  // reporters: undefined,

  // 모든 테스트 전에 모의 상태 자동 초기화
  // https://jestjs.io/docs/configuration#resetmocks-boolean
  // resetMocks: false,

  // 각 개별 테스트 실행 전에 모듈 레지스트리 초기화
  // https://jestjs.io/docs/configuration#resetmodules-boolean
  // resetModules: false,

  // 사용자 정의 리졸버 경로
  // https://jestjs.io/docs/configuration#resolver-string
  // resolver: undefined,

  // 모든 테스트 전에 모의 상태와 구현을 자동으로 복원
  // https://jestjs.io/docs/configuration#restoremocks-boolean
  // restoreMocks: false,

  // Jest가 파일을 검색할 루트 디렉토리
  // https://jestjs.io/docs/configuration#rootdir-string
  rootDir: '.',

  // Jest가 파일을 검색할 디렉토리 경로 목록
  // https://jestjs.io/docs/configuration#roots-arraystring
  // roots: [
  //   "<rootDir>"
  // ],

  // Jest의 기본 테스트 러너 대신 사용자 정의 러너 사용
  // https://jestjs.io/docs/configuration#runner-string
  // runner: "jest-runner",

  // 각 테스트 전에 테스트 환경을 설정하는 코드를 실행하는 모듈 경로
  // https://jestjs.io/docs/configuration#setupfiles-array
  // setupFiles: [],

  // 각 테스트 전에 테스트 프레임워크를 설정하는 모듈 경로 목록
  // https://jestjs.io/docs/configuration#setupfilesafterenv-array
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],

  // 테스트가 느린 것으로 간주되어 결과에 보고되는 시간(초)
  // https://jestjs.io/docs/configuration#slowtestthreshold-number
  // slowTestThreshold: 5,

  // 스냅샷 테스트에 사용할 스냅샷 직렬화 모듈 경로 목록
  // https://jestjs.io/docs/configuration#snapshotserializers-arraystring
  // snapshotSerializers: [],

  // 테스트에 사용할 테스트 환경
  // https://jestjs.io/docs/configuration#testenvironment-string
  testEnvironment: 'jsdom',

  // 테스트 환경에 전달될 옵션
  // https://jestjs.io/docs/configuration#testenvironmentoptions-object
  testEnvironmentOptions: {
    customExportConditions: [''],
  },

  // 테스트 결과에 위치 필드 추가
  // https://jestjs.io/docs/configuration#testlocationinresults-boolean
  // testLocationInResults: false,

  // Jest가 테스트 파일을 감지하는 데 사용하는 glob 패턴
  // https://jestjs.io/docs/configuration#testmatch-arraystring
  testMatch: ['<rootDir>/tests/unit/**/*.test.[jt]s?(x)'],

  // 모든 테스트 경로와 대조되는 정규식 패턴 문자열 배열 (일치하는 테스트는 건너뜀)
  // https://jestjs.io/docs/configuration#testpathignorepatterns-arraystring
  // testPathIgnorePatterns: [
  //   "\\\\node_modules\\\\"
  // ],

  // Jest가 테스트 파일을 감지하는 데 사용하는 정규식 패턴
  // https://jestjs.io/docs/configuration#testregex-string--arraystring
  // testRegex: [],

  // 사용자 정의 결과 프로세서 사용
  // https://jestjs.io/docs/configuration#testresultsprocessor-string
  // testResultsProcessor: undefined,

  // 사용자 정의 테스트 러너 사용
  // https://jestjs.io/docs/configuration#testrunner-string
  // testRunner: "jest-circus/runner",

  // 변환기 경로에 대한 정규식 맵
  // https://jestjs.io/docs/configuration#transform-objectstring-pathtotransformer--pathtotransformer-object
  // transform: undefined,

  // 변환을 건너뛸 소스 파일 경로와 일치하는 정규식 패턴 문자열 배열
  // https://jestjs.io/docs/configuration#transformignorepatterns-arraystring
  // transformIgnorePatterns: [
  //   "\\\\node_modules\\\\",
  //   "\\.pnp\\.[^\\\\]+$"
  // ],

  // 모듈 로더가 자동으로 모의를 반환하기 전에 모든 모듈과 대조되는 정규식 패턴 문자열 배열
  // https://jestjs.io/docs/configuration#unmockedmodulepathpatterns-arraystring
  // unmockedModulePathPatterns: undefined,

  // 실행 중 각 개별 테스트를 보고할지 여부
  // https://jestjs.io/docs/configuration#verbose-boolean
  // verbose: undefined,

  // 감시 모드에서 테스트를 다시 실행하기 전에 모든 소스 파일 경로와 대조되는 정규식 패턴 배열
  // https://jestjs.io/docs/configuration#watchpathignorepatterns-arraystring
  // watchPathIgnorePatterns: [],

  // 파일 크롤링에 watchman 사용 여부
  // https://jestjs.io/docs/configuration#watchman-boolean
  // watchman: true,
};

export default createJestConfig(config);
