// import { Row, Col, Badge } from 'reactstrap';
// 241004 Row, Col 제외하여 주석처리
import { Badge } from 'reactstrap';
import { PropsWithChildren } from 'react';
import { DateTime } from 'luxon';
import { Style } from '../common/Style';
import Util from '../common/Util';
import { IIntroduce } from './IIntroduce';
import { PreProcessingComponent } from '../common/PreProcessingComponent';

type Payload = IIntroduce.Payload;

export const Introduce = {
  Component: ({ payload }: PropsWithChildren<{ payload: Payload }>) => {
    return PreProcessingComponent<Payload>({
      payload,
      component: Component,
    });
  },
};

function Component({ payload }: PropsWithChildren<{ payload: Payload }>) {
  const latestUpdated = DateTime.fromFormat(
    payload.latestUpdated,
    Util.LUXON_DATE_FORMAT.YYYY_LL_DD,
  );
  const latestUpdatedByNow = Math.floor(
    DateTime.local().diff(latestUpdated).milliseconds / 1000 / 60 / 60 / 24,
  );

  return (
    <div className="mt-5">
      <h2 style={Style.blue}>안녕하세요. 박찬우입니다.</h2>

      {payload.contents.map((content, index) => (
        <p key={index.toString()}>{content}</p>
      ))}
      <p className="text-right">
        <small>Latest Updated</small>{' '}
        <Badge color="secondary">
          {`${latestUpdated.toFormat(
            Util.LUXON_DATE_FORMAT.YYYY_DOT_LL_DOT_DD,
          )} (D+${latestUpdatedByNow})`}
        </Badge>
      </p>
      <p className="text-right" style={Style.sign}>
        {payload.sign}
      </p>
    </div>
  );
}
