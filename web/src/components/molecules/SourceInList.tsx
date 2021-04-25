import React, { FC } from 'react';
import { ISource } from 'src/type';

type Props = {
  source: ISource;
};

const SourceInList: FC<Props> = (props) => (
  <div className="source">
    <div>
      <span className="source__title">{props.source.title}</span>
    </div>
    <div>
      <span className="source__count">{props.source.count}</span>
    </div>
  </div>
);

export default SourceInList;
