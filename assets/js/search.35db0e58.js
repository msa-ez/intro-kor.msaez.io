(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{wQbG:function(e,a,t){"use strict";t.r(a);t("QWBl"),t("2B1R"),t("+2oP"),t("rB9j"),t("hByQ"),t("GKVU"),t("FZtP");var o=t("VTBJ"),n=t("YGJC"),h=t("CjXH"),r={components:{ChevronRightIcon:h.d,SearchIcon:h.j},data:function(){return{query:"",focusIndex:-1,focused:!1}},computed:{results:function(){return new n.a(this.headings,{keys:["value"],threshold:.25}).search(this.query).slice(0,15)},headings:function(){var e=[];return this.$static.allMarkdownPage.edges.map((function(e){return e.node})).forEach((function(a){a.headings.forEach((function(t){e.push(Object(o.a)({},t,{path:a.path,title:a.title}))}))})),e},showResult:function(){return this.focused&&this.query.length>0}},methods:{increment:function(){this.focusIndex<this.results.length-1&&this.focusIndex++},decrement:function(){this.focusIndex>=0&&this.focusIndex--},go:function(){var e;0!==this.results.length&&(e=-1===this.focusIndex?this.results[0]:this.results[this.focusIndex],this.$router.push(e.path+e.anchor),this.$refs.input.blur(),this.query="")}}},l=t("KHd+"),d=t("Kw5r"),c=d.a.config.optionMergeStrategies.computed,u={allMarkdownPage:{edges:[{node:{id:"b91c645ed9e7dc1650c0a99b0abb5fb3",path:"/tool/google-drive-examples/",title:"구글 드라이브 예제",headings:[{depth:1,value:"구글 드라이브 예제",anchor:"#구글-드라이브-예제"},{depth:2,value:"실습도구 접속",anchor:"#실습도구-접속"},{depth:2,value:"시나리오",anchor:"#시나리오"},{depth:2,value:"Instructions",anchor:"#instructions"},{depth:3,value:"모델링",anchor:"#모델링"},{depth:3,value:"프로젝트 실행",anchor:"#프로젝트-실행"},{depth:3,value:"웹 어플리케이션 활용",anchor:"#웹-어플리케이션-활용"}]}},{node:{id:"02c7486576dd93a9ef7c84a4fbdbb6ff",path:"/templates-language/python-template/",title:"Python Template 만들기 ",headings:[{depth:1,value:"Python Template 만들기",anchor:"#python-template-만들기"},{depth:2,value:"Python DDD Tutorial",anchor:"#python-ddd-tutorial"},{depth:3,value:"Model",anchor:"#model"},{depth:3,value:"Code",anchor:"#code"},{depth:3,value:"Test",anchor:"#test"},{depth:2,value:"Python 기술 Stack",anchor:"#python-기술-stack"},{depth:2,value:"Template Code 만들기에 앞서",anchor:"#template-code-만들기에-앞서"},{depth:2,value:"Python template 파일 구조",anchor:"#python-template-파일-구조"},{depth:2,value:"Model 별 Template 설명",anchor:"#model-별-template-설명"},{depth:3,value:"· Entity.py",anchor:"#·-entitypy"},{depth:3,value:"· AbstractEvent.py",anchor:"#·-abstracteventpy"},{depth:3,value:"· Event.py",anchor:"#·-eventpy"},{depth:3,value:"· PolicyHandler.py",anchor:"#·-policyhandlerpy"},{depth:3,value:"· PolicyEvent.py",anchor:"#·-policyeventpy"},{depth:3,value:"· ExternalService.py",anchor:"#·-externalservicepy"},{depth:3,value:"· ExternalEntity.py",anchor:"#·-externalentitypy"},{depth:3,value:"· Repository.py",anchor:"#·-repositorypy"},{depth:3,value:"· Controller.py",anchor:"#·-controllerpy"},{depth:3,value:"· app.py",anchor:"#·-apppy"},{depth:2,value:"Python 전용 template",anchor:"#python-전용-template"},{depth:3,value:"· DB.py",anchor:"#·-dbpy"},{depth:3,value:"· KafkaProcessor.py",anchor:"#·-kafkaprocessorpy"},{depth:3,value:"· util.py",anchor:"#·-utilpy"},{depth:3,value:"· Hateoas.py",anchor:"#·-hateoaspy"}]}},{node:{id:"9302e1a1479643731a23de1ecc9bf0ba",path:"/templates-language/springboot-java-template/",title:"Spring Boot/Java(준비중)",headings:[{depth:1,value:"Spring Boot/Java(준비중)",anchor:"#spring-bootjava준비중"}]}},{node:{id:"56cd697e019b7363e6c18e0a3faf50cd",path:"/templates-language/custom-template/",title:"커스텀 템플릿 만들기",headings:[{depth:1,value:"커스텀 템플릿 만들기",anchor:"#커스텀-템플릿-만들기"},{depth:2,value:"커스텀 템플릿 (Custom Template)",anchor:"#커스텀-템플릿-custom-template"},{depth:2,value:"개념",anchor:"#개념"},{depth:2,value:"템플릿 설명",anchor:"#템플릿-설명"},{depth:2,value:"템플릿 생성",anchor:"#템플릿-생성"},{depth:2,value:"템플릿 객체",anchor:"#템플릿-객체"},{depth:3,value:"· 공통 속성 (BoundedContext 제외)",anchor:"#·-공통-속성-boundedcontext-제외"},{depth:3,value:"· BoundedContext 객체",anchor:"#·-boundedcontext-객체"},{depth:3,value:"· Aggregate 객체",anchor:"#·-aggregate-객체"},{depth:3,value:"· Rules 객체",anchor:"#·-rules-객체"},{depth:3,value:"· Event 객체",anchor:"#·-event-객체"},{depth:3,value:"· Command 객체",anchor:"#·-command-객체"},{depth:3,value:"· Policy 객체",anchor:"#·-policy-객체"},{depth:3,value:"· View 객체",anchor:"#·-view-객체"},{depth:3,value:"· fieldDescriptors",anchor:"#·-fielddescriptors"},{depth:3,value:"· viewFieldDescriptors",anchor:"#·-viewfielddescriptors"}]}},{node:{id:"e1060ebab66912c625c3067356759b40",path:"/tool/on-prem-inst/",title:"on-prem 설치 설명서",headings:[{depth:1,value:"on-prem 설치 설명서",anchor:"#on-prem-설치-설명서"},{depth:1,value:"Installing on-premise MSA-Easy",anchor:"#installing-on-premise-msa-easy"},{depth:3,value:"1. Clone helm Charts",anchor:"#1-clone-helm-charts"},{depth:3,value:"2. Create & Connect Kubernetes Cluster",anchor:"#2-create--connect-kubernetes-cluster"},{depth:3,value:"3. helm chart 기반 MSA-Easy 설치",anchor:"#3-helm-chart-기반-msa-easy-설치"},{depth:4,value:"1. yaml 파일 별 수정 필요 내용",anchor:"#1-yaml-파일-별-수정-필요-내용"},{depth:4,value:"2. helm install on-prem .",anchor:"#2-helm-install-on-prem-"},{depth:4,value:"3. Apply issuer, secrets.yaml",anchor:"#3-apply-issuer-secretsyaml"},{depth:4,value:"4. ingress-nginx 설치",anchor:"#4-ingress-nginx-설치"},{depth:3,value:"4. DNS 서비스 도메인 record 생성 & 설정",anchor:"#4-dns-서비스-도메인-record-생성--설정"},{depth:4,value:"1. Create Record",anchor:"#1-create-record"},{depth:4,value:"1. edit record(gitlab, kas, minio, registry)",anchor:"#1-edit-recordgitlab-kas-minio-registry"},{depth:4,value:"2. edit record(*, api, www, file, acebase)",anchor:"#2-edit-record-api-www-file-acebase"},{depth:3,value:"5. ide 관련 operator 설치",anchor:"#5-ide-관련-operator-설치"},{depth:4,value:"1. Operator 설치",anchor:"#1-operator-설치"},{depth:3,value:"6. NFS 설치",anchor:"#6-nfs-설치"},{depth:4,value:"1. values.yaml/disk 수정(클러스터에 연결할 disk 명으로 수정)",anchor:"#1-bvaluesyamldiskb-수정클러스터에-연결할-disk-명으로-수정"},{depth:4,value:"2. nfs 설치",anchor:"#2-nfs-설치"}]}},{node:{id:"8068a5512c320b946065bd53f3059364",path:"/tool/event-storming-tool/",title:"이벤트 스토밍",headings:[{depth:1,value:"이벤트 스토밍",anchor:"#이벤트-스토밍"},{depth:2,value:"서비스 접속",anchor:"#서비스-접속"},{depth:2,value:"UI 소개",anchor:"#ui-소개"},{depth:3,value:"·\tEvent Sticker",anchor:"#·-event-sticker"},{depth:3,value:"·\tPolicy Sticker",anchor:"#·-policy-sticker"},{depth:3,value:"·\tCommand Sticker",anchor:"#·-command-sticker"},{depth:3,value:"·\tAggregate Sticker",anchor:"#·-aggregate-sticker"},{depth:3,value:"·\tBounded Context Sticker",anchor:"#·-bounded-context-sticker"},{depth:3,value:"·\tRelation",anchor:"#·-relation"},{depth:3,value:"·\tCode Preview",anchor:"#·-code-preview"},{depth:3,value:"·\tDownload Archive",anchor:"#·-download-archive"},{depth:2,value:"빌드",anchor:"#빌드"},{depth:3,value:"·\t다운로드 파일 구조 설명",anchor:"#·-다운로드-파일-구조-설명"},{depth:3,value:"·\t실행",anchor:"#·-실행"},{depth:3,value:"·\t클라우드 배포",anchor:"#·-클라우드-배포"},{depth:3,value:"·\tGit 연동",anchor:"#·-git-연동"},{depth:3,value:"·\tGCB Trigger 생성",anchor:"#·-gcb-trigger-생성"},{depth:3,value:"·\t쿠버네티스 배포",anchor:"#·-쿠버네티스-배포"},{depth:3,value:"·\t배포 실패시 해결방법",anchor:"#·-배포-실패시-해결방법"}]}},{node:{id:"1a4ec173c0caf01d8422998f3bbac041",path:"/templates-language/go-template/",title:"Go Template 만들기",headings:[{depth:1,value:"Go Template 만들기",anchor:"#go-template-만들기"},{depth:2,value:"Go DDD tutorial",anchor:"#go-ddd-tutorial"},{depth:3,value:"Model",anchor:"#model"},{depth:3,value:"Code",anchor:"#code"},{depth:3,value:"Test",anchor:"#test"},{depth:3,value:"· Event.go",anchor:"#·-eventgo"},{depth:3,value:"· PolicyHandler.go",anchor:"#·-policyhandlergo"},{depth:3,value:"· PolicyEvent.go",anchor:"#·-policyeventgo"},{depth:3,value:"· ExternalService.go",anchor:"#·-externalservicego"},{depth:3,value:"· ExternalEntity.go",anchor:"#·-externalentitygo"},{depth:3,value:"· Repository.go",anchor:"#·-repositorygo"},{depth:3,value:"· Route.go",anchor:"#·-routego"},{depth:3,value:"· main.go",anchor:"#·-maingo"},{depth:2,value:"Go 전용 Template",anchor:"#go-전용-template"},{depth:3,value:"· DB.go",anchor:"#·-dbgo"},{depth:3,value:"· KafkaProcessor.go",anchor:"#·-kafkaprocessorgo"},{depth:3,value:"· Util.go",anchor:"#·-utilgo"}]}},{node:{id:"f5496baae95145d628ea189af81b1cba",path:"/tool/infrastructure-modeling/",title:"인프라 모델링 (쿠버네티스)",headings:[{depth:1,value:"인프라 모델링 (쿠버네티스)",anchor:"#인프라-모델링-쿠버네티스"},{depth:2,value:"Getting started",anchor:"#getting-started"},{depth:2,value:"Quick Tour",anchor:"#quick-tour"},{depth:2,value:"Tutorial",anchor:"#tutorial"},{depth:3,value:"·\tPod",anchor:"#·-pod"},{depth:3,value:"·\tService",anchor:"#·-service"},{depth:3,value:"·\tIngress",anchor:"#·-ingress"}]}},{node:{id:"31d31548677bf56b9f54b54f73129f77",path:"/tool/development-practice/",title:"강의 개발 및 실습 환경",headings:[{depth:1,value:"강의 개발 및 실습 환경",anchor:"#강의-개발-및-실습-환경"},{depth:2,value:"강의 개발",anchor:"#강의-개발"},{depth:3,value:"· 강의 생성",anchor:"#·-강의-생성"},{depth:3,value:"· lab 생성",anchor:"#·-lab-생성"},{depth:3,value:"· lab 위치 이동 및 삭제",anchor:"#·-lab-위치-이동-및-삭제"},{depth:3,value:"· instruction 편집",anchor:"#·-instruction-편집"},{depth:3,value:"· 콘텐츠 저장",anchor:"#·-콘텐츠-저장"},{depth:3,value:"· quiz 편집",anchor:"#·-quiz-편집"},{depth:2,value:"강의 진행",anchor:"#강의-진행"},{depth:3,value:"· 조별 편성",anchor:"#·-조별-편성"},{depth:3,value:"· 채팅",anchor:"#·-채팅"},{depth:3,value:"· 오류 지원",anchor:"#·-오류-지원"},{depth:3,value:"· 결과 제출",anchor:"#·-결과-제출"},{depth:2,value:"수강생 관리",anchor:"#수강생-관리"},{depth:3,value:"· 보상 지급",anchor:"#·-보상-지급"},{depth:3,value:"· 사용료 조회",anchor:"#·-사용료-조회"},{depth:3,value:"· 쿠폰 발행 및 사용, 조회",anchor:"#·-쿠폰-발행-및-사용-조회"}]}},{node:{id:"f1b6f9c8f80642beb6cf5d87bae5acb2",path:"/tool/cloud-ide-tool/",title:"클라우드 IDE",headings:[{depth:1,value:"클라우드 IDE",anchor:"#클라우드-ide"},{depth:2,value:"화면 구성 및 메뉴",anchor:"#화면-구성-및-메뉴"},{depth:3,value:"File",anchor:"#file"},{depth:3,value:"Edit",anchor:"#edit"},{depth:3,value:"Selection",anchor:"#selection"},{depth:3,value:"View",anchor:"#view"},{depth:3,value:"Go",anchor:"#go"},{depth:3,value:"Labs",anchor:"#labs"},{depth:2,value:"아이콘",anchor:"#아이콘"},{depth:2,value:"클라우드 IDE 실습 예제",anchor:"#클라우드-ide-실습-예제"},{depth:3,value:"이벤트 스토밍",anchor:"#이벤트-스토밍"},{depth:3,value:"IDE사용",anchor:"#ide사용"},{depth:3,value:"서비스 실행",anchor:"#서비스-실행"}]}},{node:{id:"b98d41e3f9616d594784c2e059cf0c14",path:"/started/",title:"소개",headings:[{depth:1,value:"소개",anchor:"#소개"},{depth:2,value:"주요 Features",anchor:"#주요-features"},{depth:2,value:"도구의 배경과 목적",anchor:"#도구의-배경과-목적"},{depth:3,value:"·\tEDA(Event Driven Architecture) 기반 3세대 MSA의 유행",anchor:"#·-edaevent-driven-architecture-기반-3세대-msa의-유행"},{depth:3,value:"·\t이벤트스토밍 애자일 기법의 유행",anchor:"#·-이벤트스토밍-애자일-기법의-유행"},{depth:3,value:"·\tMSA 코드 자동 생성",anchor:"#·-msa-코드-자동-생성"},{depth:3,value:"·\tPolyglot MSA를 위한 User-defined 템플릿",anchor:"#·-polyglot-msa를-위한-user-defined-템플릿"},{depth:2,value:"도입 효과",anchor:"#도입-효과"},{depth:2,value:"실행 환경",anchor:"#실행-환경"}]}},{node:{id:"4a38093d80a8b28fc80a5079bdf2561a",path:"/started/domain-driven/",title:"도메인 주도 설계 학습",headings:[{depth:1,value:"도메인 주도 설계 학습",anchor:"#도메인-주도-설계-학습"},{depth:2,value:"MSA 분석기법 – DDD(Domain Driven Design)",anchor:"#msa-분석기법--ddddomain-driven-design"},{depth:2,value:"DDD 개요",anchor:"#ddd-개요"},{depth:3,value:"·\t도메인 모델",anchor:"#·-도메인-모델"},{depth:3,value:"·\tBounded Context (한정된 문맥)",anchor:"#·-bounded-context-한정된-문맥"},{depth:3,value:"·\tUbiquitous Language (도메인 언어)",anchor:"#·-ubiquitous-language-도메인-언어"},{depth:2,value:"DDD구현을 위한 이벤트스토밍 (EventStorming)",anchor:"#ddd구현을-위한-이벤트스토밍-eventstorming"}]}},{node:{id:"0b2074ab65d81707b848ac864d536ea6",path:"/started/event-storming-learning/",title:"이벤트스토밍 학습",headings:[{depth:1,value:"이벤트스토밍 학습",anchor:"#이벤트스토밍-학습"},{depth:1,value:"오프라인 이벤트스토밍(Event-Storming) 기반 MSA 개발",anchor:"#오프라인-이벤트스토밍event-storming-기반-msa-개발"},{depth:2,value:"개념",anchor:"#개념"},{depth:2,value:"수행 방법",anchor:"#수행-방법"},{depth:2,value:"스티커 유형",anchor:"#스티커-유형"},{depth:3,value:"· Event (Orange Sticker)",anchor:"#·-event-orange-sticker"},{depth:3,value:"· Policy (Lilac Sticker)",anchor:"#·-policy-lilac-sticker"},{depth:3,value:"· Command (Blue Sticker)",anchor:"#·-command-blue-sticker"},{depth:3,value:"· Actor (Yellow Sticker)",anchor:"#·-actor-yellow-sticker"},{depth:3,value:"· Aggregate (Yellow Sticker)",anchor:"#·-aggregate-yellow-sticker"},{depth:3,value:"· Bounded Context 도출",anchor:"#·-bounded-context-도출"},{depth:3,value:"· Context Mapping",anchor:"#·-context-mapping"},{depth:2,value:"Orchestration",anchor:"#orchestration"},{depth:2,value:"Choreography",anchor:"#choreography"},{depth:2,value:"마이크로서비스 구현",anchor:"#마이크로서비스-구현"},{depth:3,value:"· 이벤트스토밍 스티키 노트별 구현기술 적용",anchor:"#·-이벤트스토밍-스티키-노트별-구현기술-적용"},{depth:3,value:"· Aggregate - Yellow",anchor:"#·-aggregate---yellow"},{depth:3,value:"· Command – Sky Blue",anchor:"#·-command--sky-blue"},{depth:3,value:"· Event - Orange",anchor:"#·-event---orange"},{depth:3,value:"· Policy - Lilac",anchor:"#·-policy---lilac"},{depth:3,value:"· Bounded Context",anchor:"#·-bounded-context"}]}},{node:{id:"c9e874d6515623ddf07f96c922e50aa9",path:"/example-scenario/online-lecture/",title:"인터넷 강의수강 시스템",headings:[{depth:1,value:"인터넷 강의수강 시스템",anchor:"#인터넷-강의수강-시스템"},{depth:2,value:"서비스 시나리오",anchor:"#서비스-시나리오"},{depth:2,value:"체크포인트",anchor:"#체크포인트"},{depth:2,value:"분석/설계",anchor:"#분석설계"},{depth:3,value:"· Event Storming 결과",anchor:"#·-event-storming-결과"},{depth:3,value:"· 헥사고날 아키텍처 다이어그램 도출",anchor:"#·-헥사고날-아키텍처-다이어그램-도출"},{depth:2,value:"구현",anchor:"#구현"},{depth:3,value:"· DDD 의 적용",anchor:"#·-ddd-의-적용"},{depth:3,value:"· 동기식 호출 과 Fallback 처리",anchor:"#·-동기식-호출-과-fallback-처리"},{depth:3,value:"· 비동기식 호출 / 시간적 디커플링 / 장애격리 / 최종 (Eventual) 일관성 테스트",anchor:"#·-비동기식-호출--시간적-디커플링--장애격리--최종-eventual-일관성-테스트"},{depth:2,value:"운영",anchor:"#운영"},{depth:3,value:"· CI/CD 설정",anchor:"#·-cicd-설정"},{depth:3,value:"· 동기식 호출 / 서킷 브레이킹 / 장애격리",anchor:"#·-동기식-호출--서킷-브레이킹--장애격리"},{depth:3,value:"· 무정지 재배포",anchor:"#·-무정지-재배포"}]}},{node:{id:"41a09d1ae23d2ea4ebdf10487aa6aa3d",path:"/example-scenario/library-system/",title:"도서관 시스템",headings:[{depth:1,value:"도서관 시스템",anchor:"#도서관-시스템"},{depth:2,value:"구현 Repository",anchor:"#구현-repository"},{depth:2,value:"서비스 시나리오",anchor:"#서비스-시나리오"},{depth:2,value:"체크포인트",anchor:"#체크포인트"},{depth:2,value:"분석/설계",anchor:"#분석설계"},{depth:2,value:"구현",anchor:"#구현"},{depth:3,value:"· DDD 의 적용",anchor:"#·-ddd-의-적용"},{depth:3,value:"· 동기식 호출 과 비동기식",anchor:"#·-동기식-호출-과-비동기식"},{depth:2,value:"운영",anchor:"#운영"},{depth:3,value:"· CI/CD 설정",anchor:"#·-cicd-설정"},{depth:3,value:"· 오토스케일 아웃",anchor:"#·-오토스케일-아웃"},{depth:3,value:"· 무정지 재배포",anchor:"#·-무정지-재배포"}]}},{node:{id:"4b3f20a1b3a5ad2e0072c3ddb841c049",path:"/example-scenario/food-delivery/",title:"음식배달",headings:[{depth:1,value:"음식배달",anchor:"#음식배달"},{depth:2,value:"서비스 시나리오",anchor:"#서비스-시나리오"},{depth:2,value:"체크포인트",anchor:"#체크포인트"},{depth:2,value:"분석/설계",anchor:"#분석설계"},{depth:2,value:"구현",anchor:"#구현"},{depth:3,value:"· DDD 의 적용",anchor:"#·-ddd-의-적용"},{depth:3,value:"· 폴리글랏 퍼시스턴스",anchor:"#·-폴리글랏-퍼시스턴스"},{depth:3,value:"· 폴리글랏 프로그래밍",anchor:"#·-폴리글랏-프로그래밍"},{depth:3,value:"· 동기식 호출 과 Fallback 처리",anchor:"#·-동기식-호출-과-fallback-처리"},{depth:3,value:"· 비동기식 호출 / 시간적 디커플링 / 장애격리 / 최종 (Eventual) 일관성 테스트",anchor:"#·-비동기식-호출--시간적-디커플링--장애격리--최종-eventual-일관성-테스트"},{depth:2,value:"운영",anchor:"#운영"},{depth:3,value:"· CI/CD 설정",anchor:"#·-cicd-설정"},{depth:3,value:"· 동기식 호출 / 서킷 브레이킹 / 장애격리",anchor:"#·-동기식-호출--서킷-브레이킹--장애격리"},{depth:3,value:"· 오토스케일 아웃",anchor:"#·-오토스케일-아웃"},{depth:3,value:"· 무정지 재배포",anchor:"#·-무정지-재배포"},{depth:2,value:"신규 개발 조직의 추가",anchor:"#신규-개발-조직의-추가"}]}},{node:{id:"c2576d9ac97ca5f1f5a0aa7467b98d61",path:"/custom-template/tutorial/",title:"커스텀 템플릿 튜토리얼",headings:[{depth:1,value:"커스텀 템플릿 튜토리얼",anchor:"#커스텀-템플릿-튜토리얼"},{depth:2,value:"커스텀 템플릿 설정하기",anchor:"#커스텀-템플릿-설정하기"}]}},{node:{id:"5727002f6d0a904a02dc2fa2794b6efe",path:"/example-scenario/animal-hospital/",title:"동물병원 진료시스템",headings:[{depth:1,value:"동물병원 진료시스템",anchor:"#동물병원-진료시스템"},{depth:2,value:"서비스 시나리오",anchor:"#서비스-시나리오"},{depth:2,value:"분석/설계",anchor:"#분석설계"},{depth:3,value:"· 헥사고날 아키텍처 다이어그램 도출",anchor:"#·-헥사고날-아키텍처-다이어그램-도출"},{depth:2,value:"구현",anchor:"#구현"},{depth:3,value:"· DDD 의 적용",anchor:"#·-ddd-의-적용"},{depth:3,value:"· 동기식 호출과 Fallback 처리",anchor:"#·-동기식-호출과-fallback-처리"},{depth:3,value:"· 클러스터 적용 후 REST API 의 테스트",anchor:"#·-클러스터-적용-후-rest-api-의-테스트"},{depth:3,value:"· 비동기식 호출과 Eventual Consistency",anchor:"#·-비동기식-호출과-eventual-consistency"},{depth:3,value:"· API 게이트웨이",anchor:"#·-api-게이트웨이"},{depth:3,value:"· Oauth 인증 적용.",anchor:"#·-oauth-인증-적용"},{depth:2,value:"운영",anchor:"#운영"},{depth:3,value:"· CI/CD 설정",anchor:"#·-cicd-설정"},{depth:3,value:"· 동기식 호출 / 서킷 브레이킹 / 장애격리",anchor:"#·-동기식-호출--서킷-브레이킹--장애격리"},{depth:3,value:"· 오토스케일 아웃",anchor:"#·-오토스케일-아웃"},{depth:3,value:"· 무정지 재배포",anchor:"#·-무정지-재배포"}]}},{node:{id:"62ca8085ac028d79cee530aa8b3244cd",path:"/example-scenario/accommodation-reservation/",title:"숙소예약",headings:[{depth:1,value:"숙소예약",anchor:"#숙소예약"},{depth:2,value:"서비스 시나리오",anchor:"#서비스-시나리오"},{depth:2,value:"체크포인트",anchor:"#체크포인트"},{depth:2,value:"분석/설계",anchor:"#분석설계"},{depth:2,value:"구현",anchor:"#구현"},{depth:3,value:"· CQRS",anchor:"#·-cqrs"},{depth:3,value:"· API 게이트웨이",anchor:"#·-api-게이트웨이"},{depth:2,value:"Correlation",anchor:"#correlation"},{depth:3,value:"· 동기식 호출(Sync) 과 Fallback 처리",anchor:"#·-동기식-호출sync-과-fallback-처리"},{depth:3,value:"· 비동기식 호출 / 시간적 디커플링 / 장애격리 / 최종 (Eventual) 일관성 테스트",anchor:"#·-비동기식-호출--시간적-디커플링--장애격리--최종-eventual-일관성-테스트"},{depth:2,value:"운영",anchor:"#운영"},{depth:3,value:"· CI/CD 설정",anchor:"#·-cicd-설정"},{depth:3,value:"· 동기식 호출 / 서킷 브레이킹 / 장애격리",anchor:"#·-동기식-호출--서킷-브레이킹--장애격리"},{depth:3,value:"· 무정지 재배포",anchor:"#·-무정지-재배포"},{depth:2,value:"Self-healing (Liveness Probe)",anchor:"#self-healing-liveness-probe"},{depth:2,value:"Config Map/ Persistence Volume",anchor:"#config-map-persistence-volume"}]}},{node:{id:"a2ecb4086487144f927f0556c45d160e",path:"/contact/question/",title:"CONTACT",headings:[{depth:1,value:"CONTACT",anchor:"#contact"}]}}]}},p=function(e){var a=e.options;a.__staticData?a.__staticData.data=u:(a.__staticData=d.a.observable({data:u}),a.computed=c({$static:function(){return a.__staticData.data}},a.computed))},i=Object(l.a)(r,(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"relative",on:{keydown:[function(a){return!a.type.indexOf("key")&&e._k(a.keyCode,"down",40,a.key,["Down","ArrowDown"])?null:e.increment(a)},function(a){return!a.type.indexOf("key")&&e._k(a.keyCode,"up",38,a.key,["Up","ArrowUp"])?null:e.decrement(a)},function(a){return!a.type.indexOf("key")&&e._k(a.keyCode,"enter",13,a.key,"Enter")?null:e.go(a)}]}},[t("label",{staticClass:"relative block"},[t("span",{staticClass:"sr-only"},[e._v("Search Documentation")]),t("div",{staticClass:"absolute inset-y-0 left-0 flex items-center justify-center px-3 py-2 opacity-50"},[t("SearchIcon",{staticClass:"text-ui-typo",attrs:{size:"1.25x"}})],1),t("input",{ref:"input",staticClass:"block w-full py-2 pl-10 pr-4 border-2 rounded-lg bg-ui-sidebar border-ui-sidebar focus:bg-ui-background",class:{"rounded-b-none":e.showResult},attrs:{type:"search",placeholder:"Search Documentation..."},domProps:{value:e.query},on:{focus:function(a){e.focused=!0},blur:function(a){e.focused=!1},input:function(a){e.focusIndex=-1,e.query=a.target.value},change:function(a){e.query=a.target.value}}})]),e.showResult?t("div",{staticClass:"fixed inset-x-0 z-50 overflow-y-auto border-2 border-t-0 rounded-lg rounded-t-none shadow-lg results bg-ui-background bottom:0 sm:bottom-auto sm:absolute border-ui-sidebar",staticStyle:{"max-height":"calc(100vh - 120px)"}},[t("ul",{staticClass:"px-4 py-2 m-0"},[0===e.results.length?t("li",{staticClass:"px-2"},[e._v("\n        No results for "),t("span",{staticClass:"font-bold"},[e._v(e._s(e.query))]),e._v(".\n      ")]):e._l(e.results,(function(a,o){return t("li",{key:a.path+a.anchor,staticClass:"border-ui-sidebar",class:{"border-b":o+1!==e.results.length},on:{mouseenter:function(a){e.focusIndex=o},mousedown:e.go}},[t("g-link",{staticClass:"block p-2 -mx-2 text-base font-bold rounded-lg",class:{"bg-ui-sidebar text-ui-primary":e.focusIndex===o},attrs:{to:a.path+a.anchor}},[a.value===a.title?t("span",[e._v("\n            "+e._s(a.value)+"\n          ")]):t("span",{staticClass:"flex items-center"},[e._v("\n            "+e._s(a.title)+"\n            "),t("ChevronRightIcon",{staticClass:"mx-1",attrs:{size:"1x"}}),t("span",{staticClass:"font-normal opacity-75"},[e._v(e._s(a.value))])],1)])],1)}))],2)]):e._e()])}),[],!1,null,null,null);"function"==typeof p&&p(i);a.default=i.exports}}]);