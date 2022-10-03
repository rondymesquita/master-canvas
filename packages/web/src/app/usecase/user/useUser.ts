import { useGlobalStore } from '../../../infra/store/store';
export default function () {
  const { setUser, user } = useGlobalStore();
  return { setUser, user };
}
