import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
/* import { faFacebook, faGithub } from '@fortawesome/free-brands-svg-icons'; */
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faBell } from '@fortawesome/free-regular-svg-icons';
import { IProfile } from '../component/profile/IProfile';
// import image from '../asset/_sample.jpg';
// 241004 이미지 수정
import image from '../asset/gameson_2022.jpg';

const profile: IProfile.Payload = {
  disable: false,

  // image: 'https://resume.yowu.dev/static/image/profile_2019.png',
  image,
  name: {
    title: '박찬우',
    small: '(Woo DEV)',
  },
  contact: [
    {
      title: 'chenwoo9730@gmail.com',
      link: 'chenwoo9730@gmail.com',
      icon: faEnvelope,
    },
    {
      title: 'Please contact me by email',
      icon: faPhone,
      badge: true,
    },
    {
      link: 'https://github.com/chanW-pack',
      icon: faGithub,
    },
    {
      link: 'https://cwpack0730.tistory.com/',
      icon: faBell,
    },
  ],
  notice: {
    title: 'DevOps & Architect  / Cloud Engineering',
    icon: faBell,
  },
};

export default profile;
