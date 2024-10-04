import { IExperience } from '../component/experience/IExperience';

const experience: IExperience.Payload = {
  disable: false,
  disableTotalPeriod: false,
  list: [
    {
      title: '폴리인스퍼레이션 (PolyInspiration)',
      position: '운영PM',
      startedAt: '2022-03',
      descriptions: [
        '하이브리드 클라우드 인프라 구축/운영',
        '통합 모니터링 및 장애대응',
        'java(spring), nodejs, docker 등 서비스 빌드/배포',
        '솔루션 업체 소통 및 인프라 비용관리',
        '업무 자동화 및 사내 시스템 개발',
      ],
      skillKeywords: [
        'AWS',
        'NCP',
        'Hypervisor',
        'Docker',
        'Ansible',
        'Terraform',
        'Prometheus',
        'Grafana',
      ],
    },

    {
      title: '홍익과학기술 (Hongikit)',
      position: '시스템/클라우드 엔지니어',
      startedAt: '2022-11',
      endedAt: '2023-09',
      descriptions: [
        '본사 온프레미스 서버 구축/운영',
        '네트워크 이중화 및 IP 할당 관리',
        '보안 정책 관리(포트포워딩, VPN, 방화벽)',
        '홍익과학기술 홈페이지 운영/관리(S3, CloudFront, 도메인, SSL)',
        '사내 서비스 개발/유지보수(휴가관리시스템, 통합보고시스템)',
        '시스템 정기점검 및 장애대응(현황관리, 성능분석, 로그분석 등)',
        '홍익과학기술 통합 관제 모니터링 시스템 구축/운영',
      ],
      skillKeywords: [
        'ESXi(vsphere)',
        'AWS',
        'Flask',
        'mysql',
        'nginx',
        'Docker',
        'Zabbix',
        'Grafana',
      ],
    },

    {
      title: '세라젬 (CERAGEM)',
      position: 'TA팀, 인프라 엔지니어',
      startedAt: '2022-06',
      endedAt: '2023-10',
      descriptions: [
        'CRM 구축 프로젝트 참여, 서비스 오픈 진행',
        '계정, 디렉터리, 로그 등 권한 관리',
        '공유 메모리, LVM, ISO 등 RHEL 구성/관리',
        '방화벽, VPN, cisco L3, L4 운영/관리',
        '부하, 가용성, 재기동, 이중화 테스트 및 취약점 분석, 서비스 오픈 진행',
      ],
      skillKeywords: ['shellscript', 'ansible', 'RHEL', 'NAS'],
    },

    {
      title: '애플 (Apple)',
      position: '상암 LG CDN, 삼성 SDS IDC 기술지원',
      startedAt: '2022-03',
      endedAt: '2023-06',
      descriptions: [
        '서버 메인보드, COMS 배터리, SATA 케이블 교체 등 티켓 처리 작업',
        '부팅 장애 해결, 스위치 링크 트러블슈팅, 장비 정보 조사 작업',
        '작업자 출입 지원(통솔), 부품 수령/관리 진행',
      ],
      skillKeywords: [],
    },

    /* {
      title: 'Open Source Community',
      position: 'System Advocate and Developer',
      startedAt: '2010-06',
      endedAt: '2018-01',
      descriptions: [
        'Promoted the use and development of Linux globally.',
        'Developed automated scripts to streamline system configuration.',
        'Facilitated live patching systems, reducing downtime.',
      ],
      skillKeywords: ['Open Source', 'Linux', 'AWS', 'RDBMS'],
    }, */
  ],
};

export default experience;
