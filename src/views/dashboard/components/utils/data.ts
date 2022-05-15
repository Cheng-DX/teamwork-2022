import { useAuthStore } from '@/store';

const auth = useAuthStore();
export function createSrc() {
  let src: {
    [key: string]: number;
  } = {};

  switch (auth.userInfo.userRole) {
    case 'super':
      src = {
        访问量: 2395,
        订单量: 5890,
        订单额: 8835048,
        新增用户: 15
      };
      break;
    case 'admin':
      src = {
        待处理订单: 7,
        生产中设备: 173,
        可投标新订单: 291,
        新订单: 18
      };
      break;
    case 'dealer':
      src = {
        未发布订单: 1,
        投标中订单: 15,
        新投标信息: 200,
        待收货订单: 5
      };
      break;
    default:
      src = {
        访问量: 2395,
        订单量: 5890,
        订单额: 8835048
      };
      break;
  }
  return src;
}
