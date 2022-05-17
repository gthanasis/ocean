import './hello.module.scss';
import { Ui } from '@frontend/ui'

/* eslint-disable-next-line */
export interface HelloProps {}

export function Hello(props: HelloProps) {
  return (
    <div>
      <Ui></Ui>
    </div>
  );
}

export default Hello;
