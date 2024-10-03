import { IIntroduce } from '../component/introduce/IIntroduce';
import { lastestUpdatedAt } from '../package.json';

const introduce: IIntroduce.Payload = {
  disable: false,

  contents: [
    '**DevOps & Architect  / Cloud , Infra Engineering**',
    '유익한 사회적 가치를 만드는데 도움이 되고싶습니다.',
    '개발과 운영, 개선과 발전, 실질적 실현까지 연결하는 엔지니어.',
    '2년차 시스템/클라우드 엔지니어입니다.',
    '대학에서 소프트웨어를 전공하였으며 개발뿐만이 아니라 빌드, 배포, 운영에도 관심이 많아 시스템/클라우드 엔지니어가 되었고, 데브옵스를 목표로 하고있습니다.',
    '직접 물리 서버들을 조립 및 하이퍼바이저 가상화를 구성하여 사내 프라이빗 클라우드 환경을 구성하였고 AWs, NCP 운영을 통한 온프레미스와 클라우드의 설계와 구축, 운영 경험을 가지고 있습니다.',
    '이외에도 prometheus, zabbix, grafana 등을 사용한 통합 모니터링 환경 구성과 python, shell scrip 등을 이용한 업무 자동화, ansible, terraform 을 도입하여 인프라 환경을 IaC로 관리한 경험이 있습니다.',
    '현재는 기존 사내 서비스를 컨테이너로 재구성하여 배포하며 미들웨어 구축/운영 작업과 신규 서비스 시스템 설계 작업을 진행하고 있으며 CICD와 쿠버네티스 도입에 관심이 있어 학습중에 있습니다.',
    '서비스 운영이란 결국 개발 지식과 운영환경에 대해 모두 알아야 한다고 생각하며 특히 운영은 언제 어디에서 발생할지 모르는 이슈에 대해서 상시 준비를 해야하는 분야라고 생각합니다. 이러한 점을 바탕으로 더욱 효율적인 작업과 원할한 커뮤니케이션을 할 수 있도록 학습하고, 경험하고, 노력하고 있습니다.',
  ],
  sign: 'Tux',
  // sign: packageJson.author.name,
  // latestUpdated: '2019-07-24',
  latestUpdated: lastestUpdatedAt,
};

export default introduce;
